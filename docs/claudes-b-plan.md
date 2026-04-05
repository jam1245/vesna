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

---

---

# APPENDIX

---

## Appendix A — Supplier & Vendor Directory

Complete connection details for every vendor referenced in this plan. Organized by category. Initiation priority noted for each.

---

### A.1 Physician Network & Clinical Infrastructure

---

#### OpenLoop Health
**Role:** Physician network — provides licensed clinicians in all 50 states for async and synchronous telehealth prescribing. This is the core clinical layer.

- **Website:** https://www.openloophealth.com
- **Partnership contact:** https://www.openloophealth.com/contact
- **What they provide:** Credentialed physicians, NPs, and PAs across all states; handles licensing, malpractice, and clinical compliance; integrates with Canvas EHR; supports async review workflows
- **Why Vesna needs them:** Without a physician network, Vesna cannot prescribe. OpenLoop removes the need to hire and credential individual clinicians directly, especially at launch.
- **Initiation priority:** IMMEDIATE — nothing ships without this in place
- **Notes:** Volume pricing improves significantly at scale. Negotiate SLA for async review turnaround (target: 24 hours or less).

---

#### Canvas Medical
**Role:** EHR (Electronic Health Record) platform — clinical workflow, charting, prescribing, patient messaging, and care coordination.

- **Website:** https://www.canvasmedical.com
- **Partnership/sales contact:** https://www.canvasmedical.com/contact
- **API documentation:** https://docs.canvasmedical.com
- **What they provide:** API-first EHR purpose-built for digital health companies; supports async telehealth workflows; integrates with SureScripts for e-prescribing; HIPAA-compliant; BAA available
- **Why Vesna needs them:** Canvas is the system of record for all clinical data — patient charts, care plans, prescriptions, clinician notes, and messaging. It is the backbone of the clinical layer.
- **Initiation priority:** IMMEDIATE — integrate alongside OpenLoop
- **Notes:** Canvas is developer-friendly and designed for exactly this use case. Budget for engineering time to build the intake-to-chart flow.

---

#### Medallion
**Role:** Clinician credentialing and licensing verification — automates license checks, state registration, DEA verification, and ongoing compliance monitoring.

- **Website:** https://www.medallion.co
- **Sales contact:** https://www.medallion.co/contact
- **What they provide:** Automated credentialing workflows; state-by-state license tracking; DEA and board certification verification; real-time license expiry alerts; integrates with EHR systems
- **Why Vesna needs them:** Required for every clinician in the OpenLoop network who prescribes under the Vesna Medical PC. Ensures ongoing compliance without manual tracking.
- **Initiation priority:** HIGH — needed before any prescribing goes live
- **Notes:** If OpenLoop handles credentialing internally for their clinicians, Medallion may be scoped only to the PC's own employed clinicians. Confirm with OpenLoop at initial contract review.

---

#### SureScripts
**Role:** National e-prescribing network — routes prescriptions electronically to pharmacies.

- **Website:** https://www.surescripts.com
- **Provider enrollment:** https://surescripts.com/solutions/e-prescribing
- **What they provide:** E-prescribing infrastructure; controlled and non-controlled substance routing; prescription history access; formulary checks
- **Why Vesna needs them:** HRT prescriptions need to route electronically to the fulfillment pharmacy. Canvas Medical integrates with SureScripts natively — this may be handled through Canvas rather than a direct SureScripts contract.
- **Initiation priority:** HANDLED VIA CANVAS — confirm in Canvas onboarding
- **Notes:** Non-controlled HRT prescriptions (estradiol, progesterone) are straightforward. No DEA Schedule concerns for core HRT pathway.

---

### A.2 Pharmacy & Compounding Fulfillment

---

#### Truepill
**Role:** Digital pharmacy and fulfillment platform — routes prescriptions to partner pharmacies, handles dispensing, packaging, and direct-to-patient shipping.

- **Website:** https://www.truepill.com
- **Partnership contact:** https://www.truepill.com/contact
- **What they provide:** API-driven pharmacy fulfillment; compounding pharmacy network access; direct-to-patient shipping; white-label packaging available; HIPAA-compliant; BAA available
- **Why Vesna needs them:** Truepill handles the logistics layer between prescribing and delivery. They partner with compounding pharmacies that produce bioidentical HRT formulations.
- **Initiation priority:** HIGH — required before any prescriptions can be filled
- **Notes:** Confirm their compounding pharmacy network specifically covers bioidentical estradiol, progesterone, and testosterone formulations. Ask about cold-chain requirements for any topical or injectable formulations.

