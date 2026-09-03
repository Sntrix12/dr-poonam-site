/**
 * The route registry — one list, read by three things:
 *   1. the React router, so every page has a real URL
 *   2. scripts/prerender.mjs, which writes static HTML per route
 *   3. the sitemap and llms.txt generators
 *
 * Keeping them on one list is the point: pages, sitemap and prerendered HTML
 * cannot drift apart, because there is only one place to change.
 */

import { SITE_URL, doctor, clinic, openingHours } from "../data/practice.js";
import { servicesData, serviceSlugs } from "../data/services.js";
import { allFaqs } from "../data/faqs.js";
import { areas } from "../data/areas.js";
import {
  abs,
  physicianSchema,
  websiteSchema,
  faqPageSchema,
  breadcrumbSchema,
  serviceSchema,
  areaSchema,
  graph,
} from "./schema.js";

export const DEFAULT_OG_IMAGE = "/poonam.png";

/** Every page carries the physician entity, so any single page is enough for a crawler. */
const withBase = (nodes = []) => graph([physicianSchema(), websiteSchema(), ...nodes]);

export const routes = [
  {
    path: "/",
    title: `${doctor.name} — Gynaecologist & Obstetrician in Mumbai`,
    description: `${doctor.name}, MRCOG (UK) — Senior Consultant Gynaecologist in Mumbai. Pregnancy, PCOS, laparoscopy and women's health. ${openingHours.display}.`,
    priority: 1.0,
    jsonLd: () => withBase(),
  },
  {
    path: "/about",
    title: `About ${doctor.name} | Gynaecologist in Mumbai`,
    description: `${doctor.name} — MRCOG (UK), DNB (OBGY), DGO, MBBS from ${doctor.alumniOf}. ${doctor.experience.totalYears} years of experience, ${doctor.registration.council} registered.`,
    priority: 0.9,
    jsonLd: () =>
      withBase([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ]),
  },
  {
    path: "/services",
    title: "Gynaecology & Maternity Services in Mumbai | Dr. Nautiyal",
    description:
      "Pregnancy care, normal and painless delivery, PCOS, laparoscopic surgery, fertility, menopause and HPV vaccination in Mumbai. Consultations Mon to Sat.",
    priority: 0.9,
    jsonLd: () =>
      withBase([
        {
          "@type": "CollectionPage",
          url: abs("/services"),
          name: "Services",
          hasPart: serviceSlugs.map((slug) => ({
            "@type": "MedicalProcedure",
            name: servicesData[slug].title,
            url: abs(`/services/${slug}`),
          })),
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ]),
  },

  ...serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    title: servicesData[slug].metaTitle,
    description: servicesData[slug].metaDescription,
    priority: 0.8,
    jsonLd: () => withBase(serviceSchema(slug)),
  })),

  {
    path: "/faqs",
    title: "Gynaecologist FAQs — Mumbai | Dr. Poonam Nautiyal",
    description:
      "Answers on booking, fees, hospitals, pregnancy care, PCOS, surgery and check-ups from Dr. Poonam Nautiyal, gynaecologist and obstetrician in Mumbai.",
    priority: 0.8,
    jsonLd: () =>
      withBase([
        faqPageSchema(allFaqs),
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ]),
      ]),
  },
  {
    path: "/contact",
    title: "Contact & Locations | Dr. Poonam Nautiyal, Mumbai",
    description: `Book with Dr. Poonam Nautiyal in Mumbai. Clinic on Andheri-Kurla Road, ${clinic.locality}. Attached to Surya, Criticare, Cloudnine and Apollo hospitals.`,
    priority: 0.9,
    jsonLd: () =>
      withBase([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ]),
  },
  {
    path: "/testimonials",
    title: "Patient Reviews | Dr. Poonam Nautiyal, Mumbai",
    description:
      "Patient reviews of Dr. Poonam Nautiyal, gynaecologist in Mumbai, from her Practo and Google profiles — pregnancy, high risk care and second opinions.",
    priority: 0.7,
    jsonLd: () =>
      withBase([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Patient Reviews", path: "/testimonials" },
        ]),
      ]),
  },

  ...areas.map((area) => ({
    path: `/${area.slug}`,
    title: area.metaTitle,
    description: area.metaDescription,
    priority: 0.8,
    jsonLd: () => withBase(areaSchema(area)),
  })),

  {
    path: "/blog",
    title: "Women's Health Blog | Dr. Poonam Nautiyal",
    description:
      "Articles on pregnancy, PCOS, menopause and women's health from Dr. Poonam Nautiyal, gynaecologist and obstetrician in Mumbai.",
    // No articles published yet. A page of placeholders is a thin-content signal,
    // so it stays out of the index until there is something real on it.
    noindex: true,
    excludeFromSitemap: true,
    jsonLd: () => withBase(),
  },
  {
    path: "/404",
    title: "Page not found | Dr. Poonam Nautiyal",
    description: "That page does not exist. Browse services or get in touch.",
    noindex: true,
    excludeFromSitemap: true,
    jsonLd: () => withBase(),
  },
];

export const routeByPath = Object.fromEntries(routes.map((r) => [r.path, r]));

export const getRouteMeta = (pathname) => {
  const clean =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeByPath[clean] || routeByPath["/404"];
};

export const sitemapRoutes = routes.filter((r) => !r.excludeFromSitemap);

/** Old hash URLs from before the move to real paths. Redirected, never 404ed. */
export const legacyHashMap = {
  "#services-page": "/services",
  "#blog-page": "/blog",
  "#faqs-page": "/faqs",
  "#faqs": "/faqs",
  "#about": "/about",
  "#contact": "/contact",
  "#testimonials": "/testimonials",
  "#attachments": "/contact",
  "#doctor-bio": "/about",
};

export const resolveLegacyHash = (hash) => {
  if (!hash || hash === "#") return null;
  if (hash.startsWith("#service/")) {
    const slug = hash.slice("#service/".length);
    return servicesData[slug] ? `/services/${slug}` : "/services";
  }
  return legacyHashMap[hash] || null;
};

export { SITE_URL };
