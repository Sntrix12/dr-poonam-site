/**
 * Generates vercel.json's redirect rules from src/seo/legacyRedirects.js.
 *
 * vercel.json has to be committed — Vercel reads it before the build runs, so it
 * cannot be produced during the build. This script keeps it honest instead: the
 * mapping lives in one reviewable module, and `--check` fails the build if the
 * committed vercel.json has drifted from it or points at a route that no longer
 * exists.
 *
 *   node scripts/sync-redirects.mjs           # rewrite vercel.json
 *   node scripts/sync-redirects.mjs --check   # verify only, non-zero exit on drift
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "vercel.json");

const { legacyRedirects, legacyGone, legacyPhpCatchAll } = await import(
  path.join(root, "src/seo/legacyRedirects.js")
);
const { routes } = await import(path.join(root, "src/seo/routes.js"));

const livePaths = new Set(routes.map((r) => r.path));

/**
 * Host canonicalisation (bare -> www, http -> https) is configured on the Vercel
 * project, not in this file, and is working correctly. Nothing here may touch it.
 */
const config = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  cleanUrls: true,
  trailingSlash: false,
  // Evaluated before the filesystem and before any 404, so these beat anything the
  // deployment itself would otherwise return.
  redirects: legacyRedirects.map((r) => ({
    source: r.from,
    destination: r.to,
    statusCode: 301,
  })),
  // Evaluated after the filesystem. None of these paths exist as files, so each falls
  // through to the 410 responder.
  rewrites: [
    ...legacyGone.map((g) => ({ source: g.path, destination: "/api/gone" })),
    { source: legacyPhpCatchAll, destination: "/api/gone" },
  ],
};

const problems = [];

for (const r of legacyRedirects) {
  if (!livePaths.has(r.to)) {
    problems.push(`redirect target is not a live route: ${r.from} -> ${r.to}`);
  }
  if (!r.from.startsWith("/")) problems.push(`redirect source must start with "/": ${r.from}`);
  if (r.from === r.to) problems.push(`redirect loops on itself: ${r.from}`);
  if (/^https?:/i.test(r.to)) {
    problems.push(`redirect target must be a path, not an absolute URL: ${r.to}`);
  }
}

const sources = legacyRedirects.map((r) => r.from);
const duplicates = sources.filter((s, i) => sources.indexOf(s) !== i);
if (duplicates.length) problems.push(`duplicate redirect sources: ${duplicates.join(", ")}`);

for (const g of legacyGone) {
  if (sources.includes(g.path)) {
    problems.push(`${g.path} is listed as both a redirect and gone`);
  }
}

// A redirect pointing at another redirect would make a two-hop chain.
for (const r of legacyRedirects) {
  if (sources.includes(r.to)) {
    problems.push(`redirect chain: ${r.from} -> ${r.to}, which itself redirects`);
  }
}

if (problems.length) {
  console.error("Redirect map is invalid:\n" + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}

const serialised = JSON.stringify(config, null, 2) + "\n";
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  const current = await fs.readFile(target, "utf8").catch(() => "");
  if (current !== serialised) {
    console.error(
      "vercel.json is out of sync with src/seo/legacyRedirects.js.\n" +
        "Run: node scripts/sync-redirects.mjs",
    );
    process.exit(1);
  }
  console.log(
    `vercel.json in sync — ${legacyRedirects.length} redirects, ${legacyGone.length} gone, catch-all active.`,
  );
} else {
  await fs.writeFile(target, serialised);
  console.log(
    `vercel.json written — ${legacyRedirects.length} redirects, ${legacyGone.length} gone, catch-all active.`,
  );
}