---

#### Belmar Pharmacy (now part of Belmar Pharma Solutions)
**Role:** Compounding pharmacy — specializes in bioidentical hormone therapy formulations. One of the most established compounding pharmacies in the HRT space.

- **Website:** https://www.belmarpharma.com
- **Healthcare provider portal:** https://www.belmarpharma.com/providers
- **Prescriber registration:** Available via provider portal
- **What they provide:** Custom-compounded bioidentical estradiol, progesterone, testosterone, DHEA, and combination formulations; multiple delivery forms (creams, capsules, troches, patches, injectables); PCAB-accredited; ships direct to patient
- **Why Vesna needs them:** Belmar is a known, trusted name specifically in compounded HRT — clinicians and patients recognize it. Having a named, accredited pharmacy partner strengthens clinical credibility.
- **Initiation priority:** HIGH — evaluate alongside Truepill; may use both
- **Notes:** Belmar is a direct pharmacy relationship, not a platform. Truepill can route to Belmar or similar compounding pharmacies depending on contract structure. Clarify routing and white-labeling options.

---

#### Strive Pharmacy
**Role:** Alternative compounding pharmacy with strong telehealth platform experience.

- **Website:** https://www.strivepharmacy.com
- **Provider enrollment:** https://www.strivepharmacy.com/providers
- **What they provide:** Compounded HRT formulations; telehealth-friendly workflows; direct-to-patient shipping; known for working with digital health platforms
- **Initiation priority:** MEDIUM — evaluate as backup or alternative to Belmar
- **Notes:** Worth getting quotes from both Belmar and Strive to compare COGS on standard HRT formulations.

---

#### Empower Pharmacy
**Role:** One of the largest PCAB-accredited compounding pharmacies in the US — significant volume capacity.

- **Website:** https://www.empowerpharmacy.com
- **Provider portal:** https://www.empowerpharmacy.com/healthcare-professionals
- **What they provide:** Full range of bioidentical HRT compounds; high-volume capacity; competitive COGS; direct-to-patient shipping; telehealth-friendly
- **Initiation priority:** MEDIUM — evaluate for volume pricing as patient numbers grow
- **Notes:** Empower has scale that smaller pharmacies don't. As Vesna grows, Empower may offer better pricing. Worth a parallel conversation early.

---

### A.3 Lab Testing — Prescribing Baseline

---

#### Everlywell
**Role:** At-home lab testing — mail-in blood and saliva tests for the prescribing baseline panel (FSH, estradiol, progesterone).

- **Website:** https://www.everlywell.com
- **B2B / enterprise contact:** https://www.everlywell.com/enterprise
- **Relevant test panels:**
  - Women's Health Test: https://www.everlywell.com/products/womens-health-test
  - Perimenopause Test: https://www.everlywell.com/products/perimenopause-test
  - Menopause Test: https://www.everlywell.com/products/menopause-test
- **What they provide:** CLIA-certified lab partners; finger-prick blood collection kits; patient-reported results via app; physician-reviewed results; HIPAA-compliant; BAA available for enterprise
- **Why Vesna needs them:** Blood-based FSH and estradiol testing is the clinical standard for prescribing baseline. Until Eli Health launches estradiol via saliva, Everlywell provides the entry-point lab panel.
- **Initiation priority:** HIGH — needed for prescribing workflow at launch
- **Notes:** Negotiate enterprise pricing per kit. Target COGS under $30/kit at volume. Consider whether to include kit cost in membership pricing or offer as a separate add-on at cost.

---

#### Let's Get Checked
**Role:** Alternative at-home lab testing provider — similar to Everlywell.

- **Website:** https://www.letsgetchecked.com
- **Business contact:** https://www.letsgetchecked.com/business
- **Relevant panels:**
  - Female Hormone Test: https://www.letsgetchecked.com/female-hormone-test
  - Perimenopause Hormone Test: available on site
- **What they provide:** At-home blood collection; CLIA-certified lab processing; results via online dashboard; nurse follow-up available; HIPAA-compliant
- **Initiation priority:** MEDIUM — evaluate alongside Everlywell; use as backup or compare pricing
- **Notes:** Let's Get Checked has strong brand recognition and may be familiar to Vesna's target patient demographic already.

