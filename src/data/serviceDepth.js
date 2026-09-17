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
};
