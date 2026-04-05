# Vesna — Site Build Plan

**Project:** Vesna menopause telehealth platform
**Reference model:** MEDVi GLP funnel
**Date:** April 4, 2026
**Status:** Pre-build planning

---

## 1. Strategic Foundation

### 1.1 What Vesna Is

A menopause-first telehealth platform that borrows MEDVi's funnel discipline but earns trust through stronger clinical positioning, broader care pathways, and a more durable patient relationship model.

This is not "MEDVi for menopause." It is a menopause care platform with HRT as one treatment pathway — alongside non-hormonal care, metabolic support, GLP-1 integration, sleep, mood, and long-term midlife care.

### 1.2 Core Customer

Women in perimenopause, menopause, and early postmenopause who feel dismissed, under-treated, confused, or unsupported by the traditional system. Typically educated, highly motivated, and actively researching their options.

### 1.3 Core Promise

Serious menopause care that listens, explains, and treats symptoms with clinician-guided options. Easier than the traditional system. More trustworthy than a generic telehealth checkout flow.

### 1.4 Where Vesna Beats MEDVi

| Dimension | MEDVi | Vesna |
|---|---|---|
| Voice | Sales-forward, outcome-heavy | Warm, validating, precise |
| Clinical depth | Minimal education | Symptom pathways, treatment clarity |
| Trust mechanism | Outcome claims + media logos | Credential precision + patient stories |
| Retention model | GLP-1 subscription (12–18 mo avg) | HRT subscription (5–10+ yr avg LTV) |
| Regulatory risk | High (FDA compounded GLP-1 pressure) | Lower (compounded HRT has decades of history) |
| Positioning | Single-product checkout | Menopause care platform |

---

## 2. Site Architecture

### 2.1 Page Map

```
/                          → Primary landing page (paid + organic traffic)
/menopause-care            → Menopause + HRT detail page
/metabolic-support         → GLP-1 / weight management detail page
/integrated-care           → Combined care pathway page
/how-it-works              → Process explainer
/clinicians                → Clinician profiles + credentials
/education                 → Menopause education center (SEO + trust)
/assessment                → Intake assessment (external flow or embedded)
/pricing                   → Pricing detail page
/faq                       → Full FAQ
/privacy-policy            → Privacy policy
/notice-of-privacy-practices → HIPAA NPP
/medical-consent           → Medical consent
/refund-policy             → Cancellation + refund policy
/terms                     → Terms of service
```

### 2.2 Priority Build Order

**Phase 1 (MVP launch):**
- `/` — Primary landing page
- `/assessment` — Intake flow
- `/privacy-policy`, `/medical-consent`, `/notice-of-privacy-practices`, `/refund-policy`

**Phase 2 (post-launch):**
- `/menopause-care`
- `/metabolic-support`
- `/how-it-works`
- `/clinicians`
- `/pricing`
- `/faq`

**Phase 3 (growth):**
- `/integrated-care`
- `/education` (content hub)

---

## 3. Primary Landing Page — Full Component Spec

### 3.1 Promo Bar (top of page)

- Background: accent color (soft warm green or deep teal)
- Text: introductory offer, e.g. "First consultation included — start your symptom assessment today"
- Dismiss button optional
- Link to CTA anchor

### 3.2 Sticky Navigation

Items:
- Logo (left)
- Anchor links: Our Care | How It Works | Clinicians | Pricing | FAQ
- CTA button: "Take the assessment" (right)

Behavior:
- Transparent on load, solid background on scroll
- Mobile: hamburger menu
- CTA button always visible on mobile

### 3.3 Hero Section

**Headline (primary):**
> "You're not imagining it. And you don't have to just push through."

**Subheadline:**
> "Clinician-guided menopause care for hot flashes, sleep, mood, brain fog, and midlife body changes. Personalized. Shipped to your door."

**Icon row (5 items):**
- Clinician-led care
- Results in days, not months
- No insurance required
- Transparent pricing
- HSA/FSA accepted

**CTA button:**
> "Take the 2-minute assessment"

**Social proof line beneath CTA:**
> "Join [X] women who've already started feeling like themselves again"

**Hero image:** Warm, real photography — midlife woman, confident, not performatively happy. Not stock-photo generic.

