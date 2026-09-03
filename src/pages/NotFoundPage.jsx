import { Link } from "react-router-dom";
import { contact } from "../data/practice.js";
import { servicesData, serviceSlugs } from "../data/services.js";
import Layout from "../components/Layout.jsx";

export default function NotFoundPage() {
  return (
    <Layout className="bg-[#FAFAFF]">
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#9771e3] mb-4">
          We couldn't find that page
        </h1>
        <p className="text-[16px] text-[#475569] leading-relaxed mb-8">
          The link may be out of date. You can browse the services below, or call{" "}
          <a href={contact.phoneHref} className="font-bold text-[#9771e3]">
            {contact.phoneDisplay}
          </a>{" "}
          and we will point you in the right direction.
        </p>
        <ul className="flex flex-wrap justify-center gap-2 mb-10">
          {serviceSlugs.map((slug) => (
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
        <Link
          to="/"
          className="inline-block bg-[#9771e3] hover:bg-[#835bc4] text-white px-8 py-3 rounded-full font-bold transition-colors"
        >
          Back to home
        </Link>
      </section>
    </Layout>
  );
}
