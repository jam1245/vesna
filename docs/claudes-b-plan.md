# Vesna — Claude's B-Plan
## Revised Site & Product Build Plan

**Project:** Vesna menopause telehealth platform
**Based on:** Full analysis of all repo documents
**Date:** April 4, 2026
**Supersedes:** docs/build-plan.md (which incorrectly elevated GLP-1 as a primary pathway)

---

## What Changed From the First Plan — and Why

The original build plan made three mistakes:

1. **GLP-1 was given equal billing as a care pathway.** Every document in this repo is explicit that GLP-1 is a back-pocket option for a small clinically appropriate subset — not a headline offer, not a care pathway card, not a named page. It belongs in a clinical edge case, not the homepage.

2. **The data product strategy was ignored.** The `menopause-data-product-strategy.md` is the most differentiated document in this repo. The real competitive edge is not HRT prescribing — every competitor does that. The edge is a menopause intelligence layer: symptom tracking + wearable data + clinician oversight + optional biomarkers over time. That needs to be built into the product from day one.

3. **Apple Health and wearable integration were not planned.** This is a significant retention and differentiation lever that was missing entirely.

This document corrects all three.

---

## 1. What Vesna Actually Is

A menopause-first telehealth platform that combines clinician-guided HRT care with a longitudinal intelligence layer — symptom tracking, wearable data, and optional biomarker monitoring — to help women understand what is changing in their bodies and whether treatment is working.

**One sentence:**
> Clinician-guided menopause care, with the ongoing intelligence to show you it's working.

**What it is not:**
- An online HRT storefront
- A GLP-1 business with a menopause skin
- A wellness app
- A supplement brand
- A generic telehealth checkout flow

---

## 2. Strategic Foundation

### 2.1 The Real Competitive Edge

Most menopause telehealth competitors stop at:
- Intake form → clinician review → prescription → refill

Vesna's edge is what happens after the prescription:

- Symptom check-ins show whether treatment is improving daily life
- Apple Health / wearable data makes sleep, recovery, and activity trends visible
- Treatment response tracking answers "is my HRT actually working?"
- Optional Eli Health saliva tests add a biomarker layer for engaged users
- Longitudinal history creates switching costs and deepens the relationship

This is the intelligence layer. It is the moat. Build it from Phase 1.

### 2.2 Why the Economics Are Strong

- HRT is a chronic, long-term prescription — retention averages 5–10+ years if care quality is high
- Moving from 4% to 2% monthly churn roughly doubles LTV
- Every improvement in clinical follow-up quality compounds directly into business value
- The intelligence layer increases engagement, reduces churn, and supports premium pricing
- Blended ARPU with add-on tiers targets ~$120–140/month vs. $89 core-only

### 2.3 Brand Positioning

**Feel:** Warm, intelligent, validating, medically credible, calm
**Not:** Hype-driven, fear-based, supplement-adjacent, GLP-1 first

**Core emotional promise:** "You're not imagining it. And we can show you what's actually happening."

---

## 3. Revised Site Architecture

### 3.1 Page Map

```
/                            Primary landing page
/menopause-care              HRT + non-hormonal care detail
/how-it-works                Process explainer
/clinicians                  Clinician profiles + credentials
/track                       Intelligence layer explainer (symptom + wearable + testing)
/pricing                     Pricing detail
/faq                         Full FAQ
/education                   Menopause education center (SEO + trust)
/assessment                  Intake flow (embedded or external)
/privacy-policy              Privacy policy
/notice-of-privacy-practices HIPAA NPP
/medical-consent             Medical consent
/refund-policy               Cancellation + refund policy
/terms                       Terms of service
```

**Removed from original plan:**
- `/metabolic-support` — GLP-1 is not a named page or a headline offer
- `/integrated-care` — not relevant at MVP stage

**Added:**
- `/track` — dedicated page explaining the intelligence layer (symptom tracking, Apple Health, Eli testing). This is a key differentiator and deserves its own page.

### 3.2 Build Order

