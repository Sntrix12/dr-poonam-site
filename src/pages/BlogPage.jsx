import { Link } from "react-router-dom";
import { contact } from "../data/practice.js";
import { faqData } from "../data/faqs.js";
import Layout from "../components/Layout.jsx";

/**
 * No articles are published yet, so this route is marked noindex in src/seo/routes.js
 * and kept out of the sitemap. A page of placeholders is a thin-content signal; it
 * should go into the index only once there is something real on it.
 */
export default function BlogPage() {
  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="bg-[#9771e3] py-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Women's health articles
          </h1>
          <p className="text-white/85 text-[16px]">
            Articles on pregnancy, PCOS, surgery and menopause are being written.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-[#1E293B] mb-4">
            Nothing published yet
          </h2>
          <p className="text-[#475569] leading-relaxed mb-8">
            In the meantime, the questions patients ask most often are answered in full on the
            FAQ page, and each service page covers its topic in detail — what a condition is, how
            it is treated, and what recovery actually looks like.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Link
              to="/faqs"
              className="bg-[#9771e3] hover:bg-[#835bc4] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
            >
              Read the FAQs
            </Link>
            <Link
              to="/services"
              className="border-2 border-[#9771e3] text-[#9771e3] hover:bg-[#9771e3] hover:text-white px-6 py-3 rounded-full font-bold text-sm transition-colors"
            >
              Browse services
            </Link>
          </div>

          <div className="text-left bg-white rounded-2xl border border-[#9771e3]/10 p-7">
            <h3 className="font-bold text-[#1E293B] mb-4">Popular questions</h3>
            <ul className="space-y-3">
              {faqData
                .flatMap((s) => s.questions)
                .slice(0, 6)
                .map((q) => (
                  <li key={q.q}>
                    <Link to="/faqs" className="text-[15px] text-[#9771e3] hover:underline">
                      {q.q}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Have a question that is not answered anywhere?{" "}
            <a href={contact.phoneHref} className="font-bold text-[#9771e3]">
              {contact.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
