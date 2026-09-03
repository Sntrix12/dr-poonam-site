/**
 * The 11 services, rewritten for search engines and answer engines.
 *
 * Copy rules applied to every field here:
 *  1. `aeoSummary` opens with a direct, self-contained definition sentence. Answer
 *     engines (ChatGPT, Perplexity, AI Overviews) lift the first sentence — it has to
 *     stand alone without the rest of the page.
 *  2. Plain-language search terms sit alongside clinical ones ("womb removal" next to
 *     "hysterectomy", "sugar in pregnancy" next to "gestational diabetes"), because
 *     that is what patients actually type.
 *  3. Mumbai locality appears where it is genuinely true, never stuffed.
 *  4. FAQ questions are phrased the way people search them.
 *  5. No claim about Dr. Nautiyal appears here that is not verifiable. Her credentials,
 *     experience and hospital attachments come from src/data/practice.js.
 */

export const servicesData = {
  /* ─────────── MATERNITY & PREGNANCY ─────────── */

  "pre-pregnancy-counselling": {
    title: "Pre Pregnancy Counselling",
    category: "Maternity & Pregnancy",
    alsoKnownAs: ["preconception checkup", "planning a baby", "before pregnancy test"],
    metaTitle: "Pre-Pregnancy Counselling in Mumbai | Dr. Poonam Nautiyal",
    metaDescription:
      "Planning a baby? Pre-pregnancy counselling in Mumbai with Dr. Poonam Nautiyal, MRCOG (UK) — preconception tests, folic acid, thyroid and sugar checks.",
    aeoSummary:
      "Pre-pregnancy counselling is a medical consultation you have before trying to conceive, to make sure your body is ready for a healthy pregnancy. It typically covers blood tests, a review of any existing conditions such as thyroid problems or diabetes, folic acid and nutrition advice, and cycle tracking so you know when you ovulate. Dr. Poonam Nautiyal offers preconception consultations in Mumbai for couples planning a baby.",
    image:
      "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Screening and control of existing conditions such as thyroid disorders, diabetes and high blood pressure before you conceive.",
      "Personalised nutrition advice and prenatal supplements, including folic acid started early enough to matter.",
      "Genetic screening and counselling where there is a family history of inherited conditions.",
      "Cycle and ovulation tracking, so you know your most fertile days.",
    ],
    detailedContent:
      "The best time to sort out a pregnancy problem is before the pregnancy starts. A preconception visit gives us a few unhurried months to bring your thyroid, blood sugar, blood pressure, weight and haemoglobin into a healthy range, to review any medicines you take regularly, and to start folic acid early — it works best when begun before conception, not after a positive test. Couples in Mumbai often come in after a difficult first pregnancy or a miscarriage, wanting the next attempt to go differently. That is exactly the right reason to come. Both partners are welcome at this consultation, and it is usually a single visit plus a set of routine blood tests.",
    faqs: [
      {
        q: "When should we start pre-pregnancy counselling?",
        a: "Ideally 3 to 6 months before you start trying to conceive. That is enough time for folic acid to build up, for any thyroid or sugar problem to be brought under control, and for lifestyle changes to take effect.",
      },
      {
        q: "What tests are done in a preconception checkup?",
        a: "The usual set is a complete blood count, thyroid profile, blood sugar, rubella immunity, blood group, and screening for infections such as HIV and Hepatitis B. Additional tests are added if your history calls for them.",
      },
      {
        q: "Should my husband come too?",
        a: "Yes, ideally. Around a third of difficulty conceiving involves a male factor, and lifestyle advice on smoking, alcohol, weight and heat exposure applies to both partners. A semen analysis may be suggested if you have already been trying for a while.",
      },
    ],
    relatedSlugs: ["infertility-treatment", "high-risk-pregnancies", "pcos-management"],
  },

  "high-risk-pregnancies": {
    title: "High Risk Pregnancy Care",
    category: "Maternity & Pregnancy",
    alsoKnownAs: ["complicated pregnancy", "BP in pregnancy", "sugar in pregnancy", "twins pregnancy"],
    metaTitle: "High Risk Pregnancy Specialist in Mumbai | Dr. Nautiyal",
    metaDescription:
      "High risk pregnancy care in Mumbai with Dr. Poonam Nautiyal, MRCOG (UK) — gestational diabetes, high BP, twins and pregnancy after 35, watched closely.",
    aeoSummary:
      "A high-risk pregnancy is one where a condition in the mother or the baby raises the chance of complications, and so needs closer monitoring than a routine pregnancy. Common reasons include diabetes or high blood pressure (including sugar in pregnancy and preeclampsia), carrying twins, thyroid disease, a previous miscarriage or caesarean, and pregnancy after 35. Dr. Poonam Nautiyal, who holds the MRCOG (UK), manages high-risk pregnancies in Mumbai with closer scans, tighter monitoring and a written plan for delivery.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Management of gestational diabetes (sugar in pregnancy) and preeclampsia (high BP in pregnancy).",
      "Care for pregnancy after 35, often called advanced maternal age.",
      "Monitoring plans for twins and triplets.",
      "Closer fetal monitoring and detailed anomaly and growth scans.",
    ],
    detailedContent:
      "Being told your pregnancy is high-risk is frightening, and the word makes it sound worse than it usually is. In practice it means one thing: you are seen more often and watched more closely, so that a problem is caught while it is still small. That might mean fortnightly visits instead of monthly ones in the third trimester, extra growth scans, home blood pressure or sugar readings, or adjusting a thyroid dose as the pregnancy progresses. Dr. Nautiyal's MRCOG (UK) training is in exactly this kind of protocol-driven monitoring, and her attachments to Surya Hospital in Santacruz West, Criticare in Andheri East, Cloudnine in Malad West and Apollo in Navi Mumbai mean that if a pregnancy does need specialised support at delivery, the infrastructure is already in place. Most closely-watched high-risk pregnancies end in a healthy baby and a healthy mother.",
    faqs: [
      {
        q: "Can I still have a normal delivery with a high-risk pregnancy?",
        a: "Often yes. It depends on the specific condition. Many women with well-controlled gestational diabetes or high blood pressure go on to have a normal vaginal delivery. Some situations do call for a planned caesarean, and that decision is made with you well before your due date, not in a rush on the day.",
      },
      {
        q: "How often will I need check-ups?",
        a: "More often than a routine pregnancy. Instead of monthly visits, expect to be seen every one to two weeks, particularly in the third trimester, with extra scans as needed.",
      },
      {
        q: "What makes a pregnancy high risk in the first place?",
        a: "The common reasons are diabetes or high blood pressure before or during pregnancy, thyroid disease, twins or triplets, being over 35, obesity, a previous caesarean, previous miscarriages or preterm birth, and any condition affecting the baby's growth.",
      },
      {
        q: "Which hospital will I deliver at?",
        a: "Dr. Nautiyal is attached to Surya Hospital (Santacruz West), Criticare Hospital (Andheri East), Apollo Hospitals (Navi Mumbai) and Cloudnine Hospital (Malad West). The choice is made together, based on where you live and what your pregnancy needs.",
      },
    ],
    relatedSlugs: ["normal-vaginal-deliveries", "pre-pregnancy-counselling", "obstetrics-and-gynaecology"],
  },

  "normal-vaginal-deliveries": {
    title: "Normal Vaginal Deliveries",
    category: "Maternity & Pregnancy",
    alsoKnownAs: ["normal delivery", "painless delivery", "epidural delivery", "natural birth"],
    metaTitle: "Painless Normal Delivery Doctor in Mumbai | Dr. Nautiyal",
    metaDescription:
      "Normal and painless delivery in Mumbai with Dr. Poonam Nautiyal — epidural pain relief, continuous monitoring and a faster recovery than a caesarean.",
    aeoSummary:
      "A normal vaginal delivery is childbirth through the birth canal, without surgery. It usually means a shorter hospital stay, a faster recovery and fewer surgical risks than a caesarean, and it gives the baby beneficial exposure to the mother's natural bacteria. A painless normal delivery is the same thing with epidural pain relief added, so you stay awake and aware while the pain of contractions is blocked. Dr. Poonam Nautiyal actively encourages normal delivery in Mumbai and offers epidural analgesia for women who want it.",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Painless delivery available using epidural anaesthesia, given by an experienced anaesthetist.",
      "Quicker recovery and a shorter hospital stay than a caesarean.",
      "Lower risk of surgical complications and wound infection.",
      "Continuous fetal heart monitoring throughout active labour.",
    ],
    detailedContent:
      "Most women who want a normal delivery can have one, and the single biggest factor is having a doctor who is patient enough to let labour take its course while watching carefully for the point where it should not. Dr. Nautiyal's approach is to keep you moving and upright where possible, to manage pain properly rather than expecting you to endure it, and to keep you informed at every stage so nothing happens to you without your understanding it. Epidural pain relief is offered, not pushed — some women want it from the start, some ask for it partway, some never do. If an emergency does arise during labour, she is an experienced surgeon and a caesarean can be done immediately in the same hospital, which is the reassurance that lets a trial of normal labour be safe in the first place.",
    faqs: [
      {
        q: "Is painless delivery safe for the baby?",
        a: "Yes. An epidural acts on the nerves of the lower spine to block pain signals. Very little medication reaches the bloodstream, and it does not affect the baby's heart rate or development. It is one of the most studied procedures in obstetrics.",
      },
      {
        q: "What happens if I end up needing a caesarean?",
        a: "Sometimes labour does not progress, or the baby shows signs of distress. If that happens, a caesarean is done then and there. Dr. Nautiyal performs the surgery herself, and if you already have an epidural in place it can usually be topped up so you stay awake for the birth.",
      },
      {
        q: "Can I have a normal delivery after a previous caesarean?",
        a: "In many cases yes — it is called a VBAC, a vaginal birth after caesarean. Whether it is safe for you depends on why the first caesarean was done, the type of scar, and how this pregnancy is progressing. It needs to be discussed and planned in advance.",
      },
      {
        q: "How long will I be in hospital after a normal delivery?",
        a: "Usually one to two days if mother and baby are both well, compared with three to four days after a caesarean.",
      },
    ],
    relatedSlugs: ["high-risk-pregnancies", "pre-pregnancy-counselling", "obstetrics-and-gynaecology"],
  },

  /* ─────────── ADVANCED SURGICAL CARE ─────────── */

  laparoscopy: {
    title: "Advanced Laparoscopy",
    category: "Advanced Surgical Care",
    alsoKnownAs: ["keyhole surgery", "durbin surgery", "minimally invasive surgery", "band aid surgery"],
    metaTitle: "Laparoscopic Gynaecologist in Mumbai | Keyhole Surgery",
    metaDescription:
      "Keyhole (laparoscopic) gynae surgery in Mumbai by Dr. Poonam Nautiyal — ovarian cysts, fibroids, endometriosis. Small cuts, less pain, home in a day.",
    aeoSummary:
      "Gynaecological laparoscopy — often called keyhole surgery — is an operation done through two or three cuts about a centimetre wide, using a camera and fine instruments instead of one large incision. It is used to diagnose and treat ovarian cysts, uterine fibroids, endometriosis, blocked fallopian tubes and unexplained pelvic pain. Compared with open surgery it means less pain, almost no visible scar, and going home in a day or two rather than a week. Dr. Poonam Nautiyal performs laparoscopic gynaecological surgery in Mumbai.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Cuts of roughly a centimetre, leaving little or no visible scar.",
      "Noticeably less pain after surgery and less blood loss during it.",
      "Discharge on the same day or the next day in most cases.",
      "Return to normal daily activity in one to two weeks instead of six.",
    ],
    detailedContent:
      "Laparoscopy is now the default approach for most gynaecological operations, and for good reason: a camera inside the abdomen gives a far better view of the ovaries, tubes and the back of the uterus than an open incision does. That matters most in endometriosis and in fertility surgery, where the goal is to remove disease while preserving every bit of healthy ovarian and tubal tissue. If you have been told you need surgery for an ovarian cyst, a fibroid, or persistent pelvic pain, it is worth asking whether it can be done laparoscopically — and worth getting a second opinion if you have been told it cannot. Dr. Nautiyal sees a steady stream of second-opinion consultations for exactly this question.",
    faqs: [
      {
        q: "How long does it take to recover from laparoscopy?",
        a: "Most women go home the same day or the next. Light activity and desk work are usually fine within three to five days, and full recovery takes one to two weeks — against roughly six weeks for equivalent open surgery.",
      },
      {
        q: "Is laparoscopy safe?",
        a: "Yes. It is the preferred surgical approach for most gynaecological conditions precisely because it carries a lower risk of infection, less blood loss and fewer wound complications than open surgery.",
      },
      {
        q: "Will laparoscopy leave a scar?",
        a: "The cuts are about a centimetre each and one is usually hidden in the navel. Once healed they are typically very hard to see.",
      },
      {
        q: "Can laparoscopy help me get pregnant?",
        a: "It can, where the cause of infertility is something surgery can correct — endometriosis, a blocked tube, or an ovarian cyst distorting the ovary. It is not a fertility treatment on its own, and whether it will help in your case depends on your full assessment.",
      },
    ],
    relatedSlugs: ["gynaecological-surgeries", "infertility-treatment", "pcos-management"],
  },

  "gynaecological-surgeries": {
    title: "Gynaecological Surgeries",
    category: "Advanced Surgical Care",
    alsoKnownAs: ["womb removal", "uterus removal", "fibroid operation", "ovarian cyst operation"],
    metaTitle: "Gynae Surgeon in Mumbai | Hysterectomy & Fibroid Surgery",
    metaDescription:
      "Gynae surgery in Mumbai by Dr. Poonam Nautiyal — laparoscopic hysterectomy, fibroid and ovarian cyst removal, prolapse repair. Second opinions welcome.",
    aeoSummary:
      "Gynaecological surgery covers operations on the uterus, ovaries, fallopian tubes and pelvic floor. The common ones are hysterectomy (removal of the uterus, often called womb removal), myomectomy (removing fibroids while keeping the uterus), ovarian cystectomy (removing a cyst while preserving the ovary) and prolapse repair. Most can now be done laparoscopically, through small cuts. Dr. Poonam Nautiyal performs these procedures in Mumbai, with a preference for the approach that preserves the most healthy tissue.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Total laparoscopic hysterectomy (removal of the uterus through keyhole surgery).",
      "Myomectomy — removal of fibroids while leaving the uterus intact.",
      "Ovarian cystectomy that preserves healthy ovarian tissue and hormone function.",
      "Surgical repair of pelvic organ prolapse.",
    ],
    detailedContent:
      "Being told you need gynaecological surgery raises two questions that deserve straight answers: does this operation actually need to happen, and is there a way to do it that keeps more of what is healthy. Every consultation here starts with those two questions, and a second opinion is always welcome — one of the reviews on Dr. Nautiyal's Google listing is from a patient who avoided an operation another doctor had recommended. Where surgery is genuinely needed, you get a clear explanation of what is being removed and why, what the recovery actually looks like week by week, and what it does or does not mean for your hormones and fertility. Surgery is performed at the hospitals she is attached to across Mumbai — Surya in Santacruz West, Criticare in Andheri East, Cloudnine in Malad West and Apollo in Navi Mumbai.",
    faqs: [
      {
        q: "What is the difference between a myomectomy and a hysterectomy?",
        a: "A myomectomy removes only the fibroids and leaves the uterus in place, so pregnancy remains possible. A hysterectomy removes the uterus entirely, which ends periods and the possibility of pregnancy. Which one is right depends on your age, your symptoms and whether you want children.",
      },
      {
        q: "Will I go into menopause after a hysterectomy?",
        a: "Not if your ovaries are left in place — and they usually are, in women who have not yet reached menopause. It is the ovaries, not the uterus, that make the hormones. Your periods stop, but you do not enter surgical menopause. If the ovaries do have to be removed, that is discussed with you beforehand.",
      },
      {
        q: "Do all fibroids need surgery?",
        a: "No. Many fibroids cause no symptoms and simply need watching. Surgery is considered when they cause heavy bleeding, pain, pressure on the bladder, or difficulty conceiving. Size alone is not automatically a reason to operate.",
      },
      {
        q: "How long is the recovery?",
        a: "After laparoscopic surgery, most women are home within a day or two and back to normal activity in two to three weeks. Open surgery takes longer, usually around six weeks.",
      },
    ],
    relatedSlugs: ["laparoscopy", "obstetrics-and-gynaecology", "menopausal-counselling"],
  },

  "safe-abortions": {
    title: "Safe & Legal Abortions",
    category: "Advanced Surgical Care",
    alsoKnownAs: ["MTP", "medical termination of pregnancy", "abortion pill", "unwanted pregnancy"],
    metaTitle: "Safe & Legal Abortion (MTP) in Mumbai | Confidential",
    metaDescription:
      "Confidential, safe and legal abortion (MTP) in Mumbai with Dr. Poonam Nautiyal. Medical and surgical options, ultrasound dating, no judgement.",
    aeoSummary:
      "Abortion is legal in India under the Medical Termination of Pregnancy Act, and can be carried out up to 20 weeks of pregnancy — and up to 24 weeks for certain categories of women — by a registered doctor. There are two methods: a medical abortion using tablets, suitable in early pregnancy, and a short surgical procedure for later stages. Dr. Poonam Nautiyal provides confidential MTP consultations in Mumbai, with an ultrasound first to date the pregnancy accurately and decide which method is safe for you.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173ff9e5952?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Completely confidential and non-judgemental consultation.",
      "Medical abortion using tablets, where the pregnancy is early enough.",
      "Short surgical procedure where tablets are not appropriate.",
      "Follow-up to confirm the process is complete, plus contraception advice if you want it.",
    ],
    detailedContent:
      "This is a decision that belongs to you, and the role of a doctor is to make sure whatever you decide is done safely and privately. The first step is always an ultrasound, because how many weeks pregnant you are determines which method is safe — and this is the single most important reason not to take abortion tablets bought without a prescription, which is both unsafe and illegal. An ectopic pregnancy, for example, looks like an ordinary early pregnancy on a test but is dangerous and needs entirely different treatment. Consultations are private, your information is not shared, and you will not be lectured. Follow-up matters as much as the procedure: a short review visit confirms everything has completed properly.",
    faqs: [
      {
        q: "Is abortion legal in India?",
        a: "Yes. Under the Medical Termination of Pregnancy Act it is legal up to 20 weeks, and up to 24 weeks for certain categories of women, when carried out by a registered medical practitioner. Married and unmarried women have the same access.",
      },
      {
        q: "Will my family be told?",
        a: "No. Consultations are confidential. For an adult woman, your consent alone is what is required — the law does not require your husband's or your parents' permission.",
      },
      {
        q: "Is a medical abortion painful?",
        a: "It involves cramping similar to a heavy period, sometimes stronger, along with heavy bleeding. Pain relief is prescribed, and you are told exactly what is normal and what warrants calling immediately.",
      },
      {
        q: "How soon can I get back to normal?",
        a: "Most women return to ordinary, non-strenuous activity within one to two days. Avoid heavy lifting and strenuous exercise for about a week, and attend the follow-up visit even if you feel completely fine.",
      },
    ],
    relatedSlugs: ["obstetrics-and-gynaecology", "pre-pregnancy-counselling", "pcos-management"],
  },

  /* ─────────── HOLISTIC HEALTH & WELLNESS ─────────── */

  "obstetrics-and-gynaecology": {
    title: "Obstetrics & Gynaecology",
    category: "Holistic Health & Wellness",
    alsoKnownAs: ["lady doctor", "gynae checkup", "period problems", "routine checkup"],
    metaTitle: "Gynaecologist in Mumbai | Routine Check-ups & Women's Health",
    metaDescription:
      "General gynaecology in Mumbai with Dr. Poonam Nautiyal — annual check-ups, Pap smears, period problems and contraception. Andheri East, Mon to Sat.",
    aeoSummary:
      "Obstetrics and gynaecology is the medical speciality covering pregnancy and childbirth on one side, and women's reproductive health on the other. A routine gynaecology visit typically includes a general and pelvic examination, a Pap smear where due, and a discussion of periods, contraception or any symptom worrying you. Dr. Poonam Nautiyal provides general gynaecological care in Mumbai for women from adolescence through menopause, consulting Monday to Saturday in Andheri East.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Annual well-woman check-up, including Pap smear and breast examination.",
      "Assessment and treatment of irregular, heavy or painful periods.",
      "Treatment of vaginal infections, urinary infections and pelvic pain.",
      "Contraception advice and family planning, including long-acting options.",
    ],
    detailedContent:
      "You do not need a problem to see a gynaecologist. An annual visit is how cervical cancer gets caught at a stage where it is still entirely curable, how anaemia from years of heavy periods gets picked up, and how thyroid and hormonal issues that quietly affect everything else get identified. It is also, frankly, the appointment women in Mumbai most often postpone. The consultation is unhurried and private, and there is no symptom too small or too embarrassing to raise — irregular periods, pain during sex, discharge, leaking urine when you cough, low desire and menopausal symptoms are all ordinary things to ask about. Online consultations by WhatsApp or video are available for reviewing reports and for follow-ups where a physical examination is not needed.",
    faqs: [
      {
        q: "How often should a woman see a gynaecologist?",
        a: "Once a year for a routine check-up, even with no symptoms. That annual visit is what makes preventive screening — Pap smear, breast examination, pelvic check — actually happen.",
      },
      {
        q: "When should a girl have her first gynaecologist visit?",
        a: "Between roughly 13 and 15, or sooner if periods are painful, very heavy, very irregular, or have not started by 15. A first visit is usually just a conversation — no internal examination is needed for most teenage concerns.",
      },
      {
        q: "How often do I need a Pap smear?",
        a: "Screening usually starts at 21. If results are normal, a Pap smear every three years is generally sufficient; from 30 onwards a Pap smear combined with HPV testing every five years is an option. Your history may change this.",
      },
      {
        q: "Do you offer online consultations?",
        a: "Yes. Dr. Nautiyal consults online over WhatsApp and video call, which works well for second opinions, going through lab reports, and follow-ups. A physical examination still needs a clinic visit.",
      },
    ],
    relatedSlugs: ["cervical-cancer-vaccine", "pcos-management", "menopausal-counselling"],
  },

  "pcos-management": {
    title: "PCOS Management",
    category: "Holistic Health & Wellness",
    alsoKnownAs: ["PCOD", "polycystic ovary", "irregular periods", "hormonal imbalance"],
    metaTitle: "PCOS & PCOD Treatment Doctor in Mumbai | Dr. Poonam Nautiyal",
    metaDescription:
      "PCOS and PCOD treatment in Mumbai with Dr. Poonam Nautiyal — irregular periods, weight gain, acne, facial hair and trouble conceiving.",
    aeoSummary:
      "Polycystic Ovary Syndrome (PCOS, also commonly called PCOD in India) is a hormonal condition in which the ovaries do not release an egg regularly, causing irregular or missed periods, weight gain, acne, excess facial or body hair, and difficulty conceiving. It cannot be permanently cured, but it responds very well to treatment: for many women, losing 5–10% of body weight alone restores regular ovulation. Dr. Poonam Nautiyal treats PCOS in Mumbai with a plan built around whichever symptom is troubling you most.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Getting periods regular and predictable again.",
      "Treatment for acne and excess facial or body hair (hirsutism).",
      "Weight management and treatment of insulin resistance, which drives much of PCOS.",
      "Ovulation induction and fertility support for women trying to conceive.",
    ],
    detailedContent:
      "PCOS affects roughly one in five Indian women, and no two women have the same version of it. One woman comes in because her periods have stopped, another because of acne and facial hair she finds distressing, a third because she has been trying to conceive for a year. Those are three different treatment plans, which is why a single standard prescription rarely works. What is common to all of them is insulin resistance underneath, so diet and activity are genuinely part of the treatment rather than an afterthought — and the amount of weight loss needed is far less than most women fear. PCOS also matters long after the immediate symptom is settled, because it raises the lifetime risk of type 2 diabetes and of the uterine lining thickening when periods are skipped for months. That is the reason to treat it even if you are not currently trying to get pregnant.",
    faqs: [
      {
        q: "What is the difference between PCOD and PCOS?",
        a: "In everyday use in India the two words are used interchangeably. Strictly, PCOD describes ovaries with multiple small follicles on ultrasound, while PCOS is the full syndrome — irregular ovulation plus hormonal changes plus, often, the ultrasound appearance. PCOS is the term used internationally.",
      },
      {
        q: "Can I get pregnant if I have PCOS?",
        a: "Yes. PCOS is a leading cause of difficulty conceiving because ovulation is irregular, but most women with PCOS do conceive — often with weight loss and lifestyle change alone, and otherwise with medication that induces ovulation.",
      },
      {
        q: "Can PCOS be cured permanently?",
        a: "No, but it can be controlled very well. Think of it the way you would think of blood pressure: managed rather than cured. Symptoms can be brought fully under control, and they may return if treatment and lifestyle changes stop.",
      },
      {
        q: "Do I have to take medicines for PCOS?",
        a: "Not always. For many women, dietary change and losing 5 to 10 per cent of body weight is enough to restore regular ovulation. Medication is added when that is not sufficient, or when you are actively trying to conceive.",
      },
    ],
    relatedSlugs: ["infertility-treatment", "obstetrics-and-gynaecology", "pre-pregnancy-counselling"],
  },

  "infertility-treatment": {
    title: "Infertility Treatment",
    category: "Holistic Health & Wellness",
    alsoKnownAs: ["not conceiving", "trouble getting pregnant", "IUI", "test tube baby", "IVF"],
    metaTitle: "Infertility Specialist in Mumbai | Fertility Treatment",
    metaDescription:
      "Trouble conceiving? Fertility evaluation and treatment in Mumbai with Dr. Poonam Nautiyal — testing for both partners, ovulation induction, IUI and IVF.",
    aeoSummary:
      "Infertility is usually defined as not conceiving after a year of regular unprotected sex, or after six months if the woman is 35 or older. It is investigated in both partners: ovulation, the fallopian tubes and the uterus in the woman, and a semen analysis in the man. Treatment ranges from ovulation-inducing tablets through IUI to IVF, depending on what the tests show. Dr. Poonam Nautiyal provides fertility evaluation and treatment in Mumbai, and explains what each step realistically offers before you commit to it.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Complete fertility evaluation for both partners, not just the woman.",
      "Follicular monitoring by ultrasound to track ovulation precisely.",
      "Ovulation induction with modern, well-tolerated medication.",
      "Straight guidance on IUI and IVF — what each involves and when it is genuinely worth it.",
    ],
    detailedContent:
      "Difficulty conceiving is exhausting in a way that is hard to explain to anyone who has not been through it, and it is made worse by advice from every direction and by treatment being escalated faster than the evidence justifies. The approach here is to find out what is actually wrong before treating anything: check that you are ovulating, check that the tubes are open, check the uterus, and check the semen analysis — that last one first, because it is the quickest and least invasive test and around a third of cases involve a male factor. Many couples turn out to need far less than they feared. Where IVF genuinely is the right answer, you will be told so plainly and referred appropriately, rather than kept on cycles of treatment that are not going to work.",
    faqs: [
      {
        q: "When should we see a doctor about not conceiving?",
        a: "After twelve months of trying if you are under 35, or after six months if you are 35 or older. Come sooner if you have very irregular periods, known PCOS or endometriosis, a history of pelvic surgery or infection, or two or more miscarriages.",
      },
      {
        q: "What is ovulation induction?",
        a: "Tablets or injections that stimulate the ovaries to release a mature egg. It is the usual first-line treatment when the problem is irregular ovulation, as in PCOS, and is combined with ultrasound tracking to time things properly.",
      },
      {
        q: "What is the difference between IUI and IVF?",
        a: "In IUI, prepared sperm is placed directly into the uterus around ovulation — simpler, cheaper, and useful for mild problems. In IVF, eggs are collected and fertilised in the laboratory and an embryo is transferred back. IVF has higher success rates but is more involved and more expensive.",
      },
      {
        q: "Does my husband need to be tested too?",
        a: "Yes, from the start. A semen analysis is quick and inexpensive, and a male factor is involved in roughly a third of cases. Testing only the woman wastes months.",
      },
    ],
    relatedSlugs: ["pcos-management", "pre-pregnancy-counselling", "laparoscopy"],
  },

  "menopausal-counselling": {
    title: "Menopausal Counselling",
    category: "Holistic Health & Wellness",
    alsoKnownAs: ["menopause", "hot flashes", "HRT", "periods stopping"],
    metaTitle: "Menopause Doctor in Mumbai | Hot Flushes & HRT Treatment",
    metaDescription:
      "Menopause treatment in Mumbai with Dr. Poonam Nautiyal — hot flushes, night sweats, mood changes, bone health and HRT assessed properly.",
    aeoSummary:
      "Menopause is the point at which periods have stopped for twelve consecutive months, typically between 45 and 55, and the years of symptoms leading up to it are called perimenopause. Falling oestrogen causes hot flushes, night sweats, disturbed sleep, mood changes, vaginal dryness and accelerating bone loss. These are treatable — with hormone replacement therapy (HRT) where suitable, and with effective non-hormonal options where it is not. Dr. Poonam Nautiyal provides menopause consultations in Mumbai, including a proper individual risk assessment before HRT.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Effective treatment for hot flushes and night sweats.",
      "Proper individual assessment before prescribing hormone replacement therapy.",
      "Screening and prevention for osteoporosis, the bone thinning that follows menopause.",
      "Treatment for vaginal dryness and discomfort during sex — common, and very treatable.",
    ],
    detailedContent:
      "Perimenopause often begins in the early forties, years before periods actually stop, and it is regularly mistaken for stress, thyroid trouble or depression. Women are frequently told this is simply part of getting older and left to cope. It does not have to be. Symptoms can be treated, and the two things that quietly matter most in the long run — bone density and heart health — can be protected if they are addressed at the right time rather than a decade later. HRT has a reputation shaped by a study from 2002 whose findings have since been substantially reinterpreted; for most healthy women within about ten years of menopause and with troubling symptoms, the benefits outweigh the risks. But that is a decision to reach individually, after reviewing your own history, and there are good non-hormonal options for women who cannot or would rather not take it.",
    faqs: [
      {
        q: "Is hormone replacement therapy (HRT) safe?",
        a: "For most healthy women who start it within about ten years of menopause and have troubling symptoms, yes — the benefits generally outweigh the risks. It is not suitable for everyone, which is why a personal history and risk assessment come before any prescription.",
      },
      {
        q: "At what age does menopause usually happen?",
        a: "Most commonly between 45 and 55, with an average around 51. Symptoms often begin several years before periods actually stop. Menopause before 40 is called premature ovarian insufficiency and does need investigation.",
      },
      {
        q: "How do I protect my bones after menopause?",
        a: "Falling oestrogen speeds up bone loss. A DEXA scan measures bone density, and calcium with vitamin D plus weight-bearing exercise forms the foundation of prevention. Specific medication is added where the scan shows it is needed.",
      },
      {
        q: "I still get periods but feel terrible — is that menopause?",
        a: "It may well be perimenopause, the transition phase. Cycles become irregular while hot flushes, poor sleep and mood changes begin. It is worth being assessed rather than assumed, since thyroid problems and anaemia can look very similar.",
      },
    ],
    relatedSlugs: ["obstetrics-and-gynaecology", "gynaecological-surgeries", "cervical-cancer-vaccine"],
  },

  "cervical-cancer-vaccine": {
    title: "Cervical Cancer Vaccine",
    category: "Holistic Health & Wellness",
    alsoKnownAs: ["HPV vaccine", "cervical cancer prevention", "Gardasil", "Cervavac"],
    metaTitle: "HPV Vaccine in Mumbai | Cervical Cancer Prevention",
    metaDescription:
      "HPV vaccination in Mumbai with Dr. Poonam Nautiyal. Cervical cancer is largely preventable — vaccination from age 9, and for women up to 45.",
    aeoSummary:
      "The cervical cancer vaccine protects against the human papillomavirus (HPV), the infection responsible for nearly all cervical cancers. It works best when given between the ages of 9 and 14, before any sexual activity, when only two doses are needed; it is also approved and useful for women up to 45, given as three doses. Cervical cancer remains one of the most common cancers among Indian women and is one of the very few that can be largely prevented. Dr. Poonam Nautiyal provides HPV vaccination and cervical screening in Mumbai.",
    image:
      "https://images.unsplash.com/photo-1633458022646-609b7eb931fb?q=80&w=1200&auto=format&fit=crop",
    benefits: [
      "Protection against the high-risk HPV types that cause most cervical cancers.",
      "Only two doses needed when given between ages 9 and 14.",
      "Also protects against genital warts caused by certain HPV types.",
      "Combined with routine Pap smears, close to complete protection.",
    ],
    detailedContent:
      "Cervical cancer kills tens of thousands of Indian women every year, and it is very nearly entirely preventable — through vaccination before exposure, and screening afterwards. Vaccinating a daughter at 9 to 14 is one of the highest-value things a parent can do for her long-term health, and the schedule is simpler at that age: two doses instead of three. Indian-made HPV vaccines have made this considerably more affordable than it once was. Vaccination after becoming sexually active is still worthwhile, because it protects against the high-risk types you have not already encountered. What vaccination does not do is replace screening: no vaccine covers every cancer-causing HPV type, so Pap smears continue on the normal schedule regardless.",
    faqs: [
      {
        q: "What is the best age for the HPV vaccine?",
        a: "Between 9 and 14, before any sexual activity — the immune response is strongest then, and only two doses are needed. It remains approved and beneficial up to age 45, given as three doses.",
      },
      {
        q: "Do I still need Pap smears if I have been vaccinated?",
        a: "Yes. The vaccine covers the highest-risk HPV types but not every one of them, so routine cervical screening continues on the usual schedule.",
      },
      {
        q: "Can boys get the HPV vaccine?",
        a: "Yes. HPV causes cancers in men too, and vaccinating boys also reduces transmission. Many countries vaccinate both sexes routinely.",
      },
      {
        q: "Is the HPV vaccine safe?",
        a: "It is among the most closely studied vaccines in use, given to hundreds of millions of people worldwide. Side effects are usually limited to a sore arm, and occasionally mild fever or dizziness shortly after the injection.",
      },
    ],
    relatedSlugs: ["obstetrics-and-gynaecology", "menopausal-counselling", "pcos-management"],
  },
};

