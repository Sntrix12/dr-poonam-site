import { Link } from "react-router-dom";
import {
  clinic,
  contact,
  doctor,
  hospitals,
  openingHours,
  profiles,
} from "../data/practice.js";
import { areas } from "../data/areas.js";
import Layout from "../components/Layout.jsx";
import { openWhatsApp, useBooking } from "../components/Booking.jsx";

/**
 * The page that "gynaecologist near me" searches should land on. Every location,
 * every way to make contact, and the same NAP as the structured data and the
 * Google Business Profile.
 */
export default function ContactPage() {
  const { openBooking } = useBooking();

  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#9771e3] sm:text-4xl mb-5">
            Contact &amp; locations
          </h1>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            Dr. Poonam Nautiyal consults in {clinic.locality}, Mumbai,{" "}
            {openingHours.display.replace("Mon–Sat: ", "Monday to Saturday, ")}, and is attached to
            four Mumbai hospitals for deliveries and surgery. Call or WhatsApp{" "}
            <a href={contact.phoneHref} className="font-bold text-[#9771e3]">
              {contact.phoneDisplay}
            </a>{" "}
            to book. Online consultations by WhatsApp or video call are also available.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid gap-8 lg:grid-cols-3">
          {/* Primary clinic */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#9771e3]/10 p-7 sm:p-9 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-2">
              Consulting clinic — {clinic.locality}
            </h2>
            <p className="text-sm text-gray-500 mb-6">Main location for consultations</p>

            <address className="not-italic text-[16px] text-[#475569] leading-relaxed mb-6">
              <strong className="block text-[#1E293B] mb-1">{doctor.name}</strong>
              {clinic.streetAddress}
              <br />
              {clinic.locality}, {clinic.city}, {clinic.region} {clinic.postalCode}
              <br />
              {clinic.countryName}
            </address>

            <dl className="grid sm:grid-cols-2 gap-5 text-[15px] mb-7">
              <div>
                <dt className="font-bold text-[#1E293B] mb-1">Consulting hours</dt>
                <dd className="text-[#475569]">{openingHours.display}</dd>
              </div>
              <div>
                <dt className="font-bold text-[#1E293B] mb-1">Languages</dt>
                <dd className="text-[#475569]">{doctor.languages.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-bold text-[#1E293B] mb-1">Phone &amp; WhatsApp</dt>
                <dd>
                  <a href={contact.phoneHref} className="text-[#9771e3] font-semibold hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-[#1E293B] mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[#9771e3] font-semibold hover:underline break-all"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={contact.phoneHref}
                className="flex-1 text-center bg-[#9771e3] hover:bg-[#835bc4] text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                Call now
              </a>
              <button
                onClick={() =>
                  openWhatsApp("Hello Dr. Poonam, I would like to book an appointment.")
                }
                className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                WhatsApp
              </button>
              <button
                onClick={() => openBooking({ context: "Contact page" })}
                className="flex-1 border-2 border-[#9771e3] text-[#9771e3] hover:bg-[#9771e3] hover:text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                Request a slot
              </button>
            </div>

            <a
              href={clinic.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-5 text-sm font-semibold text-[#9771e3] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Quick facts */}
          <div className="bg-[#9771e3] rounded-3xl p-7 text-white shadow-xl">
            <h2 className="font-serif text-xl font-bold mb-5">At a glance</h2>
            <dl className="space-y-4 text-[14px]">
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Doctor</dt>
                <dd className="font-semibold">{doctor.name}</dd>
              </div>
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Qualifications</dt>
                <dd className="font-semibold">{doctor.credentials}</dd>
              </div>
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Speciality</dt>
                <dd className="font-semibold">Obstetrics &amp; Gynaecology</dd>
              </div>
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Experience</dt>
                <dd className="font-semibold">
                  {doctor.experience.totalYears} years ({doctor.experience.specialistYears} as
                  specialist)
                </dd>
              </div>
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Registration</dt>
                <dd className="font-semibold">
                  {doctor.registration.council}
                  <br />
                  No. {doctor.registration.number}
                </dd>
              </div>
              <div>
                <dt className="text-white/70 text-xs uppercase tracking-wide">Profiles</dt>
                <dd className="font-semibold">
                  <a href={profiles.practo} target="_blank" rel="noreferrer" className="underline">
                    Practo
                  </a>{" "}
                  ·{" "}
                  <a href={profiles.google[0]} target="_blank" rel="noreferrer" className="underline">
                    Google
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#9771e3] mb-3">
            Hospital attachments
          </h2>
          <p className="text-[16px] text-[#475569] leading-relaxed mb-8 max-w-3xl">
            Deliveries and surgery take place at these four hospitals. Which one is right for you
            depends on where you live and what your care needs — worth deciding early rather than
            in the last few weeks. Call to confirm which days she consults at each.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {hospitals.map((h) => {
              const area = areas.find((a) => a.hospitalId === h.id);
              return (
                <div
                  key={h.id}
                  className="bg-white rounded-2xl border border-[#9771e3]/10 p-6 flex gap-5 items-start"
                >
                  <img
                    src={h.logo}
                    alt={`${h.name}, ${h.area}`}
                    width="72"
                    height="72"
                    loading="lazy"
                    className="w-16 h-16 object-contain shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#1E293B] text-[17px]">{h.name}</h3>
                    <p className="text-[#475569] text-sm mb-3">
                      {h.area}, {h.city}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
                      <a href={h.mapUrl} target="_blank" rel="noreferrer" className="text-[#9771e3] hover:underline">
                        Map
                      </a>
                      <button
                        onClick={() =>
                          openWhatsApp(`Hi Dr. Poonam, can I book an appointment at ${h.name}, ${h.area}?`)
                        }
                        className="text-[#9771e3] hover:underline"
                      >
                        Book here
                      </button>
                      {area && (
                        <Link to={`/${area.slug}`} className="text-[#9771e3] hover:underline">
                          {area.name} page
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
