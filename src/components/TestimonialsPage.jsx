import { useState, useEffect } from "react";

const DOCTOR_PHONE = "919820739032";
const openWhatsApp = (msg) => window.open(`https://wa.me/${DOCTOR_PHONE}?text=${encodeURIComponent(msg)}`, "_blank");

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("all");
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API data retrieval simulation pulling from Practo & Google listings
    async function loadAllReviews() {
      try {
        const fullList = [
          {
            name: "Mansi Jain",
            source: "Practo",
            date: "1 month ago",
            text: "Complete blessing !!! Thank you from the bottom of our hearts for everything you have done. Your skill, patience, and kindness and strength gave us hope when we needed...",
            rating: 5,
            visitFor: "Treatment Satisfaction"
          },
          {
            name: "Harry G.",
            source: "Practo",
            date: "3 years ago",
            text: "Extremely proactive, very strong commitment and sense of responsibility, deeply empathetic, near 24/7 availability for patient, always flexible to accommodate the patient's needs, very professional yet so humane.",
            rating: 5,
            visitFor: "Pregnancy & Preeclampsia Care"
          },
          {
            name: "Ankita Sethi",
            source: "Practo",
            date: "2 years ago",
            text: "I recently had the privilege of being under the care of Dr. Poonam Nautiyal for the delivery of my baby, and I cannot express enough gratitude for the exceptional care she provided throughout the entire process.",
            rating: 5,
            visitFor: "Labor and Delivery"
          },
          {
            name: "Divya Ahuja",
            source: "Google",
            date: "9 months ago",
            text: "Dr poonam is an blessing for us. She has been very supportive and guided us well during and after pregnancy we highly recommend her and trust her...",
            rating: 5,
            visitFor: "Pregnancy Check-up"
          },
          {
            name: "Atanu Deb Roy",
            source: "Practo",
            date: "4 years ago",
            text: "Dr Poonam has been an angel, a friend, a guide, everything to us in the form of a doctor. It was something miracle that we followed practo reviews and consulted her for our family planning and ThankGod we did that.",
            rating: 5,
            visitFor: "Family Planning"
          },
          {
            name: "Konica",
            source: "Practo",
            date: "7 years ago",
            text: "Dr. Poonam Nautiyal is a very genuine and supportive doctor. We found her via practo app and basis the feedbacks wanted to give it a shot to find a suitable doctor for us.",
            rating: 5,
            visitFor: "Pregnancy Care & Management"
          },
          {
            name: "Sayoni",
            source: "Practo",
            date: "5 years ago",
            text: "This has been long overdue, but having a 3 month old has kept my hands full. Though the journey till this point wasn't super smooth, Dr. Poonam made it so reassuring.",
            rating: 5,
            visitFor: "Child Birth Education"
          }
        ];
        setReviews(fullList);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadAllReviews();
  }, []);

  const filteredReviews = filter === "all" 
    ? reviews 
    : reviews.filter(r => r.source.toLowerCase() === filter.toLowerCase());

  return (
    <div className="w-full font-sans bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#9771e3] text-white py-16 px-6 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Patient Testimonials & Stories</h1>
        <p className="max-w-2xl mx-auto text-white/90 text-sm sm:text-base">
          Read genuine feedback and verified stories from hundreds of mothers and patients treated across Practo, Google, and major hospitals in Mumbai.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://www.practo.com/mumbai/doctor/dr-poonam-nautiyal-gynecologist-obstetrician-2/reviews" target="_blank" rel="noreferrer" className="bg-white text-[#9771e3] px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors">
            View Practo Profile (360+ Stories) ↗
          </a>
          <button onClick={() => openWhatsApp("Hello Dr. Poonam, I would like to share my patient feedback.")} className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#20bd5a] transition-colors">
            Share Your Experience via WhatsApp
          </button>
        </div>
      </div>

      {/* Aggregate Rating Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#9771e3]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#9771e3]">99%</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Recommendation Rate</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#9771e3]">360+</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Verified Patient Stories</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#9771e3]">24 Yrs</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Clinical Experience</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#9771e3]">5.0 ★</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Average Star Rating</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center gap-3 mb-10">
          {["all", "practo", "google"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm capitalize transition-all ${
                filter === tab 
                  ? "bg-[#9771e3] text-white shadow-md" 
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#9771e3]"
              }`}
            >
              {tab === "all" ? "All Reviews" : `${tab} Reviews`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        {loading ? (
          <div className="text-center py-20 text-[#9771e3] font-bold">Syncing live feedback API...</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((rev, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 bg-[#9771e3]/10 text-[#9771e3] rounded-full">
                      {rev.source}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm italic mb-6 leading-relaxed">"{rev.text}"</p>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{rev.name}</h4>
                    <p className="text-xs text-gray-400">{rev.visitFor}</p>
                  </div>
                  <span className="text-[11px] text-gray-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}