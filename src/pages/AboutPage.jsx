import { Link } from "react-router-dom";
import {
  clinic,
  contact,
  doctor,
  hospitals,
  openingHours,
  profiles,
  stats,
} from "../data/practice.js";
import { serviceCategories, servicesData } from "../data/services.js";
import Layout from "../components/Layout.jsx";
import { useBooking } from "../components/Booking.jsx";

/**
 * The E-E-A-T page. Google weighs the credentials and identifiability of the author
 * heavily for health content, and this is the page an AI assistant quotes when asked
 * "who is Dr. Poonam Nautiyal". Every claim here is verifiable.
 */
export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row gap-10 items-center">
          <img
            src="/poonam.png"
            alt={`${doctor.name}, ${doctor.jobTitle} in Mumbai`}
            width="320"
            height="420"
            className="w-48 md:w-64 rounded-2xl object-cover shadow-lg border-4 border-[#9771e3]/15"
          />
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9771e3] mb-3">
              About {doctor.name}
            </h1>
            <p className="text-[13px] font-bold tracking-widest text-[#9771e3]/70 uppercase mb-5">
              {doctor.credentialsList.join(" • ")}
            </p>
            <p className="text-[17px] text-[#475569] leading-relaxed">
              Dr. Poonam Nautiyal is a Senior Consultant Gynaecologist and Obstetrician in Mumbai
              with {doctor.experience.summary}. She qualified in medicine at{" "}
              {doctor.alumniOf}, went on to postgraduate training in obstetrics and gynaecology
              with the DGO and DNB, and holds the MRCOG from the Royal College of Obstetricians
              and Gynaecologists in the United Kingdom. She is registered with the{" "}
              {doctor.registration.council}, registration number {doctor.registration.number}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 border border-[#9771e3]/10 text-center">
              <p className="text-3xl font-extrabold text-[#9771e3]">{s.value}</p>
              <p className="text-sm text-gray-600 mt-1 font-medium">{s.label}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-gray-400 hover:text-[#9771e3] underline"
              >
                via {s.source}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                Her approach to care
              </h2>
              <div className="space-y-4 text-[16px] text-[#475569] leading-relaxed">
                <p>
                  The thread running through the reviews patients leave is not really about
                  technique — it is about being reachable, being told what is happening, and not
                  being rushed. That is deliberate. A woman who understands why a test is being
                  done, what the result means and what the options are will make a better decision
                  about her own body than one who is simply handed a prescription.
                </p>
                <p>
                  In practice that means unhurried consultations, plain explanations rather than
                  clinical shorthand, and being contactable between visits by phone or WhatsApp.
                  It also means being straight when an intervention is not needed. Second opinions
                  are a routine part of this practice, and sometimes the honest answer is that the
                  operation you were told you needed can be avoided.
                </p>
                <p>
                  Where surgery genuinely is required, the preference is always for the approach
                  that preserves the most healthy tissue — keyhole rather than open surgery where
                  possible, removing a fibroid rather than the whole uterus where that is a real
                  option, and keeping the ovaries wherever it is safe to do so.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                Qualifications and training
              </h2>
              <dl className="bg-white rounded-2xl border border-[#9771e3]/10 divide-y divide-gray-100">
                {[
                  ["MRCOG (UK)", "Membership of the Royal College of Obstetricians and Gynaecologists, United Kingdom"],
                  ["DNB (OBGY)", "Diplomate of National Board in Obstetrics and Gynaecology"],
                  ["DGO", "Diploma in Gynaecology and Obstetrics"],
                  ["MBBS", `Bachelor of Medicine and Bachelor of Surgery, ${doctor.alumniOf}`],
                  ["Registration", `${doctor.registration.council} — ${doctor.registration.number}`],
                  ["Experience", `${doctor.experience.totalYears} years overall, ${doctor.experience.specialistYears} years as a specialist`],
                  ["Languages", doctor.languages.join(", ")],
                ].map(([term, detail]) => (
                  <div key={term} className="px-6 py-4 sm:flex sm:gap-6">
                    <dt className="font-bold text-[#1E293B] text-[15px] sm:w-40 shrink-0">{term}</dt>
                    <dd className="text-[15px] text-[#475569]">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                What she treats
              </h2>
              <div className="space-y-5">
                {serviceCategories.map((c) => (
                  <div key={c.id}>
                    <h3 className="font-bold text-[#1E293B] mb-2">{c.title}</h3>
                    <p className="text-[15px] text-[#475569] leading-relaxed mb-2">{c.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {c.slugs.map((slug) => (
                        <li key={slug}>
                          <Link
                            to={`/services/${slug}`}
                            className="inline-block text-[13px] font-medium text-[#9771e3] bg-[#9771e3]/10 hover:bg-[#9771e3] hover:text-white px-3 py-1.5 rounded-full transition-colors"
                          >
                            {servicesData[slug].title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                Hospital attachments
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed mb-4">
                Deliveries and surgery are carried out at four Mumbai hospitals, which means most
                patients across the western suburbs and Navi Mumbai can be treated near home.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {hospitals.map((h) => (
                  <li
                    key={h.id}
                    className="bg-white rounded-xl border border-[#9771e3]/10 px-5 py-4 text-[15px]"
                  >
                    <span className="font-bold text-[#1E293B] block">{h.name}</span>
                    <span className="text-[#475569]">{h.area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-[#9771e3] rounded-3xl p-7 text-white shadow-xl">
              <h2 className="font-serif text-xl font-bold mb-3">Book a consultation</h2>
              <p className="text-white/85 text-[14px] mb-5 leading-relaxed">
                {openingHours.display}
                <br />
                {clinic.streetAddress}, {clinic.locality}
              </p>
              <a
                href={contact.phoneHref}
                className="block text-center w-full bg-white text-[#9771e3] py-3.5 rounded-xl font-bold mb-3 hover:bg-gray-50 transition-colors"
              >
                {contact.phoneDisplay}
              </a>
              <button
                onClick={() => openBooking({ context: "About page" })}
                className="w-full border-2 border-white/40 hover:border-white text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                Request an appointment
              </button>
              <p className="text-[12px] text-white/70 mt-5">
                Profiles:{" "}
                <a href={profiles.practo} target="_blank" rel="noreferrer" className="underline">
                  Practo
                </a>{" "}
                ·{" "}
                <a href={profiles.google[0]} target="_blank" rel="noreferrer" className="underline">
                  Google
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
