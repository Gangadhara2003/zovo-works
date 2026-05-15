"use client";

const LEGACY_STACK = [
  { name: "Google Docs", note: "manual formatting", chip: "DOC" },
  { name: "ATS Checker", note: "stand-alone scoring", chip: "ATS" },
  { name: "Spell + Grammar", note: "another browser tab", chip: "LNG" },
  { name: "Keyword Tool", note: "guess the JD", chip: "KW" },
  { name: "PDF Converter", note: "broken margins", chip: "PDF" },
  { name: "Cover Letter AI", note: "$15/mo", chip: "CL" },
  { name: "Job Board #1", note: "duplicate input", chip: "JB1" },
  { name: "Job Board #2", note: "duplicate input", chip: "JB2" },
  { name: "Tracker Sheet", note: "manual sync", chip: "TRK" },
  { name: "Email Templates", note: "snippets folder", chip: "EM" },
];

const DIFFS = [
  ["ATS_PASS", "31%", "94%", "+203%"],
  ["TABS_OPEN", "10+", "1", "−90%"],
  ["MONTHLY_INR", "₹2,499", "₹0", "−100%"],
  ["MEAN_LATENCY", "—", "1.8s", "p95"],
];

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="border-b hairline bg-paper">
      {/* Section label */}
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>02 / DIFF</span>
        <span className="hidden md:inline">LEGACY_STACK → ZEVO_PIPELINE</span>
        <span>BENCH n=512</span>
      </div>

      {/* ───── Heading ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="mono-label text-forest mb-4">/migration</div>
          <h2 className="h-display text-5xl md:text-7xl text-forest">
            <span className="line-through decoration-coral decoration-[5px] underline-offset-2">Ten tools.</span><br />
            <span className="bg-mint/55 px-2">One pipeline.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-6">
          <p className="text-[14px] text-grid leading-relaxed">
            We measured a typical job-application workflow. Then we collapsed
            it into a single deterministic flow. Receipts below.
          </p>
          <div className="flex items-center gap-3 mono-label text-grid/60">
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-coral" />A</span>
            <span className="flex-1 border-t hairline-strong" />
            <span>→</span>
            <span className="flex-1 border-t border-forest" />
            <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 bg-forest" />B</span>
          </div>
        </div>
      </div>

      {/* ───── TIME RULER ─────
         A massive horizontal ruler comparing time-per-resume. */}
      <div className="border-b hairline p-8 md:p-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="mono-label text-grid/60">FIG_02.1 · TIME_PER_RESUME</div>
            <h3 className="h-display text-3xl md:text-4xl text-forest mt-1">4 hours → 12 seconds.</h3>
          </div>
          <div className="hidden md:block mono-label text-grid/50 text-right">
            <div>SCALE 1px ≈ 17s</div>
            <div>MEDIAN n=512</div>
          </div>
        </div>

        {/* OLD bar */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-2 mono-label">
            <span className="text-coral inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-coral" /> OLD_WAY · 04:22:11
            </span>
            <span className="text-grid/50 hidden sm:inline">manual</span>
          </div>
          <div className="relative h-9 border hairline-strong overflow-hidden">
            {/* striped coral bar */}
            <div className="absolute inset-0 bg-coral/30" />
            <div
              className="absolute inset-y-0 left-0 bg-coral"
              style={{
                width: "100%",
                backgroundImage:
                  "repeating-linear-gradient(135deg, transparent 0 8px, rgba(26,60,43,0.10) 8px 9px)",
              }}
            />
            {/* tick labels */}
            <div className="absolute inset-0 flex items-center justify-between px-3 mono-label !text-[10px] text-forest">
              <span>00:00</span>
              <span className="hidden sm:inline">01:00</span>
              <span className="hidden sm:inline">02:00</span>
              <span className="hidden sm:inline">03:00</span>
              <span>04:22</span>
            </div>
          </div>

          {/* annotations under bar */}
          <div className="mt-1 grid grid-cols-4 mono-label !text-[9px] text-grid/55">
            <span>↑ format</span>
            <span>↑ rewrite</span>
            <span>↑ ATS-check</span>
            <span className="text-right">↑ PDF export</span>
          </div>
        </div>

        {/* NEW bar */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-2 mono-label">
            <span className="text-forest inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-forest" /> ZEVO_WAY · 00:00:12
            </span>
            <span className="text-grid/50 hidden sm:inline">automated</span>
          </div>
          <div className="relative h-9 border hairline-strong overflow-hidden">
            {/* tiny forest sliver */}
            <div
              className="absolute inset-y-0 left-0 bg-forest"
              style={{ width: "0.07%", minWidth: "3px" }}
            />
            <div className="absolute inset-y-0 left-[3px] flex items-center pl-2 mono-label !text-[10px] text-grid/55">
              ← 12s ends here · the rest is your life back
            </div>
          </div>
          <div className="mt-1 mono-label !text-[9px] text-forest">
            ↑ paste JD · 1 click · done
          </div>
        </div>
      </div>

      {/* ───── STACK COLLAPSE ─────
         Left: 10-tool grid (legacy). Center: arrow. Right: single Zevo module. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] border-b hairline">
        {/* LEFT — legacy stack */}
        <div className="p-8 md:p-12 lg:border-r hairline">
          <div className="flex items-center justify-between mb-5">
            <div className="mono-label text-coral">FIG_02.2 · LEGACY_STACK</div>
            <div className="mono-label !text-[10px] px-2 py-0.5 border border-coral/50 text-coral inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-coral" /> 10 SURFACES
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-grid/20">
            {LEGACY_STACK.map((t, i) => (
              <div
                key={t.name}
                className="bg-paper p-3 relative"
                style={{
                  opacity: 1 - i * 0.04,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="mono-label text-coral">{t.chip}</span>
                  <span className="mono-label !text-[9px] text-grid/40">#{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="font-[Space_Grotesk] text-[14px] font-medium text-grid line-through decoration-coral/60">
                  {t.name}
                </div>
                <div className="mono-label !text-[9px] text-grid/50 mt-1">{t.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 mono-label !text-[10px]">
            <span className="px-2 py-1 border border-coral/40 text-coral">ctx-switches: high</span>
            <span className="px-2 py-1 border border-coral/40 text-coral">copy-paste loops</span>
            <span className="px-2 py-1 border border-coral/40 text-coral">≈₹2,499/mo</span>
          </div>
        </div>

        {/* CENTER — collapse arrow */}
        <div className="hidden lg:flex flex-col items-center justify-center px-8 border-r hairline relative min-w-[140px]">
          <div className="mono-label text-grid/50 mb-3">COLLAPSE</div>
          <svg width="80" height="120" viewBox="0 0 80 120" className="text-forest">
            <defs>
              <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.8" fill="currentColor" opacity="0.35" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="80" height="120" fill="url(#dots)" />
            <path d="M40 8 L40 96 M22 78 L40 96 L58 78" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="mt-3 mono-label !text-[10px] text-forest">10 → 1</div>
        </div>

        {/* RIGHT — Zevo module */}
        <div className="p-8 md:p-12 bg-mosaic-faint">
          <div className="flex items-center justify-between mb-5">
            <div className="mono-label text-forest">FIG_02.3 · ZEVO_PIPELINE</div>
            <div className="mono-label !text-[10px] px-2 py-0.5 border border-forest inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-forest" /> 1 MODULE
            </div>
          </div>

          {/* single big module card */}
          <div className="relative border hairline-strong bg-paper corner-markers p-6 min-h-[280px]">
            <span className="cm-tr" />
            <span className="cm-br" />

            {/* terminal-like header */}
            <div className="flex items-center justify-between border-b hairline pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-mint" />
                <span className="mono-label text-forest">zevo/my-resume@1.0</span>
              </div>
              <span className="mono-label !text-[10px] text-grid/50">SINGLE_SURFACE</span>
            </div>

            {/* pipeline stages */}
            <div className="mt-5 space-y-3">
              {[
                ["INGEST", "parse JD", "ok"],
                ["TRANSFORM", "rewrite + score", "ok"],
                ["TYPESET", "compile LaTeX", "ok"],
                ["SHIP", "resume.pdf", "ok"],
              ].map(([stage, action, status], i) => (
                <div key={stage} className="grid grid-cols-[80px_1fr_auto] items-center gap-3">
                  <span className="mono-label text-forest">{String(i + 1).padStart(2, "0")} · {stage}</span>
                  <div className="h-px border-t border-dashed border-forest/40" />
                  <span className="mono-label text-mint inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-mint" /> {status}
                  </span>
                  <span className="col-span-3 mono-label !text-[10px] text-grid/55 pl-[88px]">↳ {action}</span>
                </div>
              ))}
            </div>

            {/* mint footer pill */}
            <div className="mt-6 inline-flex items-center gap-2 px-2 py-1 bg-mint/50 mono-label text-forest">
              <span className="w-1.5 h-1.5 bg-forest" /> total 12s · free · open
            </div>
          </div>
        </div>
      </div>

      {/* ───── COMPACT DIFF STRIP ───── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b hairline">
        {DIFFS.map(([k, b, a, d], i) => (
          <div key={k} className={`p-5 md:p-6 ${i !== 0 ? "border-l hairline" : ""}`}>
            <div className="mono-label text-grid/55">{k}</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="h-display text-xl text-coral line-through decoration-coral/60">{b}</span>
              <span className="mono-label text-grid/40">→</span>
              <span className="h-display text-2xl text-forest">{a}</span>
            </div>
            <div className="mt-2 mono-label !text-[10px] inline-flex px-1.5 py-0.5 border border-mint bg-mint/30 text-forest">
              {d}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
