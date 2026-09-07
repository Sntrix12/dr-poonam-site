/**
 * Measures how much of each area page's body is unique to it.
 *
 * Nav and footer are excluded: Layout.jsx renders them outside <main id="main">, so
 * slicing to that element gives the body only. Boilerplate *inside* the body — a
 * repeated testimonial, an identical service list, a shared sidebar — is exactly what
 * this is meant to catch, and is what makes a set of location pages read as doorway
 * pages to a crawler.
 *
 * Headline metric: the share of a page's 4-word shingles that appear on no other area
 * page. Shingles rather than bare words because "Mumbai" appearing on all four pages
 * is not duplication, whereas a shared forty-word paragraph is.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { areas } = await import(path.join(root, "src/data/areas.js"));

const mainOf = (html) => {
  const start = html.indexOf('<main id="main">');
  const end = html.lastIndexOf("</main>");
  if (start === -1 || end === -1) throw new Error("no <main id=\"main\"> found");
  return html.slice(start, end);
};

const words = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

const shingles = (w, n = 4) => {
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(" "));
  return s;
};

const pages = areas.map((a) => {
  const html = fs.readFileSync(path.join(root, "dist", a.slug, "index.html"), "utf8");
  const w = words(mainOf(html));
  return { slug: a.slug, name: a.name, words: w, shingles: shingles(w) };
});

console.log("  area page          body words   unique shingles   UNIQUE %");
let total = 0;
for (const p of pages) {
  const others = new Set();
  for (const q of pages) if (q !== p) for (const s of q.shingles) others.add(s);
  const uniq = [...p.shingles].filter((s) => !others.has(s)).length;
  const pct = (100 * uniq) / p.shingles.size;
  total += pct;
  const flag = pct >= 60 ? "PASS" : "below target";
  console.log(
    `  ${p.name.padEnd(18)}${String(p.words.length).padStart(10)}${String(uniq).padStart(16)}   ${pct.toFixed(1).padStart(5)}%  ${flag}`,
  );
}
console.log(`\n  mean unique: ${(total / pages.length).toFixed(1)}%  (target 60%)`);
