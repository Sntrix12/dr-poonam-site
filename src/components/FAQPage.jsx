import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ───────────── FAQ Data Optimized for SEO & AEO ───────────── */
// Strategy: The first sentence of every answer is a direct, factual response (for AI/Snippets), followed by empathetic elaboration.
const faqData = [
  {
    category: "Appointments & Clinic Info",
    questions: [
      {
        q: "How do I book an appointment with Dr. Poonam Nautiyal in Mumbai?",
        a: "You can book an appointment instantly by calling us at +91 98207 39032, sending a message on WhatsApp, or clicking the 'Appointment' button on this website. Our clinic is located on Andheri-Kurla Road, Mumbai, and we do our best to accommodate urgent consultation requests."
      },
      {
        q: "Does Dr. Nautiyal offer online or video consultations?",
        a: "Yes, Dr. Nautiyal offers comprehensive online consultations via WhatsApp and video calls. This is ideal for second opinions, reviewing lab reports, or follow-up checkups where a physical examination is not strictly necessary."
      },
      {
        q: "Which hospitals is Dr. Nautiyal affiliated with?",
        a: "Dr. Nautiyal is proudly attached to several premium healthcare facilities in Mumbai, including Surya Hospitals, Criticare Hospital, Apollo Hospitals, and Cloudnine Hospital. This ensures you have access to world-class surgical and maternity infrastructure when needed."
      }
    ]
  },
  {
    category: "Maternity & Pregnancy Care",
    questions: [
      {
        q: "When should I schedule my first gynaecologist visit if I think I am pregnant?",
        a: "You should schedule your first visit about 8 weeks after your last menstrual period, or as soon as you get a positive home pregnancy test. Early prenatal care is crucial for confirming the pregnancy viability, estimating your due date, and starting essential prenatal vitamins like folic acid."
      },
      {
        q: "What makes a pregnancy 'high-risk', and how is it managed?",
        a: "A pregnancy is considered high-risk if there are pre-existing medical conditions (like hypertension or diabetes), multiple gestation (twins), or advanced maternal age. Dr. Nautiyal manages these with specialized care protocols, closer monitoring, advanced fetal ultrasounds, and customized nutritional plans to ensure the safety of both mother and baby."
      },
      {
        q: "Do you provide options for painless normal delivery?",
        a: "Absolutely. We strongly support and facilitate painless normal vaginal deliveries using Epidural analgesia. Dr. Nautiyal works closely with expert anaesthetists to ensure a comfortable, safe, and positive birthing experience."
      }
    ]
  },
  {
    category: "Gynaecological Conditions & Surgery",
    questions: [
      {
        q: "What are the early signs of PCOS, and can it be permanently cured?",
        a: "Early signs of Polycystic Ovary Syndrome (PCOS) include irregular periods, unexpected weight gain, severe acne, and excess facial hair. While PCOS cannot be 'cured' permanently, it is highly manageable. We use a holistic approach combining hormonal balancing, lifestyle modifications, and customized medical treatments to eliminate symptoms and protect your fertility."
      },
      {
        q: "How do I know if I need a laparoscopy procedure?",
        a: "Laparoscopy is usually recommended if you are experiencing unexplained pelvic pain, severe endometriosis, recurring ovarian cysts, or if you require fibroid removal (myomectomy). It is a minimally invasive procedure, meaning it involves tiny incisions, minimal scarring, and allows you to return home the same day or the next day."
      },
      {
        q: "Is a hysterectomy a safe surgery?",
        a: "Yes, modern hysterectomies are highly safe, especially when performed using advanced minimally invasive techniques like Total Laparoscopic Hysterectomy (TLH). Dr. Nautiyal focuses on preserving surrounding pelvic structures, ensuring a faster recovery, less pain, and a quick return to your daily life."
      }
    ]
  },
  {
    category: "Preventive Care & Wellness",
    questions: [
      {
        q: "How often should a woman visit a gynaecologist for a routine check-up?",
        a: "We recommend that all women schedule a routine gynaecological check-up once a year. This annual wellness visit is essential for preventive screenings like Pap smears, breast examinations, pelvic checks, and discussing any changes in your menstrual cycle or hormonal health."
      },
      {
        q: "At what age should I get the Cervical Cancer (HPV) vaccine?",
        a: "The HPV vaccine is most effective when given between the ages of 9 and 14, before any sexual activity begins. However, it is still highly recommended and approved for women up to the age of 45. The vaccine is a critical tool in preventing cervical cancer and genital warts."
      }
    ]
  }
];

/* ───────────── Individual FAQ Accordion Component ───────────── */
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#9771e3]/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left focus:outline-none group"
      >
        <h4 className={`text-[17px] font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-[#9771e3]' : 'text-[#1E293B] group-hover:text-[#9771e3]'}`}>
          {question}
        </h4>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#9771e3] border-[#9771e3] text-white rotate-180' : 'border-[#9771e3]/30 text-[#9771e3] group-hover:border-[#9771e3]'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#475569] text-[15px] leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ───────────── Premium Footer ───────────── */