**Phase 1 — MVP (Weeks 1–4):**
- `/` — Primary landing page
- `/assessment` — Intake flow
- Compliance pages (privacy policy, medical consent, HIPAA NPP, refund policy)
- Basic symptom check-in (post-onboarding, lightweight)
- Apple Health opt-in prompt at onboarding

**Phase 2 — Depth + Trust (Weeks 5–8):**
- `/menopause-care`
- `/how-it-works`
- `/clinicians`
- `/faq`
- `/pricing`
- `/track` — intelligence layer explainer
- Symptom + sleep dashboard (patient portal)
- Treatment response tracker (30/60/90 day check-ins)

**Phase 3 — Intelligence + Growth (Weeks 9–16):**
- `/education` — content hub
- Eli Health Hormometer integration (optional biomarker add-on)
- Pattern detection and insight summaries
- Clinician-facing dashboard
- A/B testing on headline and CTA variants
- Referral program

---

## 4. Primary Landing Page — Revised Component Spec

### 4.1 Promo Bar

- Warm accent color (deep sage or teal)
- Text: e.g. "First clinician review included — start your symptom assessment"
- Link to CTA anchor

### 4.2 Sticky Navigation

- Logo (left)
- Anchors: Our Care | How It Works | What We Track | Clinicians | Pricing | FAQ
- CTA: "Take the assessment" (right, always visible on mobile)

### 4.3 Hero Section

**Primary headline:**
> "You're not imagining it. And you don't have to just push through."

**Subheadline:**
> "Clinician-guided menopause care for hot flashes, sleep, mood, brain fog, and midlife body changes — with ongoing tracking to show you it's working."

**Icon row:**
- Clinician-led care
- HRT + non-hormonal options
- Symptom + sleep tracking included
- No insurance required
- HSA/FSA accepted

**CTA:** "Take the 2-minute assessment"

**Social proof line:** "Join [X] women who've started feeling like themselves again"

**Hero image:** Real midlife woman, confident, warm — not stock-photo wellness. Not a pill bottle.

---

### 4.4 Trust Bar

- 4–6 media logos, muted grayscale
- Placed immediately below hero

---

### 4.5 Symptom Pathway Cards

**Section header:** "What are you dealing with?"

**Cards (self-select, links to assessment):**

| Card | Headline | Subtext |
|---|---|---|
| Hot flashes + night sweats | "Waking up soaked at 3am" | HRT + non-hormonal options |
| Sleep + mood | "Can't sleep. Can't focus. Not yourself." | Sleep and mood support |
| Brain fog | "Words disappear. Memory slips." | Cognitive + hormonal review |
| Cycle changes | "Something is shifting but you're not sure what" | Perimenopause assessment |
| Low libido | "That part of you has gone quiet" | Hormonal + non-hormonal care |
| All of the above | "Every symptom on the list" | Full menopause care plan |

**Note:** No metabolic support card. No GLP-1 card. This page is menopause symptoms only.

---

### 4.6 How It Works (3-Step)

**Step 1: Tell us what's happening**
> Take a short symptom assessment — no appointment needed.

**Step 2: A clinician reviews your case**
> A licensed menopause-specialist clinician reviews your intake within 24 hours and builds your care plan.

**Step 3: Care arrives — and we track it with you**
> Medication (if prescribed), symptom tracking, and ongoing check-ins. So you can see whether it's working.

Supporting line: "No waiting rooms. No insurance required. Real clinical oversight."

---

### 4.7 Intelligence Layer Feature Section

**This section is new and did not appear in the original build plan. It is a key differentiator.**

**Section header:**
> "Care that learns with you over time"

**Body:**
> Most menopause care is a one-time visit. Vesna tracks your symptoms, sleep, and treatment response continuously — so your clinician always has the full picture, and you can see what's actually improving.

**Feature cards (3 across):**