---

### 3.4 Trust Bar

- 4–6 media logo placements (as-seen-in style)
- Muted grayscale treatment

---

### 3.5 Symptom Pathway Cards

**Section header:**
> "What are you dealing with?"

**Cards (user can self-select):**

| Card | Headline | Sub |
|---|---|---|
| Hot flashes + night sweats | "Waking up soaked at 3am" | HRT + non-hormonal options |
| Sleep + mood | "Can't sleep. Can't focus. Not yourself." | Sleep + mood support pathways |
| Weight + metabolism | "Gaining weight despite nothing changing" | Metabolic + GLP-1 support |
| Perimenopause uncertainty | "Something is shifting but you don't know what" | Full symptom review |
| Brain fog | "Words disappear. Memory slips." | Cognitive + hormonal review |
| Maintenance | "On HRT or GLP-1 and need ongoing support" | Monitoring + refill management |

Each card: short title, 1-line description, "Learn more" link, and "Start assessment" CTA.

---

### 3.6 How It Works (3-step)

**Step 1: Tell us what's happening**
> Take a short symptom assessment — no appointment needed.

**Step 2: Clinician reviews your case**
> A licensed menopause-specialist clinician reviews your intake within 24 hours and builds your care plan.

**Step 3: Your care arrives**
> Medication (if prescribed), monitoring tools, and ongoing support — delivered to your door and your phone.

Supporting line: "No waiting rooms. No insurance required. Real clinical oversight."

---

### 3.7 Care Pathway Cards

**Section header:**
> "Treatment tailored to your symptoms"

**Pathway cards:**

| Card | Name | Description |
|---|---|---|
| 1 | Hormone therapy (HRT) | Bioidentical estradiol, progesterone, and/or testosterone — compounded and clinician-prescribed |
| 2 | Non-hormonal care | Evidence-based non-hormonal options for symptom relief |
| 3 | Metabolic + GLP-1 support | Weight management, insulin resistance, and body composition for midlife metabolism |
| 4 | Integrated care plan | Combined menopause + metabolic care for women who need both |

Each card: name, 2-line description, starting price or "see pricing," CTA.

---

### 3.8 Outcomes + Metrics Section

**Format:** stat cards — large number, short descriptor

Suggested metrics (use only verified, source-backed numbers):
- "Up to 80% reduction in hot flash frequency with HRT" — cite clinical source
- "Women report significant improvement in sleep quality within 4–8 weeks"
- "HRT shown to support bone density and cardiovascular health in perimenopause"
- "Average Vesna patient retention: [X] months" — fill post-launch

**Important:** No self-reported weight-loss-style exaggerated claims. Every metric cited to clinical literature or disclosed as patient-reported.

---

### 3.9 Patient Stories Strip

- 3–4 testimonials in rotating or grid layout
- Each: name (first + last initial), symptom summary, quote, time on plan
- Themes to cover: "felt dismissed by primary care," "HRT changed my sleep," "finally understood what perimenopause was"
- "Verified patient" badge per testimonial

---

### 3.10 Symptom Checker / Goal Selector

**Interactive widget:**

"Which of these sounds most like you?"
- Hot flashes or night sweats
- Can't sleep like I used to
- Mood or anxiety shifts
- Brain fog or memory changes
- Weight gain I can't explain
- Just started noticing changes
- All of the above

On selection: personalized line appears, e.g. "Based on what you've described, a clinician-led assessment is the right first step." → CTA

**Purpose:** mirrors MEDVi's weight-loss calculator but adapted to symptom engagement.

---

### 3.11 Clinician Section

**Section header:**
> "Your care is overseen by licensed clinicians who specialize in menopause"

Per clinician card:
- Photo
- Name + credentials (MD, DO, NP — exact, no inflated titles)
- Board certification or relevant specialty
- 1-line bio

**Supporting copy:**
> "Every care plan is reviewed and approved by a licensed clinician before anything is prescribed. We do not automate clinical decisions."

---

### 3.12 Support Section

**Section header:**
> "Support is part of the plan, not an add-on"

Feature list:
- Unlimited messaging with your care team
- 30, 60, and 90-day check-ins included
- Refill oversight + dose adjustment support
- Symptom tracking through your portal
- Response within [X] hours guaranteed