function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 text-[#9771e3] border-t border-[#9771e3]/20">
      {/* ... (Footer content remains exactly the same as your other pages) ... */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="flex flex-col">
            <div className="mb-6">
              <img src="/logo.png" alt="Dr. Poonam Nautiyal Logo" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-[#9771e3]/80 text-[14px] leading-relaxed">
              Dr. Poonam Nautiyal is a highly qualified Consultant Obstetrician & Gynaecologist with over two decades of dedicated service in women’s health, blending international credentials like the prestigious MRCOG (UK) with elite postgraduate training.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#9771e3] tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Hospital Attachments', 'Important Links'].map((link, i) => (
                <li key={i}>
                  <a href={`/#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#9771e3]/80 text-[14px] font-medium transition-colors hover:text-[#9771e3] flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9771e3] opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#9771e3] tracking-wide">Services</h4>
            <ul className="space-y-3">
              {['Obstetrics & Gynaecology', 'High Risk Pregnancies', 'Normal Vaginal Deliveries', 'Safe Abortions', 'Laparoscopy', 'Gynaec Surgeries', 'PCOS Management'].map((service, i) => (
                <li key={i}>
                  <a href="/#services-page" className="text-[#9771e3]/80 text-[14px] font-medium transition-colors hover:text-[#9771e3] flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9771e3] opacity-0 transition-opacity group-hover:opacity-100"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-[#9771e3] tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4 text-[#9771e3]/80 text-[14px]">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#9771e3] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed">
                  <strong className="block text-[#9771e3] mb-1">Dr. Poonam Nautiyal :</strong>
                  Andheri - Kurla Rd, next to holy family church, Gundavali, Andheri East, Mumbai, Maharashtra 400069, India
                </span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <svg className="w-5 h-5 text-[#9771e3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919820739032" className="hover:text-[#9771e3] font-bold transition-colors">+91 9820739032</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#9771e3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:drpoonamnautiyal@gmail.com" className="hover:text-[#9771e3] transition-colors">drpoonamnautiyal@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#9771e3]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#9771e3]/60 text-xs">
            Copyright © {new Date().getFullYear()} Dr. Poonam Nautiyal. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['facebook', 'twitter', 'youtube', 'linkedin'].map((network, i) => (
              <a key={i} href={`#${network}`} className="w-8 h-8 rounded-full bg-[#9771e3]/10 flex items-center justify-center text-[#9771e3] hover:bg-[#9771e3] hover:text-white transition-all">
                <span className="text-xs uppercase font-bold text-center leading-none tracking-tighter">{network.substring(0,2)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────── Main FAQ Page Component ───────────── */
export default function FAQPage() {
  return (
    <main className="w-full font-sans bg-[#FAFAFF] min-h-screen">
      
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#9771e3]/10 shadow-sm px-5 py-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 cursor-pointer shrink-0">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-wide text-[#9771e3] uppercase leading-tight">
              Dr. POONAM NAUTIYAL
            </h1>
            <p className="text-[10px] font-semibold text-[#9771e3]/70 tracking-tight">
              MRCOG (UK), DNB (OBGY), DGO, MBBS
            </p>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <a href="/" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Home</a>
          <a href="/#about" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">About</a>
          <a href="/#blog-page" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Blogs</a>
          <a href="/#services-page" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Services</a>
          <a href="/#faqs-page" className="text-[15px] font-bold text-[#9771e3] transition-colors">FAQ's</a>
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+919820739032" className="flex items-center gap-2 bg-[#9771e3]/10 hover:bg-[#9771e3]/20 text-[#9771e3] px-4 py-2.5 rounded-full font-bold transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-[14px] tracking-wide">+91 98207 39032</span>
          </a>
          <button className="bg-[#9771e3] hover:bg-[#835bc4] text-white flex items-center gap-3 pl-2 pr-6 py-2 rounded-full font-bold shadow-md transition-all hover:shadow-lg transform hover:-translate-y-0.5 group">
            <span className="w-8 h-8 rounded-full bg-white text-[#9771e3] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-[15px] tracking-wide">Appointment</span>
          </button>
        </div>
      </nav>

      {/* ── Header Section ── */}
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#9771e3]/10 px-5 py-2 text-xs font-bold tracking-widest text-[#9771e3] uppercase">
            Patient Support
          </span>
          <h1 className="font-serif text-4xl font-bold text-[#9771e3] sm:text-5xl mb-6">
            Frequently Asked <span className="text-[#1E293B]">Questions</span>
          </h1>
          <p className="text-[16px] text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Find immediate answers to common questions about appointments, maternity care, gynaecological treatments, and general women's health.
          </p>
        </div>
      </section>

      {/* ── FAQ Content Grid ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          
          {faqData.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] border border-[#9771e3]/10 p-8 sm:p-12 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-[#9771e3]/10">
                <div className="w-3 h-8 bg-[#9771e3] rounded-full"></div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E293B]">
                  {section.category}
                </h2>
              </div>
              
              <div className="flex flex-col">
                {section.questions.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}