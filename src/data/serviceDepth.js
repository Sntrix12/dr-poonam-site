/**
 * ⚠️  CLINICAL CONTENT — NOT YET REVIEWED BY DR. NAUTIYAL.
 *
 * Everything in this file is medical writing: symptoms, what happens at an
 * appointment, what tests are done and in what order, recovery timelines, and
 * warning signs. It is mainstream, conservative obstetrics and gynaecology, but it
 * is written by an assistant and it carries her name once it is live. It must be
 * read and corrected by her before this file is merged.
 *
 * Why it exists at all: the service pages ran to roughly 570 words each and were
 * competing with hospital and aggregator pages several times longer. Depth is what
 * a patient searching "PCOS treatment Mumbai" is actually looking for, and it is
 * what answer engines quote.
 *
 * It is a separate file on purpose, so that every sentence needing clinical sign-off
 * sits in one place rather than scattered through src/data/services.js.
 *
 * All eleven services are covered. The four written first — pcos-management,
 * high-risk-pregnancies, normal-vaginal-deliveries, infertility-treatment — set the
 * shape the other seven follow: symptoms and when to come in; what happens at the
 * appointment; what treatment or recovery involves, with timescales; what to bring
 * and what to ask.
 *
 * THE PARTS TO READ FIRST, because they are the ones where being wrong causes harm
 * rather than embarrassment:
 *   - every "report the same day" and "seek help" list (high-risk-pregnancies,
 *     normal-vaginal-deliveries, laparoscopy, gynaecological-surgeries,
 *     safe-abortions, obstetrics-and-gynaecology)
 *   - the legal statements in safe-abortions: who must consent, the gestational
 *     limits, and confidentiality
 *   - "do not stop your own medicines" in pre-pregnancy-counselling
 *   - postmenopausal bleeding in menopausal-counselling
 *
 * RULES FOLLOWED HERE:
 *  - Nothing is asserted about Dr. Nautiyal, her practice, her timings or her fees.
 *    Those facts live in src/data/practice.js and are not duplicated or extended.
 *    Where this text says "you will be asked" or "the usual first step is", it
 *    describes ordinary practice, not a promise about hers.
 *  - No outcome is promised, no success rate is quoted, and no medicine is
 *    recommended by name as a prescription. Drug names appear only where naming the
 *    class is what makes the sentence useful.
 *  - Every "call the same day" list errs towards being checked unnecessarily.
 *
 * Merged into servicesData at the bottom of src/data/services.js, so the FAQ
 * structured data and the page both pick it up from one source.
 */

