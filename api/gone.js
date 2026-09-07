/**
 * Returns 410 Gone for old PHP URLs that have no equivalent on this site.
 *
 * Why a function: Vercel's `redirects` in vercel.json can only emit 3xx, and the
 * legacy `routes` property that can set an arbitrary status cannot be combined with
 * `cleanUrls`, `trailingSlash` or `redirects` — all of which this site needs. A tiny
 * rewrite target is the least invasive way to serve a real 410.
 *
 * Why 410 rather than 404: 404 means "not found, try again later" and Google will
 * recrawl it for months. 410 means "permanently gone" and gets it dropped from the
 * index far faster, which is what we want for a site that no longer exists.
 */
export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.status(410).send(`<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex" />
    <title>Page no longer exists | Dr. Poonam Nautiyal</title>
    <style>
      body { font-family: system-ui, -apple-system, sans-serif; background: #FAFAFF;
             color: #1E293B; margin: 0; display: grid; place-items: center;
             min-height: 100vh; padding: 24px; }
      main { max-width: 34rem; text-align: center; }
      h1 { font-size: 1.6rem; margin: 0 0 .75rem; color: #9771e3; }
      p { line-height: 1.6; color: #475569; }
      a.btn { display: inline-block; margin-top: 1.25rem; background: #9771e3;
              color: #fff; text-decoration: none; font-weight: 700;
              padding: .8rem 1.6rem; border-radius: 999px; }
      nav a { color: #9771e3; margin: 0 .5rem; font-size: .9rem; }
    </style>
  </head>
  <body>
    <main>
      <h1>This page no longer exists</h1>
      <p>
        It was part of an older version of this website. Dr. Poonam Nautiyal is still
        consulting in Andheri East, Mumbai &mdash; the current site has everything you
        are looking for.
      </p>
      <a class="btn" href="/">Go to the website</a>
      <nav>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/faqs">FAQs</a>
      </nav>
    </main>
  </body>
</html>`);
}
