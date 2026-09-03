import { Link } from "react-router-dom";
import { clinic, doctor, openingHours } from "../data/practice.js";
import { serviceCategories, servicesData } from "../data/services.js";
import Layout from "../components/Layout.jsx";
import Reveal from "../components/Reveal.jsx";
import { useBooking } from "../components/Booking.jsx";

export default function ServicesPage() {
  const { openBooking } = useBooking();

  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#9771e3] sm:text-4xl md:text-5xl mb-6">
            Gynaecology &amp; maternity services in Mumbai
          </h1>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            Dr. Poonam Nautiyal offers eleven areas of care across pregnancy, gynaecological
            surgery and women's health, from a first visit in your teens to life after menopause.
            Consultations are held in {clinic.locality}, {openingHours.display.replace("Mon–Sat: ", "Monday to Saturday, ")},
            with surgery and deliveries at four Mumbai hospitals.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
          {serviceCategories.map((category, index) => (
            <Reveal
              key={category.id}
              className={`flex flex-col gap-10 lg:gap-14 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center`}
            >
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-[#9771e3]/10 bg-white">
                  <img
                    src={category.image}
                    alt={`${category.title} in Mumbai — ${doctor.name}`}
                    width="1200"
                    height="900"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 w-full lg:px-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#9771e3] mb-4">
                  {category.title}
                </h2>
                <p className="text-[17px] text-[#475569] leading-relaxed mb-7">
                  {category.description}
                </p>
                <div className="w-full h-px bg-[#9771e3]/10 mb-7" />
                <ul className="space-y-4">
                  {category.slugs.map((slug) => (
                    <li key={slug}>
                      <Link to={`/services/${slug}`} className="group block">
                        <span className="flex items-center gap-3 text-[17px] font-semibold text-[#9771e3] group-hover:text-[#835bc4]">
                          <span className="w-2 h-2 rounded-full bg-[#9771e3] shrink-0" aria-hidden="true" />
                          <span className="group-hover:underline">{servicesData[slug].title}</span>
                        </span>
                        <span className="block pl-5 mt-1 text-[14px] text-[#64748B] leading-snug">
                          {servicesData[slug].aeoSummary.split(". ")[0]}.
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#835bc4] py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-[28px] font-bold text-white mb-2 leading-tight">
              Want a second opinion?
            </h2>
            <p className="text-white/90 text-[15px] sm:text-[16px] max-w-xl">
              If you have been told you need surgery and are not sure, bring your scans and
              reports. Sometimes the answer is that the operation can be avoided.
            </p>
          </div>
          <button
            onClick={() => openBooking({ title: "Request a second opinion", context: "Second opinion" })}
            className="shrink-0 border border-white bg-transparent hover:bg-white hover:text-[#835bc4] text-white text-[13px] tracking-wider font-bold py-3.5 px-8 rounded transition-colors"
          >
            ASK DR. NAUTIYAL
          </button>
        </div>
      </section>
    </Layout>
  );
}