export const serviceDepth = {
  "pcos-management": {
    sections: [
      {
        heading: "Signs that point to PCOS, and when to get checked",
        paragraphs: [
          "The signs of PCOS are easy to dismiss one at a time. It is usually the combination that matters, and most women have some of the following rather than all of them:",
        ],
        items: [
          "Periods that arrive more than 35 days apart, or fewer than eight periods in a year.",
          "Periods that have stopped altogether for three months or more, when you are not pregnant.",
          "Acne that has carried on past the teenage years, often along the jawline, chin and upper back.",
          "Coarse, dark hair growing on the face, chest, abdomen or back.",
          "Weight that has gone on around the middle and is difficult to shift.",
          "Hair thinning at the crown or a receding hairline.",
          "Darkened, velvety patches of skin at the neck, armpits or groin — this is a visible sign of insulin resistance.",
          "Not conceiving after a year of trying, or six months if you are 35 or older.",
        ],
        after: [
          "The diagnosis needs two of three things: irregular or absent ovulation, raised male hormones either on a blood test or visible as acne and excess hair, and the polycystic appearance on an ultrasound. That is why the diagnosis is not made on a scan alone — plenty of women have polycystic-looking ovaries and no syndrome at all. It is also why the scan is not relied on in the first few years after periods begin, when multiple follicles are normal.",
          "Come sooner rather than later if your periods have stopped for three months or more. Months without a period allow the lining of the uterus to build up unopposed, and bleeding that eventually arrives after a long gap can be very heavy. That is worth reporting rather than waiting out.",
        ],
      },
      {
        heading: "What happens at a PCOS appointment",
        paragraphs: [
          "A first PCOS consultation is mostly conversation, and the tests follow from it rather than the other way round.",
        ],
        items: [
          "History — when your periods started and what they have done since, weight changes, skin and hair, family history of diabetes or PCOS, the medicines and supplements you take, and, importantly, whether you are trying to conceive now, later, or not at all.",
          "Examination — height, weight and waist measurement, blood pressure, where the hair growth is, and any skin changes.",
          "Blood tests — a hormone profile, thyroid function and prolactin, taken in the first few days of a cycle where there is one to work with. Alongside those, the metabolic side: fasting glucose and insulin or HbA1c, a lipid profile, and vitamin D.",
          "Pelvic ultrasound — counts the follicles, measures the volume of each ovary, and checks the thickness of the uterine lining, which is the part that matters if periods have been absent for months.",
          "A plan — built around whichever symptom is troubling you most, because treating irregular periods, treating acne and hair, and trying to conceive are three different plans.",
        ],
      },
      {
        heading: "What treatment involves, and how long it takes to work",
        paragraphs: [
          "Weight, diet and activity are treatment rather than advice attached to treatment. The target is a 5 to 10 per cent reduction in body weight, which for a woman of 70 kg is between three and a half and seven kilograms — considerably less than most women assume, and enough on its own to restore ovulation in many cases.",
          "Where that is not enough, medication is added according to what is being treated. A medicine that improves insulin sensitivity is used where insulin resistance is prominent. The combined oral contraceptive pill regulates the cycle, protects the uterine lining and improves acne and excess hair. Anti-androgen medicines are added for hair and skin where the pill alone is not enough. Cyclical progesterone can be used to bring on a regular bleed where the pill is not suitable. When you are trying to conceive, the approach changes entirely to ovulation induction with ultrasound tracking.",
          "Timescales are worth knowing in advance, because this is where people give up too early. Cycles often become more regular within about three months. Acne takes a similar time. Excess hair takes six months or more to show a real change, because the hair already present has to grow out first — there is nothing wrong with the treatment if month two looks the same.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring:"],
        items: [
          "The dates of your last six to twelve periods. A note or a period-tracking app is fine — this is the single most useful thing you can arrive with.",
          "Any previous blood tests, hormone profiles and ultrasound reports, even old ones.",
          "A list of all medicines and supplements you take, including anything for skin or hair.",
          "A rough weight history: what you weighed a year ago, five years ago.",
        ],
        after: [
          "Questions worth asking: which of my symptoms are we treating first, and why that one? How long before I should expect to see a change? What did my sugar and insulin results show, and when should they be rechecked? Does the plan change if I want to conceive this year rather than in five years? How often should I be reviewed once things are stable?",
        ],
      },
    ],
    faqs: [
      {
        q: "Are the cysts in PCOS dangerous, and do they need to be removed?",
        a: "No. Despite the name, they are not cysts in the usual sense — they are small immature follicles that have stalled instead of releasing an egg. They do not need to be drained or removed, and surgery is not part of routine PCOS treatment. An ovarian cyst that genuinely needs attention is a different finding, and looks different on a scan.",
      },
      {
        q: "Will I have to take the pill forever?",
        a: "No. The contraceptive pill is one tool among several and is used for as long as it is doing a job — regulating the cycle, protecting the uterine lining, or controlling acne and excess hair. It is stopped when you want to conceive, and the plan is reviewed periodically rather than left running indefinitely.",
      },
      {
        q: "Does PCOS go away after pregnancy or after menopause?",
        a: "The symptoms often change. Cycles can settle after a pregnancy, and the periods issue resolves at menopause because periods stop anyway. What does not go away is the metabolic side: the raised lifetime risk of type 2 diabetes and of cholesterol and blood pressure problems persists, which is the reason to keep having those checked even once the symptoms that first brought you in have settled.",
      },
    ],
  },

  "high-risk-pregnancies": {
    sections: [
      {
        heading: "Symptoms to report the same day, at any stage of pregnancy",
        paragraphs: [
          "In a closely monitored pregnancy the things that matter most happen between appointments. Do not wait for the next visit if any of these appear — call, and expect to be seen:",
        ],
        items: [
          "Any bleeding from the vagina, however light, at any stage.",
          "A severe or persistent headache, blurred vision or flashing lights, pain under the ribs on the right side, or sudden swelling of the face, hands or feet. Together these suggest preeclampsia and are the reason blood pressure is checked at every visit.",
          "Your baby moving less than usual, or in a pattern that has changed, from 28 weeks onwards. Do not wait until morning and do not rely on cold drinks or sugar to provoke movement.",
          "A gush or a persistent trickle of fluid. Note the time and the colour.",
          "Regular, painful contractions before 37 weeks.",
          "Fever, burning when passing urine, or discharge that smells offensive.",
          "Vomiting that will not stop, or being unable to keep fluids down.",
        ],
        after: [
          "Being checked and sent home is the expected outcome most of the time, and it is a better outcome than waiting. Nobody is wasting anybody's time.",
        ],
      },
      {
        heading: "What the extra monitoring actually consists of",
        paragraphs: [
          "\"High-risk\" describes how closely a pregnancy is watched, not how it is going to end. In practice it means some combination of the following, chosen for the specific reason your pregnancy is in the group:",
        ],
        items: [
          "Visits every one to two weeks instead of monthly, particularly in the third trimester.",
          "Blood pressure and a urine check at every single visit — that pairing is how preeclampsia is caught early.",
          "Growth scans every two to four weeks from around 28 weeks where the baby's growth is the concern, rather than the two or three scans of a routine pregnancy.",
          "Doppler studies, which measure blood flow through the cord and placenta and show whether the baby is being well supplied.",
          "Home blood sugar readings, fasting and after meals, where there is diabetes or gestational diabetes.",
          "Thyroid function rechecked through the pregnancy, because the dose that was right before conception often is not right later.",
          "Daily awareness of fetal movements from 28 weeks, and CTG monitoring of the baby's heart rate in the third trimester where it is indicated.",
        ],
      },
      {
        heading: "The delivery plan, and why it is agreed in advance",
        paragraphs: [
          "A high-risk pregnancy should have a delivery plan written well before the due date rather than decided in the moment. The plan covers how you will deliver, roughly when, at which hospital, who else needs to be present — a paediatrician or an anaesthetist, for example — and what happens if labour starts early or at an inconvenient hour.",
          "The timing depends on the condition. Well-controlled gestational diabetes often does not need early delivery. Preeclampsia, poor growth or poorly controlled diabetes may mean planning delivery before the due date, because at some point the baby is safer out than in. That balance is a judgement made on your specific results, and it should be explained to you in those terms.",
          "A plan is not a promise. It is written down so that everyone knows the intention and so that a change of plan is a deliberate decision rather than an improvisation. Ask for it early, and ask what would change it.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring:"],
        items: [
          "Every scan report from this pregnancy, not only the most recent one. The trend across scans is what growth monitoring actually reads.",
          "All blood results, including the ones from before you were pregnant if you have them.",
          "Your home blood pressure or blood sugar readings, with dates.",
          "A list of every medicine and dose, including thyroid tablets, insulin, blood pressure medicines and supplements.",
          "Records from any previous pregnancy or delivery, and the operation notes if you have had a caesarean — the type of scar matters for this pregnancy.",
        ],
        after: [
          "Questions worth asking: which specific risk applies to me, and what does it actually mean for this pregnancy? What are we watching for, and what would we do if we found it? What should make me call immediately rather than wait? When will we decide about the timing and the mode of delivery? Which hospital, and what happens if labour starts before that is arranged?",
        ],
      },
    ],
    faqs: [
      {
        q: "Does high-risk mean my baby is in danger?",
        a: "It means the chance of a complication is higher than average, which is not the same as the complication happening. The label exists to trigger closer monitoring, and closer monitoring is what makes most of those pregnancies end the same way an ordinary one does. If there is a specific concern about your baby at any point, you should be told that in plain terms rather than left to infer it from the label.",
      },
      {
        q: "Will I need bed rest or have to stop working?",
        a: "Usually not. Strict bed rest is no longer routinely advised in pregnancy — it carries its own risks, including blood clots and loss of muscle strength, and for most conditions it has not been shown to help. Some situations do call for reduced activity or time off, and that should be a specific instruction for a specific reason, not a blanket one.",
      },
      {
        q: "If I have gestational diabetes, will I be diabetic after the birth?",
        a: "In most women the blood sugars return to normal after delivery. What remains is a raised lifetime risk of type 2 diabetes, which is why a glucose test is recommended around six to twelve weeks after the birth and then periodically afterwards. That follow-up test is easy to skip in the middle of looking after a newborn, and it is the one worth keeping.",
      },
    ],
  },

  "normal-vaginal-deliveries": {
    sections: [
      {
        heading: "How to tell labour has started, and when to go in",
        paragraphs: [
          "Early labour is easier to recognise in hindsight than at the time. The pattern to look for is contractions that come regularly and get longer, stronger and closer together, and that do not ease off when you rest or change position. Practice contractions do the opposite — they are irregular and they settle.",
          "Alongside those you may notice a \"show\", a plug of blood-stained mucus, which can come days before labour and does not mean anything is about to happen immediately. Waters breaking can be a gush or a slow trickle; note the time and the colour.",
        ],
        items: [
          "First baby: head in when contractions have been about five minutes apart, lasting 45 to 60 seconds, for an hour or so.",
          "A later baby: go in earlier than that, because labour is often faster.",
          "Go in straight away, whatever the contractions are doing, if you are bleeding, if the fluid is green, brown or foul-smelling, if the baby's movements have reduced, or if you are under 37 weeks.",
        ],
      },
      {
        heading: "What happens during labour, stage by stage",
        paragraphs: [
          "The first stage is the longest by far. It begins with the early or latent phase, in which the cervix softens and opens to about four to six centimetres; this can take many hours and is usually best spent at home, eating, resting and moving about. The active phase follows, with stronger and closer contractions until the cervix is fully open. This is the stage where the baby's heart rate is monitored, where pain relief is decided, and where being upright and mobile genuinely helps.",
          "The second stage is the pushing stage, from full dilatation to the birth. It can take minutes or a couple of hours, and tends to be longer with a first baby and with an epidural in place. You will be coached on when to push and when to stop, and stopping when told is as important as pushing.",
          "The third stage is the delivery of the placenta, usually within five to thirty minutes of the birth. An injection is normally given to help the uterus contract, which substantially reduces bleeding. After that, unless there is a reason not to, the baby goes skin to skin, and the first feed is usually offered within the first hour.",
        ],
      },
      {
        heading: "Recovery, week by week",
        paragraphs: [
          "The first two days are usually spent in hospital. You will be encouraged to get up and walk within hours, both because it helps recovery and because it reduces the risk of clots. Passing urine for the first time can be uncomfortable, particularly if there are stitches; pouring warm water while you go helps more than most things.",
          "Through the first week, bleeding is heavy at first and then tapers, changing from red to brown to a lighter discharge over the following weeks. Perineal soreness is at its worst in the first few days and is managed with ice, simple painkillers and keeping the area clean and dry. Stitches, where there are any, dissolve on their own over two to three weeks.",
          "By around six weeks most women are through the bulk of the recovery, and this is when the postnatal check usually happens: bleeding should have stopped, stitches healed, and contraception is worth discussing whether or not you are breastfeeding. Pelvic floor exercises should start well before then — in the first days, gently — and continue for months rather than weeks. Return to exercise gradually, and leave driving until you can brake hard without hesitating.",
        ],
        after: [
          "Call the same day, at any point after going home, for: bleeding heavy enough to soak a pad in an hour, or clots larger than a plum; discharge that smells offensive; a temperature; a hot, red, painful area in a breast; pain, redness or swelling in a calf; breathlessness or chest pain; or a wound or stitches that become increasingly painful rather than less. And say so if you feel persistently low, tearful or unable to cope — postnatal depression is common, it is not a failure of any kind, and it treats well when it is spoken about early.",
        ],
      },
      {
        heading: "What to pack, and what to ask beforehand",
        paragraphs: ["Pack, and keep the bag ready from about 36 weeks:"],
        items: [
          "All your pregnancy records, scan reports and blood results, including your blood group report.",
          "Identification and insurance papers, and any hospital registration paperwork done in advance.",
          "Your regular medicines in their boxes.",
          "Maternity pads, comfortable loose clothes, slippers and toiletries.",
          "Clothes, blankets and nappies for the baby.",
        ],
        after: [
          "Questions worth asking well before the due date: is epidural pain relief available at any hour at the hospital I am booked into, or only during certain hours? What pain relief is offered if I do not want an epidural? Who will deliver the baby if labour starts at night or at a weekend? What is the hospital's policy on having a birth partner with me? Is skin-to-skin contact and delayed cord clamping routine there? Ask these while there is time to act on the answers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I need an episiotomy?",
        a: "Not routinely. An episiotomy is a deliberate cut to enlarge the opening, and it is no longer done as a matter of course — it is used when it is needed, for example if the baby needs to be delivered quickly or an instrument is being used. Many women deliver with no cut and either no tear or a small one that needs a few stitches.",
      },
      {
        q: "Does having an epidural make a caesarean more likely?",
        a: "The evidence does not show that it does. An epidural can lengthen the pushing stage somewhat and slightly increases the chance of an instrumental delivery with forceps or a vacuum cup, but it does not in itself increase the chance of a caesarean. The decision to have one is about the pain relief you want, not a trade against the kind of birth you have.",
      },
      {
        q: "Can I eat and drink during labour?",
        a: "Clear fluids are generally encouraged through labour, and in an uncomplicated early labour light food is usually fine. Policies differ between hospitals and are stricter where there is any prospect of a general anaesthetic, so ask at the hospital you are booked into rather than assuming.",
      },
    ],
  },

  "infertility-treatment": {
    sections: [
      {
        heading: "When to come in, and what is worth doing before you do",
        paragraphs: [
          "The usual threshold is twelve months of regular unprotected sex without conceiving, or six months if the woman is 35 or older. Come sooner, without waiting out the clock, if there are very irregular or absent periods, known PCOS or endometriosis, previous pelvic surgery or a pelvic infection, two or more miscarriages, a known problem with sperm, or previous cancer treatment.",
        ],
        items: [
          "Track your cycles for two or three months before the appointment — first day of bleeding, cycle length. This is genuinely useful information and nobody else can supply it.",
          "Have sex every two to three days across the cycle rather than trying to pinpoint ovulation. Aiming at a single day is less effective than covering the window, and it is a great deal less stressful.",
          "The woman should start folic acid now rather than waiting for a positive test, at the dose advised for her.",
          "Both partners: stop smoking, keep alcohol low, and address weight at either extreme. These affect both egg and sperm quality, and they are the parts you control.",
        ],
      },
      {
        heading: "The tests, and the order they are done in",
        paragraphs: [
          "A fertility assessment answers four questions: are you ovulating, are the tubes open, is the uterus normal, and is the sperm adequate. The semen analysis is usually done first, because it is the quickest and least invasive test of the four and a male factor is involved in roughly a third of couples. Testing only the woman first costs months.",
          "For the man, a semen analysis is done after two to five days without ejaculation, and repeated after about three months if it is abnormal — sperm take around two and a half months to be produced, so a single poor result on its own does not settle anything.",
          "For the woman, the sequence is usually: blood tests on day two or three of the cycle, together with thyroid function, prolactin and rubella immunity, and a measure of ovarian reserve that can be taken on any day; confirmation that you are ovulating, either with a progesterone level about a week before the next period is due or by tracking follicles on ultrasound; a pelvic ultrasound of the uterus and ovaries, which also counts the resting follicles and finds fibroids, polyps and endometriomas; and a test of whether the tubes are open, usually a dye test done under X-ray or ultrasound. A laparoscopy is used where there is a specific reason to look inside, not as a routine step.",
        ],
      },
      {
        heading: "The treatment ladder, and how to know when to move up it",
        paragraphs: [
          "Treatment is a ladder and the point is to stand on each rung long enough to know whether it works, without standing there for years.",
        ],
        items: [
          "Timed intercourse with ovulation induction — tablets that prompt the ovary to release a mature egg, with ultrasound tracking to time it. The usual first step where the problem is irregular ovulation, as in PCOS, and normally tried for a defined number of cycles rather than indefinitely.",
          "Intrauterine insemination (IUI) — prepared sperm placed directly into the uterus around ovulation. It needs at least one open tube and reasonable sperm, and it is usually given a limited number of cycles before being reconsidered.",
          "In vitro fertilisation (IVF), with ICSI where the sperm requires it — the step for blocked tubes, severe male factor, failure of the earlier steps, or where age and ovarian reserve mean time is the limiting factor.",
          "Surgery, where a specific correctable cause has been found — a polyp, a fibroid distorting the cavity, an endometrioma, or a blocked and fluid-filled tube.",
        ],
        after: [
          "Two things are worth being told plainly rather than discovering later. The woman's age is the single strongest influence on the chance of success at every rung of this ladder, which is why waiting has a cost that the tests themselves do not show. And where IVF genuinely is the right answer, saying so early is kinder than cycling through lesser treatments that were never likely to work.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring:"],
        items: [
          "Both partners to the first appointment if at all possible. This is an assessment of two people.",
          "The dates of the last six to twelve periods.",
          "Every previous test and scan report, including semen analyses, however old.",
          "Records of any previous treatment: the drug names, the doses, how many cycles, and what happened.",
          "Details of any previous pregnancies, miscarriages or ectopic pregnancies.",
        ],
        after: [
          "Questions worth asking: what specifically is the problem in our case, or is it unexplained? What is the realistic chance of success with the step you are proposing, for someone of my age? How many cycles should we try before changing the plan? What does each step cost in total, including drugs and scans, and what is not included? What are the risks — ovarian hyperstimulation, multiple pregnancy — and how are they reduced?",
        ],
      },
    ],
    faqs: [
      {
        q: "Is IVF the only option if we have been trying for years?",
        a: "No, and length of time trying is not on its own what decides it. What decides it is the cause. A couple who have been trying for three years with a treatable ovulation problem and open tubes may conceive on tablets. IVF is the right step for blocked tubes, severe male factor, when simpler treatments have been given a fair trial, or when age means there is no time for a long ladder. The tests are what tell you which situation you are in.",
      },
      {
        q: "Does stress cause infertility?",
        a: "Stress is not usually the cause, and being told to relax is unhelpful as well as inaccurate. Severe stress can disturb ovulation in some women, and the difficulty of the whole experience is real and worth support in its own right. But treating stress is not a substitute for finding out what is actually wrong.",
      },
      {
        q: "Is there an age at which it is too late?",
        a: "There is no single cut-off, but the decline in egg number and quality is real, accelerates through the late thirties, and is not reversed by treatment. That is an argument for being assessed early rather than for giving up: knowing where you stand at 34 opens options that are narrower at 40. A frank conversation about your own results and what they mean is more useful than a general figure.",
      },
    ],
  },

  "pre-pregnancy-counselling": {
    sections: [
      {
        heading: "When to book, and what you can start doing today",
        paragraphs: [
          "About three months before you want to start trying is the useful window. That is long enough to get blood results back, correct a thyroid dose or an iron deficiency and see the effect, and have folic acid in your system before conception rather than after it. Coming later is not wasted — a single visit still catches most of what matters — but three months is what lets a problem actually be fixed rather than only noted.",
        ],
        items: [
          "Start folic acid now, at the dose advised for you. It works by preventing a defect that forms in the first few weeks, often before you know you are pregnant, so starting after a positive test is too late for the thing it prevents.",
          "Stop smoking, and keep alcohol low — both partners. This affects egg and sperm quality, not only the pregnancy.",
          "Address weight at either extreme, gently and early. Crash dieting immediately before conceiving is not the aim.",
          "Bring a list of every medicine and supplement you take, and do not stop any of them on your own first.",
        ],
        after: [
          "That last point is the one that matters most and is most often got wrong. Some long-term medicines do need changing before pregnancy, but stopping thyroid, epilepsy, blood pressure or mental health medicines without medical advice is more dangerous than continuing them. The change, where one is needed, is planned and supervised.",
        ],
      },
      {
        heading: "The tests usually done, and why each one is there",
        paragraphs: [
          "A preconception screen is a short list, and almost all of it is a single blood draw.",
        ],
        items: [
          "Blood group and Rh type — so that Rh incompatibility is known about before it matters rather than after.",
          "Haemoglobin and a full blood count. Iron deficiency is common and takes weeks to correct, which is exactly why it is better found now.",
          "Thyroid function. An underactive thyroid is easy to miss, common in women, and directly affects both conceiving and the pregnancy.",
          "Blood sugar, as fasting glucose or HbA1c. Where there is diabetes, control before conception matters more than control later.",
          "Rubella immunity. If you are not immune, the vaccine is given now, because it cannot be given during pregnancy.",
          "Hepatitis B, HIV and syphilis — the standard screen, done early so that anything found can be treated before rather than during a pregnancy.",
          "Vitamin D, and a haemoglobin study where thalassaemia carrier status is a possibility. Carrier screening matters most when both partners are tested.",
          "A pelvic ultrasound, to look at the uterus and ovaries before anything is riding on them.",
        ],
      },
      {
        heading: "Conditions worth sorting out before rather than during",
        paragraphs: [
          "A preconception visit is mostly about the few months of unhurried time it buys. Thyroid doses can be adjusted and rechecked. Blood pressure medicines that are not suitable in pregnancy can be switched to ones that are, and the new one tested for a few weeks first. Diabetes can be brought to a target before conception rather than chased after it. Acne and psoriasis medicines that must not be taken anywhere near a pregnancy can be stopped with the right gap. Epilepsy medicines can be reviewed by the specialist who prescribes them, with a plan rather than an abrupt stop.",
          "Where there is a family history of an inherited condition on either side, this is also the point to discuss genetic screening, because the useful version of that conversation happens before a pregnancy exists.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring, and bring your partner if you can:"],
        items: [
          "Every medicine and supplement you both take, in their boxes if that is easier than writing them out.",
          "Any previous blood results, however old.",
          "Records of any previous pregnancy, miscarriage, ectopic pregnancy or caesarean, including operation notes.",
          "A note of your cycle over the last few months.",
          "What is known about inherited conditions on both sides of the family.",
        ],
        after: [
          "Questions worth asking: is there anything in my results that needs fixing before we start, and how long will that take? Is every medicine I take safe to continue? Which vaccinations should I have now rather than later? Given my history, is there anything specific we should plan for? How long should we try before coming back?",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should we wait before trying again after a miscarriage?",
        a: "Physically, most women can try again once they have had one normal period, which makes dating the next pregnancy straightforward. There is no strong evidence that waiting longer than that improves the outcome. Emotionally is a separate question with a different answer for everybody, and it is a legitimate reason to wait as long as you want to.",
      },
      {
        q: "Does a previous caesarean change what we should do before trying again?",
        a: "It is worth raising, yes. The usual advice is to leave an interval between a caesarean and the next pregnancy so the scar heals fully, and the operation notes matter — the type of scar affects whether a vaginal birth is an option next time. Bring those notes if you have them; if you do not, the hospital that did the surgery can supply them.",
      },
      {
        q: "I am over 35. Does that change the advice?",
        a: "It makes coming in earlier more worthwhile rather than changing what is done. Fertility declines with age and the chance of some complications rises, so there is less value in waiting a year to see what happens and more in checking now that nothing straightforward is in the way. The tests themselves are the same ones.",
      },
    ],
  },

  laparoscopy: {
    sections: [
      {
        heading: "What happens on the day of the operation",
        paragraphs: [
          "Laparoscopy is done under a general anaesthetic, so you will be asleep throughout and will remember none of it. You will be asked not to eat or drink from midnight, or from whatever time you are given — this is a safety requirement rather than a formality, and an operation is postponed if it is not followed.",
          "During the procedure the abdomen is gently inflated with carbon dioxide to create room to see and work. Two or three cuts of about a centimetre are made, usually one at the navel for the camera and one or two lower down for the instruments. What is then done depends on what is being treated — a cyst removed from an ovary while keeping the ovary, a fibroid taken out, endometriosis treated, tubes checked. The gas is let out at the end and the cuts are closed with dissolvable stitches or surgical glue. Most operations take somewhere between half an hour and an hour and a half.",
        ],
      },
      {
        heading: "Recovery, day by day",
        paragraphs: [
          "The thing nobody warns people about, and which causes the most alarm, is shoulder-tip pain. Gas left behind irritates the diaphragm and the pain is felt in the shoulder rather than the abdomen. It is common, it has nothing to do with your shoulder, and it settles within a day or two. Walking about helps it more than lying still.",
        ],
        items: [
          "Same day — awake within hours, sitting up, drinking, and usually walking. Sore, but far less so than after open surgery.",
          "Home the same day or the next, depending on what was done and how you are.",
          "First week — tender around the cuts, tired more than you expect, and light bleeding or spotting if the uterus or cervix was involved. Simple painkillers are usually enough.",
          "One to two weeks — back to desk work for most people, and driving once you could do an emergency stop without hesitating, which is the actual test rather than a number of days.",
          "Around four weeks — heavy lifting, gym and strenuous exercise, or as advised for the specific operation you had.",
        ],
        after: [
          "Recovery is faster than after open surgery but it is still surgery. Tiredness in the second week is normal and is not a sign that something has gone wrong.",
        ],
      },
      {
        heading: "What to arrange beforehand",
        paragraphs: ["Worth sorting out before the day rather than on it:"],
        items: [
          "Someone to take you home and stay with you the first night. You cannot drive yourself home after a general anaesthetic, and you should not be alone overnight.",
          "Clear instructions on which of your regular medicines to take that morning and which to stop, particularly anything that thins the blood.",
          "Time off work booked realistically, and someone to cover lifting at home if you have small children.",
          "Loose comfortable clothes for going home, and sanitary pads.",
          "Nail polish and jewellery off, since monitoring needs a clear fingertip.",
        ],
      },
      {
        heading: "Symptoms to report after going home",
        paragraphs: [
          "Pain after laparoscopy should get less each day. Anything moving in the other direction is worth a phone call rather than a wait. Contact the hospital or the doctor the same day for:",
        ],
        items: [
          "Pain that is increasing rather than easing, or that painkillers no longer control.",
          "A temperature, shivering, or feeling generally unwell.",
          "Redness, swelling or discharge from any of the cuts.",
          "An abdomen that becomes hard, swollen or very tender.",
          "Being unable to pass urine, or burning when you do.",
          "Persistent vomiting.",
          "Pain, redness or swelling in a calf, or any breathlessness or chest pain — these need attention immediately rather than the same day.",
          "Heavy vaginal bleeding, or discharge with an offensive smell.",
        ],
      },
    ],
    faqs: [
      {
        q: "What happens if they find something unexpected during the operation?",
        a: "It is worth agreeing in advance what you do and do not consent to, because you cannot be asked once you are asleep. A good pre-operative conversation covers the likely findings and what would be done about each, including the situations in which a laparoscopy would need to be converted to open surgery. Ask for that conversation if it has not happened, and say clearly if there is something you do not want done.",
      },
      {
        q: "Will laparoscopy affect my egg reserve?",
        a: "Ordinary laparoscopy does not. Removing an endometrioma — a cyst caused by endometriosis — can, because healthy ovarian tissue is difficult to separate from it entirely. That is a real trade-off rather than a reason not to operate, and if fertility matters to you it should be discussed explicitly, including whether ovarian reserve is worth measuring beforehand.",
      },
      {
        q: "How long before I can have sex again?",
        a: "It depends on what was done. After a simple diagnostic laparoscopy it is usually a matter of waiting until you feel comfortable, often a week or two. Where the uterus or cervix was operated on, the wait is longer and specific. Ask about your operation rather than assuming, and expect a clear answer.",
      },
    ],
  },

  "gynaecological-surgeries": {
    sections: [
      {
        heading: "The questions to ask before agreeing to any gynaecological operation",
        paragraphs: [
          "Surgery is easier to agree to than to undo. These are the questions worth asking every time, and a good answer to each should be available before you decide:",
        ],
        items: [
          "Does this need to happen now, and what actually happens if I wait six months?",
          "Is there a non-surgical option — medication, a hormonal coil, watchful waiting — and why is it not the right choice for me?",
          "Exactly what is being removed, and what is being left?",
          "Can it be done laparoscopically or vaginally rather than open? If not, why not?",
          "What does it mean for my hormones, my periods and my fertility?",
          "What is the recovery, week by week, and when can I lift, drive, work and have sex again?",
          "What are the risks, and how often do they actually happen?",
          "Who will perform the operation, and at which hospital?",
        ],
        after: [
          "And the one people feel awkward about: may I have a second opinion first? The answer should always be yes, and a doctor who is uncomfortable with the question has told you something useful.",
        ],
      },
      {
        heading: "Hysterectomy: what is removed, and what each choice means",
        paragraphs: [
          "Hysterectomy is not one operation, and the differences matter more than the name suggests. A total hysterectomy removes the uterus and the cervix; a subtotal leaves the cervix in place. Separately, and this is the decision that has the largest effect on how you will feel, the ovaries may be removed or left.",
          "If the ovaries are left — and in a woman who has not yet reached menopause they usually are — you do not go into surgical menopause. Hormones come from the ovaries, not the uterus. Periods stop, because the lining that produced them has gone, but the hormonal changes of menopause arrive at their own time. If the ovaries are removed before menopause, menopause begins immediately, and that is a conversation to have properly beforehand rather than discover afterwards.",
          "The fallopian tubes are often removed at the same time even when the ovaries are kept, because it reduces the future risk of ovarian cancer and costs nothing in hormone terms. Ask whether that is planned. Ask too whether you still need cervical smears afterwards — the answer depends on whether the cervix was removed and on your own history, and it is frequently assumed rather than checked.",
        ],
      },
      {
        heading: "Recovery, and how much the route changes it",
        paragraphs: [
          "The single biggest influence on recovery is not what was removed but how. A laparoscopic or vaginal hysterectomy typically means two to three weeks before normal activity; the same operation done open, through an abdominal incision, is nearer six. That is the reason the route is worth asking about, and worth a second opinion if you have been told keyhole is impossible.",
          "Removing a fibroid while keeping the uterus is a bigger operation than it sounds and the recovery reflects what had to be done to reach the fibroid. Removing an ovarian cyst laparoscopically is often a day case with a recovery much like any other laparoscopy.",
          "After a hysterectomy specifically, expect light vaginal bleeding or a brownish discharge on and off for several weeks as the internal stitches dissolve — this is normal and not a sign of a problem. Nothing should go into the vagina, and that includes intercourse and tampons, until you are told the top of the vagina has healed, usually around six weeks.",
        ],
      },
      {
        heading: "Symptoms to report after going home",
        paragraphs: ["Contact the hospital or the doctor the same day for:"],
        items: [
          "Heavy vaginal bleeding, particularly bright red bleeding that soaks a pad.",
          "Vaginal discharge with an offensive smell.",
          "Pain that is increasing rather than easing, or that painkillers no longer control.",
          "A temperature, shivering, or feeling generally unwell.",
          "Redness, swelling or discharge from a wound.",
          "Being unable to pass urine, or burning and urgency when you do.",
          "Pain, redness or swelling in a calf, or any breathlessness or chest pain — immediately, not the same day.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will a hysterectomy change how I feel — my weight, my mood, or sex?",
        a: "Where the ovaries are kept, the hormonal picture does not change, and most women report that sex is unaffected or better once the problem that led to the surgery is gone. Weight gain afterwards is usually about reduced activity during recovery rather than the operation itself. Mood can be genuinely affected, particularly where the loss of fertility is significant to you, and that is worth saying out loud beforehand rather than managing alone afterwards.",
      },
      {
        q: "Do fibroids come back after a myomectomy?",
        a: "They can. Myomectomy removes the fibroids that are there; it does not change the tendency to form them, so new ones can develop over the years that follow, and the chance is higher the younger you are and the more fibroids were removed. That is not an argument against the operation — it is the right choice where the uterus is to be kept — but it is worth knowing when comparing it with a hysterectomy.",
      },
      {
        q: "Should my ovaries be removed at the same time?",
        a: "Usually not, if you have not yet reached menopause and there is no specific reason to remove them. Removing healthy ovaries brings on immediate surgical menopause and its longer-term effects on bone and heart health. There are situations where it is the right decision — a strong family history, or disease involving the ovaries — and it should be a deliberate, discussed choice rather than something that happens because you were already in theatre.",
      },
    ],
  },

  "safe-abortions": {
    sections: [
      {
        heading: "What the law actually requires, and who has to consent",
        paragraphs: [
          "Two things about Indian law are widely misunderstood, and both are worth stating plainly because the belief that they work the other way is what pushes women towards unsafe alternatives.",
        ],
        items: [
          "If you are 18 or older and of sound mind, your consent is the only consent required. A husband's, a partner's or a parent's permission is not needed and cannot be insisted on. For a girl under 18, or a woman who is mentally ill, a guardian's written consent is required.",
          "Your identity is protected. The Medical Termination of Pregnancy Act requires that the name and details of a woman who undergoes a termination are not disclosed except to a person authorised by law. This is a legal obligation on the doctor, not a courtesy.",
        ],
        after: [
          "The time limits: a termination can be carried out up to 20 weeks on the opinion of one registered medical practitioner, and between 20 and 24 weeks for specified categories of women on the opinion of two. Beyond 24 weeks it requires approval from a state Medical Board and applies only to substantial fetal abnormality. This is also why determining the sex of the fetus is illegal under a separate Act and is never done — it has nothing to do with this decision and cannot be part of it.",
        ],
      },
      {
        heading: "What happens at the first visit",
        paragraphs: [
          "The first visit is an assessment, not the procedure, and nothing is done to you at it beyond a scan and some blood tests.",
        ],
        items: [
          "An ultrasound, to confirm the pregnancy is in the uterus and to date it accurately. Dating is what decides which method is safe, and the scan is also what rules out an ectopic pregnancy — one growing outside the uterus, which looks like an ordinary early pregnancy on a home test and is dangerous.",
          "Blood group and Rh type. If you are Rh negative, an anti-D injection is needed, and missing it can affect a future pregnancy.",
          "Haemoglobin, and other blood tests as needed.",
          "A conversation about which method suits your stage of pregnancy, what each involves, and what the follow-up will be.",
          "Contraception, if and only if you want to discuss it. Fertility returns almost immediately, so it is worth knowing that even if you decide against anything.",
        ],
      },
      {
        heading: "The two methods, and what each is actually like",
        paragraphs: [
          "A medical termination uses tablets and is an option in early pregnancy only. The process happens over hours to a couple of days, mostly at home. Expect bleeding heavier than a period, with clots, and cramping stronger than period pain — painkillers are given for exactly this. It works the great majority of the time; where it does not complete, a short procedure follows, and that is why the follow-up visit is not optional.",
          "A surgical termination is a short procedure, usually taking minutes rather than hours, done under sedation or a light anaesthetic as a day case. You go home the same day. Bleeding afterwards is generally lighter and shorter than with tablets, and completion is confirmed at the time rather than a fortnight later.",
          "Neither method requires an overnight stay in ordinary circumstances, and both are followed by a review visit to confirm the process is complete.",
        ],
      },
      {
        heading: "Afterwards: what is normal, and what is not",
        paragraphs: [
          "Bleeding for several days to around two weeks is normal, as is cramping that eases over the first few days. Periods usually return within four to six weeks. Fertility returns almost immediately, before the first period, which surprises people and matters.",
          "How you feel about it afterwards varies enormously, and there is no correct version. Relief is common and is not something to feel guilty about. Sadness is common too, and can arrive later than expected. Either is worth saying out loud at the follow-up visit rather than carrying alone.",
        ],
        after: [
          "Seek medical help the same day for: bleeding that soaks two pads an hour for two hours or more; a temperature or shivering; severe pain that painkillers do not touch; discharge with an offensive smell; or pregnancy symptoms that continue for more than a week or two, which can mean the process has not completed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need my husband's or my parents' permission?",
        a: "If you are 18 or older and of sound mind, no. Your own consent is the only consent the law requires, and no clinic can lawfully insist on anyone else's. If you are under 18, the written consent of a guardian is required. This is the single most common misunderstanding about the law in India, and believing otherwise is what leads women to unsafe alternatives.",
      },
      {
        q: "Can I just buy the tablets myself?",
        a: "No, and this is the most dangerous thing you could do. The tablets are prescription-only for a reason: without a scan, nobody knows how many weeks pregnant you are, and nobody knows whether the pregnancy is ectopic. Taking them for an ectopic pregnancy does not end it and delays the treatment that would. Selling them without a prescription is also illegal.",
      },
      {
        q: "Will this affect my ability to have children later?",
        a: "A termination carried out properly by a doctor does not reduce future fertility. The risks that could affect it — an incomplete procedure, or an untreated infection — are exactly what the follow-up visit exists to catch, which is the reason to attend it even when you feel completely fine.",
      },
    ],
  },

  "obstetrics-and-gynaecology": {
    sections: [
      {
        heading: "What actually happens at a well-woman check-up",
        paragraphs: [
          "The annual visit is short and considerably less of an ordeal than the reputation suggests. Knowing the order of it removes most of the dread.",
        ],
        items: [
          "A conversation first, fully clothed: your periods, any symptoms, contraception, previous pregnancies, medicines, and family history of breast, ovarian or cervical cancer.",
          "Blood pressure, weight and height.",
          "A breast examination, and a word about what to look for yourself between visits.",
          "An abdominal examination.",
          "A speculum examination and a Pap smear, if one is due. The smear itself takes seconds — a small brush collects cells from the cervix. Uncomfortable for most women, painful for a few, and over quickly.",
          "An internal examination with two fingers and a hand on the abdomen, to feel the size and position of the uterus and ovaries.",
          "Blood tests where something in the conversation warrants them — haemoglobin, thyroid, blood sugar.",
        ],
        after: [
          "You can ask for a chaperone, ask for anything to be explained before it is done, and ask for any part of it to stop. None of that is unusual and none of it needs justifying.",
        ],
      },
      {
        heading: "Symptoms worth an appointment rather than waiting for the annual visit",
        paragraphs: [
          "Most of these turn out to be something ordinary. That is not a reason to sit on them, because the small number that are not are the ones where time matters:",
        ],
        items: [
          "Any bleeding after the menopause. This one always needs investigating, however light and however brief.",
          "Bleeding between periods, or after sex.",
          "Periods that soak a pad or tampon every hour for several hours, last more than seven days, or leave you breathless and exhausted.",
          "Pelvic pain that persists, or pain during sex.",
          "Discharge with an offensive smell, or with itching or soreness.",
          "A lump in a breast, a change in the skin or nipple, or blood-stained discharge from a nipple.",
          "Leaking urine when you cough, laugh or exercise. Common, not something to live with, and treatable.",
          "Persistent bloating, feeling full quickly when eating, or needing to pass urine more often — especially together, and especially most days for three weeks or more.",
        ],
      },
      {
        heading: "Screening, and roughly when each is due",
        paragraphs: [
          "Screening schedules differ between countries and between guidelines, so treat these as the shape of it and confirm your own intervals at your visit.",
          "Cervical screening starts in the early twenties and continues every three years with a Pap smear, or at longer intervals where HPV testing is used instead. It continues after the HPV vaccine, because no vaccine covers every cancer-causing type. Breast awareness is lifelong — knowing what is normal for you is what makes a change noticeable — with mammography worth discussing from around 40. Blood pressure and blood sugar are worth checking periodically from your thirties. Bone density becomes relevant after menopause, earlier where there are risk factors.",
        ],
      },
      {
        heading: "How to prepare, and what to bring",
        paragraphs: ["A few things make the visit more useful:"],
        items: [
          "Book outside your period if a smear is due, and do not use vaginal medication, lubricant or douches for a couple of days beforehand — any of these can make the sample unreadable and mean repeating it.",
          "Know the date your last period started. This is the question you will definitely be asked.",
          "Bring previous Pap results, scan reports and blood tests, and a list of medicines including contraception and supplements.",
          "Write your questions down. The one you most want to ask is the one most likely to evaporate at the door.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to be sexually active to see a gynaecologist?",
        a: "No. Plenty of reasons to see one have nothing to do with sex — painful, heavy or absent periods, PCOS, acne and excess hair, contraception, the HPV vaccine, or simply a conversation about what is normal. An internal examination is not part of a routine visit for someone who has never been sexually active, and will not be done without discussing it first.",
      },
      {
        q: "Can I come during my period?",
        a: "Yes for most things, and a heavy or painful period is sometimes best assessed while it is happening. The exception is a Pap smear, which needs rescheduling — blood in the sample can obscure the cells. If you are booked for a smear and your period arrives, ring ahead rather than cancelling the whole appointment.",
      },
      {
        q: "Is the internal examination painful?",
        a: "Uncomfortable rather than painful for most women, and quick. Tensing makes it harder, which is easier said than fixed — saying that you are anxious genuinely helps, because the pace changes. A smaller speculum can be used, you can ask to insert it yourself, and you can ask to stop at any point. If it has been painful before, say so at the start rather than afterwards.",
      },
    ],
  },

  "menopausal-counselling": {
    sections: [
      {
        heading: "The symptoms of perimenopause, which are routinely mistaken for something else",
        paragraphs: [
          "Perimenopause can begin in the early forties, years before periods stop, and its symptoms are diffuse enough to be attributed to stress, thyroid trouble, anaemia or depression. Recognising the pattern is most of the difficulty:",
        ],
        items: [
          "Cycles that change — closer together, further apart, heavier, lighter, or skipping months.",
          "Hot flushes and night sweats, which are the symptoms everybody knows about and are not always the most troublesome.",
          "Sleep that breaks in the early hours and does not return, whether or not there are sweats.",
          "Mood changes, irritability, and anxiety that feels new or disproportionate.",
          "Difficulty concentrating and word-finding — the thing people call brain fog, which is real and frightening when nobody names it.",
          "Joint aches and stiffness, often in the hands and shoulders, and often blamed on age.",
          "Palpitations, headaches, and skin and hair changes.",
          "Vaginal dryness, discomfort during sex, reduced desire, and more frequent urinary infections or urgency. These, unlike the flushes, tend to worsen over time rather than pass, and they respond very well to treatment.",
        ],
        after: [
          "One symptom is different from all the others: bleeding after your periods have stopped for twelve months. That is never part of normal menopause and always needs investigating, however light it is and however quickly it stops.",
        ],
      },
      {
        heading: "What happens at a menopause consultation",
        paragraphs: [
          "The assessment is mostly conversation, because the diagnosis is usually clinical rather than something a blood test settles.",
        ],
        items: [
          "A full symptom history, including the ones people leave out — sleep, mood, concentration, sex, and bladder.",
          "Blood pressure, weight and height.",
          "Thyroid function, and haemoglobin where relevant, because both can mimic this almost exactly.",
          "A hormone blood test is generally not needed over the age of 45, where the symptoms and the cycle pattern say more than the numbers do. Under 45, and particularly under 40, it becomes useful.",
          "A review of anything that changes what is safe to prescribe: a personal history of breast cancer, a blood clot, liver disease, migraine with aura, or unexplained vaginal bleeding.",
          "An assessment of bone and cardiovascular risk — family history, smoking, previous fractures, how much weight-bearing activity you actually do.",
        ],
      },
      {
        heading: "The options, hormonal and otherwise",
        paragraphs: [
          "Hormone replacement therapy replaces the oestrogen that has fallen. If you still have a uterus, a progestogen is given alongside it to protect the lining — that pairing is not optional. It can be taken as tablets, or through the skin as a patch or gel; the through-the-skin forms avoid the first pass through the liver and carry a lower risk of blood clots, which is why they are often preferred.",
          "Vaginal oestrogen is a separate thing and is worth knowing about on its own. It is a low dose applied locally for dryness, discomfort and recurrent urinary symptoms. Very little is absorbed into the bloodstream, so its risk profile is different from systemic HRT, and it can often be used by women for whom systemic HRT is not suitable. It is also the treatment women are least likely to have been offered.",
          "Where HRT is not wanted or not suitable there are effective non-hormonal options for flushes and for sleep, and cognitive behavioural therapy has good evidence for both flushes and the sleep disruption around them. For bone, the unglamorous things genuinely work: weight-bearing and resistance exercise, adequate calcium and vitamin D, not smoking, and keeping alcohol moderate.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring:"],
        items: [
          "A record of your cycles over the last year, even a rough one.",
          "A written list of symptoms, including the ones that feel unrelated. The pattern is the diagnosis.",
          "Your medical history and any family history of breast cancer, blood clots, heart disease or osteoporosis.",
          "Every medicine and supplement you take, including anything bought over the counter for flushes.",
        ],
        after: [
          "Questions worth asking: given my own history, what are the actual risks and benefits of HRT for me, in numbers rather than in general? Which form would you use and why that one? How long before I should feel a difference, and how long would I stay on it? What are the options if I would rather not? What should I be doing about my bones, starting now?",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I still get pregnant during perimenopause?",
        a: "Yes, and this catches people out. Ovulation becomes unpredictable rather than stopping cleanly, so contraception is still needed. The usual guidance is to continue it for one year after the last period if you are over 50, and for two years if you are under 50. HRT is not a contraceptive.",
      },
      {
        q: "Does HRT cause weight gain?",
        a: "The weight change around menopause is driven mostly by falling muscle mass, reduced activity and a shift in where fat is stored, and it happens with or without HRT. Studies do not show HRT itself causing weight gain, and some women find it easier to stay active once sleep and joint aches improve. Fluid retention in the first weeks is common and usually settles.",
      },
      {
        q: "I have bleeding again after a year with no periods. What does that mean?",
        a: "It needs to be checked, promptly, whatever the amount and however quickly it stopped. Most causes turn out to be benign — a thin, dry lining, a polyp, or the effect of HRT — but postmenopausal bleeding is also the main early symptom of cancer of the uterine lining, which is very treatable when it is caught early. This is the one symptom on the whole page not to wait on.",
      },
    ],
  },

  "cervical-cancer-vaccine": {
    sections: [
      {
        heading: "Who it is for, and how many doses",
        paragraphs: [
          "The number of doses depends on the age at which the course is started, not on the age it finishes.",
        ],
        items: [
          "Ages 9 to 14 — two doses, given about six months apart. The immune response at this age is strong enough that a third adds nothing, which makes this both the most effective and the cheapest window.",
          "Ages 15 and over — three doses over about six months.",
          "Approved and useful up to 45. Protection is against the high-risk types you have not already encountered, so it is lower than for someone vaccinated before exposure, but it is not nothing.",
          "Boys as well as girls. HPV causes cancers of the mouth, throat, penis and anus, and genital warts, and vaccinating boys also reduces transmission.",
        ],
        after: [
          "If a course was started and not finished, it does not have to be restarted. Bring the record of which doses were given and when, and the course is completed from where it stopped.",
        ],
      },
      {
        heading: "What the appointment is like",
        paragraphs: [
          "There is no examination, no blood test and no swab. Nothing about it requires a woman or a girl to be sexually active, and nothing is asked about it beyond what is needed for the schedule.",
          "The injection goes into the upper arm and takes seconds. You will be asked to stay seated for about fifteen minutes afterwards — this is routine for all vaccines and is mostly about fainting, which is more common in teenagers than at any other age and is a response to the needle rather than to the vaccine.",
          "Side effects are mostly a sore, red arm for a day or two. Headache, mild fever, tiredness or nausea happen in a minority and settle within a day. A simple painkiller is fine. Anything beyond that is uncommon enough to be worth reporting rather than expecting.",
        ],
      },
      {
        heading: "Why screening still continues afterwards",
        paragraphs: [
          "The vaccine protects against the HPV types that cause the large majority of cervical cancers, but not against every cancer-causing type. That gap is small, and it is precisely why cervical screening does not stop after vaccination.",
          "So the two work together: vaccination before exposure prevents most infections, and screening catches the changes caused by whatever slipped through, at a stage where they are still easy to treat. A woman who has been vaccinated and screens on schedule has close to the best protection available against a cancer that remains one of the most common among Indian women.",
        ],
      },
      {
        heading: "What to bring, and what to ask",
        paragraphs: ["Bring:"],
        items: [
          "The immunisation record or card, and details of any HPV doses already given, with dates.",
          "A note of any allergy to a previous vaccine, and of any condition affecting the immune system.",
          "For a daughter, whoever is going to consent, and her own questions — she is more likely to ask them than you are to guess them.",
        ],
        after: [
          "Questions worth asking: which vaccine is being used and how many types does it cover? What is the cost per dose and for the full course? When exactly is the next dose due, and what happens if we are late? Does she still need cervical screening later, and from what age?",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the HPV vaccine affect fertility?",
        a: "No. There is no evidence that it affects fertility or ovarian function, and this has been looked for specifically in very large studies because the claim circulates widely. The thing that genuinely does threaten future fertility is treatment for advanced cervical cancer, which is what the vaccine exists to prevent.",
      },
      {
        q: "My daughter is only twelve and not sexually active. Isn't this too early?",
        a: "Twelve is exactly right, and for the reason the question implies. The vaccine prevents infection; it cannot clear one already present. Giving it before any exposure is what makes it work best, and at that age only two doses are needed instead of three. Vaccinating early is not an assumption about her — it is the same logic as any other vaccine given before the exposure it protects against.",
      },
      {
        q: "I have already had an abnormal Pap smear or a positive HPV test. Is there any point?",
        a: "Possibly, and it is worth asking about your own case. HPV is not one virus but a family, and the vaccine covers several high-risk types — having encountered one does not mean you have encountered the others. It does not treat an existing infection or an abnormality, so it does not replace the follow-up and treatment you need for that, which continues either way.",
      },
    ],
  },
};