---

### 3.13 Pricing Block

**Simple, transparent layout:**

| Plan | Price | Includes |
|---|---|---|
| Menopause Care | $89/mo | Assessment, clinician review, HRT (if prescribed), ongoing messaging, check-ins |
| Metabolic Support | $99/mo | Assessment, GLP-1 or metabolic support (if prescribed), ongoing messaging |
| Integrated | $129/mo | Both pathways, combined care plan |

- "No insurance required"
- "HSA/FSA accepted"
- "Cancel anytime"
- "No hidden fees"

CTA beneath: "Take the assessment — see which plan fits"

---

### 3.14 FAQ Section

Minimum questions to address:

1. Is HRT safe?
2. Do I need labs before starting?
3. How is this different from seeing my OB-GYN?
4. What is compounded HRT?
5. How long does it take to get started?
6. What if I'm not eligible for HRT?
7. Can I combine menopause care and GLP-1 support?
8. How do refills work?
9. What happens if I want to cancel?
10. Is my information private?

**Tone:** Direct and clear. Address the HRT fear and stigma explicitly.

---

### 3.15 Final CTA Block

Full-width section:

**Headline:**
> "You've been managing this on your own long enough."

**Subheadline:**
> "Take the 2-minute assessment and let a clinician review your symptoms — no appointment, no insurance, no waiting."

**CTA button:** "Start your assessment"

---

### 3.16 Compliance Footer

**Left column:**
- Logo
- 1-line brand description

**Middle column:**
- Care: Menopause Care | Metabolic Support | Integrated Plan
- Company: How It Works | Clinicians | Education | Pricing

**Right column:**
- Contact: email, phone
- Legal: Privacy Policy | Notice of Privacy Practices | Medical Consent | Refund Policy | Terms

**Footer disclaimer (required):**
> "Vesna provides technology infrastructure connecting patients with independent licensed clinicians. Clinical decisions are made by licensed healthcare providers, not by Vesna. Results vary. Treatment is subject to clinician approval. Compounded medications are not FDA-approved. Vesna is not a pharmacy."

**Badges row:**
- HIPAA compliant
- HSA/FSA accepted
- Licensed clinicians
- SSL/secure

---

## 4. Intake Assessment Flow

### 4.1 Flow Structure

```
Step 1: Symptom selection (multi-select checkboxes)
Step 2: Cycle + stage questions (age, last period, symptoms onset)
Step 3: Medical history (contraindications — prior clots, hormone-sensitive cancers, etc.)
Step 4: Goals (symptom relief / weight / energy / sleep / all)
Step 5: Eligibility result + care summary
Step 6: Pricing + offer reveal
Step 7: Checkout
```

### 4.2 Key Design Principles

- **Symptom-first, not payment-first** — follow the MEDVi pattern of qualifying before charging
- **Validating copy throughout** — e.g. "These symptoms are very common in perimenopause and often under-treated"
- **Progress bar** — visible step count reduces abandonment
- **No medical overclaiming** — result screen says "your symptoms are consistent with [X] — a clinician will review your case" not "you qualify for HRT"
- **Mobile-first** — 70%+ of traffic likely mobile

### 4.3 Eligibility Result Screen

Format:
- Summary of flagged symptoms
- Care pathway recommendation
- "What happens next" explanation
- Pricing reveal
- CTA: "Start your care plan"

---

## 5. Technical Stack Recommendation

### 5.1 Frontend

| Layer | Recommendation | Notes |
|---|---|---|
| Framework | Next.js (React) | SSR for SEO, fast pages |
| Styling | Tailwind CSS | Rapid build, design-token friendly |
| Animation | Framer Motion | Subtle, tasteful transitions |
| CMS (content) | Sanity or Contentful | Clinician bios, FAQs, blog editable without dev |
| Hosting | Vercel | Native Next.js, easy CI/CD |

### 5.2 Assessment + Clinical Layer

| Function | Vendor | Notes |
|---|---|---|
| EHR + prescribing | Canvas Medical | API-first, telehealth-native |
| Physician network | OpenLoop Health | Credentialed clinicians in all 50 states |
| Clinician credentialing | Medallion | Automated license verification |
| Pharmacy / fulfillment | Truepill or Belmar | Compounded HRT fulfillment |
| e-Prescribe | Via Canvas or SureScripts | Integrated into Canvas flow |

