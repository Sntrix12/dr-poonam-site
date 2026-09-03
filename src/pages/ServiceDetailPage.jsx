import { Link, useParams } from "react-router-dom";
import { clinic, contact, doctor, openingHours } from "../data/practice.js";
import { servicesData } from "../data/services.js";
import { testimonialForService } from "../data/testimonials.js";
import Layout from "../components/Layout.jsx";
import { useBooking } from "../components/Booking.jsx";
import NotFoundPage from "./NotFoundPage.jsx";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug];
  const { openBooking } = useBooking();

  if (!service) return <NotFoundPage />;

  const review = testimonialForService(slug);
  const related = (service.relatedSlugs || []).filter((s) => servicesData[s]);

  return (
    <Layout className="bg-[#FAFAFF]">
      {/* ── Answer-first hero. The summary paragraph is the block answer engines lift. ── */}
      <section className="bg-[#1E293B] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#9771e3] opacity-20 mix-blend-multiply" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/60">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link to="/services" className="hover:text-white">Services</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white/90">{service.title}</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {service.title} in Mumbai
            </h1>
            <p className="text-lg text-white/90 leading-relaxed border-l-4 border-[#9771e3] pl-6">
              {service.aeoSummary}
            </p>
            {service.alsoKnownAs?.length > 0 && (
              <p className="mt-5 text-sm text-white/60">
                Also searched as: {service.alsoKnownAs.join(", ")}
              </p>
            )}
          </div>
          <div className="flex-1 w-full max-w-md hidden md:block">
            <img
              src={service.image}
              alt={`${service.title} in Mumbai — ${doctor.name}`}
              width="1200"
              height="900"
              className="rounded-2xl shadow-2xl object-cover aspect-[4/3] border-4 border-white/10"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 space-y-12 min-w-0">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#9771e3] mb-5">
              What {service.title.toLowerCase()} involves
            </h2>
            <p className="text-[17px] text-[#475569] leading-relaxed">{service.detailedContent}</p>
          </div>

          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#9771e3]/10 shadow-sm">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E293B] mb-6">
              What this includes
            </h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4 text-[16px] text-[#475569]">
                  <span
                    className="w-6 h-6 rounded-full bg-[#9771e3]/10 flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#9771e3]" />
                  </span>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {review && (
            <figure className="bg-[#9771e3]/8 border-l-4 border-[#9771e3] rounded-r-2xl p-6 sm:p-7">
              <blockquote className="text-[16px] text-[#334155] italic leading-relaxed">
                “{review.pullQuote}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-[#64748B]">
                <span className="font-bold text-[#1E293B]">{review.name}</span> — {review.source},{" "}
                {review.date}
              </figcaption>
            </figure>
          )}

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-xl border border-[#9771e3]/10 shadow-sm">
                  <h3 className="font-bold text-[#1E293B] text-[17px] mb-2">{faq.q}</h3>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-5">Related care</h2>
              <ul className="grid sm:grid-cols-3 gap-4">
                {related.map((s) => (
                  <li key={s}>
                    <Link
                      to={`/services/${s}`}
                      className="block h-full bg-white rounded-xl border border-[#9771e3]/10 p-5 hover:border-[#9771e3] transition-colors"
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
            </div>
          )}
        </div>

        <aside className="w-full lg:w-[360px] shrink-0">
          <div className="sticky top-28 bg-[#9771e3] rounded-3xl p-7 text-white shadow-xl">
            <h2 className="font-serif text-xl font-bold mb-3">Book a consultation</h2>
            <p className="text-white/85 text-[14px] mb-5 leading-relaxed">
              {doctor.name}, {doctor.credentials}.<br />
              {openingHours.display}
              <br />
              {clinic.locality}, {clinic.city}
            </p>
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center w-full bg-white text-[#9771e3] py-3.5 rounded-xl font-bold text-lg mb-3 hover:bg-gray-50 transition-colors"
            >
              {contact.phoneDisplay}
            </a>
            <button
              onClick={() => openBooking({ context: service.title })}
              className="w-full border-2 border-white/40 hover:border-white text-white py-3.5 rounded-xl font-bold transition-colors"
            >
              Ask about {service.title.toLowerCase()}
            </button>
          </div>
        </aside>
      </section>
    </Layout>
  );
}