---

### A.4 Hormone Monitoring — Intelligence Layer

---

#### Eli Health (Hormometer)
**Role:** At-home saliva-based hormone monitoring — the ongoing monitoring add-on for post-prescription patients.

- **Website:** https://eli.health
- **B2B partnership page:** https://eli.health/pages/b2b — **this is the entry point for a platform partnership**
- **Consumer product page (progesterone):** https://eli.health/products/progesterone
- **What they provide:** Saliva-based hormone tests read via iPhone camera; 20-minute results; no separate reader required; progesterone at 94% correlation with lab-grade ELISA; cortisol live; estradiol pending
- **Current status (as of April 2026):**
  - Cortisol: shipping
  - Progesterone: shipping, pre-orders open
  - Estradiol: not yet available — critical gap for full HRT monitoring
- **Why Vesna needs them:** Eli is the technology that enables the optional hormone monitoring add-on tier ($30/month). Without Eli (or equivalent), ongoing hormone monitoring requires mail-in kits which are slower and less engagement-friendly.
- **Initiation priority:** HIGH — reach out via b2b page AND directly to CEO via LinkedIn for early platform partnership discussion. Getting in early before they are widely known is strategically valuable.
- **Key caveat:** Eli is not appropriate as the prescribing baseline — estradiol blood-based testing remains the standard for entry-point clinical decisions. Eli is for trend monitoring post-prescription.
- **Notes:** At approximately $8/test, quarterly monitoring costs ~$32/year in COGS per patient on the monitoring tier. Bundle into the $30/month add-on pricing for strong margin. The B2B page indicates they have a formal partner pathway — they are likely actively seeking telehealth platform partners.

---

### A.5 Wearable & Device Integration

---

#### Apple HealthKit
**Role:** iOS health data API — pulls sleep, heart rate, temperature, activity, and cycle data from Apple Watch and iPhone Health app.

- **Developer documentation:** https://developer.apple.com/health-fitness
- **HealthKit framework docs:** https://developer.apple.com/documentation/healthkit
- **What it provides:** Access to sleep duration, sleep stages, resting heart rate, HRV, respiratory rate, wrist temperature (Series 8+), activity rings, cycle tracking data
- **Why Vesna needs it:** Apple Watch wrist temperature trending during sleep is one of the most useful passive signals for menopause — it can show hot flash patterns, sleep disruption, and treatment response without any patient effort.
- **Initiation priority:** Phase 2 — not required for MVP launch but should be in the roadmap from day one
- **Notes:** Requires iOS app (or React Native / Flutter wrapper). Web-only cannot access HealthKit. Budget for iOS app development in Phase 2.

---

#### Google Health Connect
**Role:** Android equivalent of HealthKit — aggregates data from Fitbit, Garmin, Samsung, and other Android wearables.

- **Developer documentation:** https://developer.android.com/health-and-fitness/guides/health-connect
- **What it provides:** Standardized API for health and fitness data across Android ecosystem
- **Initiation priority:** Phase 3 — Android expansion after iOS is proven
- **Notes:** Significantly expands addressable user base beyond Apple Watch owners. Fitbit penetration in the 40–60 female demographic is meaningful.

---

#### Fitbit Health Solutions (Google)
**Role:** Direct Fitbit device data API for enterprise health programs.

- **Website:** https://healthsolutions.fitbit.com
- **Developer API:** https://dev.fitbit.com
- **What it provides:** Activity, sleep, heart rate, SpO2 data; enterprise partnership options for health platforms
- **Initiation priority:** Phase 3
- **Notes:** Most Fitbit data will flow through Health Connect on Android. A direct Fitbit enterprise relationship may be worth exploring for deeper integration or co-marketing.

---

### A.6 Payments & Subscriptions

---

#### Stripe
**Role:** Payment processing, subscription billing, HSA/FSA card acceptance.

