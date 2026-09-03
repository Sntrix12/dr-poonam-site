import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, DEFAULT_OG_IMAGE, getRouteMeta } from "../seo/routes.js";

/**
 * Keeps the document head correct during client-side navigation.
 *
 * The authoritative copy of these tags is written into each page's static HTML by
 * scripts/prerender.mjs — that is what crawlers read. This component exists so that
 * a visitor clicking between pages in the browser still sees the right title, and so
 * that anything sharing the current URL picks up the right preview card.
 */

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const canonical = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
    const ogImage = `${SITE_URL}${meta.ogImage || DEFAULT_OG_IMAGE}`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', { name: "description", content: meta.description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    });
    upsertLink("canonical", canonical);

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: meta.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    let ld = document.head.querySelector('script[type="application/ld+json"][data-route]');
    if (!ld) {
      ld = document.createElement("script");
      ld.type = "application/ld+json";
      ld.setAttribute("data-route", "");
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(meta.jsonLd());
  }, [pathname]);

  return null;
}
