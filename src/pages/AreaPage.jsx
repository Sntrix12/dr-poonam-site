import { Link } from "react-router-dom";
import { contact, doctor, hospitals, openingHours, clinic } from "../data/practice.js";
import { getArea } from "../data/areas.js";
import { servicesData, serviceSlugs } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import Layout from "../components/Layout.jsx";
import { useBooking } from "../components/Booking.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

/** The slug is passed as a prop: each area has its own literal route, not a :param. */
export default function AreaPage({ slug }) {
  const area = getArea(slug);
  const { openBooking } = useBooking();

  if (!area) return <NotFoundPage />;

  const hospital = hospitals.find((h) => h.id === area.hospitalId);
  const review = testimonials[0];

  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-14 border-b border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-[#9771e3]">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-gray-700">Gynaecologist in {area.name}</span>
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
              <p key={para.slice(0, 40)} className="text-[16px] text-[#475569] leading-relaxed">
                {para}
              </p>
            ))}

            {hospital && (
              <div className="bg-white rounded-2xl border border-[#9771e3]/10 p-6 flex items-center gap-5">
                <img
                  src={hospital.logo}
                  alt={`${hospital.name}, ${hospital.area}`}
                  width="72"
                  height="72"
                  loading="lazy"
                  className="w-16 h-16 object-contain shrink-0"
                />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    Hospital in {area.name}
                  </p>
                  <h2 className="font-bold text-[#1E293B] text-[17px]">{hospital.name}</h2>
                  <a
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[#9771e3] hover:underline"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            )}

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-3">
                Also serving nearby
              </h2>
              <p className="text-[16px] text-[#475569] leading-relaxed">
                Patients travel to this location from {area.nearbyAreas.slice(0, -1).join(", ")} and{" "}
                {area.nearbyAreas.slice(-1)}.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-4">
                Services available
              </h2>
              <ul className="flex flex-wrap gap-2">
                {serviceSlugs.map((s) => (
                  <li key={s}>
                    <Link
                      to={`/services/${s}`}
                      className="inline-block text-[13px] font-medium text-[#9771e3] bg-[#9771e3]/10 hover:bg-[#9771e3] hover:text-white px-3 py-1.5 rounded-full transition-colors"
                    >
                      {servicesData[s].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <figure className="bg-white border-l-4 border-[#9771e3] rounded-r-2xl p-6">
              <blockquote className="text-[16px] text-[#334155] italic leading-relaxed">
                “{review.pullQuote}”
              </blockquote>
              <figcaption className="mt-3 text-sm text-[#64748B]">
                <span className="font-bold text-[#1E293B]">{review.name}</span> — {review.source},{" "}
                {review.date}
              </figcaption>
            </figure>
          </div>

          <aside>
            <div className="sticky top-28 bg-[#9771e3] rounded-3xl p-7 text-white shadow-xl">
              <h2 className="font-serif text-xl font-bold mb-4">Book in {area.name}</h2>
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
                onClick={() => openBooking({ context: `${area.name} enquiry` })}
                className="w-full border-2 border-white/40 hover:border-white text-white py-3.5 rounded-xl font-bold transition-colors"
              >
                Request an appointment
              </button>
              <p className="text-[12px] text-white/70 mt-5 leading-relaxed">
                Consulting clinic: {clinic.streetAddress}, {clinic.locality}.{" "}
                <Link to="/contact" className="underline">
                  All locations
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