- **Website:** https://www.stripe.com
- **Billing (subscriptions):** https://stripe.com/billing
- **HSA/FSA acceptance:** https://stripe.com/docs/hsa-fsa
- **Healthcare overview:** https://stripe.com/healthcare
- **HIPAA BAA:** Available — https://stripe.com/docs/security/healthcare
- **What they provide:** Card processing; subscription management; HSA/FSA card acceptance natively; customer portal for self-service subscription management; webhooks for billing events; BAA available for healthcare use cases
- **Initiation priority:** IMMEDIATE — required for any paid checkout
- **Notes:** Stripe is the clear choice. HSA/FSA card acceptance is important for Vesna's demographic — many women 40–60 have active HSA accounts. BAA must be signed before any PHI touches Stripe systems.

---

### A.7 CRM, Email & Patient Communication

---

#### Klaviyo
**Role:** Email and SMS marketing automation — acquisition nurture sequences, onboarding flows, retention check-ins, refill reminders.

- **Website:** https://www.klaviyo.com
- **HIPAA compliance:** https://www.klaviyo.com/legal/hipaa — BAA available for healthcare customers
- **What they provide:** Email + SMS automation; segmentation; behavioral triggers; pre-built flows; deep e-commerce and subscription integrations; BAA available
- **Initiation priority:** Phase 2 — needed before paid acquisition scales
- **Notes:** Klaviyo's HIPAA BAA offering makes it usable for health-adjacent communications. Be careful about what PHI enters Klaviyo — generally, symptom data should not flow into Klaviyo. Use for transactional and marketing communications only.

---

#### Intercom
**Role:** In-app support chat, patient messaging, and onboarding guidance.

- **Website:** https://www.intercom.com
- **Healthcare / HIPAA:** https://www.intercom.com/legal/hipaa — BAA available
- **What they provide:** Live chat; automated support bots; in-app onboarding tours; help center; HIPAA-compliant tier available
- **Initiation priority:** Phase 2
- **Notes:** Use Intercom for general support and onboarding. Clinical messaging between patient and clinician should flow through Canvas, not Intercom. Keep these channels cleanly separated.

---

### A.8 Analytics & Product Intelligence

---

#### PostHog
**Role:** Product analytics — user behavior, funnel analysis, session recording, feature flags, A/B testing.

- **Website:** https://posthog.com
- **HIPAA:** https://posthog.com/docs/privacy/hipaa-compliance — BAA available; self-hosted option for full data control
- **What they provide:** Event tracking; funnel analysis; session replay; feature flags; A/B testing; cohort analysis; open source option
- **Initiation priority:** IMMEDIATE — instrument from day one
- **Notes:** PostHog's self-hosted option gives full data control which matters for HIPAA. Alternatively, use the cloud version with BAA. Either way, do not pass PHI into event properties.

---

#### Statsig
**Role:** Feature flagging and A/B experimentation platform.

- **Website:** https://www.statsig.com
- **What they provide:** Feature flags; A/B and multivariate testing; holdout groups; metrics-driven rollouts; statsig SDK for web and mobile
- **Initiation priority:** Phase 2 — when A/B testing begins
- **Notes:** Use for headline and CTA testing in Phase 3. Can be replaced by PostHog's built-in feature flags if PostHog is fully instrumented.

---

### A.9 Infrastructure & Hosting

---

#### Vercel
**Role:** Hosting and deployment for the Next.js frontend.

- **Website:** https://vercel.com
- **Healthcare / security:** https://vercel.com/security
- **What they provide:** Next.js-native hosting; edge network; CI/CD from GitHub; preview deployments; environment variable management; DDoS protection
- **Initiation priority:** IMMEDIATE — set up on day one of development
- **Notes:** Vercel does not store PHI — all clinical data lives in Canvas. Vercel is the presentation layer only. BAA not required for Vercel itself given this architecture.

---

#### Sanity (or Contentful)
**Role:** Headless CMS — manages editable content: clinician bios, FAQs, education articles, pricing copy.

- **Sanity website:** https://www.sanity.io
- **Contentful website:** https://www.contentful.com
- **What they provide:** Structured content management; real-time editing; image pipeline; webhooks for cache invalidation; CDN delivery
- **Initiation priority:** Phase 1 — set up before launch so non-dev content can be updated without code deployments
- **Notes:** Sanity is recommended for developer-friendliness and flexible schema. Neither Sanity nor Contentful should ever store PHI.

---

### A.10 Legal, Compliance & MSO Structure

---

#### Healthcare Regulatory Counsel
**Role:** Legal structure for the MSO (Management Services Organization) model, HIPAA compliance review, medical claim review, prescribing law by state.

