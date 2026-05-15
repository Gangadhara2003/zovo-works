"use client";

import { useState } from "react";

const STAGES = [
  {
    n: "01",
    code: "INGEST",
    title: "Paste the JD",
    desc: "Drop in the job description. my-resume parses skills, seniority signals, and what the recruiter actually wants.",
    in: "job_description.txt",
    out: "context.json",
    bytes: ["3.4 KB", "1.1 KB"],
    elapsed: "240ms",
    accent: "coral",
  },
  {
    n: "02",
    code: "TRANSFORM",
    title: "AI tailors your résumé",
    desc: "The model restructures experience, rewrites bullets, and rebalances keywords — all emitted as clean LaTeX.",
    in: "context.json + profile.yml",
    out: "draft.tex",
    bytes: ["1.1 KB → 6.2 KB", "11.4 KB"],
    elapsed: "1,180ms",
    accent: "mint",
  },
  {
    n: "03",
    code: "SHIP",
    title: "Download & apply",
    desc: "LaTeX compiles into a typeset PDF in seconds — pixel-perfect, ATS-safe, ready to submit.",
    in: "draft.tex",
    out: "resume.pdf",
    bytes: ["11.4 KB", "84 KB"],
    elapsed: "380ms",
    accent: "gold",
  },
];

const ACCENT_BORDER = { coral: "border-l-coral", mint: "border-l-mint", gold: "border-l-gold" };
const ACCENT_DOT = { coral: "bg-coral", mint: "bg-mint", gold: "bg-gold" };

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section id="how-it-works" className="bg-paper border-b hairline">
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>05 / PROCESS</span>
        <span className="hidden md:inline">PIPELINE · my-resume@1.0</span>
        <span>STAGES 03</span>
      </div>

      {/* ───── Heading ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="mono-label text-forest mb-4">/pipeline</div>
          <h2 className="h-display text-5xl md:text-7xl text-forest">
            JD in.<br />
            <span className="bg-mint/55 px-2">Résumé out.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-6">
          <p className="text-[14px] text-grid leading-relaxed">
            Three deterministic stages. JSON-typed in between. No prompt
            engineering on your side — just paste and download.
          </p>
          <div className="grid grid-cols-3 gap-px bg-grid/20">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-paper p-2 text-center">
                <div className="mono-label !text-[9px] text-grid/55">{s.n}</div>
                <div className={`w-2 h-2 mx-auto my-1 ${ACCENT_DOT[s.accent]}`} />
                <div className="mono-label !text-[8px] text-forest">{s.code}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── Run-status control bar ───── */}
      <div className="border-b hairline px-4 md:px-8 py-3 flex flex-wrap items-center gap-4 md:gap-6 bg-mosaic-faint">
        <div className="flex items-center gap-2 mono-label text-forest">
          <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
          RUN_42AC · STREAMING
        </div>
        <div className="hidden md:flex items-center gap-2 mono-label text-grid/60">
          <span className="text-grid/45">started</span>
          <span>2026.05.15 · 14:02:11</span>
        </div>
        <div className="flex items-center gap-2 mono-label text-grid/60">
          <span className="text-grid/45">elapsed</span>
          <span className="text-forest">1.80s</span>
        </div>
        <div className="ml-auto flex items-center gap-2 mono-label">
          <span className="text-grid/45">exit</span>
          <span className="px-2 py-0.5 bg-mint/40 border border-forest text-forest">
            0 · ok
          </span>
        </div>
      </div>

      {/* ───── PIPELINE — three data viewers ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {STAGES.map((s, i) => (
          <div
            key={s.n}
            onMouseEnter={() => setActive(i)}
            className={`relative border-b lg:border-b-0 hairline ${
              i !== 2 ? "lg:border-r" : ""
            } ${active === i ? "bg-paper" : "bg-paper"}`}
          >
            {/* Inter-stage data-flow chip (sits on the divider, visible on lg) */}
            {i > 0 && (
              <div className="hidden lg:flex absolute -left-[1px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center">
                <div className="bg-paper border hairline-strong px-2 py-1 mono-label !text-[9px] text-forest inline-flex items-center gap-1.5">
                  <span aria-hidden>→</span>
                  {STAGES[i - 1].out}
                </div>
              </div>
            )}

            {/* Stage header */}
            <div className={`flex items-center justify-between p-5 md:p-6 border-b hairline border-l-2 ${ACCENT_BORDER[s.accent]} bg-paper`}>
              <div className="flex items-center gap-3">
                <div className="h-display text-4xl text-forest leading-none">
                  {s.n}
                </div>
                <div>
                  <div className="mono-label text-forest">{s.code}</div>
                  <div className="font-[Space_Grotesk] text-[15px] font-semibold text-forest mt-0.5">
                    {s.title}
                  </div>
                </div>
              </div>
              <div className="mono-label !text-[10px] text-mint inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-mint" /> ok
              </div>
            </div>

            {/* Data viewer — different per stage */}
            <div className="p-5 md:p-6 bg-mosaic-faint">
              {i === 0 && <IngestViewer />}
              {i === 1 && <TransformViewer />}
              {i === 2 && <ShipViewer />}
            </div>

            {/* Stage meta */}
            <div className="p-5 md:p-6 border-t hairline">
              <p className="text-[13px] text-grid leading-relaxed">{s.desc}</p>

              <dl className="mt-4 border hairline-strong">
                <div className="grid grid-cols-[70px_1fr] border-b hairline">
                  <dt className="px-3 py-1.5 mono-label text-grid/55 border-r hairline">IN</dt>
                  <dd className="px-3 py-1.5 mono-label !text-[11px] text-forest">{s.in}</dd>
                </div>
                <div className="grid grid-cols-[70px_1fr] border-b hairline">
                  <dt className="px-3 py-1.5 mono-label text-grid/55 border-r hairline">OUT</dt>
                  <dd className="px-3 py-1.5 mono-label !text-[11px] text-forest">{s.out}</dd>
                </div>
                <div className="grid grid-cols-[70px_1fr]">
                  <dt className="px-3 py-1.5 mono-label text-grid/55 border-r hairline">TOOK</dt>
                  <dd className="px-3 py-1.5 mono-label !text-[11px] text-forest">{s.elapsed}</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </div>

      {/* ───── Timing ruler ───── */}
      <div className="px-4 md:px-8 py-6 border-b hairline">
        <div className="flex items-center justify-between mb-3">
          <div className="mono-label text-grid/55">FIG_05 · LATENCY_BUDGET · p95 = 1.8s</div>
          <div className="mono-label text-grid/55">scale 1ms ≈ 0.05% width</div>
        </div>
        <div className="relative h-7 border hairline-strong flex">
          {/* segments */}
          <div className="bg-coral relative" style={{ width: "13.3%" }}>
            <span className="absolute inset-0 flex items-center justify-center mono-label !text-[10px] text-forest">
              INGEST · 240ms
            </span>
          </div>
          <div className="bg-mint relative" style={{ width: "65.6%" }}>
            <span className="absolute inset-0 flex items-center justify-center mono-label !text-[10px] text-forest">
              TRANSFORM · 1,180ms
            </span>
          </div>
          <div className="bg-gold relative" style={{ width: "21.1%" }}>
            <span className="absolute inset-0 flex items-center justify-center mono-label !text-[10px] text-forest">
              SHIP · 380ms
            </span>
          </div>
        </div>
        <div className="mt-1 flex justify-between mono-label !text-[9px] text-grid/55">
          <span>0ms</span>
          <span>500</span>
          <span>1,000</span>
          <span>1,500</span>
          <span>1,800ms · done</span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Data viewers per stage
   ───────────────────────────────────────────── */

