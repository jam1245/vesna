import { useState } from "react";

const sections = [
  {
    id: "thesis",
    label: "Business thesis",
    content: {
      title: "The stronger version of the idea",
      intro:
        "Do not build 'MEDVi for menopause.' Build a menopause-first telehealth platform that borrows MEDVi's funnel discipline but earns trust through better clinical positioning, broader care pathways, and a more durable relationship model.",
      items: [
        {
          heading: "Best framing",
          body:
            "This is not just an HRT business. It is a menopause care platform with HRT as one treatment pathway. That gives you more market breadth, more clinical legitimacy, and more room to grow into metabolic support, GLP-1s, sleep, mood, and long-term midlife care.",
          flag: "key",
        },
        {
          heading: "Core customer",
          body:
            "Women in perimenopause, menopause, and early postmenopause who feel dismissed, under-treated, confused, or unsupported by the traditional system. They are often educated, highly motivated, and actively researching their options.",
          flag: null,
        },
        {
          heading: "Core promise",
          body:
            "Serious menopause care that listens, explains, and treats symptoms with clinician-guided options. The experience should feel easier than the traditional system but more trustworthy than a generic telehealth checkout flow.",
          flag: "key",
        },
        {
          heading: "Economic logic",
          body:
            "The business has stronger retention potential than a pure GLP-1 weight-loss funnel because menopause care is longitudinal. If you earn trust, the relationship can last for years instead of months.",
          flag: "advantage",
        },
      ],
    },
  },
  {
    id: "funnel",
    label: "Funnel design",
    content: {
      title: "How to adapt the MEDVi funnel without copying its tone",
      items: [
        {
          step: "1",
          medvi: "Paid ad -> dedicated landing page -> single CTA",
          yours:
            "Dedicated landing page for menopause-intent traffic with one clear CTA: 'Take the 2-minute assessment.' Subdomain strategy still makes sense for paid traffic, but the brand needs to feel warmer and more credible than a direct-response weight-loss page.",
          note:
            "The funnel mechanic is right. The tone must change. Menopause users are often skeptical, research-heavy, and emotionally tired of being dismissed.",
          flag: "key",
        },
        {
          step: "2",
          medvi: "Short intake before payment",
          yours:
            "Symptom-first assessment: hot flashes, sleep, mood, cycle changes, brain fog, libido, weight changes, age, relevant history. Keep it concise, but make it feel validating rather than transactional.",
          note:
            "This is one of the smartest MEDVi patterns to keep. Qualification before price/payment lowers friction and creates commitment.",
          flag: "key",
        },
        {
          step: "3",
          medvi: "Eligibility result -> price reveal -> checkout",
          yours:
            "Return a structured care summary, not only a 'you qualify' badge. Example: 'Your symptoms are consistent with early perimenopause. A licensed clinician can review whether hormone therapy, non-hormonal treatment, or a combined plan is appropriate.' Then reveal pricing.",
          note:
            "Avoid overpromising HRT specifically before clinical review. The stronger move is to qualify for care, not for one medication pathway.",
          flag: "key",
        },
        {
          step: "4",
          medvi: "Async physician review",
          yours:
            "Async clinician review within a clear SLA, with ability to request follow-up questions, recommend additional testing when appropriate, and prescribe only when clinically appropriate.",
          note:
            "This is where you win trust. The process should feel efficient but not automatic.",
          flag: null,
        },
        {
          step: "5",
          medvi: "Prescription sent to pharmacy -> ships",
          yours:
            "If treatment is prescribed, medication fulfillment should be simple and discreet. But keep the care promise broader than shipping medication. The value is the care model, not just the package arriving.",
          note: null,
          flag: null,
        },
        {
          step: "6",
          medvi: "Messaging, refills, ongoing support",
          yours:
            "Ongoing messaging, scheduled check-ins, refill oversight, and symptom tracking become the retention engine. This is where the business becomes more durable than a transactional DTC funnel.",
          note:
            "Retention is likely the biggest strategic advantage if the ongoing experience genuinely helps patients feel supported.",
          flag: "advantage",
        },
      ],
    },
  },
  {
    id: "positioning",
    label: "Positioning",
    content: {
      title: "What to sell, and what not to sell",
      items: [
        {
          dimension: "Narrow version",
          medvi: "Online HRT clinic",
          yours:
            "This is tempting because it is simple, but it narrows the market and makes the brand feel like a single-product telehealth business.",
          verdict: "watch",
        },
        {
          dimension: "Better version",
          medvi: "Menopause care platform",
          yours:
            "Position around symptom relief, education, and clinician-guided care. HRT, non-hormonal care, and metabolic support become treatment paths within the platform.",
          verdict: "advantage",
        },
        {
          dimension: "Emotional angle",
          medvi: "Fast and easy access",
          yours:
            "Lead with validation: 'You're not imagining it.' 'You don't have to just push through.' Menopause users need to feel seen before they are ready to convert.",
          verdict: "advantage",
        },
        {
          dimension: "Trust angle",
          medvi: "Doctor-approved and affordable",
          yours:
            "Clinical precision matters more than hype. Use credentials, care clarity, transparent eligibility language, and a calmer visual tone.",
          verdict: "advantage",
        },
      ],
    },
  },
  {
    id: "mvp",
    label: "MVP offer",
    content: {
      title: "A more defensible MVP",
      intro:
        "The first product should be small enough to launch, but broad enough to feel like real menopause care rather than a single-prescription storefront.",
      items: [
        {
          heading: "Entry point",
          body:
            "Menopause symptom assessment + clinician review + personalized care recommendation.",
          flag: null,
        },
        {
          heading: "Treatment pathways",
          body:
            "HRT if appropriate, non-hormonal options if appropriate, and metabolic support/GLP-1 discussion only where clinically relevant.",
          flag: "key",
        },
        {
          heading: "Membership structure",
          body:
            "Ongoing messaging, refill oversight, check-ins, and education. Patients should feel they are paying for continuity of care, not just for medication access.",
          flag: "key",
        },
        {
          heading: "Monitoring",
          body:
            "Use testing only where it meaningfully improves care or trust. Do not assume every user should go through a lab-heavy intake if it materially hurts conversion without adding enough clinical value.",
          flag: "watch",
        },
      ],
    },
  },
  {
    id: "landing",
    label: "Landing page",
    content: {
      title: "Landing page revisions based on the stronger business thesis",
      items: [
        {
          element: "Hero headline",
          medvi: "Outcome-led and direct",
          yours:
            "Lead with validation and relief. Example: 'You're not imagining it. And you don't have to just push through.' Support line: 'Clinician-guided menopause care for sleep, hot flashes, mood, brain fog, and midlife body changes.'",
          note:
            "This keeps the emotional intelligence of your original draft but broadens the problem beyond HRT alone.",
          flag: "key",
        },
        {
          element: "Primary CTA",
          medvi: "Get started / See if you qualify",
          yours:
            "'Take the 2-minute assessment' remains the right CTA. It feels lighter than 'book now' or 'subscribe.'",
          note: null,
          flag: "key",
        },
        {
          element: "Social proof",
          medvi: "Media logos and transformation-oriented proof",
          yours:
            "Use testimonials centered on symptom relief, regained clarity, and feeling normal again. Add clinician credibility more prominently than MEDVi does.",
          note:
            "Menopause care is a trust category. Quotes and credentials matter more than flashy transformation tropes.",
          flag: null,
        },
        {
          element: "Pricing",
          medvi: "Aggressive intro pricing and comparison anchors",
          yours:
            "Keep the offer simple and transparent. If you use comparison anchors, compare against fragmented traditional care, not just drug pricing. For example: consultation, follow-up, pharmacy, and monitoring as separate costs vs one integrated plan.",
          note:
            "The message is convenience plus continuity, not only cheapness.",
          flag: null,
        },
        {
          element: "Trust signals",
          medvi: "Physicians, pharmacy language, compliance pages",
          yours:
            "Add clinician bios, specific training language, detailed FAQ, consent/privacy visibility, and clear discussion of when treatment may or may not be appropriate.",
          note:
            "Do not overstate certifications or titles. Every trust claim should be exact.",
          flag: "key",
        },
        {
          element: "Objection handling",
          medvi: "FAQ and safety reassurance",
          yours:
            "Address the HRT fear directly, including what people think they know, what current evidence says, and why treatment decisions are individualized.",
          note:
            "This remains one of the most important conversion barriers in the category.",
          flag: "key",
        },
      ],
    },
  },
  {
    id: "risks",
    label: "Risks to fix",
    content: {
      title: "Recommendations that needed tightening",
      items: [
        {
          principle: "Do not position too narrowly around HRT",
          medvi:
            "The earlier version leaned toward an 'online HRT' business.",
          yours:
            "Broaden to menopause care platform. This improves market size, trust, and clinical defensibility.",
        },
        {
          principle: "Be precise with clinician language",
          medvi:
            "Phrases like 'menopause specialist' or badge-driven trust can be powerful.",
          yours:
            "Use exact credentials only. Build credibility through precision, not marketing shorthand.",
        },
        {
          principle: "Treat labs as a testable design choice",
          medvi:
            "The earlier version assumed a baseline lab as part of the default journey.",
          yours:
            "Lab requirements may improve trust but also add friction. Validate this with real users and clinicians before hard-coding it into the main funnel.",
        },
        {
          principle: "Be careful with strong clinical assertions",
          medvi:
            "The earlier version contained statements about monitoring methods that sounded more settled than they may be.",
          yours:
            "Any clinical claim that shapes operations, marketing, or treatment flow should be validated before it becomes part of the business thesis.",
        },
      ],
    },
  },
  {
    id: "bottomline",
    label: "Bottom line",
    content: {
      title: "What this business really is",
      summary:
        "The best version of this idea is a menopause-first care brand with the operational efficiency of MEDVi, not a menopause-themed clone of a GLP landing page.",
      bullets: [
        "Copy MEDVi's funnel discipline, not its voice.",
        "Sell care and symptom relief, not just HRT access.",
        "Use trust, precision, and continuity as the moat.",
        "Keep GLP-1 support as a complementary pathway, not the headline.",
        "Build the brand so it can expand into broader midlife women's health over time.",
      ],
    },
  },
];

