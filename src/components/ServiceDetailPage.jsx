import { useEffect } from "react";
import { motion } from "framer-motion";

/* ───────────── SEO & AEO Optimized Service Data (All 11 Services) ───────────── */
export const servicesData = {
  // --- MATERNITY & PREGNANCY ---
  "pre-pregnancy-counselling": {
    title: "Pre Pregnancy Counselling",
    seoTitle: "Pre Pregnancy Counselling in Mumbai | Dr. Poonam Nautiyal",
    aeoSummary: "Pre-pregnancy counselling is a specialized medical consultation that helps you prepare your body for a healthy pregnancy. Dr. Poonam Nautiyal evaluates your medical history, lifestyle, and genetic risks to optimize your fertility and ensure the safest possible start for your baby.",
    image: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Identification and management of pre-existing conditions like thyroid or diabetes.",
      "Customized nutritional planning and prenatal vitamin prescription (e.g., Folic Acid).",
      "Genetic screening and counseling for hereditary conditions.",
      "Optimization of menstrual cycles for precise ovulation tracking."
    ],
    detailedContent: "Planning a family is a beautiful journey, but it requires physical and mental preparation. A preconception checkup allows us to address potential roadblocks before you even conceive. By proactively managing weight, balancing hormones, and reviewing your current medications, we dramatically reduce the risk of early miscarriage and gestational complications.",
    faqs: [
      { q: "When should we schedule pre-pregnancy counselling?", a: "Ideally, you should schedule a consultation 3 to 6 months before you actively start trying to conceive. This gives your body enough time to adjust to lifestyle changes and build up essential nutrients." },
      { q: "What tests are done during a preconception checkup?", a: "Standard tests include a complete blood count (CBC), rubella immunity check, thyroid profile, blood sugar levels, and screening for common infections like HIV and Hepatitis B." }
    ]
  },
  "high-risk-pregnancies": {
    title: "High Risk Pregnancy Care",
    seoTitle: "High Risk Pregnancy Specialist in Andheri, Mumbai | Dr. Nautiyal",
    aeoSummary: "A high-risk pregnancy involves conditions that increase health risks for the mother, the baby, or both. With advanced MRCOG (UK) training, Dr. Poonam Nautiyal specializes in closely monitoring and safely managing complex pregnancies, including gestational diabetes, hypertension, and multiple gestations.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Expert management of Gestational Diabetes and Preeclampsia.",
      "Specialized care for older mothers (Advanced Maternal Age).",
      "Care plans for multiple pregnancies (Twins or Triplets).",
      "Continuous fetal monitoring and advanced anomaly screening."
    ],
    detailedContent: "Being told your pregnancy is 'high-risk' can be frightening, but with the right clinical expertise, most high-risk pregnancies result in healthy deliveries. Dr. Nautiyal utilizes evidence-based UK protocols to anticipate complications before they arise. From adjusting medications for thyroid disorders to preventing preterm labor, you are in highly capable hands.",
    faqs: [
      { q: "Can I still have a normal delivery with a high-risk pregnancy?", a: "Yes, depending on the specific condition. While some high-risk scenarios require a planned C-section for safety, many women with well-managed gestational diabetes or hypertension can safely have a normal vaginal delivery." },
      { q: "How often will I need check-ups?", a: "High-risk pregnancies require closer monitoring. Instead of the standard monthly visits, you may need to see the gynaecologist every 1-2 weeks, especially in the third trimester." }
    ]
  },
  "normal-vaginal-deliveries": {
    title: "Normal Vaginal Deliveries",
    seoTitle: "Painless Normal Delivery Specialist in Mumbai | Dr. Nautiyal",
    aeoSummary: "A normal vaginal delivery is the most natural childbirth process, offering a faster recovery time for the mother and essential immune system benefits for the baby. Dr. Poonam Nautiyal strongly advocates for normal deliveries and expertly facilitates painless labor using epidural analgesia.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Option for Painless Delivery using safe Epidural Anaesthesia.",
      "Faster postpartum recovery and shorter hospital stays.",
      "Reduced risk of surgical complications and infections.",
      "Active labor management with constant fetal heart monitoring."
    ],
    detailedContent: "Childbirth is a profound experience, and our goal is to make it as safe, comfortable, and positive as possible. We emphasize continuous maternal support, optimal birthing positions, and evidence-based pain management. Dr. Nautiyal's extensive experience allows her to manage prolonged labor patiently while always keeping the mother and baby's safety as the absolute priority.",
    faqs: [
      { q: "Is a painless delivery safe for the baby?", a: "Yes, epidurals are highly safe for both mother and baby. The medication acts locally on the nerves of the spine to block pain signals without affecting the baby's heart rate or development." },
      { q: "What if I end up needing a C-section?", a: "While we aim for a normal delivery, emergency situations (like fetal distress) can arise. Dr. Nautiyal is an expert surgeon who can swiftly and safely transition to a Caesarean section if it becomes medically necessary." }
    ]
  },

  // --- ADVANCED SURGICAL CARE ---
  "laparoscopy": {
    title: "Advanced Laparoscopy",
    seoTitle: "Laparoscopic Gynaecologist in Mumbai | Minimally Invasive Surgery",
    aeoSummary: "Gynaecological laparoscopy is a minimally invasive surgical procedure used to diagnose and treat conditions inside the pelvis. Dr. Nautiyal uses tiny incisions and a specialized camera to safely remove cysts, fibroids, and endometriosis with significantly less pain and a faster recovery time than open surgery.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Micro-incisions resulting in minimal to no visible scarring.",
      "Significantly reduced post-operative pain and blood loss.",
      "Same-day or next-day hospital discharge.",
      "Faster return to normal daily activities and work."
    ],
    detailedContent: "Whether you are suffering from unexplained pelvic pain, struggling with infertility due to endometriosis, or needing a myomectomy for large fibroids, advanced laparoscopy is the gold standard of care. By using state-of-the-art optics and precision instruments, Dr. Nautiyal ensures maximum preservation of your healthy reproductive tissues.",
    faqs: [
      { q: "How long does it take to recover from a laparoscopy?", a: "Most women can return home the same day or the day after surgery. Light activities can be resumed within 3-5 days, and full recovery typically takes about 1 to 2 weeks, compared to 6 weeks for open surgery." },
      { q: "Is laparoscopy safe?", a: "Yes, it is considered highly safe and is the preferred surgical method for most gynaecological conditions due to the lower risk of infection and complications compared to traditional open surgery." }
    ]
  },
  "gynaecological-surgeries": {
    title: "Gynaecological Surgeries",
    seoTitle: "Expert Gynaec Surgeon in Mumbai | Hysterectomy & Cyst Removal",
    aeoSummary: "Gynaecological surgeries encompass a range of procedures to treat severe reproductive system disorders. From Total Laparoscopic Hysterectomies (TLH) to the precise removal of ovarian cysts and uterine fibroids, Dr. Nautiyal provides elite surgical care focused on safety and rapid recovery.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Total Laparoscopic Hysterectomy (Uterus Removal).",
      "Myomectomy for the safe removal of uterine fibroids.",
      "Ovarian cystectomy to preserve healthy ovarian tissue.",
      "Surgical management of severe pelvic organ prolapse."
    ],
    detailedContent: "Facing gynaecological surgery can be daunting, but choosing an experienced surgeon makes all the difference. Dr. Nautiyal combines decades of hands-on surgical experience with modern, minimally invasive techniques. We ensure that every patient receives a comprehensive pre-surgical consultation to understand the procedure, the risks, and the expected recovery timeline.",
    faqs: [
      { q: "What is the difference between a Myomectomy and a Hysterectomy?", a: "A myomectomy removes only the fibroids, leaving the uterus intact to preserve fertility. A hysterectomy is the complete surgical removal of the uterus, usually recommended for severe bleeding or post-menopausal issues." },
      { q: "Will I need hormone replacement therapy after surgery?", a: "This depends on whether your ovaries are removed during the surgery (Oophorectomy). If your ovaries are preserved, you will not immediately enter surgical menopause." }
    ]
  },
  "safe-abortions": {
    title: "Safe & Legal Abortions",
    seoTitle: "Safe Abortion Clinic in Mumbai | MTP Certified Gynaecologist",
    aeoSummary: "Dr. Poonam Nautiyal provides completely confidential, safe, and legal Medical Termination of Pregnancy (MTP) services. We offer both medical (pill-based) and minor surgical abortion options in a highly sterile, non-judgmental, and compassionate environment, strictly adhering to Indian medical guidelines.",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5952?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "100% confidential and non-judgmental medical consultation.",
      "Medical abortion (pills) available for early pregnancies.",
      "Safe, minor surgical procedures (D&C) for later stages.",
      "Comprehensive post-abortion care and contraceptive counseling."
    ],
    detailedContent: "Women's reproductive autonomy is a critical aspect of healthcare. We understand that this can be a difficult and sensitive time. Our clinic is committed to providing a safe haven where you receive medically sound advice, proper ultrasound dating to determine the safest termination method, and supportive care to ensure your physical recovery is smooth and complication-free.",
    faqs: [
      { q: "Is medical abortion painful?", a: "Medical abortion involves heavy bleeding and strong menstrual-like cramping. We provide specific pain management medications to ensure you are as comfortable as possible during the process." },
      { q: "How soon can I resume normal activities?", a: "Most women can return to normal, non-strenuous activities within 1 to 2 days after the procedure. However, we advise resting and avoiding heavy lifting for at least a week." }
    ]
  },

  // --- HOLISTIC HEALTH & WELLNESS ---
  "obstetrics-and-gynaecology": {
    title: "Obstetrics & Gynaecology",
    seoTitle: "Best Obstetrician & Gynaecologist in Mumbai | Dr. Poonam Nautiyal",
    aeoSummary: "Comprehensive Obstetrics & Gynaecology covers the full spectrum of women's healthcare. Dr. Nautiyal offers routine wellness exams, menstrual disorder treatments, and full-term maternity care, providing evidence-based, compassionate medical support for women from adolescence through menopause.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Annual wellness exams, Pap smears, and breast screenings.",
      "Diagnosis and management of irregular or heavy periods.",
      "Treatment for pelvic infections and urinary tract issues.",
      "Comprehensive family planning and contraceptive advice."
    ],
    detailedContent: "Your reproductive health is deeply connected to your overall well-being. Regular gynaecological check-ups are not just for when you are pregnant or experiencing symptoms; they are vital for early detection and prevention. We provide a comfortable environment where you can openly discuss everything from birth control options to unusual pain.",
    faqs: [
      { q: "When should a girl have her first gynaecologist visit?", a: "It is generally recommended that young women have their first gynaecological visit between the ages of 13 and 15, primarily for education, discussing menstrual cycles, and establishing a trusted doctor-patient relationship." },
      { q: "How often do I need a Pap smear?", a: "Current medical guidelines recommend that women begin getting routine Pap smears at age 21. If your results are normal, you generally only need one every 3 years." }
    ]
  },
  "pcos-management": {
    title: "PCOS Management",
    seoTitle: "PCOS Treatment Doctor in Mumbai | Polycystic Ovary Syndrome Care",
    aeoSummary: "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder causing irregular periods, weight gain, and fertility issues. Dr. Nautiyal provides a holistic PCOS management plan that combines targeted medical treatments with customized lifestyle and dietary interventions to restore hormonal balance.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Regulation of menstrual cycles to ensure predictable periods.",
      "Medical management of acne and excess facial hair (hirsutism).",
      "Weight management strategies and insulin resistance care.",
      "Fertility optimization and ovulation induction for conception."
    ],
    detailedContent: "PCOS cannot be 'cured' permanently, but it is highly manageable. Because PCOS affects every woman differently, a one-size-fits-all approach does not work. We focus on treating your specific primary concern—whether that is clearing up your skin, losing stubborn weight, or regulating your ovulation to help you get pregnant.",
    faqs: [
      { q: "Can I get pregnant if I have PCOS?", a: "Absolutely. While PCOS is a leading cause of infertility due to irregular ovulation, the vast majority of women with PCOS can conceive successfully with the help of lifestyle changes and ovulation-inducing medications." },
      { q: "Is medication always required for PCOS?", a: "Not always. For some women, significant lifestyle modifications, specifically dietary changes and weight loss (even just 5-10% of body weight), are enough to restore regular ovulation and hormone balance." }
    ]
  },
  "infertility-treatment": {
    title: "Infertility Treatment",
    seoTitle: "Infertility Specialist in Andheri | Fertility Treatments",
    aeoSummary: "Infertility treatment involves diagnosing the root cause of conception struggles and utilizing medical interventions to help you achieve pregnancy. Dr. Nautiyal provides comprehensive fertility assessments, ovulation tracking, and targeted therapies to maximize your natural chances of conception.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Comprehensive fertility evaluation for both partners.",
      "Follicular monitoring via advanced ultrasound.",
      "Ovulation induction using modern, safe medications.",
      "Expert counseling for advanced procedures like IUI or IVF."
    ],
    detailedContent: "Struggling to conceive can be an incredibly emotional and stressful experience. We approach infertility with deep empathy and a systematic clinical strategy. By analyzing your ovarian reserve, checking fallopian tube patency, and evaluating male factors, we create a clear, step-by-step roadmap to help you build your family.",
    faqs: [
      { q: "When should I consult a doctor for infertility?", a: "If you are under 35 and have been actively trying to conceive for a year without success, you should seek an evaluation. If you are 35 or older, you should consult a doctor after 6 months of trying." },
      { q: "What is Ovulation Induction?", a: "Ovulation induction uses oral or injectable medications to stimulate the ovaries to release one or more mature eggs, significantly increasing the chances of conception during that cycle." }
    ]
  },
  "menopausal-counselling": {
    title: "Menopausal Counselling",
    seoTitle: "Menopause Specialist in Mumbai | Hot Flashes & HRT Treatment",
    aeoSummary: "Menopause is a natural transition, but the symptoms can severely impact your quality of life. Dr. Nautiyal provides expert menopausal counselling and treatment, offering solutions like Hormone Replacement Therapy (HRT) and non-hormonal options to manage hot flashes, mood swings, and bone health.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Effective management of severe hot flashes and night sweats.",
      "Safe evaluation and prescription of Hormone Replacement Therapy.",
      "Prevention and screening for post-menopausal osteoporosis.",
      "Treatment for vaginal dryness and intimate discomfort."
    ],
    detailedContent: "The transition into menopause (perimenopause) can begin years before your final period, bringing a host of disruptive symptoms due to dropping estrogen levels. You do not have to suffer in silence. We provide thorough medical evaluations to determine the safest symptom management strategies, protecting your heart and bone health as you age.",
    faqs: [
      { q: "Is Hormone Replacement Therapy (HRT) safe?", a: "For most healthy women experiencing severe menopausal symptoms, HRT is highly safe and effective when prescribed correctly. We conduct a thorough health risk assessment before recommending it." },
      { q: "How can I protect my bones after menopause?", a: "Estrogen drop accelerates bone loss. We recommend regular DEXA scans to monitor bone density, alongside calcium/vitamin D supplementation, weight-bearing exercises, and specific medications if needed." }
    ]
  },
  "cervical-cancer-vaccine": {
    title: "Cervical Cancer Vaccine",
    seoTitle: "HPV Vaccine in Mumbai | Cervical Cancer Prevention",
    aeoSummary: "The Cervical Cancer (HPV) vaccine is a crucial preventive measure that protects women from the human papillomavirus, which causes over 95% of cervical cancers. Dr. Nautiyal strongly advocates for timely vaccination and routine Pap smear screenings to ensure lifelong protection against this preventable disease.",
    image: "https://images.unsplash.com/photo-1633458022646-609b7eb931fb?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Protection against the most high-risk strains of HPV.",
      "Significant reduction in the risk of developing cervical cancer.",
      "Prevention of genital warts caused by certain HPV types.",
      "Safe, well-tested vaccination protocols."
    ],
    detailedContent: "Cervical cancer is one of the most preventable types of cancer today, thanks to the HPV vaccine. Getting vaccinated is a vital step in taking control of your long-term health. We provide comprehensive counseling to explain how the vaccine works, administer the doses safely in our clinic, and set up your schedule for future routine screenings.",
    faqs: [
      { q: "What is the ideal age to get the HPV vaccine?", a: "The vaccine is most effective when administered to young girls between 9 and 14 years old, before any sexual activity. However, it is approved and highly beneficial for women up to age 45." },
      { q: "Do I still need Pap smears if I have been vaccinated?", a: "Yes. While the vaccine protects against the primary strains of HPV that cause cancer, it does not protect against all of them. Routine Pap smears are still necessary for early detection." }
    ]
  }
};

