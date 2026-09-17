/**
 * Builds the Open Graph share card: public/og-card.jpg, 1200×630.
 *
 * Why it exists: the site previously shared public/poonam.jpg, an 822×1100 portrait.
 * Facebook, WhatsApp, LinkedIn and X all crop a share image to roughly 1.91:1, so a
 * portrait gets centre-cropped to a horizontal slice of the face. A purpose-built
 * landscape card is the only way to control what people actually see when the link
 * is shared — and on a doctor's site, that preview is often the first impression.
 *
 * Every word on the card comes from src/data/practice.js. Nothing is asserted here
 * that is not asserted on the site itself.
 *
 * Run it only when the portrait or those facts change:
 *
 *   npm i -D sharp      # not a declared dependency — it is a heavy native module
 *   npm run og          # and commit the regenerated public/og-card.jpg
 *
 * Fonts: the SVG asks for the site's own stack (Playfair Display, Inter) and falls
 * back to whatever serif and sans the machine has. The card renders correctly either
 * way; it just matches the site's typography exactly on a machine that has them.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { doctor, clinic, SITE_URL } = await import(path.join(root, "src/data/practice.js"));

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error("sharp is not installed. Run `npm i -D sharp` and try again.");
  process.exit(1);
}

const W = 1200;
const H = 630;
const PHOTO_W = 470;
const PAD = 64;

const SERIF = "Playfair Display, Georgia, DejaVu Serif, serif";
const SANS = "Inter, Helvetica Neue, DejaVu Sans, sans-serif";
const PURPLE = "#9771e3";
const SLATE = "#1E293B";

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const host = SITE_URL.replace(/^https?:\/\//, "");
const eyebrow = `${doctor.specialty.toUpperCase()} · ${clinic.city.toUpperCase()}`;
const credentials = doctor.credentialsList.join("  ·  ");
const experience = `${doctor.experience.totalYears} years of experience · ${clinic.locality}, ${clinic.city}`;

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${SLATE}"/>
      <stop offset="100%" stop-color="#2A3750"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="${PURPLE}"/>
</svg>`);

const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <text x="${PAD}" y="126" font-family="${SANS}" font-size="21" font-weight="700"
        letter-spacing="2.6" fill="${PURPLE}">${esc(eyebrow)}</text>

  <text x="${PAD}" y="224" font-family="${SERIF}" font-size="64" font-weight="700"
        fill="#FFFFFF">${esc(doctor.name)}</text>

  <text x="${PAD}" y="292" font-family="${SANS}" font-size="27" font-weight="600"
        fill="#DDD6FE">${esc(credentials)}</text>

  <rect x="${PAD}" y="336" width="86" height="4" fill="${PURPLE}"/>

  <text x="${PAD}" y="400" font-family="${SANS}" font-size="27"
        fill="#CBD5E1">${esc(doctor.jobTitle)}</text>
  <text x="${PAD}" y="444" font-family="${SANS}" font-size="27"
        fill="#CBD5E1">${esc(experience)}</text>

  <text x="${PAD}" y="552" font-family="${SANS}" font-size="24" font-weight="600"
        fill="#FFFFFF">${esc(host)}</text>
</svg>`);

const photo = await sharp(path.join(root, "public", "poonam.jpg"))
  .resize(PHOTO_W, H, { fit: "cover", position: "top" })
  .toBuffer();

// Feathered left edge, so the portrait meets the panel without a hard seam.
const fade = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${PHOTO_W}" height="${H}">
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${SLATE}" stop-opacity="1"/>
      <stop offset="22%" stop-color="${SLATE}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${PHOTO_W}" height="${H}" fill="url(#f)"/>
</svg>`);

const out = path.join(root, "public", "og-card.jpg");
await sharp(background)
  .composite([
    { input: photo, left: W - PHOTO_W, top: 0 },
    { input: fade, left: W - PHOTO_W, top: 0 },
    { input: text, left: 0, top: 0 },
  ])
  .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" })
  .toFile(out);

const { size } = await fs.stat(out);
console.log(`Wrote public/og-card.jpg — ${W}×${H}, ${(size / 1024).toFixed(0)} KB`);