const verdictColors = {
  advantage: { bg: "#EAF3DE", color: "#3B6D11", label: "Better direction" },
  neutral: { bg: "#f3f3f3", color: "#666", label: "Neutral" },
  watch: { bg: "#FCEFD9", color: "#8A5A00", label: "Needs care" },
};

export default function App() {
  const [active, setActive] = useState("thesis");
  const section = sections.find((s) => s.id === active);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem 0 2rem" }}>
      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 20,
          borderBottom: "0.5px solid #ddd",
        }}
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 14px",
              fontSize: 13,
              color: active === s.id ? "#1a1a1a" : "#888",
              borderBottom:
                active === s.id
                  ? "2px solid #1a1a1a"
                  : "2px solid transparent",
              fontWeight: active === s.id ? 500 : 400,
              marginBottom: -1,
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "#1a1a1a",
          marginBottom: 8,
        }}
      >
        {section.content.title}
      </div>

      {"intro" in section.content && section.content.intro && (
        <div
          style={{
            marginBottom: 16,
            padding: "12px 14px",
            borderRadius: 10,
            background: "#f7f8f6",
            color: "#444",
            fontSize: 13,
            lineHeight: 1.65,
          }}
        >
          {section.content.intro}
        </div>
      )}

      {active === "thesis" || active === "mvp" ? (
        <div>
          {section.content.items.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: 12,
                border: "0.5px solid #ddd",
                borderRadius: 10,
                padding: "12px 14px",
                background:
                  item.flag === "key"
                    ? "#f9fff5"
                    : item.flag === "advantage"
                      ? "#f5fbf7"
                      : item.flag === "watch"
                        ? "#fffaf0"
                        : "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 600, color: "#1a1a1a" }}>
                  {item.heading}
                </div>
                {item.flag === "key" && (
                  <span
                    style={{
                      fontSize: 10,
                      background: "#EAF3DE",
                      color: "#3B6D11",
                      padding: "2px 6px",
                      borderRadius: 99,
                      fontWeight: 500,
                    }}
                  >
                    Key shift
                  </span>
                )}
                {item.flag === "advantage" && (
                  <span
                    style={{
                      fontSize: 10,
                      background: "#E6F1FB",
                      color: "#185FA5",
                      padding: "2px 6px",
                      borderRadius: 99,
                      fontWeight: 500,
                    }}
                  >
                    Advantage
                  </span>
                )}
                {item.flag === "watch" && (
                  <span
                    style={{
                      fontSize: 10,
                      background: "#FCEFD9",
                      color: "#8A5A00",
                      padding: "2px 6px",
                      borderRadius: 99,
                      fontWeight: 500,
                    }}
                  >
                    Test this
                  </span>
                )}
              </div>
              <div style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>
                {item.body}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {active === "funnel" ? (
        <div>
          {section.content.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "32px 1fr 1fr",
                gap: 12,
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", paddingTop: 12 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#555",
                    flexShrink: 0,
                  }}
                >
                  {item.step}
                </div>
              </div>
              <div
                style={{
                  border: "0.5px solid #ddd",
                  borderRadius: 10,
                  padding: "12px 14px",
                  background: "#fafafa",
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: "#aaa",
                    letterSpacing: "0.05em",
                    marginBottom: 6,
                  }}
                >
                  MEDVI MECHANIC
                </div>
                <div style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>
                  {item.medvi}
                </div>
              </div>
              <div
                style={{
                  border:
                    item.flag === "key"
                      ? "1.5px solid #3B6D11"
                      : item.flag === "advantage"
                        ? "1.5px solid #185FA5"
                        : "0.5px solid #ddd",
                  borderRadius: 10,
                  padding: "12px 14px",
                  background:
                    item.flag === "key"
                      ? "#EAF3DE"
                      : item.flag === "advantage"
                        ? "#E6F1FB"
                        : "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                >
                  <div style={{ fontSize: 10, color: "#aaa", letterSpacing: "0.05em" }}>
                    REVISED VERSION
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: "#1a1a1a",
                    lineHeight: 1.6,
                    marginBottom: item.note ? 10 : 0,
                  }}
                >
                  {item.yours}
                </div>
                {item.note && (
                  <div
                    style={{
                      fontSize: 12,
                      color: "#666",
                      lineHeight: 1.6,
                      borderTop: "0.5px solid #e0e0e0",
                      paddingTop: 8,
                      marginTop: 8,
                      fontStyle: "italic",
                    }}
                  >
                    {item.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {active === "positioning" ? (
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 1fr 110px",
              gap: 1,
              background: "#eee",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {["", "Simpler frame", "Stronger frame", ""].map((h, i) => (
              <div
                key={i}
                style={{
                  background: "#f5f5f5",
                  padding: "8px 12px",
                  fontSize: 10,
                  color: "#888",
                  letterSpacing: "0.05em",
                }}
              >
                {h}
              </div>
            ))}
            {section.content.items.map((item, i) => {
              const v = verdictColors[item.verdict];
              return [
                <div
                  key={`d${i}`}
                  style={{
                    background: "white",
                    padding: "12px 14px",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#1a1a1a",
                    lineHeight: 1.4,
                  }}
                >
                  {item.dimension}
                </div>,
                <div
                  key={`m${i}`}
                  style={{
                    background: "white",
                    padding: "12px 14px",
                    fontSize: 12,
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {item.medvi}
                </div>,
                <div
                  key={`y${i}`}
                  style={{
                    background: "white",
                    padding: "12px 14px",
                    fontSize: 12,
                    color: "#333",
                    lineHeight: 1.6,
                  }}
                >
                  {item.yours}
                </div>,
                <div key={`v${i}`} style={{ background: "white", padding: "12px 14px" }}>
                  <span
                    style={{
                      fontSize: 10,
                      padding: "3px 8px",
                      borderRadius: 99,
                      background: v.bg,
                      color: v.color,
                      fontWeight: 500,
                      display: "inline-block",
                    }}
                  >
                    {v.label}
                  </span>
                </div>,
              ];
            })}
          </div>
        </div>
      ) : null}

      {active === "landing" ? (
        <div>
          {section.content.items.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: 12,
                border: "0.5px solid #ddd",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#f5f5f5",
                  padding: "8px 14px",
                  fontSize: 11,
                  fontWeight: 500,
                  color: "#555",
                  letterSpacing: "0.04em",
                }}
              >
                {item.element.toUpperCase()}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ padding: "12px 14px", borderRight: "0.5px solid #ddd" }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#aaa",
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    MEDVI PATTERN
                  </div>
                  <div style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>
                    {item.medvi}
                  </div>
                </div>
                <div
                  style={{
                    padding: "12px 14px",
                    background: item.flag === "key" ? "#f9fff5" : "white",
                  }}
                >
                  <div style={{ fontSize: 10, color: "#aaa", marginBottom: 6 }}>
                    REVISED VERSION
                  </div>
                  <div style={{ fontSize: 13, color: "#1a1a1a", lineHeight: 1.6 }}>
                    {item.yours}
                  </div>
                  {item.note && (
                    <div
                      style={{
                        fontSize: 12,
                        color: "#666",
                        lineHeight: 1.6,
                        borderTop: "0.5px solid #eee",
                        paddingTop: 8,
                        marginTop: 8,
                      }}
                    >
                      {item.note}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {active === "risks" ? (
        <div>
          {section.content.items.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: 12,
                border: "0.5px solid #ddd",
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <div style={{ background: "#1a1a1a", padding: "8px 14px" }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: "white" }}>
                  {item.principle}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ padding: "12px 14px", borderRight: "0.5px solid #eee" }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#aaa",
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    ORIGINAL DRAFT
                  </div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
                    {item.medvi}
                  </div>
                </div>
                <div style={{ padding: "12px 14px", background: "#fdfdf9" }}>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#aaa",
                      marginBottom: 6,
                      letterSpacing: "0.05em",
                    }}
                  >
                    RECOMMENDED CHANGE
                  </div>
                  <div style={{ fontSize: 13, color: "#1a1a1a", lineHeight: 1.6 }}>
                    {item.yours}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {active === "bottomline" ? (
        <div>
          <div
            style={{
              marginBottom: 16,
              padding: "12px 14px",
              background: "#EAF3DE",
              borderRadius: 10,
              fontSize: 13,
              color: "#27500A",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ fontWeight: 600 }}>Bottom line:</strong>{" "}
            {section.content.summary}
          </div>
          <div
            style={{
              border: "0.5px solid #ddd",
              borderRadius: 10,
              padding: "12px 14px",
              background: "white",
            }}
          >
            {section.content.bullets.map((bullet, i) => (
              <div
                key={i}
                style={{
                  fontSize: 13,
                  color: "#333",
                  lineHeight: 1.7,
                  padding: "4px 0",
                }}
              >
                {bullet}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