/** Stable ordering, used for navigation, the sitemap and llms.txt. */
export const serviceSlugs = Object.keys(servicesData);

export const getService = (slug) => servicesData[slug];

/** The three groupings used on the homepage and the services page. */
export const serviceCategories = [
  {
    id: "maternity",
    title: "Maternity & Pregnancy",
    shortDescription:
      "Care from before you conceive through to delivery — including pregnancies that need closer watching.",
    description:
      "Care that starts before you conceive and continues through delivery. That covers planning a baby, routine antenatal check-ups, pregnancies that need closer monitoring for sugar, blood pressure or twins, and normal delivery with epidural pain relief for those who want it.",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1200&auto=format&fit=crop",
    slugs: [
      "pre-pregnancy-counselling",
      "high-risk-pregnancies",
      "normal-vaginal-deliveries",
    ],
  },
  {
    id: "surgical",
    title: "Advanced Surgical Care",
    shortDescription:
      "Keyhole surgery for cysts, fibroids and endometriosis — small cuts, quicker recovery.",
    description:
      "Most gynaecological operations no longer need a large incision. Keyhole (laparoscopic) surgery treats ovarian cysts, fibroids and endometriosis through cuts about a centimetre wide, which means less pain and going home in a day or two. Safe and legal termination of pregnancy is also provided, confidentially.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    slugs: ["laparoscopy", "gynaecological-surgeries", "safe-abortions"],
  },
  {
    id: "holistic",
    title: "Holistic Health & Wellness",
    shortDescription:
      "Routine check-ups, period and hormone problems, fertility, menopause and prevention.",
    description:
      "The everyday gynaecology that keeps you well: annual check-ups and Pap smears, period problems, PCOS and hormonal imbalance, difficulty conceiving, menopause, and HPV vaccination to prevent cervical cancer. Care for every stage, from a teenager's first visit to life after menopause.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    slugs: [
      "obstetrics-and-gynaecology",
      "pcos-management",
      "infertility-treatment",
      "menopausal-counselling",
      "cervical-cancer-vaccine",
    ],
  },
];
