import { useState } from "react";
import { Link } from "react-router-dom";
import { contact } from "../data/practice.js";
import { faqData } from "../data/faqs.js";
import Layout from "../components/Layout.jsx";

/**
 * Answers render as real text in the HTML whether or not the accordion is open.
 * Collapsing is done with CSS height, not by omitting the element — content that
 * only appears after a click is content a crawler may never see.
 */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#9771e3]/10 last:border-0">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="w-full py-5 flex items-start justify-between text-left gap-6 group"
        >
          <span
            className={`text-[17px] font-bold transition-colors ${
              open ? "text-[#9771e3]" : "text-[#1E293B] group-hover:text-[#9771e3]"
            }`}
          >
            {question}
          </span>
          <span
            className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
              open
                ? "bg-[#9771e3] border-[#9771e3] text-white rotate-180"
                : "border-[#9771e3]/30 text-[#9771e3]"
            }`}
            aria-hidden="true"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pr-10 text-[#475569] text-[15px] leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-[#9771e3] sm:text-4xl mb-5">
            Questions patients ask
          </h1>
          <p className="text-[16px] text-[#475569] leading-relaxed">
            Straight answers on booking and fees, pregnancy and delivery, periods and PCOS,
            surgery and second opinions, and routine check-ups. If your question is not here,
            call or WhatsApp{" "}
            <a href={contact.phoneHref} className="font-bold text-[#9771e3]">
              {contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12">
          {faqData.map((section) => (
            <div
              key={section.category}
              className="bg-white rounded-[2rem] border border-[#9771e3]/10 p-7 sm:p-10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-[#9771e3]/10">
                <span className="w-3 h-8 bg-[#9771e3] rounded-full" aria-hidden="true" />
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B]">
                  {section.category}
                </h2>
              </div>
              <div className="flex flex-col">
                {section.questions.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}

          <p className="text-center text-[15px] text-[#475569]">
            Looking for details on a specific treatment?{" "}
            <Link to="/services" className="font-bold text-[#9771e3] hover:underline">
              Browse all services
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
}
