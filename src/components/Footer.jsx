import { Link } from "react-router-dom";
import {
  clinic,
  contact,
  doctor,
  hospitals,
  openingHours,
  profiles,
} from "../data/practice.js";
import { servicesData, serviceSlugs } from "../data/services.js";
import { areas } from "../data/areas.js";
import { useBooking } from "./Booking.jsx";

/**
 * One footer for every page.
 *
 * Carries the full NAP (name, address, phone) exactly as it appears in the structured
 * data and, importantly, exactly as it should appear on the Google Business Profile —
 * a consistent citation across all three is one of the strongest local ranking signals
 * available. Every link here goes somewhere real; the previous footer had eleven that
 * did not.
 */

export default function Footer() {
  const { openBooking } = useBooking();
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fcfbfe] text-gray-700 border-t border-[#9771e3]/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand + summary */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo-192.png"
                alt={`${doctor.name} logo`}
                width="48"
                height="48"
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-bold text-gray-900 text-base leading-snug">{doctor.name}</p>
                <p className="text-xs text-[#9771e3] font-semibold">
                  Gynaecologist &amp; Obstetrician
                </p>
              </div>
            </div>
            <p className="text-[13px] text-gray-600 leading-relaxed">
              {doctor.jobTitle} in Mumbai with {doctor.experience.summary}. {doctor.credentials},
              trained at {doctor.alumniOf}. Consulting in {clinic.locality} and attached to four
              Mumbai hospitals.
            </p>
            <p className="text-[12px] text-gray-500">
              {doctor.registration.council} Reg. No. {doctor.registration.number}
              <br />
              Speaks {doctor.languages.join(", ")}
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4">Services</h2>
            <ul className="space-y-2 text-xs">
              {serviceSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    to={`/services/${slug}`}
                    className="text-gray-600 hover:text-[#9771e3] flex items-start gap-2 transition-colors"
                  >
                    <span className="text-[#9771e3] font-bold" aria-hidden="true">
                      ➔
                    </span>
                    <span>{servicesData[slug].title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations */}
          <nav aria-label="Locations">
            <h2 className="text-base font-bold text-gray-900 font-serif mb-4">Locations</h2>
            <ul className="space-y-2 text-xs mb-5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/${a.slug}`}
                    className="text-gray-600 hover:text-[#9771e3] flex items-start gap-2 transition-colors"
                  >
                    <span className="text-[#9771e3] font-bold" aria-hidden="true">
                      ➔
                    </span>
                    <span>Gynaecologist in {a.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
              Hospital attachments
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              {hospitals.map((h) => (
                <li key={h.id}>
                  {h.name}, {h.area}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact — the NAP citation */}
          <div className="space-y-4">
            <h2 className="text-base font-bold text-gray-900 font-serif">Contact</h2>
            <address className="not-italic text-xs text-gray-600 leading-relaxed">
              <strong className="block text-gray-900 mb-1">{doctor.name}</strong>
              {clinic.streetAddress},<br />
              {clinic.locality}, {clinic.city}, {clinic.region} {clinic.postalCode}
            </address>

            <div className="text-xs">
              <span className="inline-flex items-center gap-2 font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Open Mon–Sat
              </span>
              <p className="text-gray-500 mt-1">{openingHours.display}</p>
            </div>

            <div className="text-xs space-y-1">
              <a
                href={contact.phoneHref}
                className="block font-bold text-[#9771e3] hover:text-[#835bc4]"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block text-[#9771e3] hover:text-[#835bc4] break-all"
              >
                {contact.email}
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={contact.phoneHref}
                className="bg-[#9771e3] hover:bg-[#835bc4] text-white py-3 rounded-xl font-bold text-xs text-center transition-colors"
              >
                Call now
              </a>
              <button
                onClick={() => openBooking()}
                className="border border-[#9771e3] text-[#9771e3] hover:bg-[#9771e3] hover:text-white py-3 rounded-xl font-bold text-xs transition-colors"
              >
                Book appointment
              </button>
            </div>

            <p className="text-xs text-gray-500 pt-1">
              Also on{" "}
              <a
                href={profiles.practo}
                target="_blank"
                rel="noreferrer"
                className="text-[#9771e3] hover:underline"
              >
                Practo
              </a>{" "}
              and{" "}
              <a
                href={profiles.google[0]}
                target="_blank"
                rel="noreferrer"
                className="text-[#9771e3] hover:underline"
              >
                Google
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-5 sm:px-8 lg:px-12 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {year} {doctor.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] text-gray-400">
            Information on this website is for general guidance only and is not a substitute for
            a consultation. Please seek medical advice for your own situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
