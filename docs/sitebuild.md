# Vesna — Site Build Document
**Project:** Vesna menopause telehealth platform
**Date:** April 5, 2026
**Purpose:** Complete reference for designing and building the Vesna website and patient intake experience

---

## 1. Site Architecture

### 1.1 Page Map

```
/                            Primary landing page (paid + organic traffic)
/menopause-care              HRT + non-hormonal care detail page
/how-it-works                Process explainer
/clinicians                  Clinician profiles + credentials
/track                       Intelligence layer explainer (symptom + wearable + testing)
/pricing                     Pricing detail page
/faq                         Full FAQ
/education                   Menopause education center (SEO + trust)
/assessment                  Intake assessment flow
/privacy-policy              Privacy policy
/notice-of-privacy-practices HIPAA Notice of Privacy Practices
/medical-consent             Medical consent
/refund-policy               Cancellation + refund policy
/terms                       Terms of service
```

### 1.2 Build Priority

**Phase 1 — MVP (Weeks 1–4):**
- `/` Primary landing page
- `/assessment` Intake flow + checkout
- `/privacy-policy`, `/notice-of-privacy-practices`, `/medical-consent`, `/refund-policy`
- Post-onboarding: basic symptom check-in + Apple Health opt-in prompt

**Phase 2 — Depth + Trust (Weeks 5–8):**
- `/menopause-care`
- `/how-it-works`
- `/clinicians`
- `/faq`
- `/pricing`
- `/track`
- Patient portal: symptom + sleep dashboard, 30/60/90-day treatment tracker
- Education section: first 5 articles

**Phase 3 — Intelligence + Growth (Weeks 9–16):**
- `/education` expanded content hub
- Eli Health hormone monitoring add-on integration
- Clinician-facing dashboard
- A/B testing infrastructure
- Referral program
- Community + coaching tier

---

## 2. Primary Landing Page — Full Component Spec

### 2.1 Promo Bar

- Position: fixed top of page
- Background: deep sage or teal accent
- Copy example: *"First clinician review included — start your symptom assessment today"*
- Includes dismiss button (optional)
- Links to assessment CTA anchor

---

### 2.2 Sticky Navigation

- Logo: left-aligned
- Anchor links: Our Care | How It Works | What We Track | Clinicians | Pricing | FAQ
- CTA button: "Take the assessment" — right-aligned, always visible on mobile
- Behavior: transparent on load → solid background on scroll
- Mobile: hamburger menu with full nav + CTA button always visible in header

---

### 2.3 Hero Section

**Primary headline:**
> "You're not imagining it. And you don't have to just push through."

**Subheadline:**
> "Clinician-guided menopause care for hot flashes, sleep, mood, brain fog, and midlife body changes — with ongoing tracking to show you it's working."

**Icon row (5 items):**
- Clinician-led care
- HRT + non-hormonal options
- Symptom + sleep tracking included
- No insurance required
- HSA/FSA accepted

**Primary CTA button:** "Take the 2-minute assessment"

**Social proof line beneath CTA:** "Join [X] women who've started feeling like themselves again"

**Hero image direction:**
- Real midlife woman — confident, warm, natural
- Not stock-photo wellness aesthetic
- Not a pill bottle or clinical setting
- Age 42–55, relatable, not performatively happy

---

### 2.4 Trust Bar

- Placed immediately below hero fold
- 4–6 media logo placements (as-seen-in)
- Treatment: muted grayscale, not full color
- No editorial copy required — logos only

---

### 2.5 Symptom Pathway Cards

**Section header:** "What are you dealing with?"

| Card | Headline | Subtext | Links to |
|---|---|---|---|
| Hot flashes + night sweats | "Waking up soaked at 3am" | HRT + non-hormonal options | Assessment |
| Sleep + mood | "Can't sleep. Can't focus. Not yourself." | Sleep and mood support | Assessment |
| Brain fog | "Words disappear. Memory slips." | Cognitive + hormonal review | Assessment |
| Cycle changes | "Something is shifting but you're not sure what" | Perimenopause assessment | Assessment |
| Low libido | "That part of you has gone quiet" | Hormonal + non-hormonal care | Assessment |
| All of the above | "Every symptom on the list" | Full menopause care plan | Assessment |

