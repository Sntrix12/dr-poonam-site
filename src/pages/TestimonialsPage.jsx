import { useState } from "react";
import { contact, doctor, profiles, stats } from "../data/practice.js";
import { testimonials } from "../data/testimonials.js";
import Layout from "../components/Layout.jsx";
import { openWhatsApp } from "../components/Booking.jsx";

const SOURCES = ["All", "Practo", "Google"];

/**
 * Reviews are shown verbatim with the source named and linked. They are deliberately
 * not marked up as Review/aggregateRating structured data — see src/seo/schema.js.
 */
export default function TestimonialsPage() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const shown =
    filter === "All" ? testimonials : testimonials.filter((t) => t.source === filter);

  return (
    <Layout className="bg-gray-50">
      <section className="bg-[#9771e3] text-white py-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Patient reviews of {doctor.name}
          </h1>
          <p className="text-white/90 text-[15px] sm:text-base leading-relaxed">
            These reviews are published on Dr. Nautiyal's public Practo and Google profiles and
            are reproduced here word for word. Many describe pregnancies that were not
            straightforward — preeclampsia, twins, a delivery after a previous loss — and several
            were written years after the birth.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={profiles.practoReviews}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#9771e3] px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors"
            >
              See her Practo profile
            </a>
            <a
              href={profiles.google[0]}
              target="_blank"
              rel="noreferrer"
              className="bg-white/15 border border-white/40 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-white/25 transition-colors"
            >
              See her Google reviews
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#9771e3]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#9771e3]">{s.value}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">{s.label}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-gray-400 hover:text-[#9771e3] underline"
              >
                as listed on {s.source}
              </a>
            </div>
          ))}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex justify-center gap-3 mb-10">
          {SOURCES.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              aria-pressed={filter === tab}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                filter === tab
                  ? "bg-[#9771e3] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#9771e3]"
              }`}
            >
              {tab === "All" ? "All reviews" : `${tab} reviews`}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {shown.map((t) => {
            const isOpen = expanded === t.name;
            const isLong = t.text.length > 320;
            return (
              <figure
                key={t.name}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="flex text-yellow-400" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </span>
                  <span className="text-[11px] font-extrabold uppercase px-3 py-1 bg-[#9771e3]/10 text-[#9771e3] rounded-full">
                    {t.source}
                  </span>
                </div>

                <blockquote
                  className={`text-gray-700 text-sm leading-relaxed whitespace-pre-line ${
                    isLong && !isOpen ? "line-clamp-6" : ""
                  }`}
                >
                  {t.text}
                </blockquote>

                {isLong && (
                  <button
                    onClick={() => setExpanded(isOpen ? null : t.name)}
                    className="self-start mt-3 text-xs font-bold text-[#9771e3] hover:underline"
                  >
                    {isOpen ? "Show less" : "Read the full review"}
                  </button>
                )}

                <figcaption className="border-t border-gray-100 pt-4 mt-5 flex justify-between items-end gap-3">
                  <div className="min-w-0">
                    <span className="font-bold text-gray-900 text-sm block">{t.name}</span>
                    <span className="text-xs text-gray-500 block">{t.visitedFor.join(" · ")}</span>
                  </div>
                  <span className="text-[11px] text-gray-400 shrink-0">{t.date}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-white rounded-3xl border border-[#9771e3]/10 p-8">
          <h2 className="font-serif text-2xl font-bold text-[#9771e3] mb-3">
            Were you treated by Dr. Nautiyal?
          </h2>
          <p className="text-[15px] text-[#475569] mb-6 max-w-xl mx-auto">
            Reviews genuinely help other women decide, particularly those searching after a
            difficult experience elsewhere. Leaving one on her Google listing takes a minute.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={profiles.google[0]}
              target="_blank"
              rel="noreferrer"
              className="bg-[#9771e3] hover:bg-[#835bc4] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
            >
              Leave a Google review
            </a>
            <button
              onClick={() => openWhatsApp("Hello Dr. Poonam, I would like to share my feedback.")}
              className="border-2 border-[#9771e3] text-[#9771e3] hover:bg-[#9771e3] hover:text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
            >
              Send feedback on WhatsApp
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Questions before booking? Call{" "}
            <a href={contact.phoneHref} className="font-bold text-[#9771e3]">
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