function IngestViewer() {
  return (
    <div className="border hairline-strong bg-paper">
      <div className="flex items-center justify-between px-3 py-1.5 border-b hairline">
        <span className="mono-label text-grid/55">job_description.txt</span>
        <span className="mono-label !text-[9px] text-grid/45">3.4 KB · txt</span>
      </div>
      <div className="px-3 py-3 font-[JetBrains_Mono] text-[10.5px] leading-[1.65] text-grid">
        <div><span className="text-grid/40">01</span>  Senior Software Engineer · Acme Corp</div>
        <div><span className="text-grid/40">02</span>  Bengaluru · hybrid · full-time</div>
        <div><span className="text-grid/40">03</span></div>
        <div><span className="text-grid/40">04</span>  We're looking for an engineer with</div>
        <div><span className="text-grid/40">05</span>  5+ years building in <mark className="bg-mint/60 text-forest px-0.5">Go</mark> and</div>
        <div><span className="text-grid/40">06</span>  <mark className="bg-mint/60 text-forest px-0.5">TypeScript</mark>. Experience with</div>
        <div><span className="text-grid/40">07</span>  <mark className="bg-coral/60 text-forest px-0.5">k8s</mark>, <mark className="bg-coral/60 text-forest px-0.5">Postgres</mark>, distributed</div>
        <div><span className="text-grid/40">08</span>  systems at scale. Bonus:</div>
        <div><span className="text-grid/40">09</span>  <mark className="bg-gold/70 text-forest px-0.5">AI/ML</mark> exposure, open-source</div>
        <div><span className="text-grid/40">10</span>  contributions...</div>
      </div>
      <div className="border-t hairline px-3 py-2 flex flex-wrap gap-1.5">
        <span className="mono-label !text-[9px] text-grid/55">extracted:</span>
        {["Go", "TypeScript", "k8s", "Postgres", "AI/ML"].map((k) => (
          <span key={k} className="mono-label !text-[9px] px-1.5 py-0.5 border border-forest bg-mint/30 text-forest">
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

function TransformViewer() {
  return (
    <div className="border hairline-strong bg-paper">
      <div className="flex items-center justify-between px-3 py-1.5 border-b hairline">
        <span className="mono-label text-grid/55">draft.tex</span>
        <span className="mono-label !text-[9px] text-grid/45">11.4 KB · tex</span>
      </div>
      <div className="px-3 py-3 font-[JetBrains_Mono] text-[10.5px] leading-[1.65]">
        <div><span className="text-grid/40">01</span>  <span className="text-coral">\section</span>{`{`}<span className="text-forest">Experience</span>{`}`}</div>
        <div><span className="text-grid/40">02</span>  <span className="text-coral">\role</span>{`{`}Acme Corp{`}{`}Staff SWE{`}`}</div>
        <div><span className="text-grid/40">03</span>  <span className="text-coral">\bullets</span>{`{`}</div>
        <div><span className="text-grid/40">04</span>  &nbsp;&nbsp;Scaled distributed <span className="bg-mint/60 px-0.5">Go</span> services</div>
        <div><span className="text-grid/40">05</span>  &nbsp;&nbsp;to 1M+ rps on <span className="bg-coral/60 px-0.5">k8s</span>;</div>
        <div><span className="text-grid/40">06</span>  &nbsp;&nbsp;cut p95 latency 42%.</div>
        <div><span className="text-grid/40">07</span>  &nbsp;&nbsp;Built <span className="bg-mint/60 px-0.5">TypeScript</span> client SDK</div>
        <div><span className="text-grid/40">08</span>  &nbsp;&nbsp;adopted by 6 teams.</div>
        <div><span className="text-grid/40">09</span>  &nbsp;&nbsp;Shipped <span className="bg-gold/70 px-0.5">AI/ML</span> ranking</div>
        <div><span className="text-grid/40">10</span>  &nbsp;&nbsp;pipeline; +12% conv.</div>
      </div>
      <div className="border-t hairline px-3 py-2 grid grid-cols-3 mono-label !text-[9px]">
        <div><span className="text-grid/55">match</span><div className="text-forest mt-0.5">0.94</div></div>
        <div><span className="text-grid/55">tokens</span><div className="text-forest mt-0.5">2,180</div></div>
        <div><span className="text-grid/55">model</span><div className="text-forest mt-0.5">claude</div></div>
      </div>
    </div>
  );
}

function ShipViewer() {
  return (
    <div className="border hairline-strong bg-paper">
      <div className="flex items-center justify-between px-3 py-1.5 border-b hairline">
        <span className="mono-label text-grid/55">resume.pdf</span>
        <span className="mono-label !text-[9px] text-grid/45">84 KB · A4</span>
      </div>
      <div className="p-3">
        {/* Mini PDF page */}
        <div className="relative border hairline-strong bg-paper aspect-[1/1.15] p-3 corner-markers">
          <span className="cm-tr" />
          <span className="cm-br" />

          <div className="border-b hairline pb-2">
            <div className="h-display text-[13px] text-forest leading-none">Sujan M B</div>
            <div className="mono-label !text-[8px] text-grid/65 mt-0.5">Software Engineer · bengaluru</div>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="mono-label !text-[8px] text-forest">EXPERIENCE</div>
            <div className="h-0.5 bg-grid/55 w-[88%]" />
            <div className="h-0.5 bg-grid/55 w-[72%]" />
            <div className="h-0.5 bg-coral w-[55%]" />
            <div className="h-0.5 bg-grid/55 w-[90%]" />
            <div className="mono-label !text-[8px] text-forest mt-2">SKILLS</div>
            <div className="flex flex-wrap gap-0.5">
              {["Go", "TS", "k8s", "PG", "AI"].map((s, i) => (
                <span
                  key={s}
                  className={`mono-label !text-[7px] px-1 py-px border ${
                    i < 3 ? "border-forest bg-mint/40 text-forest" : "hairline-strong text-grid/70"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Download badge */}
          <div className="absolute -right-1 top-3 bg-forest text-paper px-1.5 py-1 mono-label !text-[8px]">
            ↓ PDF
          </div>
        </div>
      </div>
      <div className="border-t hairline px-3 py-2 grid grid-cols-3 mono-label !text-[9px]">
        <div><span className="text-grid/55">format</span><div className="text-forest mt-0.5">PDF/A</div></div>
        <div><span className="text-grid/55">ats</span><div className="text-forest mt-0.5">pass ✓</div></div>
        <div><span className="text-grid/55">pages</span><div className="text-forest mt-0.5">1</div></div>
      </div>
    </div>
  );
}
