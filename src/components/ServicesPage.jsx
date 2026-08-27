import { motion } from "framer-motion";

/* ───────────── Custom Lavender Icons ───────────── */
const Icons = {
  Pregnancy: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#9771e3]" fill="none" stroke="currentColor">
      <circle cx="12" cy="5" r="2.5" strokeWidth="1.5" />
      <path d="M12 10c-3 0-5.5 2.5-5.5 5.5v2.5c0 1.5 1.5 3 3.5 3h4c2 0 3.5-1.5 3.5-3v-2.5C17.5 12.5 15 10 12 10z" strokeWidth="1.5" />
      <path d="M12 17.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="currentColor" />
    </svg>
  ),
  Surgery: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#9771e3]" fill="none" stroke="currentColor">
      <path d="M7 17L17 7" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 17L7 7" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5" cy="19" r="2.5" strokeWidth="1.5" />
      <circle cx="19" cy="19" r="2.5" strokeWidth="1.5" />
      <path d="M11 3h2M12 2v2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Holistic: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#9771e3]" fill="none" stroke="currentColor">
      <path d="M7 4v4c0 2.8 2.2 5 5 5s5-2.2 5-5V4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 4h4M15 4h4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 13v6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="20" r="2" strokeWidth="1.5" />
    </svg>
  )
};

/* ───────────── Updated Data (Now with Links!) ───────────── */
const serviceCategories = [
  {
    id: "maternity",
    title: "Maternity & Pregnancy",
    description: "Comprehensive care for you and your baby, from early family planning to expert monitoring of high-risk pregnancies and safe, comfortable deliveries.",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop", 
    Icon: Icons.Pregnancy,
    items: [
      { name: "Pre Pregnancy Counselling", link: "#service/pre-pregnancy-counselling" },
      { name: "High Risk Pregnancies", link: "#service/high-risk-pregnancies" },
      { name: "Normal Vaginal Deliveries", link: "#service/normal-vaginal-deliveries" }
    ]
  },
  {
    id: "surgical",
    title: "Advanced Surgical Care",
    description: "State-of-the-art minimally invasive procedures focusing on faster recovery, minimal scarring, and precision treatment for complex gynaecological conditions.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    Icon: Icons.Surgery,
    items: [
      { name: "Laparoscopy", link: "#service/laparoscopy" },
      { name: "Gynaecological Surgeries", link: "#service/gynaecological-surgeries" },
      { name: "Safe Abortions", link: "#service/safe-abortions" }
    ]
  },
  {
    id: "holistic",
    title: "Holistic Health & Wellness",
    description: "Integrative wellness solutions addressing hormonal balance, reproductive health, preventive screenings, and smooth transitions through menopause.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    Icon: Icons.Holistic,
    items: [
      { name: "Obstetrics & Gynaecology", link: "#service/obstetrics-and-gynaecology" },
      { name: "PCOS Management", link: "#service/pcos-management" },
      { name: "Infertility Treatment", link: "#service/infertility-treatment" },
      { name: "Menopausal Counselling", link: "#service/menopausal-counselling" },
      { name: "Cervical Cancer Vaccine", link: "#service/cervical-cancer-vaccine" }
    ]
  }
];

/* ───────────── Second Opinion Banner ───────────── */
function SecondOpinionBanner() {
  return (
    <div className="w-full bg-[#835bc4] py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 text-center sm:text-left">
          <svg viewBox="0 0 24 24" className="w-16 h-16 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M7 3h10v4H7z" />
            <path d="M9 5h6" />
            <path d="M14 15h.01" strokeWidth="2" />
            <path d="M17 15h.01" strokeWidth="2" />
          </svg>
          <div>
            <h3 className="text-2xl sm:text-[28px] font-bold text-white mb-2 leading-tight">Need Trusted Second Opinion?</h3>
            <p className="text-white/90 text-[15px] sm:text-[16px]">Not sure about your diagnosis or treatment plan? We're here to help.</p>
          </div>
        </div>
        <a href="#contact" className="shrink-0 border border-white bg-transparent hover:bg-white hover:text-[#835bc4] text-white text-[13px] tracking-wider font-bold py-3.5 px-8 rounded transition-colors duration-300">
          MESSAGE US
        </a>
      </div>
    </div>
  );
}

/* ───────────── Premium Footer ───────────── */
function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 text-[#9771e3] border-t border-[#9771e3]/20">
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

/* ───────────── Main Page Component ───────────── */
export default function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

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
          <a href="/#services-page" className="text-[15px] font-bold text-[#9771e3] transition-colors">Services</a>
          <a href="/#faqs-page" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">FAQ's</a>
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

      {/* ── Page Header ── */}
      <section className="bg-white py-16 border-b border-[#9771e3]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-serif text-4xl font-bold text-[#9771e3] sm:text-5xl md:text-6xl mb-6">
            Our <span className="text-[#1E293B]">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[16px] text-[#475569] leading-relaxed">
            Comprehensive women’s healthcare designed with compassion, precision, and a commitment to your lifelong well-being.
          </p>
        </div>
      </section>

      {/* ── Focused Service Categories ── */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-24">
          
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`flex flex-col gap-10 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-[#9771e3]/10 bg-white">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Content Side (Text & Bullets) */}
              <div className="flex-1 w-full lg:px-8 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-[#9771e3]/10 flex items-center justify-center mb-6">
                  <category.Icon />
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#9771e3] mb-4">
                  {category.title}
                </h2>
                
                <p className="text-[17px] text-[#475569] leading-relaxed mb-8">
                  {category.description}
                </p>
                
                <div className="w-full h-px bg-[#9771e3]/10 mb-8"></div>
                
                {/* The Bullet Points - Now Clickable! */}
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-[17px] font-medium text-[#9771e3]">
                      <div className="w-2 h-2 rounded-full bg-[#9771e3] shrink-0"></div>
                      <a href={item.link} className="leading-snug hover:text-[#835bc4] hover:underline transition-all">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Second Opinion Banner ── */}
      <SecondOpinionBanner />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}