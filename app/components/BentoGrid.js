"use client";

export default function BentoGrid() {
  const APP_URL = "https://my-resume.in";

  return (
    <section id="products" className="bg-paper border-b hairline">
      {/* Section label */}
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>03 / CATALOG</span>
        <span className="hidden md:inline">01 LIVE · MORE INCOMING</span>
        <span>v1.0</span>
      </div>

      {/* Heading row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="mono-label text-forest mb-4">/products</div>
          <h2 className="h-display text-5xl md:text-7xl text-forest">
            One tool out.<br />
            <span className="text-coral">More on the way.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-6">
          <p className="text-[14px] text-grid leading-relaxed">
            Zevo Works ships AI tooling that automates tedious knowledge work.
            Right now there's one — built carefully, free forever. The next
            ones are being drafted.
          </p>
          <div className="grid grid-cols-2 gap-px bg-grid/20">
            <div className="bg-paper p-2 text-center">
              <div className="mono-label !text-[9px] text-grid/55">01</div>
              <div className="w-2 h-2 mx-auto my-1 bg-forest" />
              <div className="mono-label !text-[8px] text-forest">LIVE</div>
            </div>
            <div className="bg-paper p-2 text-center">
              <div className="mono-label !text-[9px] text-grid/55">02+</div>
              <div className="w-2 h-2 mx-auto my-1 bg-gold animate-[blink_1.4s_steps(2)_infinite]" />
              <div className="mono-label !text-[8px] text-gold">DRAFT</div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── FLAGSHIP: /my-resume ───── */}
      <a
        href={APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-1 lg:grid-cols-[1.05fr_auto_1.4fr] border-b hairline group bg-paper"
      >
        {/* LEFT — spec */}
        <div className="p-8 md:p-12 lg:border-r hairline relative">
          <div className="flex items-center justify-between mb-6 border-l-2 border-coral pl-3">
            <span className="mono-label text-coral">MODULE_01 · /my-resume</span>
            <span className="mono-label !text-[10px] px-2 py-0.5 border border-mint bg-mint/40 text-forest inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" /> LIVE
            </span>
          </div>

          <h3 className="h-display text-4xl md:text-5xl text-forest">my-resume</h3>
          <p className="mt-3 text-[14px] text-grid leading-relaxed max-w-sm">
            Drop a JD. AI restructures bullets, optimizes keywords, ships an
            ATS-friendly PDF typeset in LaTeX. Free, forever.
          </p>

          {/* Spec table */}
          <dl className="mt-6 border hairline-strong">
            {[
              ["RUNTIME", "edge · ≈1.8s p95"],
              ["FORMAT", "LaTeX → PDF/A"],
              ["MODEL", "claude · proprietary"],
              ["PRICE", "₹0 · always"],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[110px_1fr] border-b hairline last:border-b-0">
                <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 mono-label inline-flex items-center gap-2 text-forest group-hover:gap-3 transition-all">
            <span className="border-b border-forest pb-0.5">OPEN /my-resume</span>{" "}
            <span>→</span>
          </div>
        </div>

        {/* CENTER — pipeline rail */}
        <div className="hidden lg:flex flex-col items-center justify-center px-6 border-r hairline relative min-w-[90px]">
          <div className="mono-label text-grid/45 mb-3 [writing-mode:vertical-rl] rotate-180">PIPELINE</div>
          <svg width="44" height="240" viewBox="0 0 44 240" className="text-forest">
            <line x1="22" y1="0" x2="22" y2="240" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
            {[40, 110, 180].map((cy, i) => (
              <g key={i}>
                <rect x="10" y={cy - 10} width="24" height="20" fill="#F7F7F5" stroke="currentColor" />
                <text x="22" y={cy + 3} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor">
                  0{i + 1}
                </text>
              </g>
            ))}
            <path d="M14 220 L22 232 L30 220" fill="none" stroke="currentColor" />
          </svg>
        </div>

        {/* RIGHT — live preview */}
        <div className="p-8 md:p-10 bg-mosaic-faint relative">
          <div className="flex items-center justify-between mb-4">
            <div className="mono-label text-grid/55">PREVIEW · resume_acme.pdf</div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-coral" />
              <span className="w-2 h-2 bg-gold" />
              <span className="w-2 h-2 bg-mint" />
            </div>
          </div>

          <div className="relative border hairline-strong corner-markers bg-paper p-5 md:p-7 min-h-[340px] group/preview">
            <span className="cm-tr" />
            <span className="cm-br" />

            {/* Resume header */}
            <div className="flex items-start justify-between border-b hairline-strong pb-3">
              <div>
                <div className="h-display text-2xl text-forest">Sujan M B</div>
                <div className="mono-label !text-[10px] text-grid/70 mt-1">
                  Software Engineer · bengaluru, in
                </div>
              </div>
              <div className="text-right mono-label !text-[9px] text-grid/55 leading-relaxed">
                sujan@mail.com<br />
                +91 ●●●●● ●●●●●<br />
                /sujanmb
              </div>
            </div>

            {/* Resume body */}
            <div className="mt-4 space-y-3">
              <div>
                <div className="mono-label !text-[10px] text-forest border-b hairline pb-1">EXPERIENCE</div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex justify-between mono-label !text-[10px]">
                    <span className="text-grid">Acme Corp · Staff SWE</span>
                    <span className="text-grid/55">2022 — Now</span>
                  </div>
                  <div className="h-1 bg-grid/45 w-[92%]" />
                  <div className="h-1 bg-grid/45 w-[78%]" />
                  <div className="h-1 bg-coral w-[55%]" title="keyword match" />
                  <div className="h-1 bg-grid/45 w-[88%]" />
                </div>
              </div>

              <div>
                <div className="mono-label !text-[10px] text-forest border-b hairline pb-1">SKILLS</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {["TypeScript", "Go", "Postgres", "k8s", "AWS", "LaTeX", "AI/ML"].map((s, i) => (
                    <span
                      key={s}
                      className={`mono-label !text-[9px] px-1.5 py-0.5 border ${
                        i === 1 || i === 6
                          ? "border-forest bg-mint/40 text-forest"
                          : "hairline-strong text-grid"
                      }`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Match score overlay */}
            <div className="absolute -right-2 top-12 bg-forest text-paper px-2.5 py-2 mono-label !text-[10px] z-10">
              <div className="text-paper/65">MATCH</div>
              <div className="h-display text-xl text-paper leading-none mt-0.5">
                94<span className="text-paper/55">%</span>
              </div>
            </div>

            <div className="absolute bottom-2 right-3 mono-label !text-[9px] text-grid/45 opacity-0 group-hover/preview:opacity-100 transition-opacity">
              hover → full color
            </div>
          </div>

          {/* Run terminal */}
          <div className="mt-4 border hairline-strong">
            <div className="flex items-center justify-between px-3 py-1.5 border-b hairline">
              <span className="mono-label text-grid/55">$ zevo run my-resume</span>
              <span className="mono-label text-mint inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-mint" /> exit 0
              </span>
            </div>
            <pre className="px-3 py-2 mono-label !text-[10px] !tracking-normal leading-[1.7] text-grid">
{`> parse jd  ............ ok
> rewrite ............... ok
> compile latex ......... ok
> ship resume_acme.pdf .. 1.8s ✓`}
            </pre>
          </div>
        </div>
      </a>

      {/* ───── ROADMAP TEASER — honest "more coming" ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr] bg-forest text-paper">
        {/* LEFT — copy */}
        <div className="p-8 md:p-12 lg:p-16 lg:border-r border-paper/15">
          <div className="flex items-center justify-between mb-6 border-l-2 border-paper pl-3">
            <span className="mono-label text-paper/70">ROADMAP · /next</span>
            <span className="mono-label !text-[10px] px-2 py-0.5 border border-gold text-gold inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-gold animate-[blink_1.4s_steps(2)_infinite]" /> DRAFTING
            </span>
          </div>

          <h3 className="h-display text-4xl md:text-5xl text-paper">
            More tools.<br />
            Same studio.
          </h3>
          <p className="mt-4 text-[14px] text-paper/75 leading-relaxed max-w-sm">
            One module is live today. The next ones are still on paper —
            shaped by the same rules: small, fast, free. If you have a
            tedious workflow you'd pay to delete, tell us — we ship monthly.
          </p>

          <form className="mt-8 flex items-stretch border border-paper/35">
            <input
              type="text"
              placeholder="what should we automate next?"
              className="flex-1 bg-transparent text-paper placeholder:text-paper/40 px-3 py-2.5 mono-label !text-[11px] !tracking-normal focus:outline-none"
            />
            <button
              type="button"
              onClick={() => (window.location.href = "mailto:info@zevo-works.in?subject=Tool%20request")}
              className="mono-label px-3 py-2.5 bg-paper text-forest hover:bg-mint btn-snap inline-flex items-center gap-1"
            >
              SUBMIT →
            </button>
          </form>

          <div className="mt-3 mono-label !text-[10px] text-paper/55">
            or email · info@zevo-works.in
          </div>
        </div>

        {/* RIGHT — empty module slots */}
        <div className="p-8 md:p-10 relative">
          <div className="flex items-center justify-between mb-4">
            <div className="mono-label text-paper/55">FIG_03.2 · MODULE_SLOTS</div>
            <div className="mono-label text-paper/55">RESERVED 11 / 12</div>
          </div>

          <div className="grid grid-cols-4 gap-px bg-paper/15">
            {Array.from({ length: 12 }).map((_, i) => {
              // slot 0 is the only live one
              const isLive = i === 0;
              return (
                <div
                  key={i}
                  className="aspect-square bg-forest relative flex flex-col items-center justify-center"
                >
                  {isLive ? (
                    <>
                      <div className="absolute inset-2 bg-mint flex items-center justify-center">
                        <span className="h-display text-lg text-forest">01</span>
                      </div>
                      <span className="absolute -bottom-px left-0 right-0 text-center mono-label !text-[8px] text-mint">
                        /my-resume
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="mono-label !text-[10px] text-paper/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mono-label !text-[8px] text-paper/25 mt-1">
                        empty
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px bg-paper/15">
            {[
              ["SHIPPED", "01"],
              ["DRAFT", "00"],
              ["IDEAS", "open"],
            ].map(([k, v]) => (
              <div key={k} className="bg-forest p-3">
                <div className="mono-label !text-[9px] text-paper/55">{k}</div>
                <div className="mono-label !text-[11px] text-paper mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
