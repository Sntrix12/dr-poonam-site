/**
 * Redirects for the previous agency's PHP site.
 *
 * Those URLs still hold inbound links and ranking history. They currently return an
 * inconsistent mix of 403/500/404, which passes none of it on. A 301 to the closest
 * genuine equivalent inherits that equity; a 410 tells Google to drop the URL
 * permanently rather than recrawling it indefinitely.
 *
 * Rules applied here:
 *  - Every `to` must be a real prerendered route. scripts/sync-redirects.mjs fails the
 *    build if one is not, so this list cannot drift away from src/seo/routes.js.
 *  - A 301 only where the target genuinely covers the old page's topic. Redirecting to
 *    a loosely-related page is treated by Google as a soft 404 and passes nothing, so
 *    it buys nothing over a 410 and muddies the site for users.
 *  - Host canonicalisation (bare -> www, http -> https) is configured at the Vercel
 *    project level, NOT here. Do not add host redirects to this file.
 */

/** Old URL -> live route. Emitted as 301s in vercel.json, ahead of the filesystem. */
export const legacyRedirects = [
  // ── Homepage ──
  {
    from: "/index.php",
    to: "/",
    why: "Old homepage.",
  },
  {
    from: "/index.html",
    to: "/",
    why: "Old homepage, static variant.",
  },

  // ── Direct page equivalents ──
  {
    from: "/contact.php",
    to: "/contact",
    why: "Direct equivalent — same purpose, same content.",
  },
  {
    from: "/testimonials.php",
    to: "/testimonials",
    why: "Direct equivalent — patient reviews.",
  },
  {
    from: "/hospital-attachments.php",
    to: "/contact",
    why: "The four hospital attachments now live in a section of the contact page; that is where this page's content went.",
  },

  // ── Service pages, slug unchanged ──
  {
    from: "/high-risk-pregnancies.php",
    to: "/services/high-risk-pregnancies",
    why: "Same topic, same slug.",
  },
  {
    from: "/laparoscopy.php",
    to: "/services/laparoscopy",
    why: "Same topic, same slug.",
  },
  {
    from: "/safe-abortions.php",
    to: "/services/safe-abortions",
    why: "Same topic, same slug.",
  },
  {
    from: "/infertility-treatment.php",
    to: "/services/infertility-treatment",
    why: "Same topic, same slug.",
  },
  {
    from: "/normal-vaginal-deliveries.php",
    to: "/services/normal-vaginal-deliveries",
    why: "Same topic, same slug.",
  },
  {
    from: "/pre-pregnancy-counselling.php",
    to: "/services/pre-pregnancy-counselling",
    why: "Same topic, same slug.",
  },
  {
    from: "/cervical-cancer-vaccine.php",
    to: "/services/cervical-cancer-vaccine",
    why: "Same topic, same slug.",
  },

  // ── Service pages, slug renamed ──
  {
    from: "/obstetrics-gynaecology.php",
    to: "/services/obstetrics-and-gynaecology",
    why: "Same topic; the new slug spells out 'and'.",
  },
  {
    from: "/gynaec-surgeries.php",
    to: "/services/gynaecological-surgeries",
    why: "Same topic; the new slug uses the full word 'gynaecological'.",
  },

  // ── Location + service landing pages ──
  // These carried "best <service> in Andheri" intent. Each goes to the matching
  // SERVICE page rather than the Andheri area page, because the service is the head
  // term and the location is the modifier: the service pages hold the substantive
  // content on the topic and already target Mumbai, while the area page mentions each
  // service only as a link. Sitewide local signals (Physician schema carrying the
  // Andheri East address on every page) carry the location half.
  {
    from: "/best-doctor-for-infertility-treatment-in-andheri.php",
    to: "/services/infertility-treatment",
    why: "Head term is infertility treatment; Andheri is the modifier. The service page holds the depth, and the area page mentions infertility only as a link.",
  },
  {
    from: "/best-doctor-for-safe-abortion-in-andheri.php",
    to: "/services/safe-abortions",
    why: "Head term is abortion/MTP. Also the more sensitive query of the set — the service page answers it directly and privately, which the area page does not.",
  },
  {
    from: "/best-pcod-treatment-in-andheri.php",
    to: "/services/pcos-management",
    why: "PCOD and PCOS are the same condition; the service page names PCOD explicitly in its copy and FAQs, so it matches the exact query term.",
  },
  {
    from: "/best-obstetrician-for-high-risk-pregnancy.php",
    to: "/services/high-risk-pregnancies",
    why: "No location in this URL at all — pure service intent, so the service page is unambiguous.",
  },
  {
    from: "/best-menopause-treatment-in-andheri.php",
    to: "/services/menopausal-counselling",
    why: "Head term is menopause treatment; the service page covers HRT, symptoms and bone health in depth.",
  },

  // ── Aliases that were client-side only ──
  // These were declared as React Router <Navigate> routes, which means the server
  // returned 404 and the redirect fired only after JavaScript booted — a soft 404 to
  // any crawler. Promoting them to real server redirects.
  {
    from: "/faq",
    to: "/faqs",
    why: "Singular form of a real route; was a client-only redirect returning HTTP 404.",
  },
  {
    from: "/reviews",
    to: "/testimonials",
    why: "Natural alternative wording; was a client-only redirect returning HTTP 404.",
  },
  {
    from: "/sitemap",
    to: "/services",
    why: "Human-facing sitemap link; was a client-only redirect returning HTTP 404. (The machine-readable sitemap is /sitemap.xml and is untouched.)",
  },
];

/**
 * Old URLs with no genuine equivalent.
 *
 * These currently fall through to the site's 404. 410 would be better — it tells
 * Google to drop the URL permanently rather than recrawling it for months — but
 * Vercel's `redirects` can only emit 3xx, and the legacy `routes` property that can
 * set an arbitrary status cannot be combined with `cleanUrls`, `trailingSlash` or
 * `redirects`, all of which this site needs. The only remaining way is a serverless
 * function, and adding one made the Vercel deployment fail (see PR #2) on a project
 * whose only previous function reference was committed as "broken vercel.json".
 *
 * So: 404 for now, deliberately, rather than a red deployment. A 301 to a loosely
 * related page was rejected outright — Google treats an irrelevant redirect as a soft
 * 404, so it passes no equity anyway and lands a visitor somewhere they did not ask
 * for. A clean 404 is honest and still gets these dropped, just more slowly.
 *
 * To restore 410: re-add an api/gone.js returning 410 and a rewrite to it, once the
 * Vercel build log explains why functions fail on this project.
 */
export const legacyGone = [
  {
    path: "/gallery.php",
    why: "A photo gallery. No gallery exists on the new site, and no page is a genuine equivalent.",
  },
  {
    path: "/important-links.php",
    why: "An outbound link-dump page. Nothing on the new site corresponds, and this pattern has no place on it.",
  },
];

/**
 * Any other .php URL from the old site.
 *
 * Unused while the 410 responder is out (see legacyGone above) — there is nothing to
 * point a catch-all at that would improve on the site's own 404. Kept so the pattern
 * is not lost when 410 is restored.
 */
export const legacyPhpCatchAll = "/(.*).php";