**Important:** No metabolic support card. No GLP-1 card. This section is menopause symptoms only.

Each card links directly to assessment with symptom pre-selected.

---

### 2.6 How It Works (3-Step)

**Step 1: Tell us what's happening**
> Take a short symptom assessment — no appointment needed.

**Step 2: A clinician reviews your case**
> A licensed menopause-specialist clinician reviews your intake within 24 hours and builds your care plan.

**Step 3: Care arrives — and we track it with you**
> Medication (if prescribed), symptom tracking, and ongoing check-ins — so you can see whether it's working.

**Supporting line:** "No waiting rooms. No insurance required. Real clinical oversight."

---

### 2.7 Intelligence Layer Feature Section

**Section header:** "Care that learns with you over time"

**Body copy:**
> Most menopause care is a one-time visit. Vesna tracks your symptoms, sleep, and treatment response continuously — so your clinician always has the full picture, and you can see what's actually improving.

**Feature cards (3 across):**

| Card | Icon | Headline | Body |
|---|---|---|---|
| Symptom tracking | chart icon | "See your patterns" | Weekly check-ins build a picture of how your symptoms are changing — not just how you feel today. |
| Sleep + wearable | moon icon | "Connect your Apple Watch or Fitbit" | Resting heart rate, temperature trends, and sleep data give your clinician context no questionnaire can. |
| Treatment response | checkmark icon | "Know if it's working" | 30, 60, and 90-day response tracking shows whether your care plan is having an effect — and flags when it needs adjusting. |

**Hormone monitoring add-on note (secondary, smaller):**
> For users who want a data-rich experience, optional at-home saliva testing (Eli Health) adds a periodic biomarker layer. Not required. Not the foundation of your care. An additional input for clinicians and patients who want more.

---

### 2.8 Care Pathway Cards

**Section header:** "Treatment tailored to your symptoms"

| Card | Name | Description |
|---|---|---|
| 1 | Hormone therapy (HRT) | Bioidentical estradiol, progesterone, and/or testosterone — compounded, clinician-prescribed, and monitored over time |
| 2 | Non-hormonal care | Evidence-based non-hormonal options for women who prefer not to use HRT or are not candidates |

**Small note beneath cards (only mention of anything beyond HRT):**
> "For patients with clinically significant metabolic concerns, your clinician may discuss additional options as part of your care plan."

This is one line. It is not a card, not a CTA, not a named pathway.

---

### 2.9 Outcomes + Metrics Section

**Format:** Large-number stat cards

**Approved metrics — cite clinical source for each:**
- "Up to 80% reduction in hot flash frequency with appropriate HRT"
- "Significant improvement in sleep quality reported within 4–8 weeks of HRT"
- "HRT associated with improved bone density and cardiovascular markers in perimenopause"
- "Women on Vesna report [X]% improvement in sleep scores at 90 days" — populate post-launch with real data

**Hard rule:** No self-reported outcome inflation. Every metric must be cited to clinical literature or disclosed as patient-reported. No MEDVi-style exaggerated claims.

---

### 2.10 Patient Stories Strip

- 3–4 testimonials in grid or carousel
- Format per testimonial: first name + last initial | symptom summary | quote | time on plan
- Themes to cover:
  - Dismissed by primary care — Vesna took it seriously
  - HRT changed my sleep within weeks
  - Finally understood what perimenopause was
  - Tracking helped me see real progress
- "Verified patient" badge on each

---

### 2.11 Symptom Selector (Interactive Widget)

**Prompt:** "Which of these sounds most like you?"

Options:
- Hot flashes or night sweats
- Can't sleep like I used to
- Mood or anxiety changes
- Brain fog or memory slips
- Cycle irregularity
- Just starting to notice changes
- All of the above

**On selection:** Personalized response line appears, e.g.: *"Based on what you've described, a clinician-led assessment is the right first step."* → CTA button

**Purpose:** Micro-engagement before the primary assessment; patient feels seen before clicking.

---

### 2.12 Clinician Section

**Header:** "Your care is overseen by licensed clinicians who specialize in menopause"

