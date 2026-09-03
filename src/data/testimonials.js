/**
 * Patient reviews, copied verbatim from Dr. Nautiyal's public Practo and Google
 * profiles. Text is not edited, shortened or improved — only a `pullQuote` is
 * selected from within each review for use on cards.
 *
 * These are displayed as ordinary HTML with the source named and linked. They are
 * deliberately NOT emitted as Review or aggregateRating structured data: Google's
 * structured data policy prohibits self-serving review markup for your own business,
 * and doing it anyway risks a manual action. Google surfaces her real rating from
 * her Business Profile instead, which is the correct route.
 */

import { profiles } from "./practice.js";

export const sources = {
  Practo: profiles.practoReviews,
  Google: profiles.google[0],
};

export const testimonials = [
  {
    name: "Haryy G.",
    source: "Practo",
    verified: true,
    date: "3 years ago",
    visitedFor: [
      "Pregnancy",
      "Pregnancy Hypertension (Preeclampsia / Eclampsia)",
      "Pre and Post Delivery Care",
      "Obstetrics / Antenatal Care",
      "Caesarean Section",
    ],
    serviceSlug: "high-risk-pregnancies",
    pullQuote:
      "Extremely proactive, very strong commitment and sense of responsibility, deeply empathetic, near 24/7 availability for patient, always flexible to accommodate the patient's needs, very professional yet so humane.",
    text: `Extremely proactive, very strong commitment and sense of responsibility, deeply empathetic, near 24/7 availability for patient, always flexible to accommodate the patient's needs, very professional yet so humane, permanently cheerful, humorous and warm.

These are how I would try to summarise Dr Poonam Nautiyal in a few key words.

My wife and I had an earlier unsuccessful pregnancy primarily due to the negligence and lack of responsibility of our previous obstetrician. The event was extremely traumatic for both of us. So the second time, we were quite concerned about getting a good obstetrician, especially who can manage the deep set fear and trauma of my wife, and help us conclude the pregnancy successfully.

We searched in Practo, and found Dr Poonam, amongst a few others. But we liked her profile since there were many good reviews about her.

It's been about 9 months since we have been interacting with Dr Poonam. During the course of time, she managed to create an environment of safety and trust for my wife, through consultations to the extent that my wife got deeply attached to her emotionally. In this time interval of 9 months there have been times where Dr Poonam was unavailable for physical consultation for a couple of weeks. But she provided us with a backup doctor to handle any emergencies. Even while she was travelling, Dr Poonam was still always available for telephonic consultations. Hats off to her dedication. Her concern for my wife seemed similar to her own daughter.

We are now the happy parents of a newborn baby. The baby was born in Surya Hospitals via Cesarean (because of the previous mishap we didn't want to take chances). Prior to the surgery, Dr Poonam had let us talk to one of her patients who had just delivered via Cesarean to check how easy or difficult it is to recover after a Cesarean, and associated first hand experiences.

Dr Poonam helped us with the hospitalisation. She also explained to us that we might need an attendant for the mother and baby post operation and gave us references for attendants. She was extremely supportive for all our requests. She got her own team to perform the operation. It was done at the exact time of our choice, the surgery went perfectly well. She even invited me to be there physically in the operating theatre so that I could provide emotional support to my wife during the surgery. I have found Dr Poonam extremely thoughtful and sensitive in these matters - she comprehends these innate needs of a to-be-parent couple so easily. Her emotional intelligence must be extremely high.

The operation has gone very well. My wife recovered extremely fast from the operation and was mobile within a couple of days (we thought it would be weeks).

In a world where there are so many reckless doctors (like the one we had the misfortune to consult for our first baby), it is doctors like Dr Poonam who bring back our faith for the medical profession.

I am humbly thankful, grateful, and fortunate, as a husband and a parent, to have been blessed with an angel like Dr Poonam.

For any expectant mother / father, I will highly recommend Dr Poonam - you will be in very safe hands, and I am talking from the perspective of a first hand wonderful experience.`,
  },
  {
    name: "Atanu Deb Roy",
    source: "Practo",
    verified: true,
    date: "4 years ago",
    visitedFor: ["Pregnancy"],
    serviceSlug: "pre-pregnancy-counselling",
    pullQuote:
      "Dr Poonam has been an angel, a friend, a guide, everything to us in the form of a doctor.",
    text: `Dr Poonam has been an angel, a friend, a guide, everything to us in the form of a doctor. It was something miracle that we followed practo reviews and consulted her for our family planning and ThankGod we did that, today we are parents of a lovely daughter. Just 1 year we shifted from another city and immediately consulted her online and started our journey and finally she helped us deliver our baby starting from planning to conceiving to delivering. In this whole journey of 1 year she has been wonderful at every moment. She is friendly, helpful, patience, caring, supporting, extremely knowledgeable, approachable. She is reachable 24*7. Hats off to this lady who has given her heart and soul to her profession for the love of her patients. She owns every case and leaves no stone unturned to make sure her patients get the solution for which they visited her. Ours was a normal family planning and pregnancy journey and she was with us every second we needed her. We are lucky that she was the one to deliver our baby. She is highly highly experienced doctor yet she is with no arrogance, very humble. We are extremely extremely thankful to her for her support and presence in our journey and she is highly recommended for all planning to consult for pregnancy or any gynaec related issues. My words will fall short for all the appreciation to her and we can convey our deep gratitude towards her support. Anyone reading this review, please do consult her if you looking for some real solution to your queries.`,
  },
  {
    name: "Ankita Sharma",
    source: "Practo",
    verified: true,
    date: "2 years ago",
    visitedFor: [
      "Pregnancy Check Up",
      "Prenatal Care",
      "Pre and Post Delivery Care",
      "Pregnancy",
    ],
    serviceSlug: "obstetrics-and-gynaecology",
    pullQuote:
      "I consulted Dr. Poonam after I had already changed two gynecologist during my pregnancy. During my first visit itself I could tell that she ticked all the check boxes I was looking for.",
    text: `I consulted Dr. Poonam after I had already changed two gynecologist during my pregnancy. During my first visit itself I could tell that she ticked all the check boxes I was looking for in my gynae. She was very thorough with all the check points and very patient with all the queries we had as first time to be parents. Through all the visits till the end she ensured we understood in detail every medical situation. She is very conveniently accessible over whatsapp and call. She ensures that her patients not only are physically healthy during the pregnancy but also mentally doing well, creating an atmosphere of ease and comfort. At the end of the delivery we had some minor complications. Not only was she extremely proactive to take all precautionary steps, she ensured we were fully aware and convinved with the decision to go ahead with csec delivery. She ensured that the process was as smooth as possible for me, making the birth of my child the most beautiful experience for me in most comfortable environment possible`,
  },
  {
    name: "Reena Sharma",
    source: "Practo",
    verified: true,
    date: "2 years ago",
    visitedFor: ["Prenatal Care", "Pre and Post Delivery Care", "Pregnancy"],
    serviceSlug: "high-risk-pregnancies",
    pullQuote:
      "She was reachable 24x7 and always made me feel I was in safe hands.",
    text: `We came to know about Dr Poonam during my early pregnancy and decided to visit her for prenatal checkups. The best part about her is that she personally gets involved in her cases. She explains things in a very simplified way and gives sufficient time for the patients to ask questions. We asked her a lot of questions during my pregnancy journey and she was very prompt in answering all of them, be it during clinic visit or over call/whatsapp. There were lot of ups and downs during my pregnancy journey but Dr Poonam was there for me both as a doctor and a great emotional support. She was reachable 24x7 and always made me feel I was in safe hands.

I had to undergo C-section due to some underlying conditions but everything went very smooth. I was nervous and tensed when I was admitted and being prepared for the procedure but Dr Poonam personally came into my room, met my family and I felt so calm and relaxed. She guided me very well for post delivery care and breastfeeding. She had promised me a healthy baby and fulfilled the same. By the end of my pregnancy journey it feels like she is family and she is still approachable for any queries we have. For us she is a god figure and approaching her for my pregnancy journey was the best decision we made.`,
  },
  {
    name: "Fatma Zohra",
    source: "Practo",
    verified: true,
    date: "8 years ago",
    visitedFor: ["Pregnancy"],
    serviceSlug: "high-risk-pregnancies",
    pullQuote:
      "It was a high risk pregnancy but all thanks to Almighty and Dr. Poonam for twin boys. She was available 24×7 for me clearing each and every doubt.",
    text: `I visited Dr. Poonam for my second pregnancy. Earlier I had miscarriaged in 8 weeks and I was pregnant again with Monochorionic Twins (single placenta). It was a high risk pregnancy but all thanks to Almighty and Dr. Poonam for twin boys. She was available 24×7 for me clearing each and every doubt to us. We used to check on internet regarding complications with the twin pregnancy and bombard her with all the queries where she used to patiently answer us. I used to be so tensed on our visit but after meeting her I used to feel positive and elated. In truth She is a HEALER. She monitored my condition so closely that I used to feel she is a part of my family.

Now my whole family including my Mom is a great fan of Dr. Poonam.

Being pregnant in itself is a miracle and the journey can make u miserable with all nausea and vomiting but if you want to make it enjoyable I would recommend to have a strong and positive partner like Dr. Poonam.

Thank you so much Dr. Poonam.`,
  },
  {
    name: "Aditi Kadam",
    source: "Google",
    verified: true,
    localGuide: true,
    date: "3 weeks ago",
    visitedFor: ["Second opinion"],
    serviceSlug: "gynaecological-surgeries",
    pullQuote:
      "She saved me from an unnecessary surgical procedure that another doctor had recommended.",
    text: `Dr Poonam is an absolutely brilliant doctor - she saved me from an unnecessary surgical procedure that another doctor had recommended. She explained everything so clearly and thoroughly that it gave me complete peace of mind. I can't recommend her enough!`,
  },
  {
    name: "Tazyeen Anwari",
    source: "Google",
    verified: true,
    date: "3 weeks ago",
    visitedFor: ["Gynaecology consultation"],
    serviceSlug: "obstetrics-and-gynaecology",
    pullQuote:
      "She will never make you feel rushed, answers every single question with patience, and creates a clear, reassuring treatment plan.",
    text: `I cannot express enough gratitude for the care provided by Dr. Poonam. Finding a gynaecologist provider who combines genuine empathy with top-tier professional expertise can be rare, but Dr. Poonam exceeds expectations on every level. She will never make you feel rushed, answer every single question with patience, and create a clear, reassuring treatment plan. If you are looking for a gynaecologist who truly cares about their patients, look no further.`,
  },

  /* Reviews already published on the site before this rewrite — kept as-is. */
  {
    name: "Mansi Jain",
    source: "Practo",
    verified: true,
    date: "1 month ago",
    visitedFor: ["Treatment Satisfaction"],
    serviceSlug: "obstetrics-and-gynaecology",
    pullQuote:
      "Your skill, patience, and kindness and strength gave us hope when we needed it.",
    text: `Complete blessing !!! Thank you from the bottom of our hearts for everything you have done. Your skill, patience, and kindness and strength gave us hope when we needed...`,
  },
  {
    name: "Divya Ahuja",
    source: "Google",
    verified: true,
    date: "9 months ago",
    visitedFor: ["Pregnancy Check-up"],
    serviceSlug: "obstetrics-and-gynaecology",
    pullQuote:
      "She has been very supportive and guided us well during and after pregnancy.",
    text: `Dr poonam is an blessing for us. She has been very supportive and guided us well during and after pregnancy we highly recommend her and trust her...`,
  },
  {
    name: "Konica",
    source: "Practo",
    verified: true,
    date: "7 years ago",
    visitedFor: ["Pregnancy Care & Management"],
    serviceSlug: "obstetrics-and-gynaecology",
    pullQuote: "Dr. Poonam Nautiyal is a very genuine and supportive doctor.",
    text: `Dr. Poonam Nautiyal is a very genuine and supportive doctor. We found her via practo app and basis the feedbacks wanted to give it a shot to find a suitable doctor for us.`,
  },
  {
    name: "Sayoni",
    source: "Practo",
    verified: true,
    date: "5 years ago",
    visitedFor: ["Child Birth Education"],
    serviceSlug: "normal-vaginal-deliveries",
    pullQuote:
      "Though the journey till this point wasn't super smooth, Dr. Poonam made it so reassuring.",
    text: `This has been long overdue, but having a 3 month old has kept my hands full. Though the journey till this point wasn't super smooth, Dr. Poonam made it so reassuring.`,
  },
];

/** One review to surface on a given service page, where a relevant one exists. */
export const testimonialForService = (slug) =>
  testimonials.find((t) => t.serviceSlug === slug);
