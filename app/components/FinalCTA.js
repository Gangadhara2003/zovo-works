"use client";

import { useEffect, useState } from "react";

const APP_URL = "https://my-resume.in";

const CHECKLIST = [
  ["AUTH", "anonymous · ok"],
  ["RUNTIME", "edge · warm"],
  ["MODEL", "claude · ready"],
  ["FORMAT", "PDF/A · ok"],
  ["COST", "₹0 · authorised"],
];

export default function FinalCTA() {
  const [t, setT] = useState(0);

  // tick a fake telemetry clock for the console feel
  useEffect(() => {
    const id = setInterval(() => setT((x) => (x + 1) % 1000), 80);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="cta" className="relative bg-mosaic-faint border-b hairline">
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>07 / LAUNCH</span>
        <span className="hidden md:inline">CONSOLE · v1.0 · my-resume</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
          ALL_GREEN
        </span>
      </div>

      {/* ───── Headline ───── */}
      <div className="px-4 md:px-8 pt-16 md:pt-24 pb-10 text-center">
        <div className="mono-label text-grid/55 mb-5 inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-coral" />
          STEP 03 / 03 · GO
        </div>
        <h2 className="h-display text-5xl md:text-7xl text-forest max-w-4xl mx-auto">
          Stop tweaking margins.<br />
          <span className="bg-mint/55 px-2">Press launch.</span>
        </h2>
        <p className="mt-6 text-[15px] text-grid leading-relaxed max-w-xl mx-auto">
          The console is warm. Telemetry is green. One click and a tailored,
          ATS-safe résumé lands in your downloads in under two seconds.
        </p>
      </div>

      {/* ───── LAUNCH CONSOLE ───── */}
      <div className="px-4 md:px-8 pb-20">
        <div className="relative max-w-[860px] mx-auto bg-paper border hairline-strong corner-markers">
          <span className="cm-tr" />
          <span className="cm-br" />

          {/* Console header */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center border-b hairline-strong">
            <div className="px-5 py-3 mono-label text-forest inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
              LAUNCH_CONSOLE · v1.0
            </div>
            <div className="hidden md:block w-px self-stretch bg-grid/20" />
            <div className="px-5 py-3 mono-label text-grid/55 flex items-center justify-end gap-4 border-t md:border-t-0 hairline">
              <span>T+{String(t).padStart(3, "0")}ms</span>
              <span>·</span>
              <span>2026.05.15</span>
            </div>
          </div>

          {/* Body — split: checklist + manifest */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
            {/* LEFT — pre-flight checklist */}
            <div className="p-6 md:p-8 lg:border-r hairline">
              <div className="flex items-center justify-between mb-4">
                <span className="mono-label text-grid/55">§ PRE-FLIGHT</span>
                <span className="mono-label text-mint inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-mint" /> 5 / 5 PASS
                </span>
              </div>

              <ul className="border hairline">
                {CHECKLIST.map(([k, v], i) => (
                  <li
                    key={k}
                    className="grid grid-cols-[28px_90px_1fr_24px] items-center px-3 py-2.5 border-b hairline last:border-b-0"
                  >
                    <span className="mono-label !text-[9px] text-grid/45">
                      0{i + 1}
                    </span>
                    <span className="mono-label text-forest">{k}</span>
                    <span className="mono-label !text-[10px] text-grid">{v}</span>
                    <span className="mono-label text-mint text-right">✓</span>
                  </li>
                ))}
              </ul>

              {/* Mini terminal hint */}
              <div className="mt-5 border hairline-strong">
                <div className="px-3 py-1.5 border-b hairline flex items-center justify-between mono-label text-grid/55">
                  <span>$ shell</span>
                  <span className="text-mint">ready</span>
                </div>
                <pre className="px-3 py-2 mono-label !text-[10px] !tracking-normal leading-[1.7] text-grid">
{`$ open my-resume.in
> paste JD ............. _
> press launch ......... ⏎`}
                </pre>
              </div>
            </div>

            {/* RIGHT — launch manifest + button */}
            <div className="p-6 md:p-8 bg-mosaic-faint relative">
              {/* Manifest table */}
              <div className="flex items-center justify-between mb-4">
                <span className="mono-label text-grid/55">§ MANIFEST</span>
                <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest">
                  AUTHORISED
                </span>
              </div>

              <dl className="border hairline-strong bg-paper">
                {[
                  ["PASSENGER", "you · anon"],
                  ["DESTINATION", "/my-resume"],
                  ["DEPARTS", "manual grind"],
                  ["ARRIVES", "1.8s · PDF"],
                  ["COST", "₹0 · always"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[120px_1fr] border-b hairline last:border-b-0">
                    <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                    <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
                  </div>
                ))}
              </dl>

              {/* Big launch button */}
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 block bg-forest text-paper border border-forest hover:bg-forest-deep btn-snap relative overflow-hidden"
              >
                {/* moving tick strip on the side */}
                <div className="absolute inset-y-0 left-0 w-1.5 bg-mint" />
                <div className="absolute inset-y-0 right-0 w-1.5 flex flex-col">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <span
                      key={i}
                      className="flex-1 border-b border-paper/20 last:border-b-0"
                      style={{
                        background:
                          (i + Math.floor(t / 80)) % 6 === 0 ? "#9EFFBF" : "transparent",
                      }}
                    />
                  ))}
                </div>

                <div className="px-6 py-5 flex items-center justify-between">
                  <div>
                    <div className="mono-label text-mint">▶ EXECUTE</div>
                    <div className="h-display text-2xl md:text-3xl text-paper mt-1">
                      Launch /my-resume
                    </div>
                  </div>
                  <span className="h-display text-3xl md:text-4xl text-paper group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

                <div className="px-6 py-2 border-t border-paper/20 flex items-center justify-between mono-label !text-[10px] text-paper/70">
                  <span>opens in new tab</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-mint animate-[blink_0.9s_steps(2)_infinite]" />
                    ready
                  </span>
                </div>
              </a>

              {/* Secondary link */}
              <div className="mt-3 flex items-center justify-between mono-label text-grid/55">
                <a href="#how-it-works" className="hover:text-forest underline-offset-4 hover:underline">
                  ← see /pipeline first
                </a>
                <span>esc to abort</span>
              </div>
            </div>
          </div>

          {/* Console footer — stamps */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t hairline-strong">
            {[
              ["TIME_SAVED", "≈ 4h/job"],
              ["ATS_SCORE", "0.94"],
              ["FORMAT", "PDF/A"],
              ["BILL", "₹0"],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`p-4 ${i !== 0 ? "border-l hairline" : ""}`}
              >
                <div className="mono-label !text-[9px] text-grid/55">{k}</div>
                <div className="h-display text-xl md:text-2xl text-forest mt-1">{v}</div>
              </div>
            ))}
          </div>

          {/* Tear-line perforation footer */}
          <div className="border-t-2 border-dashed hairline-strong px-5 py-3 flex items-center justify-between mono-label text-grid/55">
            <span>━━ tear here ━━</span>
            <span>NO_CC · NO_SPAM · NO_EMAIL_REQUIRED</span>
            <span className="hidden md:inline">SEAL · ZW—1.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
