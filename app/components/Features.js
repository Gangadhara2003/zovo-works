"use client";

export default function Features() {
  return (
    <section id="features" className="bg-paper border-b hairline">
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>04 / SYSTEM</span>
        <span className="hidden md:inline">DESIGN_PRINCIPLES · NON_NEGOTIABLE</span>
        <span>n=3</span>
      </div>

      {/* ───── Heading ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="mono-label text-forest mb-4">/approach</div>
          <h2 className="h-display text-5xl md:text-7xl text-forest">
            Three rules.<br />
            <span className="text-coral">No exceptions.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-6">
          <p className="text-[14px] text-grid leading-relaxed">
            We made these calls early so we wouldn't have to make them at 2am.
            Every commit answers to all three.
          </p>
          <div className="grid grid-cols-3 gap-px bg-grid/20">
            {[
              ["01", "ALIGNMENT", "coral"],
              ["02", "LATENCY", "mint"],
              ["03", "COHERENCE", "gold"],
            ].map(([n, l, c]) => (
              <div key={l} className="bg-paper p-2 text-center">
                <div className="mono-label !text-[9px] text-grid/55">{n}</div>
                <div className={`w-2 h-2 mx-auto my-1 bg-${c}`} />
                <div className="mono-label !text-[8px] text-forest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ───── F.01 — AI at the core ─────
         Side-by-side schematic: wrapper (struck) vs purpose-built. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr] border-b hairline">
        <div className="p-8 md:p-12 lg:p-16 lg:border-r hairline relative">
          <div className="flex items-center justify-between mb-6 border-l-2 border-coral pl-3">
            <span className="mono-label text-coral">F.01 · ALIGNMENT</span>
            <span className="mono-label !text-[10px] text-grid/55">RULE 01 / 03</span>
          </div>
          <h3 className="h-display text-4xl md:text-5xl text-forest">
            AI at the core.
          </h3>
          <p className="mt-4 text-[15px] text-grid leading-relaxed max-w-md">
            Not a wrapper around a generic chatbot. Each module ships its own
            pipeline — prompt schema, retrieval, validators, eval — tuned for
            one job.
          </p>

          <ul className="mt-6 space-y-2 mono-label !text-[11px] !tracking-normal">
            {[
              "JD-aware token graph",
              "deterministic JSON output",
              "regression evals per release",
              "no hallucinated experience",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-grid">
                <span className="w-1.5 h-1.5 bg-forest" /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Schematic */}
        <div className="p-8 md:p-12 bg-mosaic-faint relative">
          <div className="mono-label text-grid/55 mb-4">FIG_04.1 · ARCHITECTURE_DIFF</div>

          {/* Top row — wrapper (struck through) */}
          <div className="mb-6">
            <div className="mono-label text-coral mb-2 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-coral" /> WRAPPER · others
            </div>
            <div className="relative grid grid-cols-[1fr_28px_1fr] items-center gap-2">
              <div className="border hairline-strong px-3 py-3 mono-label text-grid line-through decoration-coral/70 decoration-2 bg-paper">
                user prompt
              </div>
              <div className="text-center mono-label text-coral">→</div>
              <div className="border hairline-strong px-3 py-3 mono-label text-grid line-through decoration-coral/70 decoration-2 bg-paper">
                generic LLM
              </div>
              <div className="col-span-3 mt-1 mono-label !text-[9px] text-coral pl-1">↳ vibes-based output, no evals, drifts weekly</div>
            </div>
          </div>

          {/* Bottom — purpose-built pipeline */}
          <div>
            <div className="mono-label text-forest mb-2 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-forest" /> ZEVO · purpose-built
            </div>
            <div className="border hairline-strong bg-paper corner-markers relative p-4">
              <span className="cm-tr" />
              <span className="cm-br" />
              <svg viewBox="0 0 360 140" className="w-full">
                {/* boxes */}
                {[
                  { x: 6, label: "JD", fill: "#9EFFBF" },
                  { x: 70, label: "PARSE", fill: "#F7F7F5" },
                  { x: 140, label: "PLAN", fill: "#F7F7F5" },
                  { x: 210, label: "WRITE", fill: "#1A3C2B", text: "#F7F7F5" },
                  { x: 280, label: "EVAL", fill: "#F4D35E" },
                ].map((b) => (
                  <g key={b.label}>
                    <rect x={b.x} y="45" width="60" height="30" fill={b.fill} stroke="#1A3C2B" />
                    <text x={b.x + 30} y="64" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={b.text ?? "#1A3C2B"}>
                      {b.label}
                    </text>
                  </g>
                ))}
                {/* edges */}
                {[66, 136, 206, 276].map((x) => (
                  <path key={x} d={`M${x} 60 L${x + 4} 60`} stroke="#1A3C2B" strokeWidth="1.2" />
                ))}
                {/* validator loop */}
                <path d="M310 75 Q330 110 270 110 Q240 110 240 80" fill="none" stroke="#1A3C2B" strokeWidth="0.8" strokeDasharray="3 3" />
                <text x="310" y="125" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#3A3A38">validator loop</text>
                {/* ingest label */}
                <text x="36" y="38" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#3A3A38">ingest</text>
                <text x="240" y="38" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#3A3A38">transform</text>
                <text x="310" y="38" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#3A3A38">guard</text>
              </svg>
            </div>
            <div className="mt-2 mono-label !text-[9px] text-forest pl-1">↳ JSON-typed, replayable, eval-gated</div>
          </div>
        </div>
      </div>

      {/* ───── F.02 — Actually fast ─────
         Latency histogram with p50/p95/p99 markers. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1.05fr] border-b hairline">
        {/* Latency chart */}
        <div className="p-8 md:p-12 lg:border-r hairline relative">
          <div className="flex items-center justify-between mb-6">
            <div className="mono-label text-grid/55">FIG_04.2 · LATENCY_HIST · n=10,412</div>
            <div className="flex items-center gap-3 mono-label">
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-mint" /> p50</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-gold" /> p95</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-coral" /> p99</span>
            </div>
          </div>

          {/* Histogram */}
          <div className="border hairline-strong p-5 bg-paper relative">
            <div className="flex items-end gap-[3px] h-[160px]">
              {[6, 10, 18, 30, 52, 78, 96, 82, 64, 48, 36, 28, 22, 18, 14, 10, 8, 6, 5, 4, 4, 3, 3, 3, 2, 2, 2, 2].map((h, i) => {
                let color = "bg-forest";
                if (i === 5) color = "bg-mint";
                if (i === 14) color = "bg-gold";
                if (i === 22) color = "bg-coral";
                return (
                  <div
                    key={i}
                    className={`flex-1 ${color}`}
                    style={{ height: `${h}%`, opacity: i > 16 ? 0.6 : 1 }}
                  />
                );
              })}
            </div>

            {/* x-axis */}
            <div className="mt-2 flex justify-between mono-label !text-[9px] text-grid/55">
              <span>0s</span>
              <span>1s</span>
              <span>2s</span>
              <span>3s</span>
              <span>5s+</span>
            </div>

            {/* Marker callouts */}
            <div className="absolute top-2 right-3 grid grid-cols-3 gap-3 mono-label !text-[10px]">
              <div className="text-center">
                <div className="text-grid/55">p50</div>
                <div className="h-display text-lg text-forest mt-0.5">0.9s</div>
              </div>
              <div className="text-center border-l hairline pl-3">
                <div className="text-grid/55">p95</div>
                <div className="h-display text-lg text-forest mt-0.5">1.8s</div>
              </div>
              <div className="text-center border-l hairline pl-3">
                <div className="text-grid/55">p99</div>
                <div className="h-display text-lg text-forest mt-0.5">2.4s</div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-px bg-grid/20">
            {[
              ["EDGE_RUN", "yes · global"],
              ["COLD_START", "0ms · warm"],
              ["BUDGET", "₹0 to user"],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper px-3 py-2.5">
                <div className="mono-label !text-[9px] text-grid/55">{k}</div>
                <div className="mono-label !text-[11px] text-forest mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Copy */}
        <div className="p-8 md:p-12 lg:p-16 bg-mosaic-faint">
          <div className="flex items-center justify-between mb-6 border-l-2 border-mint pl-3">
            <span className="mono-label text-forest">F.02 · LATENCY</span>
            <span className="mono-label !text-[10px] text-grid/55">RULE 02 / 03</span>
          </div>
          <h3 className="h-display text-4xl md:text-5xl text-forest">
            Actually fast.
          </h3>
          <p className="mt-4 text-[15px] text-grid leading-relaxed max-w-md">
            Results in seconds, not minutes. We measure p95 every deploy and
            block merges that regress it.
          </p>

          <div className="mt-6 border hairline-strong p-4 bg-paper">
            <div className="mono-label !text-[10px] text-grid/55">SLO · 30d</div>
            <div className="flex items-baseline gap-3 mt-1">
              <div className="h-display text-4xl text-forest">99.94<span className="text-2xl text-grid/55">%</span></div>
              <div className="mono-label !text-[10px] text-mint">↑ 0.03 wow</div>
            </div>
            <div className="mt-3 h-1.5 bg-grid/15 relative">
              <div className="absolute inset-y-0 left-0 bg-forest" style={{ width: "99.94%" }} />
            </div>
            <div className="mt-2 mono-label !text-[9px] text-grid/55 flex justify-between">
              <span>99.9 target</span>
              <span>100.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* ───── F.03 — One platform ─────
         Star topology: many legacy nodes → one Zevo core. */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.4fr]">
        <div className="p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="flex items-center justify-between mb-6 border-l-2 border-gold pl-3">
            <span className="mono-label text-forest">F.03 · COHERENCE</span>
            <span className="mono-label !text-[10px] text-grid/55">RULE 03 / 03</span>
          </div>
          <h3 className="h-display text-4xl md:text-5xl text-forest">
            One surface.
          </h3>
          <p className="mt-4 text-[15px] text-grid leading-relaxed max-w-md">
            One login, one subscription, one design language across every
            module. Cross-tool flows work without copy-paste.
          </p>

          {/* legend */}
          <div className="mt-6 grid grid-cols-2 gap-2 max-w-sm">
            {[
              ["one auth", "SSO across modules"],
              ["one bill", "₹0 — there is no bill"],
              ["one UI", "shared design tokens"],
              ["one API", "/zevo openapi v1"],
            ].map(([k, v]) => (
              <div key={k} className="border hairline-strong p-3">
                <div className="mono-label !text-[10px] text-forest">{k}</div>
                <div className="mono-label !text-[9px] text-grid/55 mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Star topology */}
        <div className="p-8 md:p-12 bg-mosaic-faint relative flex items-center justify-center">
          <div className="mono-label text-grid/55 absolute top-4 left-4">FIG_04.3 · STAR_TOPOLOGY</div>
          <div className="mono-label text-grid/55 absolute top-4 right-4">12 → 1</div>

          <div className="relative w-full max-w-[420px] aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* connecting lines from outer nodes to center */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 200 + Math.cos(angle) * 170;
                const y = 200 + Math.sin(angle) * 170;
                return (
                  <line
                    key={i}
                    x1={x}
                    y1={y}
                    x2="200"
                    y2="200"
                    stroke="#1A3C2B"
                    strokeWidth="0.5"
                    strokeOpacity="0.35"
                    strokeDasharray="3 3"
                  />
                );
              })}

              {/* outer nodes (legacy tools, struck) */}
              {[
                "docs", "ats", "spell", "kw",
                "pdf", "cl", "jb1", "jb2",
                "trk", "em", "fmt", "lnk",
              ].map((label, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 200 + Math.cos(angle) * 170;
                const y = 200 + Math.sin(angle) * 170;
                return (
                  <g key={label}>
                    <rect
                      x={x - 22}
                      y={y - 10}
                      width="44"
                      height="20"
                      fill="#F7F7F5"
                      stroke="#3A3A38"
                      strokeOpacity="0.45"
                    />
                    <text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      fontFamily="JetBrains Mono"
                      fontSize="9"
                      fill="#3A3A38"
                      textDecoration="line-through"
                      opacity="0.7"
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

              {/* center hub */}
              <circle cx="200" cy="200" r="56" fill="#F7F7F5" stroke="#1A3C2B" />
              <rect x="172" y="172" width="56" height="56" fill="#1A3C2B" />
              <text x="200" y="196" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700" fontSize="11" fill="#F7F7F5">
                ZEVO
              </text>
              <text x="200" y="210" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#9EFFBF">
                /core
              </text>

              {/* pulse rings */}
              <circle cx="200" cy="200" r="76" fill="none" stroke="#1A3C2B" strokeWidth="0.5" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="96" fill="none" stroke="#1A3C2B" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.5" />
            </svg>

            {/* corner labels */}
            <div className="absolute bottom-0 left-0 mono-label !text-[9px] text-grid/55">12 legacy surfaces</div>
            <div className="absolute bottom-0 right-0 mono-label !text-[9px] text-forest">1 core</div>
          </div>
        </div>
      </div>
    </section>
  );
}