### 5.3 Payments + Subscriptions

| Function | Vendor |
|---|---|
| Payments | Stripe |
| Subscriptions | Stripe Billing |
| HSA/FSA | Stripe (supported natively) |

### 5.4 Testing + Monitoring (Hormone Layer)

| Phase | Solution |
|---|---|
| Launch (prescribing baseline) | Everlywell or Let's Get Checked (mail-in blood panel: FSH, estradiol, progesterone) |
| Launch (ongoing monitoring) | Eli Health Hormometer (saliva, 20-min, iPhone — progesterone at 94% accuracy) |
| 12–24 months | Continuous hormone wearable integration (partner with Eli or emerging player when estradiol launches) |

**Eli Health B2B contact:** eli.health/pages/b2b — initiate partnership conversation early.

### 5.5 Analytics + Growth

| Function | Tool |
|---|---|
| Web analytics | PostHog or Mixpanel |
| Ad tracking | UTM params + Meta Pixel + Google Tag |
| A/B testing | Vercel Edge Config or Statsig |
| CRM | HubSpot or Klaviyo (email/SMS) |
| Support chat | Intercom |

### 5.6 Compliance Infrastructure

- HIPAA BAA required with: Canvas, OpenLoop, Truepill, Stripe, any data vendor
- SSL/TLS: enforced
- PHI storage: never in frontend layer, only in Canvas EHR
- Consent capture: at assessment start, logged with timestamp + IP
- California privacy: separate disclosure page
- TCPA: SMS/email opt-in at checkout

---

## 6. Legal Entity Structure (MSO Model)

Following the MEDVi three-entity pattern:

| Entity | Role |
|---|---|
| Vesna LLC | Technology platform, marketing, patient intake, billing |
| Vesna Medical PC (or PA) | Licensed medical entity — owns clinical decisions, employs/contracts clinicians |
| Pharmacy partner | Independent — Truepill or Belmar (not owned) |

**Important:** Vesna LLC cannot own the medical practice in most states. A Management Services Organization (MSO) agreement between Vesna LLC and the PC governs the relationship.

**Engage healthcare regulatory counsel before launch to structure this correctly.**

---

## 7. Compliance Checklist (Pre-Launch)

- [ ] Medical claim review by healthcare attorney
- [ ] Pricing disclosure review
- [ ] Cancellation/refund policy drafted and reviewed
- [ ] HIPAA BAAs signed with all vendors
- [ ] Medical consent page live
- [ ] Notice of Privacy Practices live
- [ ] California privacy statement live
- [ ] Terms of service live
- [ ] Intake form includes contraindication screening
- [ ] Result screen does not overpromise prescription eligibility
- [ ] Clinician credentials verified and accurately represented
- [ ] No "FDA-approved" language applied to compounded medications
- [ ] Emergency/crisis disclaimer visible in consent and FAQ
- [ ] Florida weight-loss bill of rights (if offering GLP-1 in FL)
- [ ] MSO structure reviewed by counsel
- [ ] State-by-state prescribing coverage confirmed with OpenLoop

---

## 8. Copy Framework

### 8.1 Voice Principles

- **Warm but precise.** Not clinical-cold. Not wellness-fluffy.
- **Validating before persuading.** Lead with "you're not imagining it" before "here's what to do."
- **Honest about complexity.** Don't oversell HRT universality. Let the clinician be the decision-maker.
- **No hype phrases.** No "revolutionary," "breakthrough," "life-changing." Let outcomes speak.

### 8.2 Messaging Hierarchy

| Level | Message |
|---|---|
| Emotional truth | "You're not imagining it. These symptoms are real and they're treatable." |
| Category framing | "This is menopause care — not a pill mill, not a subscription box." |
| Differentiation | "Real clinicians. Real oversight. Not automated." |
| Process reassurance | "Takes 2 minutes to start. Clinician reviews within 24 hours." |
| Commercial | "Transparent pricing. No insurance needed. Cancel anytime." |

### 8.3 Headlines to Test

