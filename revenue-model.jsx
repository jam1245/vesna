import { useState, useMemo } from "react";

const fmt = (n) => n >= 1000000 ? `$${(n/1000000).toFixed(1)}M` : n >= 1000 ? `$${(n/1000).toFixed(0)}k` : `$${Math.round(n)}`;
const fmtN = (n) => n >= 1000 ? `${(n/1000).toFixed(1)}k` : Math.round(n).toLocaleString();
const pct = (n) => `${Math.round(n)}%`;

const TIERS = [
  {
    id: "core",
    name: "Core care",
    desc: "Symptom assessment + clinician review + async messaging + refills",
    color: "#3B6D11",
    bg: "#EAF3DE",
    defaultPrice: 89,
    defaultAdoption: 100,
    note: "Every patient starts here"
  },
  {
    id: "monitoring",
    name: "Hormone monitoring",
    desc: "Quarterly Eli Health saliva tests + longitudinal dashboard",
    color: "#185FA5",
    bg: "#E6F1FB",
    defaultPrice: 30,
    defaultAdoption: 45,
    note: "Add-on bundle — uptake grows as Eli estradiol launches"
  },
  {
    id: "glp",
    name: "GLP-1 / metabolic",
    desc: "Weight + metabolic support as a complementary pathway",
    color: "#854F0B",
    bg: "#FAEEDA",
    defaultPrice: 120,
    defaultAdoption: 18,
    note: "Clinically relevant subset — not the headline offer"
  },
  {
    id: "community",
    name: "Community + coaching",
    desc: "Expert-led group sessions, peer circles, education library",
    color: "#993556",
    bg: "#FBEAF0",
    defaultPrice: 19,
    defaultAdoption: 35,
    note: "High-margin, low-cost, strong retention signal"
  },
];

const PHASES = ["Month 6", "Month 12", "Month 18", "Month 36"];