| Card | Icon | Headline | Body |
|---|---|---|---|
| Symptom tracking | chart | See your patterns | Weekly check-ins build a picture of how your symptoms are changing — not just how you feel today. |
| Sleep + wearable | moon | Connect your Apple Watch or Fitbit | Resting heart rate, temperature trends, and sleep data give your clinician context no questionnaire can. |
| Treatment response | checkmark | Know if it's working | 30, 60, and 90-day response tracking shows whether your care plan is having an effect — and flags when it needs adjusting. |

Optional add-on card (secondary, smaller):

> **Hormone monitoring add-on** — For users who want a data-rich experience, optional at-home saliva testing (Eli Health) adds a periodic biomarker layer. Not required. Not the foundation of your care. An additional input for clinicians and patients who want more.

---

### 4.8 Care Pathway Cards

**Section header:** "Treatment tailored to your symptoms"

**Two pathways only — no GLP-1:**

| Card | Name | Description |
|---|---|---|
| 1 | Hormone therapy (HRT) | Bioidentical estradiol, progesterone, and/or testosterone — compounded, clinician-prescribed, and monitored over time |
| 2 | Non-hormonal care | Evidence-based non-hormonal options for women who prefer not to use HRT or are not candidates |

**Small note beneath cards:**
> "For patients with clinically significant metabolic concerns, your clinician may discuss additional options as part of your care plan."

This is the only mention of anything beyond HRT and non-hormonal. It is not a card. It is not a CTA. It is a single line of copy.

---

### 4.9 Outcomes + Metrics Section

**Format:** Stat cards — large number, short descriptor

Use only clinically grounded, source-cited numbers:
- "Up to 80% reduction in hot flash frequency with appropriate HRT" — cite source
- "Significant improvement in sleep quality reported within 4–8 weeks of HRT"
- "HRT associated with improved bone density and cardiovascular markers in perimenopause"
- "Women on Vesna report [X]% improvement in sleep scores at 90 days" — fill post-launch

**Hard rule:** No self-reported outcome inflation. No MEDVi-style "18% body weight loss" energy. Every metric cited or disclosed as patient-reported.

---

### 4.10 Patient Stories Strip

- 3–4 testimonials, grid or carousel
- Each: first name + last initial, symptom summary, quote, time on plan
- Themes: dismissed by traditional care / HRT changed my sleep / finally understood perimenopause / tracking helped me see progress
- "Verified patient" badge

---

### 4.11 Symptom Selector (Interactive)

"Which of these sounds most like you?"
- Hot flashes or night sweats
- Can't sleep like I used to
- Mood or anxiety changes
- Brain fog or memory slips
- Cycle irregularity
- Just starting to notice changes
- All of the above

On selection: "Based on what you've described, a clinician-led assessment is the right first step." → CTA

---

### 4.12 Clinician Section

**Header:** "Your care is overseen by licensed clinicians who specialize in menopause"

Per clinician card: photo, name, exact credentials (no inflated titles), board certification or relevant specialty, 1-line bio

**Copy:**
> "Every care plan is reviewed and approved by a licensed clinician before anything is prescribed. Clinical decisions are made by people — not algorithms."

---

### 4.13 Support Section

**Header:** "Support is part of the plan"

- Unlimited messaging with your care team
- 30, 60, and 90-day check-ins built in
- Refill oversight and dose adjustment support
- Symptom and sleep tracking through your portal
- Response within [X] hours guaranteed

---

### 4.14 Pricing Block

**Two tiers — public-facing:**

| Plan | Price | Includes |
|---|---|---|
| Vesna Care | $89/mo | Symptom assessment, clinician review, HRT or non-hormonal care if prescribed, symptom tracking, ongoing messaging, check-ins, refills |
| Vesna Care + Monitor | $119/mo | Everything above + quarterly Eli Health saliva testing + longitudinal hormone dashboard |

- "No insurance required"
- "HSA/FSA accepted"
- "Cancel anytime"
- "No hidden fees"

**GLP-1 is not a pricing tier.** It is not mentioned here.

---

### 4.15 FAQ Section

Minimum questions:

