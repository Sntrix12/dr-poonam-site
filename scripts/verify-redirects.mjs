/**
 * Serves dist/ the way Vercel does and asserts every legacy URL behaves.
 *
 * Applies Vercel's documented routing order:
 *   1. redirects (from vercel.json)   -> 3xx, before the filesystem and before any 404
 *   2. filesystem                     -> static files, with cleanUrls resolution
 *   3. rewrites                       -> here, the 410 responder
 *   4. 404
 *
 * This validates the mapping, the ordering and the JSON itself. It does NOT run
 * Vercel's real router — the definitive check is curling a preview deployment, which
 * scripts/verify-redirects.mjs cannot do from CI. It catches every class of mistake
 * that lives in this repo.
 */

import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const config = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
const { legacyRedirects, legacyGone } = await import(path.join(root, "src/seo/legacyRedirects.js"));
const { routes } = await import(path.join(root, "src/seo/routes.js"));
const gone = (await import(path.join(root, "api/gone.js"))).default;

/** Minimal path-to-regexp: literal segments plus Vercel's `(.*)` wildcard. */
const toRegex = (source) =>
  new RegExp(
    "^" +
      source
        .split(/(\(\.\*\))/)
        .map((part) => (part === "(.*)" ? "(.*)" : part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
        .join("") +
      "$",
  );

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp",
  ".xml": "application/xml", ".txt": "text/plain" };

const resolveFile = (pathname) => {
  for (const candidate of [
    path.join(dist, pathname),
    path.join(dist, pathname, "index.html"),
    path.join(dist, pathname + ".html"),
  ]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  return null;
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(req.url.split("?")[0]);

  // 1. redirects
  for (const r of config.redirects ?? []) {
    if (toRegex(r.source).test(pathname)) {
      res.writeHead(r.statusCode ?? (r.permanent === false ? 307 : 308), { Location: r.destination });
      return res.end();
    }
  }

  // 2. filesystem
  const file = resolveFile(pathname);
  if (file) {
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
    return res.end(fs.readFileSync(file));
  }

  // 3. rewrites
  for (const rw of config.rewrites ?? []) {
    if (toRegex(rw.source).test(pathname)) {
      if (rw.destination === "/api/gone") {
        return gone(req, {
          setHeader: (k, v) => res.setHeader(k, v),
          status(code) { this._c = code; return this; },
          send(body) { res.writeHead(this._c ?? 200); res.end(body); },
        });
      }
      const target = resolveFile(rw.destination);
      if (target) { res.writeHead(200, { "Content-Type": "text/html" }); return res.end(fs.readFileSync(target)); }
    }
  }

  // 4. 404
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(fs.readFileSync(path.join(dist, "404.html")));
});

const PORT = 4190;
const failures = [];

/**
 * Raw http.request rather than fetch: this sandbox sets proxy environment variables
 * that fetch honours, and it will not talk to localhost through them.
 */
const request = (pathname) =>
  new Promise((resolve, reject) => {
    http
      .get({ host: "127.0.0.1", port: PORT, path: pathname }, (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (body += c));
        res.on("end", () =>
          resolve({ status: res.statusCode, location: res.headers.location ?? null, body }),
        );
      })
      .on("error", reject);
  });

const head = request;

await new Promise((r) => server.listen(PORT, r));

console.log("=== legacy .php URLs -> 301, landing on a 200 in one hop ===");
for (const { from, to } of legacyRedirects) {
  const first = await head(from);
  if (first.status !== 301) { failures.push(`${from}: expected 301, got ${first.status}`); continue; }
  if (first.location !== to) { failures.push(`${from}: expected -> ${to}, got -> ${first.location}`); continue; }
  const second = await head(first.location);
  if (second.status !== 200) {
    failures.push(`${from} -> ${to}: target returned ${second.status}${second.location ? ` -> ${second.location} (chain!)` : ""}`);
    continue;
  }
  console.log(`  301 ${from.padEnd(52)} -> ${to.padEnd(40)} 200`);
}

console.log("\n=== no equivalent -> 410 Gone ===");
for (const { path: p } of legacyGone) {
  const r = await head(p);
  if (r.status !== 410) failures.push(`${p}: expected 410, got ${r.status}`);
  else console.log(`  410 ${p}`);
}

console.log("\n=== catch-all for any other old .php URL ===");
for (const p of ["/services.php", "/old-page.php", "/wp-admin/setup-config.php"]) {
  const r = await head(p);
  if (r.status !== 410) failures.push(`${p}: expected 410 from catch-all, got ${r.status}`);
  else console.log(`  410 ${p}`);
}

console.log("\n=== all live routes still 200 with unique titles ===");
const titles = new Map();
for (const route of routes) {
  const r = await request(route.path);
  if (r.status !== 200) { failures.push(`${route.path}: expected 200, got ${r.status}`); continue; }
  const t = r.body.match(/<title>([^<]*)</)?.[1];
  if (!t) failures.push(`${route.path}: no title`);
  else if (titles.has(t)) failures.push(`${route.path}: title duplicates ${titles.get(t)}`);
  else titles.set(t, route.path);
}
console.log(`  ${routes.length} routes returned 200, ${titles.size} unique titles`);

console.log("\n=== canonical-host redirects untouched ===");
console.log(`  vercel.json declares host redirects: ${(config.redirects ?? []).some(r => /^https?:/i.test(r.destination)) ? "YES — would clash" : "no (left to the Vercel project, as required)"}`);
if ((config.redirects ?? []).some((r) => /^https?:/i.test(r.destination))) {
  failures.push("vercel.json contains an absolute-URL redirect, which could clash with the project-level canonical-host redirects");
}
console.log(`  cleanUrls preserved: ${config.cleanUrls === true}`);
console.log(`  trailingSlash preserved: ${config.trailingSlash === false}`);
if (config.cleanUrls !== true) failures.push("cleanUrls was changed");
if (config.trailingSlash !== false) failures.push("trailingSlash was changed");

server.close();
console.log("\n" + (failures.length
  ? "FAILURES:\n" + failures.map((f) => "  - " + f).join("\n")
  : `All ${legacyRedirects.length} redirects, ${legacyGone.length} gone URLs and ${routes.length} live routes behave correctly.`));
process.exit(failures.length ? 1 : 0);
