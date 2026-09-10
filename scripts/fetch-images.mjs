/**
 * Downloads the hot-linked Unsplash photos into public/images/ and serves them locally.
 *
 * Why: every hot-linked image costs a DNS lookup, a TLS handshake and a third-party
 * round trip before it can paint, and hands a third party a log line for every visitor
 * to a medical site. Self-hosting removes all three.
 *
 * Needs outbound network, so it cannot run in the build sandbox — run it locally:
 *
 *   npm i -D sharp        # optional, but without it there is no WebP conversion
 *   npm run fetch:images
 *
 * On success it writes public/images/<id>.jpg (+ .webp), prints the byte savings, and
 * flips USE_LOCAL_IMAGES in src/data/images.js to true. Commit the images with it.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images");

const { servicesData, serviceCategories } = await import(path.join(root, "src/data/services.js"));
const { photoId } = await import(path.join(root, "src/data/images.js"));

const urls = [
  ...Object.values(servicesData).map((s) => s.image),
  ...serviceCategories.map((c) => c.image),
].filter(Boolean);

const byId = new Map();
for (const url of urls) {
  const id = photoId(url);
  if (id && !byId.has(id)) byId.set(id, url);
}

console.log(`${urls.length} references, ${byId.size} distinct photos.\n`);

let sharp = null;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.warn("sharp is not installed — writing JPEGs only, no WebP.");
  console.warn("Install it with `npm i -D sharp` and re-run for the full saving.\n");
}

await fs.mkdir(outDir, { recursive: true });

let remoteBytes = 0;
let localBytes = 0;
const failures = [];

for (const [id, url] of byId) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    remoteBytes += buf.length;

    const jpg = path.join(outDir, `${id}.jpg`);
    if (sharp) {
      await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(jpg);
      await sharp(buf).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(outDir, `${id}.webp`));
      localBytes += (await fs.stat(path.join(outDir, `${id}.webp`))).size;
    } else {
      await fs.writeFile(jpg, buf);
      localBytes += buf.length;
    }
    console.log(`  ${id}  ${(buf.length / 1024).toFixed(0)} KB downloaded`);
  } catch (err) {
    failures.push(`${id}: ${err.message}`);
  }
}

if (failures.length) {
  console.error("\nFailed:\n" + failures.map((f) => `  - ${f}`).join("\n"));
  console.error("\nUSE_LOCAL_IMAGES left false — fix the failures and re-run.");
  process.exit(1);
}

const imagesFile = path.join(root, "src/data/images.js");
const current = await fs.readFile(imagesFile, "utf8");
await fs.writeFile(
  imagesFile,
  current.replace("export const USE_LOCAL_IMAGES = false;", "export const USE_LOCAL_IMAGES = true;"),
);

console.log(
  `\nremote total: ${(remoteBytes / 1024).toFixed(0)} KB` +
    `\nlocal total:  ${(localBytes / 1024).toFixed(0)} KB` +
    `\nsaving:       ${(((remoteBytes - localBytes) / remoteBytes) * 100).toFixed(0)}%` +
    `\n\nUSE_LOCAL_IMAGES flipped to true. Commit public/images/ along with it.`,
);
