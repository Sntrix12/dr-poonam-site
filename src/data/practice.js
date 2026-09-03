/**
 * Single source of truth for everything factual about the practice.
 *
 * Local SEO rewards an identical NAP (Name / Address / Phone) citation everywhere
 * it appears — on the site, in structured data, and on the Google Business Profile.
 * Import from here rather than retyping any of it.
 *
 * Do not add a claim to this file that is not verifiable from an authoritative
 * source (her Practo profile, her certificates, the hospitals she attends).
 */

export const SITE_URL = "https://www.drpoonamnautiyal.com";

export const doctor = {
  name: "Dr. Poonam Nautiyal",
  honorificPrefix: "Dr.",
  givenName: "Poonam",
  familyName: "Nautiyal",
  credentials: "MRCOG (UK), DNB (OBGY), DGO, MBBS",
  credentialsList: ["MRCOG (UK)", "DNB (OBGY)", "DGO", "MBBS"],
  jobTitle: "Senior Consultant Gynaecologist",
  specialty: "Obstetrics and Gynaecology",
  alumniOf: "Lady Hardinge Medical College",
  registration: {
    number: "2006062792",
    council: "Maharashtra Medical Council",
  },
  experience: {
    totalYears: 24,
    specialistYears: 18,
    // Phrasing used verbatim in copy so the two numbers never drift apart.
    summary: "24 years of experience overall, including 18 years as a specialist",
  },
  languages: ["English", "Hindi", "Marathi", "Gujarati"],
};

export const contact = {
  phoneE164: "+919820739032",
  phoneDisplay: "+91 98207 39032",
  phoneHref: "tel:+919820739032",
  whatsappNumber: "919820739032",
  email: "drpoonamnautiyal@gmail.com",
};

/** Primary consulting address — the one used for Physician/PostalAddress schema. */
export const clinic = {
  name: "Dr. Poonam Nautiyal — Gynaecologist & Obstetrician",
  streetAddress: "Andheri - Kurla Rd, next to Holy Family Church, Gundavali",
  locality: "Andheri East",
  city: "Mumbai",
  region: "Maharashtra",
  postalCode: "400069",
  country: "IN",
  countryName: "India",
  full: "Andheri - Kurla Rd, next to Holy Family Church, Gundavali, Andheri East, Mumbai, Maharashtra 400069, India",
  mapUrl: "https://maps.google.com/?q=Criticare+Hospital+Andheri+East+Mumbai",
};

export const openingHours = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "10:00",
  closes: "20:00",
  display: "Mon–Sat: 10:00 AM – 08:00 PM",
};

/** Hospitals Dr. Nautiyal is attached to. Areas double as the local landing pages. */
export const hospitals = [
  {
    id: "surya",
    name: "Surya Hospital",
    area: "Santacruz West",
    city: "Mumbai",
    logo: "/surya-logo.png",
    mapUrl: "https://maps.google.com/?q=Surya+Hospitals+Santacruz+Mumbai",
  },
  {
    id: "criticare",
    name: "Criticare Hospital",
    area: "Andheri East",
    city: "Mumbai",
    logo: "/criticare-logo.jpg",
    mapUrl: "https://maps.google.com/?q=Criticare+Hospital+Andheri+East+Mumbai",
  },
  {
    id: "apollo",
    name: "Apollo Hospitals",
    area: "Navi Mumbai",
    city: "Navi Mumbai",
    logo: "/apollo-logo.png",
    mapUrl: "https://maps.google.com/?q=Apollo+Hospitals+Navi+Mumbai",
  },
  {
    id: "cloudnine",
    name: "Cloudnine Hospital",
    area: "Malad West",
    city: "Mumbai",
    logo: "/cloudnine-logo.png",
    mapUrl: "https://maps.google.com/?q=Cloudnine+Hospital+Malad+Mumbai",
  },
];

/** External profiles — used for schema.org sameAs, which links this site to her real listings. */
export const profiles = {
  practo:
    "https://www.practo.com/mumbai/doctor/dr-poonam-nautiyal-gynecologist-obstetrician-2",
  practoReviews:
    "https://www.practo.com/mumbai/doctor/dr-poonam-nautiyal-gynecologist-obstetrician-2/reviews",
  google: [
    "https://share.google/vOeVlV20E8ny5foVk",
    "https://share.google/yVmGLAV7pQ5flGsf6",
  ],
};

export const sameAs = [profiles.practo, ...profiles.google];

/**
 * Social proof. Every number carries the source it comes from and is labelled as
 * such on the page — an unattributed statistic on a medical site is a liability.
 *
 * These are deliberately NOT emitted as aggregateRating/Review structured data:
 * self-published ratings for your own business violate Google's structured data
 * policy. Google surfaces her real rating from the Business Profile instead.
 */
export const stats = [
  {
    value: "99%",
    label: "Recommendation rate",
    source: "Practo",
    href: profiles.practoReviews,
  },
  {
    value: "360+",
    label: "Verified patient stories",
    source: "Practo",
    href: profiles.practoReviews,
  },
  {
    value: "24 yrs",
    label: "Experience (18 as specialist)",
    source: "Practo",
    href: profiles.practo,
  },
  {
    value: "4.9 ★",
    label: "Google rating",
    source: "Google",
    href: profiles.google[0],
  },
];

/** Areas she genuinely practises in, for local search intent. */
export const areasServed = [
  "Andheri East",
  "Andheri West",
  "Santacruz West",
  "Malad West",
  "Navi Mumbai",
  "Mumbai",
];

export const whatsappLink = (message) =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