export default function App() {
  // Acquisition inputs
  const [cac, setCac] = useState(140);
  const [monthlyNewPts, setMonthlyNewPts] = useState(80);
  const [churnRate, setChurnRate] = useState(4); // monthly %

  // Tier prices & adoption
  const [tierSettings, setTierSettings] = useState(
    TIERS.reduce((acc, t) => ({
      ...acc,
      [t.id]: { price: t.defaultPrice, adoption: t.defaultAdoption }
    }), {})
  );

  // Costs
  const [physicianCostPct, setPhysicianCostPct] = useState(12);
  const [pharmacyCostPct, setPharmacyCostPct] = useState(28);
  const [infraCostPer, setInfraCostPer] = useState(8);

  const [activeTab, setActiveTab] = useState("model");
  const [activePhase, setActivePhase] = useState(1); // default month 12

  const updateTier = (id, field, val) => {
    setTierSettings(prev => ({ ...prev, [id]: { ...prev[id], [field]: val } }));
  };

  // Simulate patient cohorts over time
  const simulate = useMemo(() => {
    const months = [6, 12, 18, 36];
    return months.map(month => {
      // Cumulative patients acquired
      let totalAcquired = monthlyNewPts * month;
      // Apply monthly churn compounding
      // Simplified: average cohort has been retained varying amounts
      // Use geometric series approximation
      const survivalRate = Math.pow(1 - churnRate / 100, month / 2); // avg cohort age = month/2
      const activePatients = Math.round(totalAcquired * survivalRate);

      // Revenue per patient
      const coreRev = tierSettings.core.price;
      const monitoringRev = (tierSettings.monitoring.price * tierSettings.monitoring.adoption) / 100;
      const glpRev = (tierSettings.glp.price * tierSettings.glp.adoption) / 100;
      const communityRev = (tierSettings.community.price * tierSettings.community.adoption) / 100;
      const arpu = coreRev + monitoringRev + glpRev + communityRev;

      const mrr = activePatients * arpu;
      const arr = mrr * 12;

      // Costs
      const physicianCost = mrr * (physicianCostPct / 100);
      const pharmacyCost = mrr * (pharmacyCostPct / 100);
      const infraCost = activePatients * infraCostPer;
      const acquisitionCost = monthlyNewPts * cac; // monthly spend
      const totalCost = physicianCost + pharmacyCost + infraCost + acquisitionCost;

      const grossMargin = mrr - physicianCost - pharmacyCost - infraCost;
      const grossMarginPct = mrr > 0 ? (grossMargin / mrr) * 100 : 0;
      const netContribution = grossMargin - acquisitionCost;

      const ltv = (arpu / (churnRate / 100)) * (grossMarginPct / 100);
      const ltvCac = cac > 0 ? ltv / cac : 0;

      return {
        month, activePatients, totalAcquired, arpu,
        mrr, arr, grossMargin, grossMarginPct, netContribution,
        ltv, ltvCac, acquisitionCost,
        physicianCost, pharmacyCost, infraCost,
        tierBreakdown: {
          core: coreRev,
          monitoring: monitoringRev,
          glp: glpRev,
          community: communityRev,
        }
      };
    });
  }, [cac, monthlyNewPts, churnRate, tierSettings, physicianCostPct, pharmacyCostPct, infraCostPer]);

  const phase = simulate[activePhase];

  const tabs = [
    { id: "model", label: "Revenue model" },
    { id: "inputs", label: "Assumptions" },
    { id: "tiers", label: "Pricing tiers" },
    { id: "unit", label: "Unit economics" },
  ];

  const metricCard = (label, value, sub, highlight) => (
    <div style={{
      background: highlight ? "#EAF3DE" : "#f5f5f5",
      borderRadius: 8,
      padding: "12px 14px",
      minWidth: 0,
    }}>
      <div style={{ fontSize: 11, color: highlight ? "#3B6D11" : "#888", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 500, color: highlight ? "#27500A" : "#1a1a1a", lineHeight: 1.1 }}>{value}</div>
      {sub && <div style={{ fontSize: 11, color: highlight ? "#3B6D11" : "#999", marginTop: 3 }}>{sub}</div>}
    </div>
  );

  const slider = (label, value, setter, min, max, step, display, note) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <div style={{ fontSize: 13, color: "#1a1a1a" }}>{label}</div>
        <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{display(value)}</div>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => setter(Number(e.target.value))}
        style={{ width: "100%" }} />
      {note && <div style={{ fontSize: 11, color: "#999", marginTop: 3 }}>{note}</div>}
    </div>
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: "0.5rem 0 2rem" }}>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 2, marginBottom: 20, borderBottom: "0.5px solid #ddd" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "8px 14px", fontSize: 13,
            color: activeTab === t.id ? "#1a1a1a" : "#888",
            borderBottom: activeTab === t.id ? "2px solid #1a1a1a" : "2px solid transparent",
            fontWeight: activeTab === t.id ? 500 : 400, marginBottom: -1,
          }}>{t.label}</button>
        ))}
      </div>

      {/* REVENUE MODEL TAB */}
      {activeTab === "model" && (
        <div>
          {/* Phase selector */}
          <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
            {PHASES.map((p, i) => (
              <button key={i} onClick={() => setActivePhase(i)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8, cursor: "pointer",
                border: activePhase === i ? "1.5px solid #3B6D11" : "0.5px solid #ddd",
                background: activePhase === i ? "#EAF3DE" : "white",
                fontSize: 13, fontWeight: activePhase === i ? 500 : 400,
                color: activePhase === i ? "#27500A" : "#666",
              }}>{p}</button>
            ))}
          </div>

          {/* Key metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 8, marginBottom: 16 }}>
            {metricCard("Active patients", fmtN(phase.activePatients), `of ${fmtN(phase.totalAcquired)} acquired`, false)}
            {metricCard("MRR", fmt(phase.mrr), "monthly recurring", true)}
            {metricCard("ARR", fmt(phase.arr), "annualised", true)}
            {metricCard("ARPU", `$${Math.round(phase.arpu)}/mo`, "blended per patient", false)}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 8, marginBottom: 20 }}>
            {metricCard("Gross margin", pct(phase.grossMarginPct), fmt(phase.grossMargin) + "/mo", false)}
            {metricCard("LTV", fmt(phase.ltv), "per patient", false)}
            {metricCard("LTV : CAC", `${phase.ltvCac.toFixed(1)}x`, `CAC = $${cac}`, phase.ltvCac >= 3)}
            {metricCard("Net contribution", fmt(phase.netContribution), "after acquisition spend", phase.netContribution > 0)}
          </div>

          {/* Revenue waterfall */}
          <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 10 }}>MONTHLY REVENUE BREAKDOWN PER PATIENT</div>
          <div style={{ border: "0.5px solid #ddd", borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
            {TIERS.map(t => {
              const rev = phase.tierBreakdown[t.id];
              const pctOfTotal = phase.arpu > 0 ? (rev / phase.arpu) * 100 : 0;
              return (
                <div key={t.id} style={{ display: "grid", gridTemplateColumns: "160px 1fr 60px 60px", alignItems: "center", padding: "10px 14px", borderBottom: "0.5px solid #eee" }}>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a" }}>{t.name}</div>
                    <div style={{ fontSize: 10, color: "#aaa", marginTop: 1 }}>{tierSettings[t.id].adoption}% adoption</div>
                  </div>
                  <div style={{ margin: "0 12px" }}>
                    <div style={{ height: 6, borderRadius: 99, background: "#f0f0f0", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pctOfTotal}%`, background: t.color, borderRadius: 99 }} />
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#555", textAlign: "right" }}>${rev.toFixed(0)}</div>
                  <div style={{ fontSize: 11, color: "#aaa", textAlign: "right" }}>{pct(pctOfTotal)}</div>
                </div>
              );
            })}
            <div style={{ display: "grid", gridTemplateColumns: "160px 1fr 60px 60px", alignItems: "center", padding: "10px 14px", background: "#fafafa" }}>
              <div style={{ fontSize: 12, fontWeight: 500, color: "#1a1a1a" }}>Total ARPU</div>
              <div />
              <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a", textAlign: "right" }}>${Math.round(phase.arpu)}</div>
              <div />
            </div>
          </div>

          {/* Cost breakdown */}
          <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 10 }}>MONTHLY COST STRUCTURE</div>
          <div style={{ border: "0.5px solid #ddd", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            {[
              { label: "Physician network (OpenLoop)", val: phase.physicianCost, note: `${physicianCostPct}% of MRR` },
              { label: "Pharmacy / compounding", val: phase.pharmacyCost, note: `${pharmacyCostPct}% of MRR` },
              { label: "Platform infra + support", val: phase.infraCost, note: `$${infraCostPer}/patient` },
              { label: "Patient acquisition spend", val: phase.acquisitionCost, note: `${fmtN(monthlyNewPts)} new pts × $${cac} CAC` },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: i < 3 ? "0.5px solid #eee" : "none", background: "white" }}>
                <div>
                  <div style={{ fontSize: 13, color: "#333" }}>{row.label}</div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>{row.note}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#1a1a1a" }}>{fmt(row.val)}</div>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: "#fafafa" }}>
              <div style={{ fontSize: 12, fontWeight: 500 }}>Gross margin (ex. acquisition)</div>
              <div style={{ fontSize: 13, fontWeight: 500, color: phase.grossMarginPct > 45 ? "#3B6D11" : "#A32D2D" }}>
                {fmt(phase.grossMargin)} ({pct(phase.grossMarginPct)})
              </div>
            </div>
          </div>

          {/* Growth trajectory */}
          <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 10 }}>GROWTH TRAJECTORY</div>
          <div style={{ border: "0.5px solid #ddd", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "80px repeat(4, 1fr)", background: "#f5f5f5", borderBottom: "0.5px solid #ddd" }}>
              {["", ...PHASES].map((h, i) => (
                <div key={i} style={{ padding: "8px 10px", fontSize: 10, color: "#888", letterSpacing: "0.04em", textAlign: i > 0 ? "right" : "left" }}>{h.toUpperCase()}</div>
              ))}
            </div>
            {[
              { label: "Patients", vals: simulate.map(s => fmtN(s.activePatients)) },
              { label: "MRR", vals: simulate.map(s => fmt(s.mrr)) },
              { label: "ARR", vals: simulate.map(s => fmt(s.arr)) },
              { label: "Gross %", vals: simulate.map(s => pct(s.grossMarginPct)) },
              { label: "LTV:CAC", vals: simulate.map(s => `${s.ltvCac.toFixed(1)}x`) },
            ].map((row, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: "80px repeat(4, 1fr)", borderBottom: ri < 4 ? "0.5px solid #eee" : "none", background: ri % 2 === 0 ? "white" : "#fafafa" }}>
                <div style={{ padding: "9px 10px", fontSize: 12, color: "#888" }}>{row.label}</div>
                {row.vals.map((v, i) => (
                  <div key={i} style={{
                    padding: "9px 10px", fontSize: 12, textAlign: "right",
                    fontWeight: i === activePhase ? 500 : 400,
                    color: i === activePhase ? "#1a1a1a" : "#555",
                    background: i === activePhase ? "rgba(59,109,17,0.06)" : "transparent"
                  }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ASSUMPTIONS TAB */}
      {activeTab === "inputs" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 16 }}>ACQUISITION</div>
              {slider("Customer acquisition cost (CAC)", cac, setCac, 50, 400, 5, v => `$${v}`, "Hims spends ~$80–120. Menopause via community + organic may be lower at launch.")}
              {slider("New patients per month", monthlyNewPts, setMonthlyNewPts, 10, 500, 10, v => fmtN(v), "Month 1–6 target: 50–80/mo via organic + community. Scale with paid from Month 6.")}
              {slider("Monthly churn rate", churnRate, setChurnRate, 1, 15, 0.5, v => `${v}%`, "2–4% is realistic for a condition that doesn't resolve. High churn = symptom relief not delivered.")}
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 16 }}>COSTS</div>
              {slider("Physician cost (% of MRR)", physicianCostPct, setPhysicianCostPct, 5, 30, 1, v => `${v}%`, "OpenLoop async review. Lower with volume. Factor in prescribing + follow-up.")}
              {slider("Pharmacy / compounding (% of MRR)", pharmacyCostPct, setPharmacyCostPct, 10, 45, 1, v => `${v}%`, "Compounded HRT is cheaper than compounded GLP-1. Estradiol + progesterone COGS are low.")}
              {slider("Platform infra cost per patient", infraCostPer, setInfraCostPer, 3, 20, 1, v => `$${v}/mo`, "Canvas EHR, Photon e-prescribe, Stripe, support tooling, Eli kit costs amortised.")}
            </div>
          </div>

          <div style={{ marginTop: 16, padding: "12px 14px", background: "#f5f5f5", borderRadius: 10, fontSize: 12, color: "#555", lineHeight: 1.7 }}>
            <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>Key assumption to stress-test:</strong> Churn is the most sensitive variable in this model. At 4% monthly churn, average patient lifetime is ~25 months. At 2%, it doubles to ~50 months — and LTV nearly triples. The clinical quality of your follow-up experience is the single biggest lever on business value.
          </div>
        </div>
      )}

      {/* PRICING TIERS TAB */}
      {activeTab === "tiers" && (
        <div>
          <div style={{ fontSize: 13, color: "#555", marginBottom: 20, lineHeight: 1.6 }}>
            The revised business thesis positions this as a <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>menopause care platform</strong> with multiple revenue pathways — not a single-prescription funnel. Adjust the pricing and adoption rate for each tier to see the impact on ARPU.
          </div>
          {TIERS.map(t => (
            <div key={t.id} style={{ border: "0.5px solid #ddd", borderRadius: 10, padding: "14px 16px", marginBottom: 12, borderLeft: `3px solid ${t.color}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#1a1a1a" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{t.desc}</div>
                </div>
                <div style={{ padding: "3px 9px", borderRadius: 99, fontSize: 11, background: t.bg, color: t.color, fontWeight: 500 }}>
                  ${tierSettings[t.id].price}/mo × {tierSettings[t.id].adoption}% = ${Math.round(tierSettings[t.id].price * tierSettings[t.id].adoption / 100)}/patient
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ fontSize: 12, color: "#666" }}>Price</div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>${tierSettings[t.id].price}/mo</div>
                  </div>
                  <input type="range" min={9} max={299} step={1} value={tierSettings[t.id].price}
                    onChange={e => updateTier(t.id, "price", Number(e.target.value))}
                    style={{ width: "100%" }} />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <div style={{ fontSize: 12, color: "#666" }}>Adoption rate</div>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{tierSettings[t.id].adoption}%</div>
                  </div>
                  <input type="range" min={0} max={100} step={1} value={tierSettings[t.id].adoption}
                    onChange={e => updateTier(t.id, "adoption", Number(e.target.value))}
                    style={{ width: "100%", accentColor: t.color }} />
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#aaa", marginTop: 8 }}>{t.note}</div>
            </div>
          ))}
          <div style={{ padding: "12px 14px", background: "#f5f5f5", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 13, color: "#555" }}>Blended ARPU across all tiers</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: "#1a1a1a" }}>
              ${Math.round(TIERS.reduce((sum, t) => sum + (tierSettings[t.id].price * tierSettings[t.id].adoption / 100), 0))}/mo
            </div>
          </div>
        </div>
      )}

      {/* UNIT ECONOMICS TAB */}
      {activeTab === "unit" && (
        <div>
          <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.05em", marginBottom: 12 }}>SELECT PHASE TO ANALYSE</div>
          <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
            {PHASES.map((p, i) => (
              <button key={i} onClick={() => setActivePhase(i)} style={{
                flex: 1, padding: "7px 0", borderRadius: 8, cursor: "pointer",
                border: activePhase === i ? "1.5px solid #185FA5" : "0.5px solid #ddd",
                background: activePhase === i ? "#E6F1FB" : "white",
                fontSize: 12, color: activePhase === i ? "#0C447C" : "#666",
                fontWeight: activePhase === i ? 500 : 400,
              }}>{p}</button>
            ))}
          </div>

          {/* LTV:CAC waterfall */}
          <div style={{ border: "0.5px solid #ddd", borderRadius: 10, overflow: "hidden", marginBottom: 16 }}>
            <div style={{ background: "#f5f5f5", padding: "8px 14px", fontSize: 10, color: "#888", letterSpacing: "0.05em", borderBottom: "0.5px solid #ddd" }}>UNIT ECONOMICS PER PATIENT</div>
            {[
              { label: "Monthly ARPU", val: `$${Math.round(phase.arpu)}`, note: "Blended across all tiers", pos: true },
              { label: "Physician cost", val: `-$${Math.round(phase.arpu * physicianCostPct / 100)}`, note: `${physicianCostPct}% of revenue`, pos: false },
              { label: "Pharmacy / compounding", val: `-$${Math.round(phase.arpu * pharmacyCostPct / 100)}`, note: `${pharmacyCostPct}% of revenue`, pos: false },
              { label: "Infra + support", val: `-$${infraCostPer}`, note: "Per patient per month", pos: false },
              { label: "Monthly gross profit", val: `$${Math.round(phase.arpu * phase.grossMarginPct / 100)}`, note: `${pct(phase.grossMarginPct)} gross margin`, pos: true, highlight: true },
              { label: "Avg patient lifetime", val: `${(1 / (churnRate / 100)).toFixed(0)} months`, note: `At ${churnRate}% monthly churn`, pos: true },
              { label: "Lifetime value (LTV)", val: fmt(phase.ltv), note: "Gross profit × lifetime", pos: true, highlight: true },
              { label: "CAC", val: `-$${cac}`, note: "Blended paid + organic", pos: false },
              { label: "LTV : CAC ratio", val: `${phase.ltvCac.toFixed(1)}x`, note: phase.ltvCac >= 3 ? "Target is 3x+ — this is healthy" : "Below 3x — reduce CAC or improve retention", pos: phase.ltvCac >= 3, highlight: true },
              { label: "CAC payback period", val: `${Math.round(cac / (phase.arpu * phase.grossMarginPct / 100))} months`, note: "Months to recover acquisition cost from gross profit", pos: true },
            ].map((row, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "10px 14px",
                borderBottom: i < 9 ? "0.5px solid #eee" : "none",
                background: row.highlight ? (row.pos ? "#f0f9e8" : "#fff5f5") : (i % 2 === 0 ? "white" : "#fafafa"),
              }}>
                <div>
                  <div style={{ fontSize: 13, color: row.highlight ? "#1a1a1a" : "#444", fontWeight: row.highlight ? 500 : 400 }}>{row.label}</div>
                  <div style={{ fontSize: 11, color: "#aaa" }}>{row.note}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: row.highlight ? 500 : 400, color: row.pos ? (row.highlight ? "#27500A" : "#333") : "#A32D2D" }}>{row.val}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: "12px 14px", background: "#f5f5f5", borderRadius: 10, fontSize: 12, color: "#555", lineHeight: 1.7 }}>
            <strong style={{ color: "#1a1a1a", fontWeight: 500 }}>The retention thesis in numbers:</strong> Moving from 4% to 2% monthly churn roughly doubles LTV. This is why the revised business direction — continuity of care, not just prescription access — is financially significant, not just strategically better. Every improvement in clinical quality compounds directly into valuation.
          </div>
        </div>
      )}
    </div>
  );
}