1. Is HRT safe?
2. How is Vesna different from seeing my OB-GYN?
3. What is compounded HRT?
4. Do I need lab work before starting?
5. How does the clinician review work?
6. What if I'm not a candidate for HRT?
7. What does symptom tracking involve?
8. Do I need an Apple Watch?
9. What is the hormone monitoring add-on?
10. How do refills work?
11. How do I cancel?
12. Is my information private?

**Address HRT fear directly:** What people think they know, what current evidence says, and why treatment decisions are individualized.

---

### 4.16 Final CTA Block

**Headline:**
> "You've been managing this on your own long enough."

**Subheadline:**
> "Take the 2-minute assessment and let a clinician review your symptoms — no appointment, no insurance, no waiting."

**CTA:** "Start your assessment"

---

### 4.17 Compliance Footer

**Required disclaimer:**
> "Vesna provides technology infrastructure connecting patients with independent licensed clinicians. Clinical decisions are made by licensed healthcare providers, not by Vesna. Results vary. Treatment is subject to clinician approval. Compounded medications are not FDA-approved. Vesna is not a pharmacy."

**Compliance pages linked:**
- Privacy Policy
- Notice of Privacy Practices
- Medical Consent
- Refund Policy
- Terms of Service

**Badges:** HIPAA compliant | HSA/FSA accepted | Licensed clinicians | SSL secured

---

## 5. Intelligence Layer — Product Spec

This section details the data product strategy that makes Vesna more than a prescription service. Sourced from `menopause-data-product-strategy.md`.

### 5.1 Core Framing

Do not frame this as: *"We diagnose menopause through hormone tests."*

Frame it as: *"We combine symptom history, clinician expertise, and longitudinal health signals to guide menopause care over time."*

### 5.2 Data Inputs (by phase)

**Phase 1 — Available at launch:**
- Structured symptom check-ins (weekly, 2 minutes)
- Cycle and bleeding log
- Medication adherence tracking
- Clinician messaging and visit notes

**Phase 2 — Apple Health + wearables:**
- Sleep duration, consistency, stages
- Overnight wrist temperature trends (Apple Watch Series 8+)
- Resting heart rate and HRV
- Respiratory rate during sleep
- Activity levels and walking steadiness
- Cycle logging (if using Health app)

**Phase 3 — Optional biomarker layer:**
- Eli Health Hormometer — saliva-based progesterone (94% accuracy, 20-minute result, iPhone)
- Cortisol tracking (Eli — live now)
- Estradiol (Eli — pending launch, partner early via eli.health/pages/b2b)
- Positioned as an optional add-on, not the diagnostic foundation

### 5.3 What the Intelligence Layer Shows

**For patients:**
- Are my symptoms improving since treatment started?
- Is my sleep better at 30 / 60 / 90 days?
- Are my symptoms cyclical, random, or treatment-related?
- When did symptoms worsen — and what changed?

**For clinicians:**
- Trend summaries before each check-in
- Side effect flags from symptom log
- Sleep and recovery changes post-prescription
- Adherence patterns

### 5.4 Safer vs. Riskier Positioning

| Safer | Riskier |
|---|---|
| "Track patterns over time" | "Know exactly which hormones you need" |
| "See how symptoms and sleep change" | "Diagnose menopause from your saliva" |
| "Give your clinician a fuller picture" | "Personalize HRT dosing directly from app data" |
| "Monitor how your care plan is working" | "Optimize hormones from one test" |

**Never claim the intelligence layer replaces clinical judgment. Always frame it as input to the clinician, not autonomous diagnosis.**

### 5.5 Eli Health Integration Notes

- B2B contact: eli.health/pages/b2b
- Progesterone: live, 94% accuracy, $8/test, iPhone only
- Cortisol: live
- Estradiol: not yet available — critical gap for prescribing baseline
- For prescribing baseline (entry point): use Everlywell or Let's Get Checked blood panel (FSH, estradiol, progesterone) until Eli estradiol launches
- For ongoing monitoring (post-prescription): Eli progesterone is appropriate now
- Reach out to Eli CEO on LinkedIn to discuss early platform partnership — getting in early before they're known creates meaningful leverage

