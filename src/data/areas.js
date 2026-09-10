/**
 * Local landing pages, one per location where Dr. Nautiyal practises.
 *
 * SOURCING RULE: every sentence here must trace to something already in this repo —
 * src/data/practice.js, src/data/services.js or src/data/testimonials.js. Nothing is
 * asserted from general knowledge.
 *
 * Removed in this pass, as unsourced (see the PR for the full list and a TODO of what
 * would let them come back):
 *   - hospital characterisations ("a dedicated mother-and-child hospital", "maternity
 *     focused", "a large multi-speciality hospital") — true of those brands in the
 *     real world, but nothing in this repo says so
 *   - every transport and landmark claim (nearest station, highway, "a short journey
 *     from")
 *   - "patients travel to this location from …", which is a claim about patient
 *     volumes, and the per-area `nearbyAreas` lists that fed it. Listing neighbouring
 *     suburbs to catch their queries is also the classic doorway-page pattern, which
 *     is the very thing these pages are being rewritten to avoid.
 *
 * What differentiates each page now is its hospital, which is genuine and verifiable,
 * plus whatever else is specifically true of that location.
 */

import { clinic, contact, doctor, openingHours } from "./practice.js";

export const areas = [
  {
    slug: "gynaecologist-in-andheri-east",
    name: "Andheri East",
    hospitalId: "criticare",
    isPrimary: true,

    metaTitle: "Gynaecologist in Andheri East, Mumbai | Dr. Poonam Nautiyal",
    metaDescription:
      "Dr. Poonam Nautiyal, MRCOG (UK), consults on Andheri-Kurla Road, Andheri East, Monday to Saturday. Attached to Criticare Hospital. Call +91 98207 39032.",
    h1: "Gynaecologist in Andheri East, Mumbai",

    // Sourced: clinic.locality is Andheri East, so this genuinely is the consulting
    // base — the one thing uniquely true of this page.
    intro: `Dr. Poonam Nautiyal's consulting clinic is in Andheri East, Mumbai. This is where consultations are held, ${openingHours.display.replace("Mon–Sat: ", "Monday to Saturday, ")}, in ${doctor.languages.slice(0, -1).join(", ")} or ${doctor.languages.slice(-1)}. She is also attached to Criticare Hospital in Andheri East.`,

    body: [
      // Sourced: clinic.* in practice.js.
      `The clinic address is ${clinic.streetAddress}, ${clinic.locality}, ${clinic.city} ${clinic.postalCode}. Appointments are made by phone or WhatsApp on ${contact.phoneDisplay}, or by email at ${contact.email}.`,
      // Sourced: FAQ in src/data/faqs.js states online consultations are offered.
      "Because this is the consulting base rather than a hospital attachment, it is usually the easiest of the four locations at which to get an appointment. Online consultations over WhatsApp or video call are also available, which suit second opinions and going through reports; anything needing a physical examination needs a visit to this clinic.",
    ],

    // Editorial grouping for navigation only — the page makes no claim that these are
    // the services available here. See the TODO in the PR: which services she actually
    // provides at each hospital is the fact that would make these genuinely distinct.
    serviceSlugs: [
      "obstetrics-and-gynaecology",
      "pcos-management",
      "menopausal-counselling",
      "cervical-cancer-vaccine",
    ],
  },

  {
    slug: "gynaecologist-in-santacruz-west",
    name: "Santacruz West",
    hospitalId: "surya",

    metaTitle: "Gynaecologist at Surya Hospital, Santacruz West | Dr. Nautiyal",
    metaDescription:
      "Dr. Poonam Nautiyal, MRCOG (UK), is attached to Surya Hospital in Santacruz West, Mumbai. A patient review on this site describes a delivery there.",
    h1: "Gynaecologist at Surya Hospital, Santacruz West",

    // Sourced: hospitals[] in practice.js.
    intro:
      "Dr. Poonam Nautiyal is attached to Surya Hospital in Santacruz West, Mumbai, one of four Mumbai hospitals where she sees patients. She holds the MRCOG from the Royal College of Obstetricians and Gynaecologists in the United Kingdom, along with the DNB (OBGY), DGO and MBBS.",

    body: [
      // Sourced: the Haryy G. review in src/data/testimonials.js names Surya Hospitals
      // and describes exactly this. Quoted rather than paraphrased into a claim.
      "Surya is the only one of her hospital attachments named directly in a patient review on this site. Writing on Practo, Haryy G. describes his wife's caesarean there after a pregnancy complicated by preeclampsia: “The baby was born in Surya Hospitals via Cesarean… She got her own team to perform the operation. It was done at the exact time of our choice, the surgery went perfectly well.” The same review notes she invited him into the operating theatre to support his wife during the surgery.",
      // Sourced: practice.js.
      `Antenatal appointments before a delivery at Surya are held at the consulting clinic in ${clinic.locality}. Both are booked on ${contact.phoneDisplay}.`,
    ],

    serviceSlugs: [
      "high-risk-pregnancies",
      "normal-vaginal-deliveries",
      "pre-pregnancy-counselling",
    ],
  },

  {
    slug: "gynaecologist-in-malad-west",
    name: "Malad West",
    hospitalId: "cloudnine",

    metaTitle: "Gynaecologist at Cloudnine Hospital, Malad West | Dr. Nautiyal",
    metaDescription:
      "Dr. Poonam Nautiyal, MRCOG (UK), DNB (OBGY), is attached to Cloudnine Hospital in Malad West, Mumbai. Book on +91 98207 39032, Monday to Saturday.",
    h1: "Gynaecologist at Cloudnine Hospital, Malad West",

    // Sourced: hospitals[] in practice.js. Deliberately short — see the TODO. Nothing
    // else in this repo says anything specific about this location.
    intro:
      "Dr. Poonam Nautiyal is attached to Cloudnine Hospital in Malad West, Mumbai, one of four Mumbai hospitals where she sees patients.",

    // Deliberately the shortest of the four. Nothing else in this repo says anything
    // specific about this location, and padding it with credentials and opening hours
    // already carried on /about and in the footer would be duplicate content dressed
    // up as substance. See the TODO in the PR for what would fix this properly.
    body: [
      `To ask about being seen or treated at Cloudnine, call or WhatsApp ${contact.phoneDisplay}. Consultations themselves are held at the clinic in ${clinic.locality}.`,
    ],

    serviceSlugs: [
      "normal-vaginal-deliveries",
      "obstetrics-and-gynaecology",
      "infertility-treatment",
    ],
  },

  {
    slug: "gynaecologist-in-navi-mumbai",
    name: "Navi Mumbai",
    hospitalId: "apollo",

    metaTitle: "Gynaecologist at Apollo Hospitals, Navi Mumbai | Dr. Nautiyal",
    metaDescription:
      "Dr. Poonam Nautiyal, MRCOG (UK), is attached to Apollo Hospitals in Navi Mumbai. Second opinions welcome. Call +91 98207 39032, Monday to Saturday.",
    h1: "Gynaecologist at Apollo Hospitals, Navi Mumbai",

    // Sourced: hospitals[] in practice.js. Also short — see the TODO.
    intro:
      "Dr. Poonam Nautiyal is attached to Apollo Hospitals in Navi Mumbai, the one location outside the Mumbai western suburbs among her four hospital attachments.",

    body: [
      // Sourced: the Aditi Kadam Google review in src/data/testimonials.js.
      "Second opinions are a regular part of this practice. One reviewer on Google writes that Dr. Nautiyal “saved me from an unnecessary surgical procedure that another doctor had recommended”. If you have been told you need surgery and want another view, bring your scans and reports — a second opinion is only as good as the information behind it.",
      `Apollo is the only one of the four attachments outside the western suburbs, so it is the practical choice for patients on that side of the city. Call or WhatsApp ${contact.phoneDisplay} to arrange a consultation.`,
    ],

    serviceSlugs: [
      "laparoscopy",
      "gynaecological-surgeries",
      "high-risk-pregnancies",
    ],
  },
];

export const getArea = (slug) => areas.find((a) => a.slug === slug);
