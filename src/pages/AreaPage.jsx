import { Link } from "react-router-dom";
import { contact, doctor, hospitals, openingHours } from "../data/practice.js";
import { getArea } from "../data/areas.js";
import { servicesData } from "../data/services.js";
import Layout from "../components/Layout.jsx";
import { useBooking } from "../components/Booking.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

/**
 * A location page, anchored on the hospital Dr. Nautiyal attends in that area.
 *
 * Two blocks were deliberately removed: a patient review, which appeared verbatim on
 * all four of these URLs (testimonials belong on /testimonials, once), and the full
 * eleven-service list, which was identical on all four. Both were duplicate content
 * across a set of pages Google had already declined to index.
 */
export default function AreaPage({ slug }) {
  const area = getArea(slug);
  const { openBooking } = useBooking();

  if (!area) return <NotFoundPage />;

  const hospital = hospitals.find((h) => h.id === area.hospitalId);

  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-14 border-b border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#9771e3]">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-700">{area.name}</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#9771e3] mb-5">
            {area.h1}
          </h1>
          <p className="text-[17px] text-[#475569] leading-relaxed">{area.intro}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {area.body.map((para) => (
              <p key={para.slice(0, 48)} className="text-[16px] text-[#475569] leading-relaxed">
                {para}
              </p>
            ))}

            {hospital && (
              <div className="bg-white rounded-2xl border border-[#9771e3]/10 p-6 flex items-center gap-5">
                <img
                  src={hospital.logo}
                  alt={`${hospital.name} logo`}
                  width="64"
                  height="64"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 object-contain shrink-0"
                />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    Hospital attachment
                  </p>
                  <h2 className="font-bold text-[#1E293B] text-[17px]">{hospital.name}</h2>
                  <p className="text-sm text-[#475569] mb-1">
                    {hospital.area}, {hospital.city}
                  </p>
                  <a
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[#9771e3] hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            )}

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                Explore services
              </h2>
              <ul className="space-y-3">
                {area.serviceSlugs.map((s) => (
                  <li key={s}>
                    <Link
                      to={`/services/${s}`}
                      className="block bg-white rounded-xl border border-[#9771e3]/10 p-4 hover:border-[#9771e3] transition-colors"
                    >
                      <span className="font-bold text-[#9771e3] text-[15px] block mb-1">
                        {servicesData[s].title}
                      </span>
                      <span className="text-[13px] text-[#64748B] leading-snug">
                        {servicesData[s].aeoSummary.split(". ")[0]}.
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[15px] text-[#475569]">
                All eleven are listed on the{" "}
                <Link to="/services" className="font-semibold text-[#9771e3] hover:underline">
                  services page
                </Link>
                .
              </p>
            </div>
          </div>

          <aside>
            <div className="sticky top-28 bg-[#9771e3] rounded-3xl p-7 text-white shadow-xl">
              <h2 className="font-serif text-xl font-bold mb-4">
                {hospital ? `Ask about ${hospital.name}` : `Ask about ${area.name}`}
              </h2>
              <p className="text-white/85 text-[14px] mb-5 leading-relaxed">
                {doctor.name}
                <br />
                {doctor.credentials}
                <br />
                {openingHours.display}
              </p>
              <a
                href={contact.phoneHref}
                className="block text-center w-full bg-white text-[#9771e3] py-3.5 rounded-xl font-bold mb-3 hover:bg-gray-50 transition-colors"
              >
                {contact.phoneDisplay}
              </a>
              <button
                onClick={() =>
                  openBooking({
                    title: hospital ? `Appointment — ${hospital.name}` : "Book an appointment",
                    context: hospital ? `${hospital.name}, ${hospital.area}` : area.name,
                  })
                }
                className="w-full border-2 border-white/40 hover:border-white text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                Request an appointment
              </button>
              <p className="text-[12px] text-white/70 mt-5 leading-relaxed">
                <Link to="/contact" className="underline">
                  All locations and hours
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