**Recommended firms with telehealth and digital health practices:**

- **Epstein Becker Green** — leading healthcare law firm
  - Website: https://www.ebglaw.com
  - Digital health practice: https://www.ebglaw.com/services/digital-health

- **Hall Render** — healthcare-focused firm, strong in telehealth
  - Website: https://www.hallrender.com
  - Telehealth practice: https://www.hallrender.com/telehealth

- **McDermott Will & Emery** — healthcare and life sciences practice
  - Website: https://www.mwe.com/capabilities/health

- **For early-stage / startup-friendly healthcare legal:**
  - **Foley & Lardner** — https://www.foley.com/industries/healthcare
  - **Polsinelli** — https://www.polsinelli.com/industries/healthcare

- **Initiation priority:** IMMEDIATE — before any build begins. The MSO structure must be established before the first prescription is written.

---

#### PCAB (Pharmacy Compounding Accreditation Board)
**Role:** Verify that any compounding pharmacy partner is PCAB-accredited before signing a contract.

- **Website:** https://www.usp.org/compounding/pcab-accreditation
- **Accredited pharmacy search:** https://www.usp.org/compounding/pcab-accredited-pharmacies
- **Notes:** PCAB accreditation is a key trust signal. All three compounding pharmacy options listed (Belmar, Strive, Empower) are PCAB-accredited. Verify before contracting.

---

### A.11 Competitive Intelligence — Key Competitors to Monitor

---

#### Midi Health
- **Website:** https://www.joinmidi.com
- **Positioning:** Menopause care with synchronous video visits; raised $60M
- **Differentiation gap:** Synchronous model = slower, more expensive, harder to scale. Vesna's async model + intelligence layer is structurally different.

#### Alloy Women's Health
- **Website:** https://www.myalloy.com
- **Positioning:** HRT-focused telehealth for perimenopause and menopause
- **Differentiation gap:** More pharmaceutical-forward; less intelligence layer; no wearable integration evident.

#### Evernow
- **Website:** https://www.evernow.com
- **Positioning:** Menopause hormonal care, async model
- **Differentiation gap:** Similar async model; no significant data/intelligence layer differentiation.

#### Gennev
- **Website:** https://www.gennev.com
- **Positioning:** Menopause care and coaching; community-forward
- **Differentiation gap:** Strong community but weaker clinical prescribing funnel.

#### Hers (Hims & Hers)
- **Website:** https://www.forhers.com/menopause
- **Launched:** October 2025
- **Positioning:** Menopause and perimenopause care; no bloodwork required; symptom-only intake
- **Differentiation gap:** Generalist platform (hair, skin, mental health, weight) — menopause is one of many offerings. Vesna is menopause-only and therefore more credible to this specific patient. Hers commoditizes the bottom of the market; Vesna should own the premium, data-rich end.

---

---

## Appendix B — Porter's Five Forces Analysis

**Prepared for:** Vesna menopause telehealth platform
**Framework:** Porter's Five Forces competitive analysis
**Context:** Informed by business plan, data strategy, revenue model, MEDVi teardown, and market research from prior strategic analysis (April 2026)

---

### Overview

The Porter's Five Forces analysis reveals a market that is **winnable but not easily defensible by funnel alone.** The two most important forces are at opposite ends of the spectrum: threat of new entrants is high (the funnel is replicable), while buyer bargaining power is structurally low once a patient is treated and tracking (they don't want to start over). This asymmetry defines the entire strategic playbook: **move fast on acquisition, but build the moat through clinical quality and the intelligence layer before the window closes.**

---

### Force 1: Threat of New Entrants
**Rating: HIGH**

#### Why Entry Barriers Are Low

The menopause telehealth funnel is not technically difficult to replicate. The core stack — intake form, async physician review via OpenLoop or similar, compounded HRT via Belmar or Truepill, Stripe for billing — can be assembled by a well-funded team in 8–12 weeks. MEDVi demonstrated this with GLP-1s. The same playbook applies here.

Specific entry threats:

- **Hims & Hers (Hers)** launched a menopause product in October 2025 and already has over 500,000 subscribers across its platform. They have the brand, the paid acquisition infrastructure, the clinical network, and the patient trust. They will commoditize basic HRT prescribing quickly.
- **GLP-1 platforms pivoting** — Ro, Noom Med, and others with existing telehealth infrastructure and large subscriber bases could add an HRT pathway at relatively low cost.
- **New AI-enabled entrants** — the MEDVi model (two months, $20k, twelve AI tools) shows the cost of entry for a basic funnel is near zero for a capable team.
- **OB-GYN and women's health practices going digital** — traditional practices launching telehealth arms represent a trust-credentialed alternative.

#### What Reduces Entry Risk for Vesna

- **Clinical trust takes time to build.** A brand-new entrant has no patient history, no testimonials, no clinician reputation. Vesna's 12–24 month head start builds social proof that cannot be replicated overnight.
- **The intelligence layer creates switching costs.** A patient with 18 months of symptom history, sleep trends, and treatment response data in the Vesna platform faces real friction switching to a blank-slate competitor.
- **Regulatory complexity is a soft barrier.** MSO structure, state-by-state prescribing compliance, HIPAA BAAs, and compounding pharmacy relationships take time and money to assemble correctly — they deter casual entrants even if they don't stop serious ones.

#### Strategic Implication

Do not rely on being first. The funnel is replicable. Build the moat — the intelligence layer, the clinical reputation, the community trust — before Hers or a well-funded new entrant commoditizes basic HRT prescribing. **The window is 12–24 months.**

---

### Force 2: Bargaining Power of Suppliers
**Rating: MODERATE**

#### Key Suppliers and Their Leverage

**Physician networks (OpenLoop, similar)**
- Leverage: MODERATE-HIGH at launch, decreasing at scale
- OpenLoop and similar networks have meaningful pricing power early when Vesna has few patients and low volume. As patient volume grows, Vesna gains negotiating leverage.
- Risk: If OpenLoop raises prices or changes terms, switching physician networks mid-operation is expensive and disruptive. Mitigation: negotiate 12–18 month pricing guarantees at contract initiation.

**Compounding pharmacies (Belmar, Empower, Strive)**
- Leverage: LOW-MODERATE
- The compounding pharmacy market for HRT is competitive. Belmar, Strive, and Empower all want telehealth platform volume. Vesna has real choice here — use it as negotiating leverage from day one.
- Risk: Regulatory action on compounding (FDA tightening, as happened with GLP-1 compounding in 2025–2026) could force reformulation or sourcing changes. HRT compounding has a longer regulatory history than GLP-1 compounding and is considered lower risk — but not zero risk.
- Mitigation: Maintain relationships with at least two compounding pharmacies to avoid single-source dependency.

**EHR platform (Canvas Medical)**
- Leverage: MODERATE
- Canvas is purpose-built for this use case and has no obvious substitute at the same functionality level. Switching EHRs after patient data is stored is operationally painful.
- Mitigation: Ensure data portability clauses in Canvas contract from day one. Understand export formats.

