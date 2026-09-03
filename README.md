# drpoonamnautiyal.com

Website for Dr. Poonam Nautiyal, Senior Consultant Gynaecologist & Obstetrician,
Mumbai. React + Vite, prerendered to static HTML at build time, deployed on Vercel.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # client build + SSR build + prerender + sitemap + llms.txt
npm run lint
```

## Where things live

| Path | What it is |
|---|---|
| `src/data/practice.js` | **Every fact about the practice.** Name, address, phone, credentials, registration, languages, hospitals, profiles. Change facts here and nowhere else. |
| `src/data/services.js` | The 11 services — copy, FAQs, and per-page meta tags. |
| `src/data/faqs.js` | Site-wide FAQs. |
| `src/data/testimonials.js` | Patient reviews, verbatim from Practo and Google. |
| `src/data/areas.js` | The four local landing pages. |
| `src/seo/routes.js` | The route list. Pages, sitemap and prerender all read from it. |
| `src/seo/schema.js` | JSON-LD builders. |
| `scripts/prerender.mjs` | Renders every route to static HTML; writes sitemap.xml and llms.txt. |

## Two things to know before changing anything

**Adding a page means adding it to `src/seo/routes.js`.** That one list feeds the
router, the prerenderer and the sitemap. A route missing from it will not be
prerendered and will not be indexed.

**The site is prerendered because AI crawlers do not run JavaScript.** GPTBot,
ClaudeBot, PerplexityBot and OAI-SearchBot read raw HTML only. Anything that renders
solely on the client is invisible to them, so avoid moving content behind an effect
or a fetch. The build fails if a page renders too little text, renders with
`opacity: 0`, emits no structured data, or renders the wrong component.

**Do not add `aggregateRating` or `Review` structured data.** Self-published review
markup for your own business violates Google's structured data policy and can earn a
manual penalty. Reviews are shown as plain HTML with their source linked; Google gets
the real rating from the Business Profile.

## After deploying

See [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) — Search Console setup, Google Business
Profile, and reviews. Those need a Google login and are not something the code can do.
