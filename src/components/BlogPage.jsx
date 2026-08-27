import { motion } from "framer-motion";

/* ───────────── Premium Footer Section (Matches other pages) ───────────── */
function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 text-[#9771e3] border-t border-[#9771e3]/20 mt-20">
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

/* ───────────── Main Blog Page Component ───────────── */
export default function BlogPage() {
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
          <a href="/#blog-page" className="text-[15px] font-bold text-[#9771e3] transition-colors">Blogs</a>
          <a href="/#services-page" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Services</a>
          <a href="/#faqs" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">FAQ's</a>
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

      {/* ── Blog Header Banner ── */}
      <section className="bg-[#9771e3] py-16 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-3">
              Health & Wellness Blog
            </h1>
            <p className="text-white/80 text-[16px] max-w-lg">
              Expert insights, medical updates, and practical advice for every stage of your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main Blog Layout ── */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Main Content Area (Empty State) */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#9771e3]/10 p-12 text-center flex flex-col items-center justify-center min-h-[400px] shadow-sm"
            >
              <div className="w-20 h-20 bg-[#9771e3]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#9771e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1E293B] mb-3">
                Articles Coming Soon
              </h3>
              <p className="text-[#475569] max-w-md mx-auto leading-relaxed">
                Dr. Poonam Nautiyal is currently preparing insightful articles on women's health, maternity care, and wellness. Please check back shortly for our latest updates.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: Sidebar Scaffolding */}
          <aside className="w-full lg:w-[350px] shrink-0 space-y-8">
            
            {/* Categories Widget */}
            <div className="bg-white rounded-2xl border border-[#9771e3]/10 p-8 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-[#1E293B] mb-6 pb-4 border-b border-[#9771e3]/10">
                Categories
              </h4>
              <ul className="space-y-4">
                {['Maternity & Pregnancy', 'Gynaecological Health', 'PCOS & Hormones', 'Surgical Procedures', 'Wellness & Lifestyle'].map((category, idx) => (
                  <li key={idx}>
                    <a href="#" className="flex items-center text-[15px] font-medium text-[#475569] hover:text-[#9771e3] transition-colors group">
                      <svg className="w-4 h-4 mr-3 text-[#9771e3]/50 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Placeholder Widget */}
            <div className="bg-white rounded-2xl border border-[#9771e3]/10 p-8 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-[#1E293B] mb-6 pb-4 border-b border-[#9771e3]/10">
                Recent Posts
              </h4>
              <div className="flex flex-col gap-4 text-center py-6">
                <span className="text-[14px] text-[#475569] italic">No recent posts available.</span>
              </div>
            </div>

          </aside>

        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}