**Lab testing providers (Everlywell, Let's Get Checked)**
- Leverage: LOW
- This is a competitive market. Multiple providers offer equivalent panels. Vesna can switch or multi-source without significant disruption.

**Eli Health**
- Leverage: MODERATE (near-term), decreasing as competitors emerge
- Currently Eli is the only consumer-grade saliva hormone testing product with meaningful accuracy. If Vesna builds the monitoring add-on around Eli specifically, there is dependency risk if Eli raises prices, changes APIs, or is acquired.
- Mitigation: Build the monitoring tier around a testing API abstraction layer so that Eli can be swapped for an alternative (or Vesna's own testing kit) if needed. Initiate the partnership conversation early to lock in favorable pricing.

#### Strategic Implication

Physician network and EHR are the two highest-dependency suppliers. Negotiate hard on physician network pricing and volume discounts. Ensure Canvas contract includes data portability. Diversify compounding pharmacy relationships from launch.

---

### Force 3: Bargaining Power of Buyers (Patients)
**Rating: MODERATE at entry → LOW after 90 days**

#### Why Buyer Power Is Initially Moderate

- Patients have real alternatives: traditional OB-GYN, Hers, Midi, Alloy, Evernow, Gennev
- Switching between telehealth platforms before treatment starts is nearly frictionless
- Price sensitivity exists: the 40–60 female demographic has disposable income but is not immune to price comparison
- Trust skepticism is high: this demographic has often been let down by the healthcare system and will comparison-shop carefully before committing

#### Why Buyer Power Drops Sharply After 90 Days

Once a patient is:
- receiving a treatment that is working
- tracking symptoms over time in the Vesna platform
- connected to a clinician who has reviewed her history
- seeing sleep and recovery trends that show progress

...the cost of switching becomes very high:

- She would lose her symptom and treatment history
- She would need to restart the intake process
- She would risk disrupting a care plan that is working
- She would lose access to a clinician who already knows her case

This is the strategic logic behind the intelligence layer. **It is not just a product feature — it is a retention mechanism that reduces buyer bargaining power over time.**

#### Price Sensitivity Nuances

- The 40–60 demographic has relatively high disposable income and is accustomed to paying out-of-pocket for healthcare
- HRT at $89–119/month compares favorably to fragmented traditional care (OB-GYN copays + pharmacy costs + follow-up visits can exceed $300/month)
- HSA/FSA eligibility reduces the effective out-of-pocket cost
- The comparison anchor should be "what fragmented traditional care actually costs," not competitor telehealth pricing

#### Strategic Implication

Win trust at the top of the funnel (validation-led messaging, clinical credibility). Deliver real clinical results in the first 90 days. The 30/60/90-day check-ins are not just good care — they are the moment where buyer power drops and long-term retention is locked in. **The first 90 days is the most important business period for every patient.**

---

### Force 4: Threat of Substitutes
**Rating: MODERATE**

#### Direct Substitutes

**Traditional OB-GYN or primary care**
- Many women already have an established relationship with a provider
- Substitute if: the OB-GYN is menopause-informed, appointments are accessible, and the patient feels heard
- Most often not a real substitute: short appointments, dismissive responses, and 3-month waits are the exact pain point Vesna addresses

**Local menopause specialists / certified menopause practitioners**
- High-quality substitute for patients who can find one
- Not scalable: NAMS-certified menopause practitioners are rare; most women cannot access one locally
- This is the vacuum Vesna fills

**Competitor telehealth platforms (Hers, Midi, Alloy)**
- Direct substitutes at similar price points
- Differentiated by intelligence layer and clinical depth
- Hers is the highest-risk substitute due to scale and brand recognition

**Wellness-only apps (Clue, Flo, Gennev's app tier)**
- Not clinical substitutes — no prescribing capability
- Can capture the "awareness and tracking" use case before a patient is ready for clinical care
- Risk: a wellness app that eventually adds telehealth prescribing becomes a full substitute overnight

#### Indirect Substitutes

**"Doing nothing" / "pushing through"**
- The most common substitute in this market today
- Many women are told symptoms are "just aging" and accept this
- Vesna's top-of-funnel messaging ("you're not imagining it") directly attacks this substitute

**Supplements and OTC options**
- Black cohosh, magnesium, phytoestrogens, cooling products
- Do not address the underlying hormonal issues for most patients
- Can co-exist with Vesna's care model — not a clinical substitute

**Compounding pharmacies with online prescribers (DIY)**
- Some patients seek out compounding pharmacies directly and find prescribers independently
- Higher friction, less clinical oversight
- Not a mainstream substitute but exists at the margins

#### Strategic Implication

The most dangerous substitute is Hers at the low end (commoditizing basic HRT prescribing) and local menopause specialists at the high end (for patients who can access them). Vesna should position between these: better than a generalist telehealth form-fill, more accessible than a specialist practice. The intelligence layer and clinical depth are what justify that positioning.

---

### Force 5: Competitive Rivalry
**Rating: MODERATE and INCREASING**

#### Current Competitive Landscape

The space is getting more crowded, but has not yet reached the saturation of the GLP-1 telehealth market.

| Competitor | Scale | Model | Key Weakness |
|---|---|---|---|
| Hers (Hims & Hers) | Large | Generalist telehealth | Not menopause-focused; no intelligence layer |
| Midi Health | Mid (raised $60M) | Synchronous video visits | Slower, more expensive, harder to scale |
| Alloy Women's Health | Small-mid | Async HRT prescribing | Limited data layer; limited brand |
| Evernow | Small-mid | Async HRT prescribing | Similar to Alloy; limited differentiation |
| Gennev | Small | Community + care | Weaker clinical prescribing funnel |
| MyMenopauseRx | Small | Prescribing-only | Minimal clinical depth |

#### Intensity of Rivalry Assessment

- **Price competition:** Emerging but not yet destructive. Hers will likely drive down the floor price for basic HRT prescribing.
- **Feature competition:** Limited. Most competitors stop at prescription + refill. Nobody has built the intelligence layer yet.
- **Brand competition:** Hers has significant brand recognition and marketing budget. All other competitors are relatively unknown outside the category.
- **Clinical competition:** Midi competes on clinical quality (synchronous model) but sacrifices scale. Vesna can compete on clinical quality through the intelligence layer without sacrificing scale.

#### Rivalry Dynamics Over Time

- As Hers grows, it will likely compress margins at the basic HRT prescribing level
- This is not inherently bad for Vesna — it validates the market and creates even more demand for a premium, data-rich alternative
- The GLP-1 market analogy is useful: when basic semaglutide prescribing was commoditized, the opportunity shifted to platforms with better clinical oversight and retention infrastructure
- Vesna should accelerate the intelligence layer before commoditization reaches the premium segment

#### What Vesna Has That Competitors Don't (Yet)

- Longitudinal intelligence layer (symptom + wearable + optional biomarker)
- Treatment response tracking as a retention mechanism
- Apple Health integration
- Eli Health partnership (if secured early)
- Menopause-only focus with deeper clinical positioning than generalists

#### Strategic Implication

Rivalry will intensify over 24 months. Hers is the most credible scale threat. The response is not to compete on price or funnel speed — it is to compete on clinical depth and the intelligence layer. Patients who want the cheapest HRT prescription will go to Hers. Patients who want to understand what is happening in their bodies and track whether care is working will come to Vesna. **That is the segmentation to own.**

---

### B.1 Five Forces Summary Table

| Force | Rating | Trend | Key Insight |
|---|---|---|---|
| Threat of new entrants | HIGH | Increasing | The funnel is replicable. The moat must come from data, trust, and clinical depth — not the intake form. |
| Bargaining power of suppliers | MODERATE | Stable | Physician network and EHR are highest-dependency. Diversify pharmacy suppliers. Get Eli partnership early. |
| Bargaining power of buyers | MODERATE → LOW | Decreasing after 90 days | First 90 days is critical. Intelligence layer + clinical results create switching costs that lock in retention. |
| Threat of substitutes | MODERATE | Increasing | Hers at the low end. Local specialists at the high end. Vesna's position: premium clinical access + intelligence. |
| Competitive rivalry | MODERATE | Increasing | Hers will commoditize basic prescribing. Accelerate the intelligence layer before premium segment is also contested. |

---

### B.2 The Strategic Conclusion From All Five Forces

**The window is real but not permanent.**

The menopause telehealth market is at the same inflection point that GLP-1 telehealth was at 18–24 months ago. The funnel is proven (MEDVi demonstrated this). The demand is massive. The competition has not yet converged on a winning formula.

But the window will close:
- Hers will commoditize basic HRT prescribing within 12–18 months
- New entrants will copy the async prescribing model
- Buyers will become more price-sensitive as alternatives multiply

**The response is to move fast on acquisition while simultaneously building the moat:**

1. **Acquisition:** Launch with MEDVi's funnel discipline — symptom assessment, async review, transparent pricing, trust signals. Get patients in.

2. **Retention moat:** Deploy the intelligence layer in Phase 2 — symptom tracking, Apple Health, treatment response views. Every month a patient stays with Vesna, switching costs increase.

3. **Brand moat:** Build the clinical reputation — credentialed clinicians, real testimonials, education content, precise language. Trust takes 12–24 months to earn at scale and is very hard to replicate quickly.

4. **Data moat:** After 24 months of longitudinal patient data, Vesna has clinical insights that no new entrant can replicate. This creates pricing power, research partnerships, and expansion opportunities.

5. **Community moat:** Expert-led group sessions and peer community (the $19/month tier) create social switching costs on top of clinical switching costs.

The businesses that will fail in this market are those that build a great funnel but a weak product. The businesses that will win are those that convert the funnel into a clinical relationship that patients actively do not want to leave.

**Vesna's job in Year 1 is to prove the funnel. Vesna's job in Year 2 is to make the funnel irrelevant — because retention does the work.**

---

*Appendices prepared April 4, 2026. Vendor details, URLs, and contact information should be verified before outreach as product offerings and contact pages change. This document is a planning reference, not legal or medical advice.*