export default function ServiceDetailPage({ serviceId }) {
  // If the service doesn't exist in our data, show a fallback
  const service = servicesData[serviceId];
  
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-2xl text-[#9771e3]">Service not found.</div>;
  }

  return (
    <main className="w-full font-sans bg-[#FAFAFF] min-h-screen">
      
      {/* ── Navbar (Standardized) ── */}
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
          <a href="/#services-page" className="text-[15px] font-bold text-[#9771e3] transition-colors">Services</a>
          <a href="/#faqs-page" className="text-[15px] font-bold text-[#475569] hover:text-[#9771e3] transition-colors">FAQ's</a>
        </div>
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button className="bg-[#9771e3] hover:bg-[#835bc4] text-white flex items-center gap-3 pl-2 pr-6 py-2 rounded-full font-bold shadow-md transition-all group">
            <span className="w-8 h-8 rounded-full bg-white text-[#9771e3] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </span>
            <span className="text-[15px] tracking-wide">Appointment</span>
          </button>
        </div>
      </nav>

      {/* ── AEO Optimized Hero Section ── */}
      <section className="bg-[#1E293B] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#9771e3] opacity-20 mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <a href="/#services-page" className="text-[#9771e3] font-bold text-sm mb-4 inline-flex items-center gap-2 hover:text-white transition-colors">
              ← Back to All Services
            </a>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed border-l-4 border-[#9771e3] pl-6 font-medium">
              {service.aeoSummary}
            </p>
          </div>
          <div className="flex-1 w-full max-w-md hidden md:block">
            <img src={service.image} alt={service.seoTitle} className="rounded-2xl shadow-2xl object-cover aspect-[4/3] border-4 border-white/10" />
          </div>
        </div>
      </section>

      {/* ── Main Content & Sticky Sidebar ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left: Detailed Content */}
        <div className="flex-1 space-y-12">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#9771e3] mb-6">Understanding {service.title}</h2>
            <p className="text-[17px] text-[#475569] leading-relaxed mb-8">
              {service.detailedContent}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-[#9771e3]/10 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#1E293B] mb-6">Key Benefits & Approach</h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[16px] text-[#475569] font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#9771e3]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#9771e3]"></div>
                  </div>
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8">
            <h3 className="font-serif text-2xl font-bold text-[#9771e3] mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-[#9771e3]/10 shadow-sm">
                  <h4 className="font-bold text-[#1E293B] text-[17px] mb-2">{faq.q}</h4>
                  <p className="text-[#475569] text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Sticky Booking Widget */}
        <aside className="w-full lg:w-[400px] shrink-0">
          <div className="sticky top-32 bg-[#9771e3] rounded-3xl p-8 text-white shadow-xl">
            <h3 className="font-serif text-2xl font-bold mb-4">Book Your Consultation</h3>
            <p className="text-white/80 text-[15px] mb-8">Take the first step towards expert, compassionate care. Schedule your visit with Dr. Poonam Nautiyal today.</p>
            
            <a href="tel:+919820739032" className="flex items-center justify-center gap-3 w-full bg-white text-[#9771e3] py-4 rounded-xl font-bold text-lg mb-4 hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 98207 39032
            </a>
            
            <a href="#whatsapp" className="flex items-center justify-center gap-3 w-full border-2 border-white/30 hover:border-white text-white py-4 rounded-xl font-bold transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}