**Per clinician card:**
- Photo
- Name
- Exact credentials (MD, DO, NP — no inflated titles)
- Board certification or relevant specialty (exact language)
- 1-line bio

**Supporting copy:**
> "Every care plan is reviewed and approved by a licensed clinician before anything is prescribed. Clinical decisions are made by people — not algorithms."

---

### 2.13 Support Section

**Header:** "Support is part of the plan"

Feature list:
- Unlimited messaging with your care team
- 30, 60, and 90-day check-ins built in
- Refill oversight and dose adjustment support
- Symptom and sleep tracking through your portal
- Response within [X] hours guaranteed

---

### 2.14 Pricing Block

| Plan | Price | Includes |
|---|---|---|
| Vesna Care | $89/mo | Symptom assessment, clinician review, HRT or non-hormonal care if prescribed, symptom tracking, ongoing messaging, check-ins, refills |
| Vesna Care + Monitor | $119/mo | Everything above + quarterly Eli Health saliva testing + longitudinal hormone dashboard |

Supporting badges:
- No insurance required
- HSA/FSA accepted
- Cancel anytime
- No hidden fees

**GLP-1 is not a pricing tier and is not mentioned here.**

---

### 2.15 FAQ Section

**Minimum 12 questions:**

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

**Address HRT fear directly in question 1:** What people think they know, what current evidence says, and why treatment decisions are individualized. This is one of the biggest conversion barriers in the category.

---

### 2.16 Final CTA Block

**Headline:** "You've been managing this on your own long enough."

**Subheadline:** "Take the 2-minute assessment and let a clinician review your symptoms — no appointment, no insurance, no waiting."

**CTA:** "Start your assessment"

---

### 2.17 Compliance Footer

**Required legal disclaimer:**
> "Vesna provides technology infrastructure connecting patients with independent licensed clinicians. Clinical decisions are made by licensed healthcare providers, not by Vesna. Results vary. Treatment is subject to clinician approval. Compounded medications are not FDA-approved. Vesna is not a pharmacy."

**Footer columns:**
- Column 1: Logo + 1-line brand description
- Column 2: Care links (Menopause Care | How It Works | What We Track | Clinicians | Pricing)
- Column 3: Company links (FAQ | Education | Contact)
- Column 4: Legal links (Privacy Policy | Notice of Privacy Practices | Medical Consent | Refund Policy | Terms)
- Row below: email + phone

**Trust badges row:**
- HIPAA Compliant
- HSA/FSA Accepted
- Licensed Clinicians
- SSL Secured

---

## 3. Intake Assessment Flow

### 3.1 Seven-Step Flow

```
Step 1: Symptom selection (multi-select checkboxes)
Step 2: Cycle + stage (age, last period date, symptom onset timeline)
Step 3: Medical history (contraindications: prior clots, hormone-sensitive cancers, liver disease)
Step 4: Goals (symptom relief / sleep / mood / energy / all of the above)
Step 5: Eligibility result + care summary screen
Step 6: Pricing reveal + plan selection
Step 7: Checkout (Stripe)
```

### 3.2 Design Principles

- **Symptom-first, payment-last** — assessment before any pricing shown
- **Validating copy throughout** — e.g. "These symptoms are very common in perimenopause and often under-treated by traditional care"
- **Progress bar visible** — step X of 7, reduces abandonment
- **Qualify for care, not for a drug** — result screen says "your symptoms are consistent with early perimenopause — a licensed clinician will review your case" not "you qualify for HRT"
- **No overclaiming** — assessment does not create a doctor-patient relationship; disclaimer required
- **Mobile-first** — large tap targets, no horizontal scroll, short question sets per screen
- **Skip-friendly on sensitive questions** — medical history screens should allow "prefer not to say" with appropriate clinical caveats

### 3.3 Eligibility Result Screen (Step 5)

**Format:**
- Summary of flagged symptoms (e.g. "You reported: hot flashes, sleep disruption, brain fog, cycle changes")
- Care pathway recommendation (e.g. "Based on your responses, a clinician-led assessment is the right next step")
- "What happens next" explanation (clinician reviews within 24 hrs, builds your care plan, prescribes if appropriate)
- No diagnosis made, no medication promised

