"use client";

export default function Hero() {
  const APP_URL = "https://my-resume.in";

  return (
    <section id="hero" className="relative pt-14 border-b hairline bg-paper">
      {/* Coordinate strip — single line, sparse */}
      <div className="border-b hairline">
        <div className="flex items-center justify-between px-4 md:px-8 py-2 mono-label text-grid/55">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-forest" />
            SYS · ZW—01 / HERO
          </span>
          <span className="hidden md:inline">12.97°N · 77.59°E · BENGALURU</span>
          <span>BUILD 2026.05.15</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* ───────── LEFT ───────── */}
        <div className="lg:col-span-7 px-4 md:px-10 lg:px-14 py-16 md:py-24 lg:py-28 lg:border-r hairline">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-forest/30 mb-10">
            <span className="w-2 h-2 bg-forest" />
            <span className="mono-label text-forest">v1.0 · OPERATIONAL · IN</span>
          </div>

          {/* Headline — single block, clean */}
          <h1 className="h-display text-[56px] sm:text-[80px] lg:text-[104px] text-forest">
            Zero effort.
          </h1>
          <div className="mt-2 flex items-baseline flex-wrap gap-x-5 gap-y-2">
            <span className="h-display text-[56px] sm:text-[80px] lg:text-[104px] text-forest">
              Maximum
            </span>
            <span className="h-display text-[56px] sm:text-[80px] lg:text-[104px] text-paper bg-forest px-4 leading-[1.05]">
              output.
            </span>
          </div>

          {/* Subtext with vertical rule */}
          <div className="mt-12 flex gap-5 max-w-xl">
            <div className="w-px bg-forest/45 shrink-0" />
            <p className="font-[JetBrains_Mono] text-[12px] leading-[1.75] tracking-[0.04em] uppercase text-grid">
              We build AI tools that automate tedious knowledge work.
              One is live today — my-resume, an ATS-optimised builder.
              More are on the way. Free, always.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label flex items-center justify-between gap-3 px-5 py-3.5 bg-forest text-paper btn-snap hover:bg-forest-deep flex-1"
            >
              <span>RUN /my-resume</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="#products"
              className="mono-label flex items-center justify-between gap-3 px-5 py-3.5 border border-forest/40 text-forest btn-snap hover:bg-forest/5 flex-1"
            >
              <span>READ /spec</span>
              <span aria-hidden>↓</span>
            </a>
          </div>

          {/* Footnote table */}
          <div className="mt-14 inline-grid grid-cols-3 border hairline-strong">
            {[
              ["FREE", "always"],
              ["NO_CC", "required"],
              ["P95", "< 2.1s"],
            ].map(([k, v]) => (
              <div key={k} className="px-5 py-3 border-r hairline last:border-r-0">
                <div className="mono-label text-grid/50">{k}</div>
                <div className="mono-label !text-[11px] text-forest mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── RIGHT — wireframe ───────── */}
        <div className="lg:col-span-5 relative bg-mosaic-faint min-h-[520px] flex items-center justify-center px-6 py-16">
          {/* Corner figure label */}
          <div className="absolute top-4 left-4 mono-label text-grid/50">FIG_01 / ORBIT</div>
          <div className="absolute top-4 right-4 mono-label text-grid/50">R=140px</div>
          <div className="absolute bottom-4 left-4 mono-label text-grid/50">RESUME.PDF</div>
          <div className="absolute bottom-4 right-4 mono-label text-grid/50 inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
            LIVE
          </div>

          {/* Diagram box */}
          <div className="relative w-full max-w-[400px] aspect-square border hairline-strong corner-markers bg-paper">
            <span className="cm-tr" />
            <span className="cm-br" />

            {/* Concentric dashed orbits */}
            <div className="absolute inset-8 dashed-ring animate-[orbit_38s_linear_infinite]" />
            <div className="absolute inset-20 dashed-ring animate-[orbit-rev_28s_linear_infinite]" />

            {/* Crosshair guides */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-grid/15" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-grid/15" />

            {/* Center: resume preview (luminosity → full color on hover) */}
            <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[160px] border hairline-strong bg-paper">
              <div className="absolute -top-2.5 left-2 bg-paper px-1.5 mono-label !text-[9px] text-forest">RESUME</div>
              <div className="h-full w-full p-2.5 bg-forest/[0.04] lumi flex flex-col gap-1">
                <div className="h-1.5 bg-forest w-3/5" />
                <div className="h-1 bg-forest/50 w-2/5" />
                <div className="h-px bg-grid/25 my-1.5" />
                <div className="h-0.5 bg-grid/60 w-full" />
                <div className="h-0.5 bg-grid/60 w-5/6" />
                <div className="h-0.5 bg-grid/60 w-full" />
                <div className="h-0.5 bg-grid/60 w-3/5" />
                <div className="h-px bg-grid/25 my-1.5" />
                <div className="h-0.5 bg-coral w-1/3 mb-0.5" />
                <div className="h-0.5 bg-grid/60 w-full" />
                <div className="h-0.5 bg-grid/60 w-4/5" />
                <div className="h-0.5 bg-grid/60 w-full" />
                <div className="h-0.5 bg-grid/60 w-3/4" />
              </div>
            </div>

            {/* Orbiting nodes */}
            <div className="absolute inset-8 animate-[orbit_18s_linear_infinite]">
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-coral" />
            </div>
            <div className="absolute inset-8 animate-[orbit-rev_24s_linear_infinite]">
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 bg-forest" />
            </div>
            <div className="absolute inset-20 animate-[orbit_22s_linear_infinite]">
              <div className="absolute -bottom-1 left-1/4 w-2 h-2 bg-gold" />
            </div>
            <div className="absolute inset-20 animate-[orbit-rev_30s_linear_infinite]">
              <div className="absolute top-1/3 -left-1 w-2 h-2 bg-mint" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
