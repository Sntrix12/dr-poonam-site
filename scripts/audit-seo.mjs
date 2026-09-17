/**
 * On-page SEO audit of the built site. Reads dist/, not the source, so it measures
 * exactly what a crawler is served.
 *
 *   npm run build && npm run audit:seo
 *
 * Reports, per indexable page:
 *   - word count of <main> (nav and footer excluded — boilerplate is not content)
 *   - in-body internal links, counted per target, so orphaned pages are visible
 *   - heading hierarchy (one h1, no skipped levels)
 *   - Open Graph image, with its declared width and height
 *   - JSON-LD: parses, and which @types are present
 *   - the worst pairwise 5-word shingle overlap, which is how near-duplicate pages
 *     look to a search engine
 *
 * Exits non-zero on anything that is a real defect rather than a judgement call:
 * a missing or unparseable JSON-LD block, a missing og:image, more or less than one
 * h1, a skipped heading level, or two pages overlapping above DUPLICATE_LIMIT.
 * Thin content is reported but does not fail the build — it is a content decision.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { routes } = await import(path.join(root, "src/seo/routes.js"));

/** Above this, two pages read as versions of each other rather than as two pages. */
const DUPLICATE_LIMIT = 0.4;
const SHINGLE = 5;
/** Below this a page is thin enough to be worth flagging, but it is not a build error. */
const THIN_WORDS = 600;

const fileFor = (routePath) =>
  path.join(dist, routePath === "/" ? "index.html" : `${routePath.slice(1)}/index.html`);

const mainOf = (html) => {
  const open = html.indexOf('<main id="main">');
  if (open === -1) return "";
  const close = html.indexOf("</main>", open);
  return html.slice(open + '<main id="main">'.length, close === -1 ? undefined : close);
};

const decode = (s) =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&amp;|&#38;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