**Then:** pricing reveal (Step 6) → checkout (Step 7)

### 3.4 Post-Checkout: Apple Health Opt-In

Shown immediately after successful checkout — before patient portal onboarding:

> "Connect Apple Health to give your clinician richer context and track your sleep and symptoms over time."

- One-tap to connect (HealthKit permission request)
- Skippable with single tap
- Not required for treatment
- Shown again in patient portal onboarding if skipped here

---

## 4. Intelligence Layer — Technical Spec

### 4.1 Data Inputs by Phase

**Phase 1 (at launch):**
- Structured symptom check-ins — weekly, ~2 minutes, 8–10 questions
- Cycle and bleeding log
- Medication adherence tracking (did you take your medication this week?)
- Free-text notes field (optional)
- Clinician messaging and visit notes (via Canvas)

**Phase 2 (Weeks 5–8):**
- Apple HealthKit integration (iOS app required):
  - Sleep duration and consistency
  - Sleep stages (where available)
  - Overnight wrist temperature trends (Apple Watch Series 8+)
  - Resting heart rate and HRV
  - Respiratory rate during sleep
  - Activity levels and step count
  - Cycle logging from Health app
- Patient dashboard — symptom trends, sleep trends, treatment timeline, check-in history
- Clinician dashboard — trend summaries, side effect flags, adherence patterns

**Phase 3 (Weeks 9–16):**
- Eli Health Hormometer integration — optional add-on for monitoring tier
  - Progesterone: live, 94% accuracy, $8/test
  - Estradiol: pending Eli launch — placeholder in UI until available
- Pattern detection engine — surfaces trends (e.g. "Sleep has improved 22% since starting HRT")
- Insight summaries — delivered to patient weekly, to clinician before each check-in

### 4.2 Positioning Rules for Intelligence Layer Copy

| Safe to say | Do not say |
|---|---|
| "Track patterns over time" | "Know exactly which hormones you need" |
| "See how symptoms and sleep change" | "Diagnose menopause from your saliva" |
| "Give your clinician a fuller picture" | "Personalize HRT dosing directly from app data" |
| "Monitor how your care plan is working" | "Optimize hormones from one test" |

Never claim the intelligence layer replaces clinical judgment. Always frame as input to the clinician.

---

## 5. Technical Stack

### 5.1 Frontend

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js (React) | SSR for SEO; fast page loads; Vercel-native |
| Styling | Tailwind CSS | Rapid build; consistent design tokens |
| Animation | Framer Motion | Subtle, purposeful transitions only |
| CMS | Sanity | Clinician bios, FAQs, education articles editable without dev |
| Hosting | Vercel | Native Next.js; CI/CD from GitHub; preview deployments |

### 5.2 Clinical Layer

| Function | Vendor | Link |
|---|---|---|
| EHR + prescribing | Canvas Medical | canvasmedical.com |
| Physician network | OpenLoop Health | openloophealth.com |
| Clinician credentialing | Medallion | medallion.co |
| Pharmacy / HRT fulfillment | Truepill (primary) | truepill.com |
| Compounding pharmacy | Belmar Pharma | belmarpharma.com |
| e-Prescribe | Via Canvas / SureScripts | Handled through Canvas onboarding |

### 5.3 Intelligence Layer

| Function | Vendor / Approach | Notes |
|---|---|---|
| Symptom check-ins | Custom form | Stored in Canvas or separate HIPAA-compliant DB |
| Apple Health | HealthKit API | Requires iOS app (Phase 2) |
| Wearable (Android) | Google Health Connect | Phase 3 — Android expansion |
| Hormone monitoring | Eli Health Hormometer | B2B: eli.health/pages/b2b |
| Baseline lab panel | Everlywell | B2B: everlywell.com/enterprise |
| Patient dashboard | Custom build | Phase 2 deliverable |
| Clinician dashboard | Canvas extension or custom | Phase 2 deliverable |

### 5.4 Payments

| Function | Vendor | Link |
|---|---|---|
| Payments + subscriptions | Stripe Billing | stripe.com/billing |
| HSA/FSA acceptance | Stripe (native) | stripe.com/docs/hsa-fsa |
| HIPAA BAA | Available from Stripe | stripe.com/docs/security/healthcare |