---

## 6. Intake Assessment Flow

### 6.1 Flow Structure

```
Step 1: Symptom selection (multi-select)
Step 2: Cycle + stage (age, last period, symptom onset)
Step 3: Medical history (contraindications — prior clots, hormone-sensitive cancers)
Step 4: Goals (symptom relief / sleep / mood / energy / all)
Step 5: Eligibility result + care summary
Step 6: Pricing reveal
Step 7: Checkout
```

### 6.2 Key Principles

- **Symptom-first, payment-last** — qualify before charging (MEDVi's strongest mechanic)
- **Validating copy throughout** — "These symptoms are very common in perimenopause and often under-treated"
- **Qualify for care, not for a specific drug** — result screen says "your symptoms are consistent with early perimenopause — a clinician will review your case" not "you qualify for HRT"
- **No overclaiming** — the assessment does not create a doctor-patient relationship
- **Mobile-first** — visible progress bar, large tap targets, no long scrolling forms

### 6.3 Apple Health Opt-In

Add at end of onboarding (post-checkout):
> "Connect Apple Health to give your clinician richer context and track your sleep and symptoms over time."

Optional, one-tap, skippable. Not required for treatment.

---

## 7. Revised Revenue Model

Based on `revenue-model.jsx` — four tiers, but GLP-1 correctly framed as a small clinical subset:

| Tier | Price | Adoption | Notes |
|---|---|---|---|
| Core care | $89/mo | 100% | Every patient — assessment, clinician review, messaging, refills |
| Hormone monitoring | $30/mo add-on | ~45% | Eli Health quarterly tests + dashboard — grows as Eli estradiol launches |
| GLP-1 / metabolic | $120/mo add-on | ~18% | Small clinically appropriate subset only — never the headline offer |
| Community + coaching | $19/mo add-on | ~35% | Expert sessions, peer circles, education library — high margin, strong retention signal |

**Blended ARPU at defaults:** ~$137/month

**Key financial insight:** Churn is the most sensitive variable. At 4% monthly churn, average patient lifetime is ~25 months. At 2%, it doubles to ~50 months and LTV nearly triples. The intelligence layer exists to reduce churn — which means it is not a nice-to-have feature, it is a direct financial investment.

---

## 8. Technical Stack

### 8.1 Frontend

| Layer | Recommendation | Notes |
|---|---|---|
| Framework | Next.js (React) | SSR for SEO, fast page loads |
| Styling | Tailwind CSS | Rapid build, consistent design tokens |
| Animation | Framer Motion | Subtle, purposeful transitions only |
| CMS | Sanity or Contentful | Clinician bios, FAQs, education articles editable without dev |
| Hosting | Vercel | Native Next.js, simple CI/CD |

### 8.2 Clinical Layer

| Function | Vendor |
|---|---|
| EHR + prescribing | Canvas Medical |
| Physician network | OpenLoop Health |
| Clinician credentialing | Medallion |
| Pharmacy / HRT fulfillment | Truepill or Belmar |
| e-Prescribe | Via Canvas / SureScripts |

### 8.3 Intelligence Layer

| Function | Vendor / Approach |
|---|---|
| Symptom check-ins | Custom (lightweight weekly form, stored in Canvas or separate DB) |
| Apple Health integration | HealthKit API (iOS) |
| Wearable data | Apple HealthKit; Fitbit / Garmin via Health Connect (Android Phase 2) |
| Hormone monitoring (ongoing) | Eli Health Hormometer (saliva, progesterone now, estradiol TBD) |
| Lab baseline (prescribing) | Everlywell or Let's Get Checked (mail-in blood panel) |
| Patient dashboard | Custom — built in Phase 2 |
| Clinician dashboard | Canvas EHR extensions or custom layer |

### 8.4 Payments

| Function | Vendor |
|---|---|
| Payments + subscriptions | Stripe Billing |
| HSA/FSA | Stripe (native support) |

### 8.5 Analytics + Growth

| Function | Tool |
|---|---|
| Product analytics | PostHog |
| Ad tracking | UTM + Meta Pixel + Google Tag Manager |
| A/B testing | Vercel Edge Config or Statsig |
| CRM / email / SMS | Klaviyo |
| Support | Intercom |

---

## 9. Legal Entity Structure

Three-entity MSO model (same as MEDVi):

| Entity | Role |
|---|---|
| Vesna LLC | Technology platform, marketing, intake, billing |
| Vesna Medical PC | Licensed medical entity — owns clinical decisions, employs/contracts clinicians |
| Pharmacy partner | Independent — Truepill or Belmar |

Vesna LLC cannot own the medical practice in most states. An MSO agreement governs the relationship between Vesna LLC and the PC.

**Engage healthcare regulatory counsel before any live build begins.**

---

## 10. Compliance Checklist

### Pre-Launch
- [ ] Healthcare regulatory counsel engaged
- [ ] MSO structure reviewed and established
- [ ] Medical claim review completed
- [ ] Pricing disclosure reviewed
- [ ] Cancellation/refund policy drafted
- [ ] HIPAA BAAs signed with all vendors (Canvas, OpenLoop, Truepill, Stripe, Eli, Klaviyo)
- [ ] Medical consent page live
- [ ] Notice of Privacy Practices live
- [ ] California privacy statement live
- [ ] Terms of service live
- [ ] Intake includes contraindication screening (prior clots, hormone-sensitive cancer history)
- [ ] Result screen does not guarantee prescription eligibility
- [ ] Clinician credentials exact — no inflated titles
- [ ] No "FDA-approved" language on compounded medications
- [ ] Emergency/crisis disclaimer in consent and FAQ
- [ ] Apple Health data handling reviewed under HIPAA
- [ ] Eli Health data handling reviewed — separate BAA if applicable

### Ongoing
- [ ] Medical claim audit every 6 months
- [ ] Clinician license renewal tracking (via Medallion)
- [ ] State-by-state prescribing coverage reviewed quarterly
- [ ] Any GLP-1 prescribing reviewed by counsel separately — higher regulatory risk

---

## 11. Copy Framework

### 11.1 Voice

- Warm but precise — not clinical-cold, not wellness-fluffy
- Validating before persuading — lead with "you're not imagining it"
- Honest about complexity — the clinician decides, not the algorithm
- No hype — no "revolutionary," "breakthrough," "life-changing"
- The intelligence layer copy should feel like clarity, not surveillance

### 11.2 Messaging Hierarchy

| Level | Message |
|---|---|
| Emotional truth | "You're not imagining it. These symptoms are real and they're treatable." |
| Intelligence edge | "And we can show you — over time — what's actually changing." |
| Category framing | "This is menopause care. Not a pill mill." |
| Differentiation | "Real clinicians. Real tracking. Not automated." |
| Process | "2-minute assessment. Clinician reviews within 24 hours." |
| Commercial | "Transparent pricing. No insurance. Cancel anytime." |

### 11.3 Headlines to A/B Test

- "You're not imagining it. And you don't have to just push through."
- "Menopause care that actually takes you seriously."
- "Finally — care that listens and tracks what's improving."
- "The care your OB-GYN should have had time to give you."
- "Hot flashes. Brain fog. Night sweats. There's clinical care for all of it."

### 11.4 CTAs to Test

- "Take the 2-minute assessment" (primary — test this first)
- "See if care is right for you"
- "Start your symptom review"
- "Get your care plan"

---

## 12. Design Direction

### 12.1 Visual Tone

- More premium than MEDVi — less direct-response weight-loss energy
- Medical credibility without clinical coldness
- Real photography of midlife women — confident, not performatively ecstatic
- Calm hierarchy — whitespace, clear type scale, not hype-poster density
- The intelligence layer should look like a thoughtful health app, not a surveillance dashboard

### 12.2 Color Direction

- Primary: warm off-white or soft stone
- Accent 1: deep sage or teal (trust, clinical)
- Accent 2: warm terracotta or amber (warmth, body)
- Text: near-black (#1a1a1a)
- Avoid: hot pink, purple, femtech clichés

### 12.3 Typography

- Serif for headlines (trust, premium)
- Sans-serif for body (readability)
- Suggested: Playfair Display + Inter, or Freight Display + DM Sans

---

## 13. Phased Build Timeline

### Phase 1 — MVP (Weeks 1–4)
**Goal:** Functional landing page + intake + compliance + basic tracking

- [ ] Primary landing page (all sections in Section 4)
- [ ] Intake assessment (7-step flow)
- [ ] Eligibility result screen
- [ ] Checkout (Stripe)
- [ ] Compliance pages (4 pages)
- [ ] Canvas EHR basic integration
- [ ] OpenLoop clinician network connected
- [ ] Truepill or Belmar pharmacy connection
- [ ] Weekly symptom check-in (lightweight, post-onboarding)
- [ ] Apple Health opt-in prompt at onboarding
- [ ] PostHog analytics
- [ ] HIPAA BAAs signed

### Phase 2 — Intelligence + Content (Weeks 5–8)
**Goal:** Data layer live, depth pages, trust content

- [ ] /menopause-care page
- [ ] /how-it-works page
- [ ] /track page (intelligence layer explainer)
- [ ] /clinicians page with real bios
- [ ] /faq full page
- [ ] /pricing page
- [ ] Apple Health data import live
- [ ] Symptom + sleep dashboard (patient portal)
- [ ] Treatment response tracker (30/60/90 day)
- [ ] Education section (first 5 articles)
- [ ] Patient testimonials collected and live
- [ ] Klaviyo email/SMS connected
- [ ] Meta Pixel + Google Tag live

### Phase 3 — Optimization + Moat (Weeks 9–16)
**Goal:** A/B test, add biomarker layer, deepen intelligence

- [ ] A/B tests on hero headline + CTA
- [ ] Eli Health Hormometer integration (hormone monitoring add-on)
- [ ] Clinician-facing dashboard (trend summaries before check-ins)
- [ ] Pattern detection and insight summaries
- [ ] /education content hub expanded
- [ ] Community + coaching tier (expert sessions, peer circles)
- [ ] Referral program
- [ ] Employer/benefits channel exploration

---

## 14. Vendor Contacts — Initiate Now

| Vendor | Purpose | Contact |
|---|---|---|
| OpenLoop Health | Physician network | openloophealth.com |
| Canvas Medical | EHR + prescribing | canvasmedical.com |
| Medallion | Credentialing | medallion.co |
| Truepill | Pharmacy fulfillment | truepill.com |
| Eli Health | Hormone monitoring add-on | eli.health/pages/b2b |
| Everlywell | Prescribing baseline labs | b2b.everlywell.com |
| Stripe | Payments + subscriptions | stripe.com |
| Healthcare counsel | MSO structure + compliance | Engage before building |

---

## 15. What This Plan Does Not Cover

Separate planning documents are needed for:

- Patient portal (post-intake UX)
- Clinician-side EHR workflow detail
- Medication fulfillment operations
- Customer support staffing model
- Post-launch email/SMS retention sequences
- Paid media strategy and channel mix
- Clinical protocol development
- Community and coaching program design
- Long-term data privacy and governance as the intelligence layer scales

---

## 16. The One-Paragraph Version

Vesna is a menopause-first telehealth platform. HRT is the primary clinical pathway. Non-hormonal care is the secondary pathway. GLP-1 is a clinical edge case for a small subset of patients — it is never the headline. The product edge is a longitudinal intelligence layer that combines symptom tracking, Apple Health wearable data, and optional Eli Health biomarker tests to help women and their clinicians understand what is changing and whether care is working. The business model depends on retention, and retention depends on clinical quality. Every feature, copy choice, and product decision should make the platform feel more trustworthy, more useful, and harder to leave — not faster to convert.

---

*This document is a build planning reference. It is not legal or medical advice. Any live build in this category must be reviewed by qualified healthcare regulatory counsel and licensed clinical stakeholders before launch.*
