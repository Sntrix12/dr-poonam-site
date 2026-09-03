/**
 * schema.org JSON-LD builders.
 *
 * These are what let Google and AI answer engines understand *what* this site is
 * about rather than just reading words: that Dr. Nautiyal is a physician, where she
 * practises, what she treats, and what questions this page answers.
 *
 * One deliberate omission: no aggregateRating and no Review nodes. Google's
 * structured data policy prohibits self-serving review markup for your own business
 * and can issue a manual action for it. Her real rating reaches Google through her
 * Business Profile, which is the correct route. The reviews on this site are shown
 * as ordinary HTML with their source named.
 */

import {
  SITE_URL,
  doctor,
  contact,
  clinic,
  openingHours,
  hospitals,
  sameAs,
  areasServed,
} from "../data/practice.js";
import { servicesData, serviceSlugs } from "../data/services.js";

export const abs = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "") ||
  SITE_URL;

const PHYSICIAN_ID = `${SITE_URL}/#physician`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: clinic.streetAddress,
  addressLocality: clinic.locality,
  addressRegion: clinic.region,
  postalCode: clinic.postalCode,
  addressCountry: clinic.country,
};

/** The sitewide entity. Everything else references it by @id. */
export const physicianSchema = () => ({
  "@type": ["Physician", "MedicalBusiness"],
  "@id": PHYSICIAN_ID,
  name: doctor.name,
  honorificPrefix: doctor.honorificPrefix,
  givenName: doctor.givenName,
  familyName: doctor.familyName,
  url: SITE_URL,
  image: abs("/poonam.jpg"),
  logo: abs("/logo-192.png"),
  description: `${doctor.name} is a ${doctor.jobTitle} in Mumbai with ${doctor.experience.summary}. Qualifications: ${doctor.credentials}.`,
  medicalSpecialty: "Obstetric",
  jobTitle: doctor.jobTitle,
  hasCredential: doctor.credentialsList.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    name: c,
  })),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: doctor.alumniOf,
  },
  identifier: {
    "@type": "PropertyValue",
    name: doctor.registration.council,
    value: doctor.registration.number,
  },
  knowsLanguage: doctor.languages,
  telephone: contact.phoneE164,
  email: contact.email,
  address: postalAddress,
  areaServed: areasServed.map((a) => ({ "@type": "Place", name: a })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openingHours.days,
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
  ],
  sameAs,
  availableService: serviceSlugs.map((slug) => ({
    "@type": "MedicalProcedure",
    name: servicesData[slug].title,
    url: abs(`/services/${slug}`),
  })),
  // The hospitals she attends. Named as places, not claimed as her own premises.
  workLocation: hospitals.map((h) => ({
    "@type": "Hospital",
    name: h.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: h.area,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  })),
});

export const websiteSchema = () => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: `${doctor.name} — Gynaecologist & Obstetrician, Mumbai`,
  inLanguage: "en-IN",
  publisher: { "@id": PHYSICIAN_ID },
});

export const breadcrumbSchema = (trail) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

export const faqPageSchema = (faqs) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** A service page: what the procedure is, who provides it, and its FAQs. */
export const serviceSchema = (slug) => {
  const s = servicesData[slug];
  const url = abs(`/services/${slug}`);
  return [
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: s.metaTitle,
      description: s.metaDescription,
      inLanguage: "en-IN",
      about: {
        "@type": "MedicalProcedure",
        name: s.title,
        description: s.aeoSummary,
        howPerformed: s.detailedContent,
      },
      provider: { "@id": PHYSICIAN_ID },
      isPartOf: { "@id": WEBSITE_ID },
      audience: { "@type": "PeopleAudience", geographicArea: { "@type": "Place", name: "Mumbai" } },
    },
    faqPageSchema(s.faqs),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: s.title, path: `/services/${slug}` },
    ]),
  ];
};

/** A local landing page: the practice, at one specific location. */
export const areaSchema = (area) => {
  const hospital = hospitals.find((h) => h.id === area.hospitalId);
  return [
    {
      "@type": "MedicalClinic",
      "@id": `${abs(`/${area.slug}`)}#clinic`,
      name: `${doctor.name} — Gynaecologist, ${area.name}`,
      description: area.intro,
      url: abs(`/${area.slug}`),
      telephone: contact.phoneE164,
      email: contact.email,
      medicalSpecialty: "Obstetric",
      address: area.isPrimary
        ? postalAddress
        : {
            "@type": "PostalAddress",
            addressLocality: area.name,
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
      areaServed: [area.name, ...area.nearbyAreas].map((n) => ({
        "@type": "Place",
        name: n,
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: openingHours.days,
          opens: openingHours.opens,
          closes: openingHours.closes,
        },
      ],
      physician: { "@id": PHYSICIAN_ID },
      ...(hospital ? { containedInPlace: { "@type": "Hospital", name: hospital.name } } : {}),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: `Gynaecologist in ${area.name}`, path: `/${area.slug}` },
    ]),
  ];
};

/** Wraps nodes into a single @graph document. */
export const graph = (nodes) => ({
  "@context": "https://schema.org",
  "@graph": nodes.flat().filter(Boolean),
});