### 5.5 Analytics, CRM & Growth

| Function | Tool | Notes |
|---|---|---|
| Product analytics | PostHog | Self-hosted option for HIPAA; BAA available |
| Ad tracking | Meta Pixel + Google Tag Manager | Via GTM container |
| A/B testing | Statsig | statsig.com — or PostHog feature flags |
| Email + SMS | Klaviyo | BAA available; HIPAA-compliant tier |
| Support chat | Intercom | BAA available; keep PHI in Canvas, not Intercom |

### 5.6 Infrastructure

| Function | Tool | Notes |
|---|---|---|
| Hosting | Vercel | vercel.com |
| CMS | Sanity | sanity.io |
| Domain + DNS | Cloudflare | cloudflare.com |
| Error tracking | Sentry | sentry.io |
| Secrets management | Vercel Environment Variables or AWS Secrets Manager | Never commit secrets to repo |

---

## 6. Vendor Directory — Full Contact Details

### Clinical Infrastructure

**OpenLoop Health**
- Website: https://www.openloophealth.com
- Partnership: https://www.openloophealth.com/contact
- Role: Physician network — licensed clinicians in all 50 states
- Priority: IMMEDIATE

**Canvas Medical**
- Website: https://www.canvasmedical.com
- Contact: https://www.canvasmedical.com/contact
- API docs: https://docs.canvasmedical.com
- Role: EHR + clinical workflow + e-prescribing
- Priority: IMMEDIATE

**Medallion**
- Website: https://www.medallion.co
- Contact: https://www.medallion.co/contact
- Role: Clinician credentialing + license tracking
- Priority: HIGH

**SureScripts**
- Website: https://www.surescripts.com
- Enrollment: https://surescripts.com/solutions/e-prescribing
- Role: National e-prescribing network (handled via Canvas)
- Priority: HANDLED VIA CANVAS

### Pharmacy & Compounding

**Truepill**
- Website: https://www.truepill.com
- Contact: https://www.truepill.com/contact
- Role: Digital pharmacy + fulfillment platform
- Priority: HIGH

**Belmar Pharma Solutions**
- Website: https://www.belmarpharma.com
- Provider portal: https://www.belmarpharma.com/providers
- Role: Compounding pharmacy — bioidentical HRT specialist
- Priority: HIGH

**Strive Pharmacy**
- Website: https://www.strivepharmacy.com
- Provider enrollment: https://www.strivepharmacy.com/providers
- Role: Alternative compounding pharmacy
- Priority: MEDIUM — evaluate as backup

**Empower Pharmacy**
- Website: https://www.empowerpharmacy.com
- Provider portal: https://www.empowerpharmacy.com/healthcare-professionals
- Role: High-volume PCAB-accredited compounding
- Priority: MEDIUM — for volume pricing at scale

### Lab Testing

**Everlywell**
- Website: https://www.everlywell.com
- Enterprise: https://www.everlywell.com/enterprise
- Perimenopause test: https://www.everlywell.com/products/perimenopause-test
- Menopause test: https://www.everlywell.com/products/menopause-test
- Role: At-home lab kits for prescribing baseline (FSH, estradiol, progesterone)
- Priority: HIGH

**Let's Get Checked**
- Website: https://www.letsgetchecked.com
- Business: https://www.letsgetchecked.com/business
- Female hormone panel: https://www.letsgetchecked.com/female-hormone-test
- Role: Alternative at-home lab testing
- Priority: MEDIUM — compare pricing with Everlywell

### Hormone Monitoring

**Eli Health**
- Website: https://eli.health
- B2B partnerships: https://eli.health/pages/b2b ← **START HERE**
- Progesterone product: https://eli.health/products/progesterone
- Role: Saliva-based hormone monitoring (optional add-on tier)
- Status: Progesterone + cortisol live; estradiol pending
- Priority: HIGH — contact B2B page + CEO on LinkedIn before competitors do

### Wearable APIs

**Apple HealthKit**
- Developer docs: https://developer.apple.com/health-fitness
- HealthKit framework: https://developer.apple.com/documentation/healthkit
- Role: iOS health data — sleep, HR, temperature, activity, cycle data
- Priority: Phase 2

