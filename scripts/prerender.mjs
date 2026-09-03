/**
 * Renders every route to static HTML at build time.
 *
 * This is the step that makes the site visible to answer engines. GPTBot, ClaudeBot,
 * PerplexityBot and OAI-SearchBot do not execute JavaScript — before this existed
 * they saw an empty <div id="root">. Google can render JS but does so slowly and
 * inconsistently, so static HTML helps there too.
 *
 * Also emits sitemap.xml and llms.txt from the same route list, so pages, sitemap
 * and AI summary can never drift apart.
 *
 * Run automatically by `npm run build`.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { routes, sitemapRoutes, SITE_URL, DEFAULT_OG_IMAGE } = await import(
  path.join(root, "src/seo/routes.js")
);
const { doctor, contact, clinic, openingHours, hospitals, profiles } = await import(
  path.join(root, "src/data/practice.js")
);
const { servicesData, serviceSlugs } = await import(path.join(root, "src/data/services.js"));
const { allFaqs } = await import(path.join(root, "src/data/faqs.js"));
const { areas } = await import(path.join(root, "src/data/areas.js"));
const { render } = await import(path.join(root, "dist-ssr/entry-server.js"));

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** JSON-LD goes inside a <script>, so only "<" needs neutralising. */
const escapeJsonLd = (obj) =>
  JSON.stringify(obj).replace(/</g, "\\u003c").replace(/[\u2028\u2029]/g, "");

const canonicalFor = (routePath) =>
  routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;

function buildHead(route) {
  const canonical = canonicalFor(route.path);
  const ogImage = `${SITE_URL}${route.ogImage || DEFAULT_OG_IMAGE}`;
  const robots = route.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large, max-snippet:-1";

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="author" content="${escapeHtml(doctor.name)}" />`,
    `<meta name="geo.region" content="IN-MH" />`,
    `<meta name="geo.placename" content="Mumbai" />`,
    `<meta property="og:site_name" content="${escapeHtml(doctor.name)}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    `<script type="application/ld+json" data-route>${escapeJsonLd(route.jsonLd())}</script>`,
  ].join("\n    ");
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = sitemapRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${canonicalFor(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${(r.priority ?? 0.6).toFixed(1)}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

/**
 * llms.txt — an emerging convention giving AI crawlers a clean, plain-text summary
 * instead of making them infer one from marked-up pages.
 */
function buildLlmsTxt() {
  const lines = [
    `# ${doctor.name}`,
    "",
    `> ${doctor.jobTitle} (Obstetrics & Gynaecology) practising in Mumbai, India. ${doctor.credentials}. ${doctor.experience.summary}. Registered with the ${doctor.registration.council}, registration number ${doctor.registration.number}.`,
    "",
    "## Practice details",
    "",
    `- Name: ${doctor.name}`,
    `- Speciality: Obstetrics and Gynaecology`,
    `- Qualifications: ${doctor.credentials}`,
    `- Medical school: ${doctor.alumniOf}`,
    `- Experience: ${doctor.experience.totalYears} years overall, ${doctor.experience.specialistYears} years as a specialist`,
    `- Registration: ${doctor.registration.council} ${doctor.registration.number}`,
    `- Languages: ${doctor.languages.join(", ")}`,
    `- Address: ${clinic.full}`,
    `- Phone and WhatsApp: ${contact.phoneDisplay}`,
    `- Email: ${contact.email}`,
    `- Consulting hours: ${openingHours.display}`,
    `- Website: ${SITE_URL}`,
    `- Practo profile: ${profiles.practo}`,
    "",
    "## Hospital attachments",
    "",
    ...hospitals.map((h) => `- ${h.name}, ${h.area}, ${h.city}`),
    "",
    "## Services",
    "",
    ...serviceSlugs.map(
      (slug) =>
        `- [${servicesData[slug].title}](${SITE_URL}/services/${slug}): ${servicesData[slug].aeoSummary.split(". ")[0]}.`,
    ),
    "",
    "## Locations",
    "",
    ...areas.map((a) => `- [Gynaecologist in ${a.name}](${SITE_URL}/${a.slug})`),
    "",
    "## Frequently asked questions",
    "",
    ...allFaqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Notes",
    "",
    "- Information on this site is general guidance and not a substitute for a consultation.",
    "- Patient reviews shown on the site are reproduced from public Practo and Google profiles.",
  ];
  return lines.join("\n");
}

const failures = [];

/** Text unique to NotFoundPage, used to detect a route rendering the wrong component. */
const NOT_FOUND_MARKER = "We couldn&#x27;t find that page";

async function main() {
  const template = await fs.readFile(path.join(dist, "index.html"), "utf8");

  if (!template.includes("<!--ssr-outlet-->")) {
    throw new Error("index.html is missing the <!--ssr-outlet--> placeholder");
  }
  if (!/<!--seo-head-start-->[\s\S]*<!--seo-head-end-->/.test(template)) {
    throw new Error("index.html is missing the seo-head markers");
  }

  for (const route of routes) {
    const appHtml = render(route.path);

    const html = template
      .replace(
        /<!--seo-head-start-->[\s\S]*?<!--seo-head-end-->/,
        `<!--seo-head-start-->\n    ${buildHead(route)}\n    <!--seo-head-end-->`,
      )
      .replace("<!--ssr-outlet-->", appHtml);

    // ── Guardrails. A silently empty or invisible prerender is the failure mode
    // that would actually cost rankings, so the build stops rather than shipping it.
    const bodyText = appHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (bodyText.length < 1000) {
      failures.push(`${route.path}: only ${bodyText.length} chars of text rendered`);
    }
    if (/style="[^"]*opacity:\s*0/i.test(appHtml)) {
      failures.push(`${route.path}: contains opacity:0 — text would render invisible`);
    }
    if (!html.includes('application/ld+json')) {
      failures.push(`${route.path}: no structured data emitted`);
    }
    // A route that silently renders the not-found component still has plenty of text
    // and valid schema, so length alone would not catch it. This does.
    if (route.path !== "/404" && appHtml.includes(NOT_FOUND_MARKER)) {
      failures.push(`${route.path}: rendered the not-found page instead of its own content`);
    }

    const outDir =
      route.path === "/" ? dist : path.join(dist, ...route.path.split("/").filter(Boolean));
    await fs.mkdir(outDir, { recursive: true });
    await fs.writeFile(path.join(outDir, "index.html"), html);
  }

  // Vercel serves dist/404.html for unmatched paths on a static deployment.
  await fs.copyFile(path.join(dist, "404", "index.html"), path.join(dist, "404.html"));

  await fs.writeFile(path.join(dist, "sitemap.xml"), buildSitemap());
  await fs.writeFile(path.join(dist, "llms.txt"), buildLlmsTxt());

  if (failures.length) {
    console.error("\nPrerender failed:\n" + failures.map((f) => `  - ${f}`).join("\n") + "\n");
    process.exit(1);
  }

  console.log(
    `Prerendered ${routes.length} routes → dist/  (sitemap: ${sitemapRoutes.length} URLs, llms.txt written)`,
  );
}

await main();
