/**
 * Stock imagery: one place to control where it is served from and how it is described.
 *
 * ── Why the alt text is empty ──────────────────────────────────────────────────────
 * These are decorative Unsplash stock photos. They illustrate a section; they carry no
 * information the surrounding heading and prose do not already give. WCAG's correct
 * treatment for a decorative image is alt="" so assistive technology skips it, rather
 * than announcing a description the reader gains nothing from.
 *
 * That also removes what was there before — alt text like "PCOS Management in Mumbai —
 * Dr. Poonam Nautiyal", which described the page rather than the picture. Keyword text
 * in an alt attribute is keyword stuffing; it does not help ranking and it actively
 * degrades a screen-reader session.
 *
 * Images that DO carry meaning keep real alt text: the portrait of Dr. Nautiyal, and
 * each hospital's logo. Those are written where they are used.
 *
 * If these stock photos are ever replaced with real photographs of the clinic, those
 * are no longer decorative and each needs a genuine description of what it shows.
 *
 * ── Serving locally ────────────────────────────────────────────────────────────────
 * The photos are currently hot-linked from images.unsplash.com, which costs a DNS
 * lookup, a TLS handshake and a third-party round trip before the largest element on
 * the page can paint. `npm run fetch:images` downloads them into public/images/,
 * converts them to WebP with a JPEG fallback, and flips USE_LOCAL_IMAGES below.
 */

/** Flipped to true by scripts/fetch-images.mjs once the files are in public/images/. */
export const USE_LOCAL_IMAGES = false;

/** Decorative: assistive technology should skip these entirely. */
export const DECORATIVE_ALT = "";

/** `https://images.unsplash.com/photo-abc123?...` -> `photo-abc123` */
export const photoId = (url) => (url.match(/photo-[0-9a-zA-Z_-]+/) || [])[0] ?? null;

/** Where a given remote image should actually be loaded from. */
export const imageSources = (remoteUrl) => {
  const id = photoId(remoteUrl);
  if (!USE_LOCAL_IMAGES || !id) return { webp: null, src: remoteUrl };
  return { webp: `/images/${id}.webp`, src: `/images/${id}.jpg` };
};

/**
 * Unsplash licence, as it stood when these were chosen: free to use for commercial and
 * non-commercial purposes, no permission needed, attribution appreciated but not
 * required. It does not permit selling unaltered copies or compiling a competing
 * photo service — neither applies here.
 *
 * I could not re-verify this per photo from the build sandbox, which has no outbound
 * network. Before these are self-hosted, each photo's page should be checked once, and
 * any photographer credit recorded here. See the TODO in the PR.
 */
export const UNSPLASH_LICENCE_VERIFIED = false;