**Google Health Connect**
- Developer docs: https://developer.android.com/health-and-fitness/guides/health-connect
- Role: Android wearable data aggregation
- Priority: Phase 3

### Payments

**Stripe**
- Website: https://www.stripe.com
- Billing: https://stripe.com/billing
- HSA/FSA: https://stripe.com/docs/hsa-fsa
- HIPAA BAA: https://stripe.com/docs/security/healthcare
- Priority: IMMEDIATE

### CRM & Communications

**Klaviyo**
- Website: https://www.klaviyo.com
- HIPAA: https://www.klaviyo.com/legal/hipaa
- Role: Email + SMS automation
- Priority: Phase 2

**Intercom**
- Website: https://www.intercom.com
- HIPAA: https://www.intercom.com/legal/hipaa
- Role: In-app support chat + onboarding
- Priority: Phase 2

### Analytics

**PostHog**
- Website: https://posthog.com
- HIPAA: https://posthog.com/docs/privacy/hipaa-compliance
- Role: Product analytics + feature flags
- Priority: IMMEDIATE

**Statsig**
- Website: https://www.statsig.com
- Role: A/B testing + experimentation
- Priority: Phase 3

### Infrastructure

**Vercel**
- Website: https://vercel.com
- Security: https://vercel.com/security
- Role: Next.js hosting + CI/CD
- Priority: IMMEDIATE

**Sanity**
- Website: https://www.sanity.io
- Role: Headless CMS for editable content
- Priority: Phase 1

### Legal

**Epstein Becker Green** — leading healthcare/digital health firm
- https://www.ebglaw.com/services/digital-health

**Hall Render** — strong telehealth practice
- https://www.hallrender.com/telehealth

**Foley & Lardner** — startup-friendly healthcare legal
- https://www.foley.com/industries/healthcare

**PCAB Accreditation verification** (check all compounding pharmacy partners)
- https://www.usp.org/compounding/pcab-accredited-pharmacies

---

## 7. Copy Framework

### 7.1 Brand Voice

- **Warm but precise** — not clinical-cold, not wellness-fluffy
- **Validating before persuading** — lead with "you're not imagining it" before "here's what to do"
- **Honest about complexity** — the clinician decides, not the algorithm
- **No hype** — no "revolutionary," "breakthrough," "life-changing"
- **Intelligence layer copy** should feel like clarity and progress, not surveillance

### 7.2 Messaging Hierarchy

| Level | Message |
|---|---|
| Emotional truth | "You're not imagining it. These symptoms are real and treatable." |
| Intelligence edge | "And we can show you — over time — what's actually changing." |
| Category framing | "This is menopause care. Not a pill mill." |
| Differentiation | "Real clinicians. Real tracking. Not automated." |
| Process | "2-minute assessment. Clinician reviews within 24 hours." |
| Commercial | "Transparent pricing. No insurance. Cancel anytime." |

### 7.3 Headlines to A/B Test

- "You're not imagining it. And you don't have to just push through." ← test first
- "Menopause care that actually takes you seriously."
- "Finally — care that listens and tracks what's improving."
- "The care your OB-GYN should have had time to give you."
- "Hot flashes. Brain fog. Night sweats. There's clinical care for all of it."

### 7.4 CTAs to A/B Test

- "Take the 2-minute assessment" ← test first
- "See if care is right for you"
- "Start your symptom review"
- "Get your care plan"

---

## 8. Design Direction

### 8.1 Visual Tone

- More premium than MEDVi — less direct-response energy
- Medical credibility without clinical coldness
- Real photography of midlife women — confident, not performatively ecstatic
- Calm hierarchy — whitespace, clear type scale, not hype-poster density
- Intelligence layer UI should feel like a thoughtful health app, not a surveillance dashboard

### 8.2 Color Direction