const textOf = (html) =>
  decode(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const wordsOf = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const shinglesOf = (words) => {
  const out = new Set();
  for (let i = 0; i + SHINGLE <= words.length; i += 1) out.add(words.slice(i, i + SHINGLE).join(" "));
  return out;
};

const overlap = (a, b) => {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared += 1;
  return shared / Math.min(a.size, b.size);
};

const pages = [];
const failures = [];
const notes = [];

for (const route of routes) {
  if (route.path === "/404") continue;
  let html;
  try {
    html = await fs.readFile(fileFor(route.path), "utf8");
  } catch {
    failures.push(`${route.path}: no prerendered HTML at ${path.relative(root, fileFor(route.path))}`);
    continue;
  }

  const main = mainOf(html);
  if (!main) {
    failures.push(`${route.path}: no <main id="main"> in the prerendered HTML`);
    continue;
  }

  const words = wordsOf(textOf(main));

  // Internal links inside <main>. href="/…" only: nav and footer sit outside it.
  const links = [...main.matchAll(/<a\b[^>]*href="(\/[^"#][^"]*|\/)"/g)].map((m) => m[1]);

  const headings = [...main.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  const h1s = headings.filter((h) => h === 1).length;
  if (h1s !== 1) failures.push(`${route.path}: ${h1s} <h1> elements, expected exactly 1`);
  for (let i = 1; i < headings.length; i += 1) {
    if (headings[i] - headings[i - 1] > 1) {
      failures.push(`${route.path}: heading level jumps h${headings[i - 1]} → h${headings[i]}`);
      break;
    }
  }

  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  const ogW = html.match(/<meta property="og:image:width" content="([^"]+)"/)?.[1];
  const ogH = html.match(/<meta property="og:image:height" content="([^"]+)"/)?.[1];
  if (!og) failures.push(`${route.path}: no og:image`);
  else if (!ogW || !ogH) notes.push(`${route.path}: og:image has no declared width/height`);

  const ld = html.match(/<script type="application\/ld\+json" data-route>([\s\S]*?)<\/script>/)?.[1];
  let types = [];
  if (!ld) {
    failures.push(`${route.path}: no JSON-LD block`);
  } else {
    try {
      const parsed = JSON.parse(ld);
      types = (parsed["@graph"] || [parsed]).map((n) => n["@type"]).flat();
    } catch (err) {
      failures.push(`${route.path}: JSON-LD does not parse — ${err.message}`);
    }
  }

  pages.push({
    path: route.path,
    noindex: Boolean(route.noindex),
    words: words.length,
    shingles: shinglesOf(words),
    links,
    og: og ? `${og.replace(/^https?:\/\/[^/]+/, "")}${ogW ? ` ${ogW}×${ogH}` : ""}` : "—",
    types,
  });
}

const indexable = pages.filter((p) => !p.noindex);

// ── Word counts ──────────────────────────────────────────────────────────────
console.log("\nWORD COUNT  (<main> only)\n");
for (const p of [...indexable].sort((a, b) => a.words - b.words)) {
  const flag = p.words < THIN_WORDS ? "  thin" : "";
  console.log(`  ${String(p.words).padStart(5)}  ${p.path}${flag}`);
}
const thin = indexable.filter((p) => p.words < THIN_WORDS);
if (thin.length) notes.push(`${thin.length} of ${indexable.length} pages under ${THIN_WORDS} words`);

// ── In-body inbound links ────────────────────────────────────────────────────
const inbound = new Map(indexable.map((p) => [p.path, 0]));
for (const p of pages) {
  for (const href of new Set(p.links)) {
    if (href !== p.path && inbound.has(href)) inbound.set(href, inbound.get(href) + 1);
  }
}
console.log("\nIN-BODY INBOUND LINKS  (distinct pages linking to each, <main> only)\n");
for (const [target, count] of [...inbound].sort((a, b) => a[1] - b[1])) {
  console.log(`  ${String(count).padStart(5)}  ${target}${count === 0 ? "  orphaned" : ""}`);
}
const orphans = [...inbound].filter(([, c]) => c === 0).map(([t]) => t);
if (orphans.length) notes.push(`orphaned in-body: ${orphans.join(", ")}`);

// ── Near-duplicate detection ─────────────────────────────────────────────────
let worst = { score: 0, pair: "" };
for (let i = 0; i < indexable.length; i += 1) {
  for (let j = i + 1; j < indexable.length; j += 1) {
    const score = overlap(indexable[i].shingles, indexable[j].shingles);
    if (score > worst.score) worst = { score, pair: `${indexable[i].path} ↔ ${indexable[j].path}` };
    if (score > DUPLICATE_LIMIT) {
      failures.push(
        `near-duplicate: ${indexable[i].path} ↔ ${indexable[j].path} share ${(score * 100).toFixed(0)}% of ${SHINGLE}-word shingles`,
      );
    }
  }
}
console.log(
  `\nWORST PAIRWISE OVERLAP  ${(worst.score * 100).toFixed(1)}%  (limit ${DUPLICATE_LIMIT * 100}%)\n  ${worst.pair}`,
);

// ── Head ─────────────────────────────────────────────────────────────────────
const ogShapes = new Set(pages.map((p) => p.og));
console.log(`\nOG IMAGE  ${[...ogShapes].join(", ")}`);
const missingTypes = pages.filter((p) => !p.types.includes("Physician"));
console.log(
  `JSON-LD   ${pages.length - missingTypes.length}/${pages.length} pages carry the Physician entity`,
);

// ── Titles and descriptions must stay unique ─────────────────────────────────
const seen = new Map();
for (const route of routes) {
  for (const [kind, value] of [["title", route.title], ["description", route.description]]) {
    const key = `${kind}:${value}`;
    if (seen.has(key)) failures.push(`duplicate ${kind}: ${route.path} and ${seen.get(key)}`);
    else seen.set(key, route.path);
  }
}

if (notes.length) {
  console.log("\nNOTES");
  for (const n of notes) console.log(`  · ${n}`);
}

if (failures.length) {
  console.error("\nFAILED");
  for (const f of failures) console.error(`  ✗ ${f}`);
  process.exit(1);
}
console.log("\nOK — no structural defects.\n");