- "You're not imagining it. And you don't have to just push through."
- "Menopause care that actually takes you seriously."
- "The care your OB-GYN should have had time to give you."
- "Hot flashes. Brain fog. Weight gain. There's clinical care for all of it."
- "Finally — menopause care built for how you actually live."

### 8.4 CTA Variants to Test

- "Take the 2-minute assessment" (primary)
- "See if care is right for you"
- "Start your symptom review"
- "Get your care plan"

---

## 9. Design Direction

### 9.1 Visual Tone

- **More premium than MEDVi.** Less direct-response weight-loss energy.
- **Medical credibility without clinical coldness.** Think Hims/Hers quality but warmer.
- **Midlife-specific.** Photography shows real women 40–60, confident, not performatively jubilant.
- **Calm hierarchy.** Lots of whitespace. Clear type scale. Not hype-poster density.

### 9.2 Color Palette Direction

- Primary: warm neutral (off-white, soft stone)
- Accent 1: deep teal or sage green (trust, clinical)
- Accent 2: warm terracotta or amber (warmth, hormonal energy)
- Text: near-black (#1a1a1a)
- Avoid: hot pink, purple, "femtech" clichés

### 9.3 Typography Direction

- Serif for headlines (trust, premium feel)
- Sans-serif for body (readability, clinical)
- Suggested pairing: Playfair Display + Inter, or Freight Display + DM Sans

---

## 10. Build Phases + Timeline

### Phase 1 — MVP (Weeks 1–4)

**Goal:** Functional landing page + intake flow + compliance pages live

**Deliverables:**
- [ ] Primary landing page (all sections above)
- [ ] Intake assessment (Steps 1–7)
- [ ] Eligibility result screen
- [ ] Checkout (Stripe integration)
- [ ] Compliance pages (4 pages)
- [ ] Canvas EHR integration (basic)
- [ ] OpenLoop clinician network connected
- [ ] Truepill or Belmar pharmacy connection
- [ ] Basic analytics (PostHog)
- [ ] HIPAA BAAs signed

### Phase 2 — Content + Trust (Weeks 5–8)

**Goal:** Add depth pages + SEO foundation + clinician profiles

**Deliverables:**
- [ ] /menopause-care page
- [ ] /metabolic-support page
- [ ] /how-it-works page
- [ ] /clinicians page (with real bios)
- [ ] /faq full page
- [ ] /pricing page
- [ ] Blog/education section (first 5 articles)
- [ ] Patient testimonial collection + display
- [ ] Meta Pixel + Google Tag live
- [ ] Email/SMS CRM (Klaviyo) connected

### Phase 3 — Optimization + Expansion (Weeks 9–16)

**Goal:** A/B test conversion, add integrated care pathway, connect Eli Health

**Deliverables:**
- [ ] A/B tests on hero headline + CTA
- [ ] /integrated-care page
- [ ] Eli Health Hormometer integration into monitoring flow
- [ ] Symptom tracking in patient portal
- [ ] Referral program
- [ ] Employer/benefits channel exploration
- [ ] GLP-1 care pathway (if regulatory risk is manageable)

---

## 11. Key Vendor Contacts to Initiate Now

| Vendor | Purpose | Contact |
|---|---|---|
| OpenLoop Health | Physician network | openloophealth.com — sales |
| Canvas Medical | EHR + prescribing | canvasmedical.com — partnerships |
| Medallion | Credentialing | medallion.co — sales |
| Truepill | Pharmacy fulfillment | truepill.com — partnerships |
| Eli Health | Hormone monitoring | eli.health/pages/b2b |
| Everlywell | Baseline lab kits | b2b.everlywell.com |
| Stripe | Payments | stripe.com/contact/sales |
| Healthcare counsel | MSO structure + compliance | Engage before any build begins |

---

## 12. What This Document Does Not Cover

This plan focuses on the marketing site and intake funnel. Separate planning documents are needed for:

- Patient portal (post-intake experience)
- Clinician-side EHR workflow
- Medication fulfillment operations
- Customer support staffing model
- Post-launch CRM and retention sequences
- Paid media strategy and channel mix
- Clinical protocol development

---

*This document is a build planning reference. It is not legal or medical advice. Any live build in this category must be reviewed by qualified healthcare regulatory counsel and licensed clinical stakeholders before launch.*