- **Primary:** warm off-white or soft stone (#F5F0EA or similar)
- **Accent 1:** deep sage or teal (#2D6A6A or similar) — trust, clinical
- **Accent 2:** warm terracotta or amber (#C4622D or similar) — warmth, body
- **Text:** near-black (#1a1a1a)
- **Avoid:** hot pink, purple, generic femtech palette

### 8.3 Typography

- **Headlines:** Serif — Playfair Display or Freight Display (trust, premium feel)
- **Body:** Sans-serif — Inter or DM Sans (readability, clinical clarity)
- **Scale:** Clear hierarchy — H1 large and bold, body comfortable at 15–16px, generous line-height (1.6–1.7)

### 8.4 Photography Direction

- Real women ages 42–58 — not models, not stock
- Lifestyle settings: morning light, home, outdoors — not clinical settings
- Expressions: calm, confident, present — not exaggerated happiness
- Diversity: skin tone, body type, background — representative of the patient population
- Avoid: pill bottles as hero images, before/after framing, weight-loss visual language

---

## 9. Phased Build Checklist

### Phase 1 — MVP (Weeks 1–4)
**Goal:** Functional landing page + intake + compliance + basic tracking live

- [ ] Primary landing page — all sections in Section 2
- [ ] Intake assessment — 7-step flow (Section 3)
- [ ] Eligibility result screen
- [ ] Checkout — Stripe integration
- [ ] Privacy policy page
- [ ] Notice of Privacy Practices page
- [ ] Medical consent page
- [ ] Refund + cancellation policy page
- [ ] Canvas EHR — basic integration (patient chart creation on checkout)
- [ ] OpenLoop physician network — async review workflow connected
- [ ] Truepill or Belmar — pharmacy connection confirmed
- [ ] Everlywell — lab kit integration for prescribing baseline
- [ ] Weekly symptom check-in (lightweight, post-onboarding)
- [ ] Apple Health opt-in prompt (post-checkout)
- [ ] PostHog analytics — instrumented from day one
- [ ] All HIPAA BAAs signed before any patient data flows
- [ ] Vercel + Sanity deployed
- [ ] Mobile QA on iPhone and Android (Chrome)

### Phase 2 — Intelligence + Content (Weeks 5–8)
**Goal:** Data layer live, depth pages, trust content

- [ ] /menopause-care page
- [ ] /how-it-works page
- [ ] /track page — intelligence layer explainer
- [ ] /clinicians page — with verified, real clinician bios
- [ ] /faq — full 12+ question FAQ
- [ ] /pricing page
- [ ] iOS app (MVP) — HealthKit permission + data import
- [ ] Apple Health data import — sleep, HR, temperature
- [ ] Symptom + sleep dashboard (patient portal)
- [ ] Treatment response tracker — 30/60/90-day check-in flow
- [ ] Clinician dashboard — trend summaries before check-ins
- [ ] Education section — first 5 articles published
- [ ] Patient testimonials — collected and live
- [ ] Klaviyo — email/SMS onboarding flow connected
- [ ] Meta Pixel + Google Tag Manager live
- [ ] Intercom — support chat live

### Phase 3 — Optimization + Moat (Weeks 9–16)
**Goal:** A/B test conversion, add biomarker layer, deepen intelligence

- [ ] A/B test infrastructure (Statsig)
- [ ] Hero headline A/B test live
- [ ] CTA copy A/B test live
- [ ] Eli Health Hormometer integration — monitoring add-on tier
- [ ] Pattern detection engine — trend summaries for patients
- [ ] /education content hub — 20+ articles, SEO-optimized
- [ ] Community + coaching tier — expert sessions, peer circles
- [ ] Referral program
- [ ] Employer/benefits channel — initial outreach
- [ ] Android app (MVP) — Health Connect integration
- [ ] Conversion rate optimization based on PostHog funnel data

---

## 10. What This Document Does Not Cover

Separate planning documents are needed for:

- Patient portal full UX (post-intake experience, beyond check-ins)
- Clinician-side EHR workflow detail
- Medication fulfillment operations and logistics
- Customer support staffing model and scripts
- Post-launch email/SMS retention sequence library
- Paid media strategy and channel mix
- Clinical protocol development (by licensed clinicians)
- Community and coaching program design
- Long-term data privacy and governance as the intelligence layer scales

---

*This document is a build reference for the Vesna website and intake experience. It is not legal or medical advice. All clinical claims, consent language, and compliance pages must be reviewed by qualified healthcare regulatory counsel before launch.*
