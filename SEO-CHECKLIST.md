# What to do after this goes live

The website work is done. These are the things that need a Google account, so they
have to be done by Dr. Nautiyal or someone signed in as her. They matter — the first
two are what actually get the new pages found.

---

## 1. Connect Google Search Console (do this first)

This is how you tell Google that fifteen new pages exist. Without it they can take
months to be discovered; with it, days.

1. Go to **search.google.com/search-console** and sign in with her Google account.
2. Click **Add property** → choose **URL prefix** → paste `https://www.drpoonamnautiyal.com`
3. Google will ask you to verify you own the site. It offers several methods.
   **Tell Claude which method it offers and it will handle the technical part** — the
   HTML file and HTML tag methods both need a change to the website.
4. Once verified, open **Sitemaps** in the left menu, type `sitemap.xml`, and click
   **Submit**. It should say "Success" and find 21 pages.

Come back after two weeks and look at **Performance**. It shows the actual searches
people used to find the site.

---

## 2. Sort out the Google Business Profile

This matters more than the website for "gynaecologist near me" searches. The map
results with pins — the three listings above everything else — come from the Business
Profile, not from the site.

**There are currently two Google listings.** Check whether that is deliberate:

- If they are two genuinely different locations, that is fine and correct.
- If they are duplicates of the same practice, they are splitting the ranking between
  them and one should be merged or removed. In Google Maps, open the duplicate →
  **Suggest an edit** → **Close or remove** → **Duplicate**.

Then, on the listing(s), make sure these match the website **exactly**, character for
character. Google cross-checks them, and mismatches weaken both:

| Field | Must say |
|---|---|
| Name | Dr. Poonam Nautiyal |
| Phone | +91 98207 39032 |
| Address | Andheri - Kurla Rd, next to Holy Family Church, Gundavali, Andheri East, Mumbai, Maharashtra 400069 |
| Hours | Monday–Saturday, 10:00 AM – 8:00 PM |
| Category | Primary: **Obstetrician-gynecologist** |
| Website | https://www.drpoonamnautiyal.com |

Also worth doing on the listing:
- Add the services (the same eleven that are on the site).
- Add real photos — the clinic, the waiting area, her. Listings with photos get
  meaningfully more clicks than those without.
- Turn on messaging if she wants WhatsApp-style enquiries through Google too.

---

## 3. Ask patients for Google reviews

She is at 4.9 stars, which is excellent. Volume and recency are what move ranking now
— a listing with 90 reviews outranks one with 30 at the same rating, and Google
weights recent reviews more heavily.

The reliable way: ask at the end of a good consultation and send the link on WhatsApp
the same day. There is a "Leave a Google review" button on the
`/testimonials` page of the site.

Do **not** offer anything in exchange for a review. Google removes those and it can
get a listing suspended.

---

## 3b. Verify the old-site redirects are actually reaching Vercel

The 26 dead URLs from the previous PHP site now have redirects committed in
`vercel.json`. They are the correct fix, **but they only work if the request reaches
Vercel at all.**

Google reported those URLs returning a mix of **403, 500 and 404**. A Vercel static
deployment does not naturally produce 403 or 500 for a missing `.php` file — it
produces 404. So something was answering ahead of the app. After this deploys, check
which of these it was:

```bash
# Should print: 301, and a Location of https://www.drpoonamnautiyal.com/contact
curl -sSI https://www.drpoonamnautiyal.com/contact.php | head -n 3

# Should print: 410
curl -sSI https://www.drpoonamnautiyal.com/gallery.php | head -n 1

# Confirms the request is being served by Vercel at all
curl -sSI https://www.drpoonamnautiyal.com/ | grep -i "server\|x-vercel"
```

**If those return 301 and 410 — done, nothing more to do.**

### If they still return 403

**Correction to what this file said before.** It used to rank "stale Search Console
data" as the most likely cause. That was my guess and it was wrong. Two things have
since ruled it out:

- Search Console emailed on 17 September to say a **validation attempt failed** —
  "some of your pages are still affected". A validation run recrawls the URLs. It
  would not have failed on stale data alone.
- Running URL Inspection on a normal page of the site fetches fine, so whatever is
  returning 403 is specific to the `.php` URLs, not the site as a whole.

Two other things were checked and are clean, so they are not the cause either:

- **DNS.** `www.drpoonamnautiyal.com` resolves through a CNAME to Vercel and to
  nothing else. No records from the old host remain.
- **This repository.** `vercel.json` contains no authentication or deny rules, and
  `robots.txt` has no `Disallow` and names Googlebot as allowed. Nothing here is
  capable of producing a 403.

That leaves the edge, in front of the deployment. In order of likelihood now:

1. **A Vercel Firewall rule.** Vercel Dashboard → your project → **Firewall**.
   Requests for `.php` paths look exactly like automated exploit scanning — several
   of these 26 URLs genuinely are scanner paths — and managed rulesets commonly block
   them with a 403 at the edge, *before* redirects run. Look at the firewall log for
   blocked requests to `.php`. If a rule is matching, add a bypass for these paths so
   the redirect and the 410 can win.
2. **Bot protection or Attack Challenge Mode.** Same Firewall page. Either can answer
   a crawler with a 403 before the request reaches any routing.
3. **Stale Search Console data, for some individual URLs.** Now the least likely
   explanation overall, but still worth checking per URL: the "Last crawled" date in
   GSC tells you whether that particular URL has been looked at since the redirects
   went live on 10 September.

### The one test that settles it

In Search Console: **URL Inspection** → paste
`https://www.drpoonamnautiyal.com/safe-abortions.php` → **Test live URL**.

"Test live URL" fetches the page there and then rather than reporting what was seen
last time, so the answer is unambiguous:

- **It comes back as a redirect** → nothing is broken. The 403 is GSC's old verdict.
  Click **Validate Fix** on the 403 issue and let it recrawl; validation runs in waves
  over two to four weeks.
- **It comes back 403** → something at the edge really is blocking it. Go to the
  Vercel Firewall page above.

Layers 1 and 2 are outside this repository and have to be changed in the Vercel
dashboard.

## 4. Check it looks right

Open **https://www.drpoonamnautiyal.com** on a phone and click through the pages.
Specifically check that every fact about her is correct — qualifications,
registration number, languages, hospitals, hours.

If anything is wrong, it is almost certainly in one file: `src/data/practice.js`.
Tell Claude what is wrong and it is a one-line fix.

---

## 5. Later, when there is time: write articles

`/blog` is currently empty and deliberately hidden from Google (an empty page counts
against the site). It becomes valuable as soon as there are real articles.

The highest-value articles are the questions patients actually ask in the consulting
room, answered properly — "what does a high-risk pregnancy actually mean", "PCOS diet
that works for Indian food", "what to expect in the first trimester". Three or four
good pieces a year beats twenty thin ones, and they need her medical review to be
worth publishing.

---

## What was already done for you

- Every page has its own web address, its own title and its own description.
- Pages are pre-built as real HTML, so ChatGPT, Perplexity, Claude and Google's AI
  answers can read the site. They previously saw a blank page.
- Structured data tells Google she is a physician, where she practises, what she
  treats, and what each page answers.
- `robots.txt` explicitly welcomes the AI search crawlers.
- `sitemap.xml` lists all 21 public pages and rebuilds itself automatically.
- `llms.txt` gives AI crawlers a clean summary of the practice.
- Old links (`#service/pcos-management` and similar) redirect instead of breaking.
- The homepage's main photo went from 1.19 MB to 58 KB.
