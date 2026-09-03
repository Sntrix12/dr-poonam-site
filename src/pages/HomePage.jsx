import { Link } from "react-router-dom";
import {
  clinic,
  contact,
  doctor,
  hospitals,
  openingHours,
  stats,
} from "../data/practice.js";
import { serviceCategories, servicesData } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";
import { allFaqs } from "../data/faqs.js";
import Layout from "../components/Layout.jsx";
import Reveal from "../components/Reveal.jsx";
import DoctorPortrait from "../components/DoctorPortrait.jsx";
import { openWhatsApp, useBooking } from "../components/Booking.jsx";

function ServiceCategoryCard({ category, delay }) {
  const first = category.slugs[0];
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex flex-col h-full overflow-hidden rounded-[2rem] bg-white border border-[#9771e3]/20 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group">
        <Link to={`/services/${first}`} className="h-48 w-full overflow-hidden relative block">
          <img
            src={category.image}
            alt={`${category.title} — ${servicesData[first].title} in Mumbai`}
            width="600"
            height="400"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <h3 className="absolute bottom-4 left-6 font-serif text-[20px] sm:text-[22px] font-bold text-white leading-tight">
            {category.title}
          </h3>
        </Link>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{category.shortDescription}</p>
          <ul className="space-y-3 mt-auto pt-4 border-t border-gray-100">
            {category.slugs.map((slug) => (
              <li key={slug}>
                <Link
                  to={`/services/${slug}`}
                  className="flex items-start gap-3 text-[14px] font-medium text-[#9771e3] hover:text-[#835bc4] hover:underline transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9771e3] mt-[6px] shrink-0" aria-hidden="true" />
                  <span>{servicesData[slug].title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  const { openBooking } = useBooking();
  const featured = testimonials.slice(0, 3);
  const homeFaqs = allFaqs.slice(0, 5);

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#9771e3] flex items-center">
        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Gynaecologist &amp; Obstetrician in Mumbai
              </h1>
              <p className="mt-4 text-2xl sm:text-3xl font-semibold text-white">{doctor.name}</p>
              <p className="mt-2 text-[12px] sm:text-[13px] font-bold tracking-widest text-white/80 uppercase">
                {doctor.credentialsList.join(" • ")}
              </p>

              <p className="mt-6 text-sm sm:text-[17px] leading-relaxed text-white/90">
                Dr. Poonam Nautiyal is a Senior Consultant Gynaecologist and Obstetrician
                practising in Mumbai, with {doctor.experience.summary}. She looks after pregnancy
                from planning through delivery, treats PCOS, period problems, fibroids and
                infertility, performs keyhole gynaecological surgery, and sees women through
                menopause. Consultations run {openingHours.display.replace("Mon–Sat: ", "Monday to Saturday, ")} in {clinic.locality},
                in {doctor.languages.slice(0, -1).join(", ")} or {doctor.languages.slice(-1)}.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => openBooking()}
                  className="bg-white text-[#9771e3] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Book a consultation
                </button>
                <a
                  href={contact.phoneHref}
                  className="border border-white/60 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-center"
                >
                  Call {contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white/25 bg-white/10">
                <DoctorPortrait priority className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credibility strip ── */}
      <section aria-label="At a glance" className="bg-white border-b border-[#9771e3]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
                via {s.source}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-[#9771e3]/10 px-5 py-2 text-xs font-bold tracking-widest text-[#9771e3] uppercase">
              Areas of care
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#9771e3] sm:text-4xl md:text-5xl">
              What Dr. Nautiyal treats
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[16px] text-[#475569] leading-relaxed">
              Care for every stage — from a teenager's first visit and planning a baby, through
              pregnancy and delivery, to fibroids, fertility and menopause.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 items-stretch">
            {serviceCategories.map((c, i) => (
              <ServiceCategoryCard key={c.id} category={c} delay={i * 0.12} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-block border-2 border-[#9771e3] text-[#9771e3] hover:bg-[#9771e3] hover:text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              See all 11 services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hospitals / locations ── */}
      <section id="locations" className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#9771e3] mb-3">
              Where you can see her in Mumbai
            </h2>
            <p className="max-w-2xl mx-auto text-[15px] text-[#475569] leading-relaxed">
              Consultations are held in {clinic.locality}, and Dr. Nautiyal is attached to four
              Mumbai hospitals for deliveries and surgery — so most patients across the western
              suburbs and Navi Mumbai have somewhere close to home.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {hospitals.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-[#9771e3]/10 hover:shadow-xl transition-all flex flex-col items-center"
              >
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <img
                    src={h.logo}
                    alt={`${h.name}, ${h.area}`}
                    width="120"
                    height="80"
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-gray-800 text-center text-sm">{h.name}</h3>
                <p className="text-xs text-gray-500 mb-4 text-center">{h.area}</p>
                <div className="mt-auto w-full flex flex-col gap-2">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        `Hi Dr. Poonam, can I book an appointment at ${h.name}, ${h.area}?`,
                      )
                    }
                    className="w-full bg-[#9771e3]/10 text-[#9771e3] hover:bg-[#9771e3] hover:text-white py-2 rounded-lg text-xs font-bold transition-colors"
                  >
                    Book here
                  </button>
                  <a
                    href={h.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-700 underline"
                  >
                    View on map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#9771e3] mb-3">What patients say</h2>
            <p className="text-[15px] text-[#475569]">
              Reviews published on her Practo and Google profiles.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((t) => (
              <Reveal key={t.name} delay={0.08} className="h-full">
                <figure className="h-full bg-[#FAFAFF] rounded-3xl p-6 border border-[#9771e3]/10 flex flex-col">
                  <blockquote className="text-gray-700 text-sm italic leading-relaxed flex-grow">
                    “{t.pullQuote}”
                  </blockquote>
                  <figcaption className="border-t border-gray-200 pt-4 mt-5 text-xs">
                    <span className="font-bold text-gray-900 block">{t.name}</span>
                    <span className="text-gray-500">
                      {t.visitedFor[0]} · {t.source}, {t.date}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="font-bold text-[#9771e3] hover:underline">
              Read all patient reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-[#FAFAFF] border-t border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl font-bold text-[#9771e3] mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-6">
            {homeFaqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-2xl border border-[#9771e3]/10">
                <h3 className="font-bold text-[#1E293B] text-[16px] mb-2">{f.q}</h3>
                <p className="text-[#475569] text-[15px] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/faqs" className="font-bold text-[#9771e3] hover:underline">
              See all questions →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
