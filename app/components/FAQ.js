"use client";

import { useState } from "react";
import { FAQS } from "./faq-data";

const TAG_COLOR = {
  coral: "border-coral text-coral",
  mint: "border-forest text-forest bg-mint/40",
  gold: "border-gold text-forest bg-gold/30",
};
const DOT_COLOR = {
  coral: "bg-coral",
  mint: "bg-mint",
  gold: "bg-gold",
};

export default function FAQ() {
  const [activeId, setActiveId] = useState(FAQS[0].id);
  const active = FAQS.find((f) => f.id === activeId) ?? FAQS[0];

  return (
    <section id="faq" className="bg-paper border-b hairline">
      {/* Section label */}
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>06 / DOCS</span>
        <span className="hidden md:inline">MANUAL · v1.0 · 2026.05</span>
        <span>N = {FAQS.length}</span>
      </div>

      {/* ───── Heading ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
        <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
          <div className="mono-label text-forest mb-4">/manual</div>
          <h2 className="h-display text-5xl md:text-7xl text-forest">
            Read the<br />
            <span className="bg-mint/55 px-2">fine print.</span>
          </h2>
        </div>
        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between gap-6">
          <p className="text-[14px] text-grid leading-relaxed">
            Common questions, kept short. Click any chapter on the left to
            flip to it. Anything missing? Email{" "}
            <a href="mailto:info@zevo-works.in" className="text-forest underline underline-offset-4 decoration-forest/60">
              info@zevo-works.in
            </a>
            .
          </p>
          <div className="mono-label text-grid/55 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-forest" />
            UPDATED 2026.05.15
          </div>
        </div>
      </div>

      {/* ───── Manual: TOC + Open page ───── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr]">
        {/* ── Left: Table of Contents ── */}
        <aside className="lg:border-r hairline">
          <div className="px-6 md:px-8 py-4 border-b hairline flex items-center justify-between bg-mosaic-faint">
            <span className="mono-label text-forest">§ TABLE OF CONTENTS</span>
            <span className="mono-label text-grid/55">CH. 01—06</span>
          </div>

          <ul>
            {FAQS.map((f) => {
              const isActive = f.id === activeId;
              return (
                <li key={f.id}>
                  <button
                    onClick={() => setActiveId(f.id)}
                    className={`group w-full text-left px-6 md:px-8 py-4 border-b hairline btn-snap transition-colors duration-150 ${
                      isActive
                        ? "bg-paper"
                        : "bg-paper hover:bg-mint/10"
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className={`mono-label shrink-0 ${isActive ? "text-forest" : "text-grid/55"}`}>
                        {f.id}
                      </span>

                      {/* Question with dotted leader */}
                      <span className="flex-1 min-w-0 flex items-baseline overflow-hidden">
                        <span
                          className={`font-[Space_Grotesk] font-semibold text-[15px] truncate ${
                            isActive ? "text-forest" : "text-grid"
                          }`}
                        >
                          {f.q}
                        </span>
                        <span className="flex-1 mx-2 border-b border-dotted hairline-strong opacity-50 translate-y-[-3px]" />
                        <span className={`mono-label shrink-0 ${isActive ? "text-forest" : "text-grid/55"}`}>
                          {f.page}
                        </span>
                      </span>

                      {/* arrow */}
                      <span
                        className={`mono-label shrink-0 ${
                          isActive ? "text-forest" : "text-grid/35 group-hover:text-forest"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Active row sub-indicator */}
                    {isActive && (
                      <div className="mt-2 pl-[40px] flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 ${DOT_COLOR[f.accent]}`} />
                        <span className="mono-label !text-[9px] text-grid/55">{f.tag} · CURRENTLY OPEN</span>
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Manual footer */}
          <div className="px-6 md:px-8 py-4 mono-label text-grid/55 flex items-center justify-between">
            <span>END_OF_INDEX</span>
            <span>P.07 →</span>
          </div>
        </aside>

        {/* ── Right: Open page ── */}
        <article className="bg-mosaic-faint">
          {/* Page chrome */}
          <div className="px-6 md:px-10 py-3 border-b hairline flex items-center justify-between bg-paper">
            <div className="flex items-center gap-3 mono-label text-grid/55">
              <span>§ {active.id}</span>
              <span className="text-grid/30">/</span>
              <span>{active.page}</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`mono-label !text-[10px] px-2 py-0.5 border ${TAG_COLOR[active.accent]}`}
              >
                {active.tag}
              </span>
            </div>
          </div>

          {/* Open page body */}
          <div className="px-6 md:px-10 py-10 md:py-12 relative">
            {/* Margin column with question id */}
            <div className="absolute left-2 top-10 hidden md:block mono-label text-grid/40 [writing-mode:vertical-rl] rotate-180">
              {active.id} · my-resume
            </div>

            <div className="md:pl-8 max-w-2xl">
              {/* Question */}
              <h3 className="h-display text-3xl md:text-4xl text-forest">
                {active.q}
              </h3>

              {/* Quote-style answer with left rule */}
              <div className="mt-6 flex gap-5">
                <div className="w-px bg-forest/45 shrink-0" />
                <p className="text-[15px] md:text-[16px] leading-[1.7] text-grid">
                  {active.a}
                </p>
              </div>

              {/* Footnote table */}
              <dl className="mt-10 border hairline-strong max-w-md">
                {[
                  ["TAG", active.tag],
                  ["UPDATED", "2026.05.15"],
                  ["MODULE", "/my-resume"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[110px_1fr] border-b hairline last:border-b-0">
                    <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                    <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
                  </div>
                ))}
              </dl>

              {/* See also */}
              {active.seeAlso?.length > 0 && (
                <div className="mt-8">
                  <div className="mono-label text-grid/55 mb-3">SEE_ALSO</div>
                  <div className="flex flex-wrap gap-2">
                    {active.seeAlso.map((sid) => {
                      const ref = FAQS.find((f) => f.id === sid);
                      if (!ref) return null;
                      return (
                        <button
                          key={sid}
                          onClick={() => setActiveId(sid)}
                          className="group inline-flex items-baseline gap-2 px-3 py-2 border hairline-strong bg-paper btn-snap hover:bg-mint/20"
                        >
                          <span className="mono-label text-forest">{ref.id}</span>
                          <span className="font-[Space_Grotesk] text-[13px] text-grid group-hover:text-forest">
                            {ref.q}
                          </span>
                          <span className="mono-label text-grid/45 group-hover:text-forest">→</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Page footer */}
          <div className="px-6 md:px-10 py-3 border-t hairline flex items-center justify-between mono-label text-grid/55 bg-paper">
            <span>my-resume · MANUAL · v1.0</span>
            <span>{active.page} / P.06</span>
          </div>
        </article>
      </div>
    </section>
  );
}
