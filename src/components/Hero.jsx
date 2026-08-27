import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

/* ───────────── Shared Utilities ───────────── */
const DOCTOR_PHONE = "919820739032";

const openWhatsApp = (message) => {
  const url = `https://wa.me/${DOCTOR_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

/* ───────────── Background Effects ───────────── */
function GradientBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[500px] w-[500px] animate-pulse rounded-full opacity-30 mix-blend-screen blur-3xl" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)" }} />
      <div className="absolute -top-20 -right-40 h-[600px] w-[600px] animate-pulse rounded-full opacity-20 mix-blend-screen blur-3xl" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full opacity-10 mix-blend-screen blur-3xl" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)" }} />
    </div>
  );
}

/* ───────────── Reusable Appointment Modal ───────────── */
function AppointmentModal({ isOpen, onClose, title = "Book an Appointment" }) {
  const [formData, setFormData] = useState({ name: "", phone: "", issue: "" });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Dr. Poonam Nautiyal,\n\nI would like to book an appointment.\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Concern/Service:* ${formData.issue}\n\nPlease let me know the available slots.`;
    openWhatsApp(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <h3 className="font-serif text-2xl font-bold text-[#9771e3] mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-6">Enter your details below and we will connect with you immediately via WhatsApp to confirm your slot.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="text" placeholder="Your Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
          <input required type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none" onChange={e => setFormData({...formData, phone: e.target.value})} />
          <textarea required placeholder="Briefly describe your concern or required service" rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#9771e3] focus:ring-1 focus:ring-[#9771e3] outline-none resize-none" onChange={e => setFormData({...formData, issue: e.target.value})}></textarea>
          <button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Send Details & Chat
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* ───────────── Service Card with Images ───────────── */
function ServiceCard({ title, description, items, delay, imageUrl }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay }} className="h-full">
      <div className="flex flex-col h-full overflow-hidden rounded-[2rem] bg-white border border-[#9771e3]/20 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
        <div className="h-48 w-full overflow-hidden relative">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h3 className="absolute bottom-4 left-6 font-serif text-[22px] font-bold text-white leading-tight">{title}</h3>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-[14px] text-gray-600 leading-relaxed mb-4">{description}</p>
          <ul className="space-y-3 mt-auto pt-4 border-t border-gray-100">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] font-medium text-[#9771e3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9771e3] mt-[6px] shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

/* ───────────── Horizontal Data Carousels ───────────── */
function ReviewCarousel() {
  const reviews = [
    { name: "Anjali M.", text: "Dr. Poonam is incredibly patient and thorough. She guided me through my high-risk pregnancy with such care. I felt completely safe.", rating: 5 },
    { name: "Priya S.", text: "The best gynaecologist in Mumbai. She listens to all your concerns without rushing. Her holistic approach to my PCOS changed my life.", rating: 5 },
    { name: "Roshni D.", text: "I underwent laparoscopic surgery with Dr. Nautiyal. Her expertise is unmatched, and my recovery was so much faster than I anticipated.", rating: 5 },
    { name: "Kritika V.", text: "A truly compassionate doctor. She makes you feel so comfortable. Highly recommend her for any gynaecological issues.", rating: 5 }
  ];

  return (
    <div className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 text-center">
        <h2 className="font-serif text-3xl font-bold text-[#9771e3]">Patient Experiences</h2>
        <p className="text-gray-500 mt-2 text-sm">Real reviews from Google Business</p>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 px-5 sm:px-8 lg:px-12 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {reviews.map((review, i) => (
          <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-[#9771e3]/10 snap-center shrink-0">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(review.rating)].map((_, j) => <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-gray-600 text-[15px] italic mb-6">"{review.text}"</p>
            <p className="font-bold text-[#9771e3]">— {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogCarousel() {
  const blogs = [
    { title: "Understanding PCOS: Diet & Lifestyle", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop", date: "Aug 12, 2026" },
    { title: "Preparing Your Body for Pregnancy", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=400&auto=format&fit=crop", date: "Jul 28, 2026" },
    { title: "The Truth About Menopause and HRT", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop", date: "Jun 15, 2026" },
  ];

  return (
    <div className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-10 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#9771e3]">Latest Insights</h2>
          <p className="text-gray-500 mt-2 text-sm">Health tips & medical knowledge</p>
        </div>
        <button className="text-[#9771e3] font-bold text-sm hidden md:block hover:underline">View All Blogs →</button>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-8 px-5 sm:px-8 lg:px-12 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {blogs.map((blog, i) => (
          <div key={i} className="min-w-[280px] md:min-w-[350px] bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 snap-center shrink-0 group cursor-pointer hover:shadow-xl transition-all">
            <div className="h-48 overflow-hidden">
              <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <p className="text-xs text-[#9771e3] font-bold mb-2">{blog.date}</p>
              <h3 className="font-serif text-xl font-bold text-gray-800 leading-tight mb-3 group-hover:text-[#9771e3] transition-colors">{blog.title}</h3>
              <p className="text-sm font-semibold text-gray-500">Read Article →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── Main App Structure ───────────── */
export default function Hero() {
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
  const [hasSeenExitPopup, setHasSeenExitPopup] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-50px" });

  // Exit Intent Logic
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasSeenExitPopup) {
        setIsExitPopupOpen(true);
        setHasSeenExitPopup(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasSeenExitPopup]);

  const hospitals = [
    { name: "Surya Hospitals", area: "Santacruz West", logo: "/surya-logo.png", mapUrl: "https://maps.google.com/?q=Surya+Hospitals+Santacruz+Mumbai" },
    { name: "Criticare Hospital", area: "Andheri East", logo: "/criticare-logo.jpg", mapUrl: "https://maps.google.com/?q=Criticare+Hospital+Andheri+East+Mumbai" },
    { name: "Apollo Hospitals", area: "Navi Mumbai", logo: "/apollo-logo.png", mapUrl: "https://maps.google.com/?q=Apollo+Hospitals+Navi+Mumbai" },
    { name: "Cloudnine Hospital", area: "Malad West", logo: "/cloudnine-logo.png", mapUrl: "https://maps.google.com/?q=Cloudnine+Hospital+Malad+Mumbai" },
  ];

  return (
    <main className="w-full font-sans relative">
      
      {/* ── Popups ── */}
      <AppointmentModal isOpen={isApptModalOpen} onClose={() => setIsApptModalOpen(false)} />
      <AppointmentModal isOpen={isExitPopupOpen} onClose={() => setIsExitPopupOpen(false)} title="Wait! Before you leave..." />

      {/* ── Floating WhatsApp Button ── */}
      <button onClick={() => openWhatsApp("Hello Dr. Poonam, I am visiting your website and have an inquiry.")} className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </button>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#9771e3]/10 shadow-sm px-5 py-4 sm:px-8 lg:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 cursor-pointer shrink-0">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold tracking-wide text-[#9771e3] uppercase leading-tight">Dr. POONAM NAUTIYAL</h1>
            <p className="text-[10px] font-semibold text-[#9771e3]/70 tracking-tight">MRCOG (UK), DNB (OBGY), DGO, MBBS</p>
          </div>
        </a>
        
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <a href="/" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Home</a>
          <a href="/#about" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">About</a>
          <a href="/#services" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">Services</a>
          <a href="/#faqs" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">FAQ's</a>
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a href="tel:+919820739032" className="flex items-center gap-2 bg-[#9771e3]/10 hover:bg-[#9771e3]/20 text-[#9771e3] px-4 py-2.5 rounded-full font-bold transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="text-[14px]">+91 98207 39032</span>
          </a>
          <button onClick={() => setIsApptModalOpen(true)} className="bg-[#9771e3] hover:bg-[#835bc4] text-white flex items-center gap-3 pl-2 pr-6 py-2 rounded-full font-bold shadow-md transition-all">
            <span className="w-8 h-8 rounded-full bg-white text-[#9771e3] flex items-center justify-center"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></span>
            <span className="text-[15px]">Book Appointment</span>
          </button>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] overflow-hidden bg-[#9771e3] flex items-center">
        <GradientBlobs />
        <div className="relative z-10 w-full mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <motion.div ref={heroRef} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">Dr. Poonam Nautiyal</motion.h2>
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-3 text-[13px] font-bold tracking-widest text-white/80 uppercase">MRCOG (UK) • DNB (OBGY) • DGO • MBBS</motion.p>
              <motion.h3 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Senior Consultant Gynaecologist</motion.h3>
              <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-6 text-base leading-relaxed text-white/90 sm:text-[17px]">With over two decades of experience, Dr. Nautiyal blends international academic excellence with hands-on clinical expertise. She provides compassionate, individualized, and evidence-based care.</motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => setIsApptModalOpen(true)} className="bg-white text-[#9771e3] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all">Book Consultation</button>
                <button onClick={() => openWhatsApp("Hello Dr. Poonam, I would like to chat regarding a consultation.")} className="border border-white/60 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">Chat on WhatsApp</button>
              </motion.div>
            </div>
            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex-1 w-full max-w-sm lg:max-w-md relative">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white/20">
                <video src="/doctor_video.mp4" autoPlay loop muted playsInline className="object-cover w-full h-full"><source src="/doctor_video.mp4" type="video/mp4" /></video>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <div id="services" className="py-24 sm:py-32 bg-white max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#9771e3]/10 px-5 py-2 text-xs font-bold tracking-widest text-[#9771e3] uppercase">Our Areas of Service</span>
          <h2 className="font-serif text-3xl font-bold text-[#9771e3] sm:text-4xl md:text-5xl">Specialized Care, Personalized for You</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          <ServiceCard imageUrl="https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=600&auto=format&fit=crop" title="Maternity & Pregnancy" description="Comprehensive care for you and your baby, from early family planning to safe, comfortable deliveries." items={["Pre Pregnancy Counselling", "High Risk Pregnancies", "Normal Vaginal Deliveries"]} delay={0} />
          <ServiceCard imageUrl="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop" title="Advanced Surgical Care" description="State-of-the-art minimally invasive procedures focusing on faster recovery and minimal scarring." items={["Laparoscopy", "Gynaecological Surgeries", "Safe Abortions"]} delay={0.15} />
          <ServiceCard imageUrl="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" title="Holistic Health & Wellness" description="Integrative wellness solutions addressing hormonal balance, reproductive health, and menopause." items={["Obstetrics & Gynaecology", "PCOS Management", "Menopausal Counselling"]} delay={0.3} />
        </div>
      </div>

      {/* ── Hospital Attachments ── */}
      <div id="attachments" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#9771e3] mb-12">Hospital Attachments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hospitals.map((hospital, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-[#9771e3]/10 hover:shadow-xl transition-all flex flex-col items-center">
                <div className="h-20 w-full flex items-center justify-center mb-4">
                  <img src={hospital.logo} alt={hospital.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="font-bold text-gray-800 text-center text-sm">{hospital.name}</h4>
                <p className="text-xs text-gray-500 mb-4 text-center">{hospital.area}</p>
                <div className="mt-auto w-full flex flex-col gap-2">
                  <button onClick={() => openWhatsApp(`Hi Dr. Poonam, can I book an appointment at ${hospital.name}, ${hospital.area}?`)} className="w-full bg-[#9771e3]/10 text-[#9771e3] hover:bg-[#9771e3] hover:text-white py-2 rounded-lg text-xs font-bold transition-colors">
                    Chat to Book Here
                  </button>
                  <a href={hospital.mapUrl} target="_blank" rel="noreferrer" className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-700 underline">
                    📍 View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Carousels ── */}
      <ReviewCarousel />
      <BlogCarousel />

      {/* ── Footer ── */}
      <footer className="bg-white pt-20 pb-8 text-[#9771e3] border-t border-[#9771e3]/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div>
              <img src="/logo.png" alt="Logo" className="h-14 mb-6 object-contain" />
              <p className="text-[#9771e3]/80 text-[14px] leading-relaxed mb-6">Providing compassionate, individualized, and evidence-based care for every stage of a woman’s life.</p>
              <button onClick={() => setIsApptModalOpen(true)} className="bg-[#9771e3] text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-[#835bc4] transition-all">Book Appointment Now</button>
            </div>
            
            <div>
              <h4 className="text-lg font-serif font-bold mb-6">Clinic Address</h4>
              <p className="text-[#9771e3]/80 text-[14px] leading-relaxed mb-4">
                Andheri - Kurla Rd, next to holy family church, Gundavali,<br/>Andheri East, Mumbai, Maharashtra 400069
              </p>
              <a href="https://maps.google.com/?q=Dr+Poonam+Nautiyal+Andheri+East" target="_blank" rel="noreferrer" className="text-sm font-bold underline hover:text-[#835bc4]">Get Directions on Map</a>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-6">Direct Contact</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+919820739032" className="flex items-center gap-3 text-sm font-bold bg-[#9771e3]/10 w-max px-4 py-2 rounded-lg hover:bg-[#9771e3]/20">📞 +91 98207 39032</a>
                <button onClick={() => openWhatsApp("Hello Dr. Poonam")} className="flex items-center gap-3 text-sm font-bold bg-[#25D366]/10 text-[#20bd5a] w-max px-4 py-2 rounded-lg hover:bg-[#25D366]/20">💬 WhatsApp Chat</button>
                <a href="mailto:drpoonamnautiyal@gmail.com" className="flex items-center gap-3 text-sm text-[#9771e3]/80 hover:text-[#9771e3]">✉️ drpoonamnautiyal@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-[#9771e3]/20 text-center text-xs text-[#9771e3]/60">
            Copyright © {new Date().getFullYear()} Dr. Poonam Nautiyal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}