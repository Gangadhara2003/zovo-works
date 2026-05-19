"use client";

import { useEffect, useState } from "react";

const APP_URL = "https://my-resume.in";

// Internal anchors are prefixed with "/" so they work from sub-pages
// (e.g. /privacy, /terms) — a bare "#faq" on /privacy just looks for an
// element on the current page and fails silently.
const NAV = {
  Products: [
    { label: "my-resume", href: APP_URL, idx: "01", live: true },
    { label: "More coming", href: "/#products", idx: "02", soon: true },
  ],
  Company: [
    { label: "About", href: "/#features", idx: "01" },
    { label: "Process", href: "/#how-it-works", idx: "02" },
    { label: "FAQ", href: "/#faq", idx: "03" },
    { label: "Contact", href: "/contact", idx: "04" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy", idx: "01" },
    { label: "Terms of Service", href: "/terms", idx: "02" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % 10000), 90);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-forest text-paper">
      {/* ───── Closing strip ───── */}
      <div className="border-b border-paper/15">
        <div className="grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-4 border-r border-paper/15 last:border-r-0"
              style={{
                background:
                  i === 2 ? "var(--color-coral)" :
                    i === 5 ? "var(--color-mint)" :
                      i === 9 ? "var(--color-gold)" :
                        "transparent",
                opacity: 0.85,
              }}
            />
          ))}
        </div>
      </div>

      {/* ───── EOF banner ───── */}
      <div className="border-b border-paper/15 px-4 md:px-8 py-2 flex justify-between mono-label text-paper/55">
        <span>09 / EOF</span>
        <span className="hidden md:inline">END_OF_DOCUMENT · scroll ↑ to top</span>
        <a href="/#hero" className="hover:text-paper">
          ↑ RETURN
        </a>
      </div>

      {/* ───── HERO BLOCK — manifesto + status ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] border-b border-paper/15">
        {/* Manifesto */}
        <div className="p-8 md:p-12 lg:p-16 lg:border-r border-paper/15">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-paper flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A3C2B" strokeWidth="2.5">
                <path d="M4 5h16L6 19h14" strokeLinecap="square" />
              </svg>
            </div>
            <span className="h-display text-2xl text-paper">
              Zevo<span className="text-coral">/</span>Works
            </span>
          </div>

          <h3 className="h-display text-4xl md:text-5xl text-paper max-w-md">
            Build the tedious stuff away.
          </h3>
          <p className="mt-4 text-[14px] text-paper/70 leading-relaxed max-w-md">
            A one-person studio in Bengaluru, IN — building AI tooling that
            ships small, runs fast, and stays free. One module out today,
            more on the way.
          </p>

          {/* Social rail */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { label: "LINKEDIN", href: "https://www.linkedin.com/in/gangadhara-k-s-563142286/" },
              { label: "PORTFOLIO", href: "https://gangadharaks.in" },
              { label: "EMAIL", href: "mailto:info@zevo-works.in" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mono-label inline-flex items-center gap-2 px-3 py-1.5 border border-paper/35 text-paper hover:bg-paper hover:text-forest btn-snap"
              >
                <span className="w-1.5 h-1.5 bg-paper group-hover:bg-forest" />
                {s.label}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Status panel */}
        <div className="p-8 md:p-10 bg-forest-deep relative">
          <div className="flex items-center justify-between mb-5">
            <span className="mono-label text-paper/55">§ STATUS · /live</span>
            <span className="mono-label text-mint inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-mint animate-[blink_1.4s_steps(2)_infinite]" />
              ALL_GREEN
            </span>
          </div>

          <dl className="border border-paper/25">
            {[
              ["UPTIME", "99.94%"],
              ["P95", "1.8s"],
              ["TOOLS_LIVE", "01"],
              ["TOOLS_DRAFT", "00 · open"],
              ["LAST_DEPLOY", "2026.05.15"],
              ["TELEMETRY", `T+${String(tick).padStart(4, "0")}`],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[130px_1fr] border-b border-paper/15 last:border-b-0">
                <dt className="px-3 py-2 mono-label text-paper/55 border-r border-paper/15">{k}</dt>
                <dd className="px-3 py-2 mono-label !text-[11px] text-paper">{v}</dd>
              </div>
            ))}
          </dl>

          {/* mini-mosaic chips */}
          <div className="mt-5 grid grid-cols-12 gap-px bg-paper/15">
            {Array.from({ length: 24 }).map((_, i) => {
              const lit = (i + Math.floor(tick / 12)) % 7 === 0;
              const colors = ["bg-mint", "bg-coral", "bg-gold", "bg-paper"];
              const c = colors[i % 4];
              return (
                <div
                  key={i}
                  className={`h-3 bg-forest-deep`}
                  style={{ background: lit ? "" : "var(--color-forest-deep)" }}
                >
                  {lit && <div className={`h-full w-full ${c}`} style={{ opacity: 0.85 }} />}
                </div>
              );
            })}
          </div>
          <div className="mt-2 mono-label !text-[9px] text-paper/40">LIVE TELEMETRY · running</div>
        </div>
      </div>

      {/* ───── SITEMAP COLUMNS ───── */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-paper/15">
        {Object.entries(NAV).map(([title, items], i) => (
          <div
            key={title}
            className={`p-8 md:p-10 ${i !== 0 ? "md:border-l border-paper/15 border-t md:border-t-0" : ""}`}
          >
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-paper/20">
              <span className="mono-label text-paper/55">/{title.toLowerCase()}</span>
              <span className="mono-label !text-[10px] text-paper/40">
                n={items.length}
              </span>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http") || item.href.startsWith("mailto:")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group grid grid-cols-[28px_1fr_28px] items-baseline gap-2 text-[14px] text-paper/75 hover:text-paper"
                  >
                    <span className="mono-label !text-[9px] text-paper/40">{item.idx}</span>
                    <span className="flex items-baseline overflow-hidden">
                      <span className="font-[Space_Grotesk] font-medium truncate">{item.label}</span>
                      <span className="flex-1 mx-2 border-b border-dotted border-paper/25 translate-y-[-3px]" />
                    </span>
                    <span className="mono-label !text-[9px] text-right">
                      {item.live && <span className="text-mint">●</span>}
                      {item.soon && <span className="text-gold">○</span>}
                      {!item.live && !item.soon && <span className="text-paper/30">→</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ───── SIGNATURE BLOCK — engineering drawing stamp ───── */}
      <div className="grid grid-cols-2 md:grid-cols-6 border-b border-paper/15">
        {[
          ["DRAWN_BY", "Gangadhara K.S."],
          ["CHECKED", "Gangadhara K.S."],
          ["DATE", "2026.05.15"],
          ["SCALE", "1 : 1"],
          ["REVISION", "v1.0"],
          ["SHEET", "01 / 01"],
        ].map(([k, v], i) => (
          <div
            key={k}
            className={`p-5 ${i !== 0 ? "border-l border-paper/15" : ""} ${i === 3 ? "md:border-l" : ""}`}
          >
            <div className="mono-label !text-[9px] text-paper/45">{k}</div>
            <div className="font-[Space_Grotesk] text-[15px] font-semibold text-paper mt-2">{v}</div>
          </div>
        ))}
      </div>

      {/* ───── GIANT WORDMARK ───── */}
      <div className="relative overflow-hidden">
        <div
          className="h-display leading-[0.85] tracking-tighter select-none pointer-events-none whitespace-nowrap pl-4 md:pl-8 -mb-[3vw]"
          style={{
            fontSize: "clamp(80px, 22vw, 320px)",
            color: "rgba(247,247,245,0.07)",
          }}
        >
          ZEVO<span style={{ color: "rgba(255,140,105,0.18)" }}>/</span>WORKS
        </div>

        {/* Tagline cut into the wordmark */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-right">
          <div className="mono-label text-paper/40">/ tagline</div>
          <div className="font-[Space_Grotesk] text-paper/85 text-base md:text-xl max-w-[280px] mt-2">
            zero effort.<br />
            <span className="text-mint">maximum output.</span>
          </div>
        </div>
      </div>

      {/* ───── BOTTOM RAIL ───── */}
      <div className="border-t border-paper/15 px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 mono-label text-paper/50">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-paper/60" />
          {year} ZEVO_WORKS · <a href="https://www.gangadharaks.in/" className="hover:text-paper" target="_blank" rel="noopener noreferrer">BY GANGADHAR K.S.</a>
        </span>
        <div className="flex items-center gap-3">
          <span>Built in Bengaluru, IN</span>
          <span>·</span>
          <a
            href="mailto:info@zevo-works.in"
            className="hover:text-paper"
          >
            info@zevo-works.in
          </a>
          <span>·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-mint animate-[blink_1.6s_steps(2)_infinite]" />
            live
          </span>
        </div>
      </div>

      {/* ───── TEAR-LINE end ───── */}
      <div className="border-t-2 border-dashed border-paper/20 px-4 md:px-8 py-2 flex items-center justify-between mono-label !text-[9px] text-paper/35">
        <span>━━ end of document ━━</span>
        <span>SEAL · ZW—1.0</span>
        <span>P.09 / P.09</span>
      </div>
    </footer>
  );
}
