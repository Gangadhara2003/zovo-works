"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function LegalLayout({
  docId,
  kicker,
  title,
  highlight,
  effective,
  updated,
  sections,
  pairLabel,
  pairHref,
  children,
}) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observers = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(s.id);
          });
        },
        { rootMargin: "-30% 0px -55% 0px" }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <>
      <Navbar />
      <main className="bg-paper border-b hairline">
        {/* Coord strip */}
        <div className="border-b hairline px-4 md:px-8 py-2 mt-14 flex justify-between mono-label text-grid/60">
          <span>{docId}</span>
          <span className="hidden md:inline">{kicker} · v1.0</span>
          <span>LEGAL</span>
        </div>

        {/* Heading + meta sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline bg-mosaic-faint">
            <div className="mono-label text-forest mb-4">/{kicker.toLowerCase().replace(/\s+/g, "-")}</div>
            <h1 className="h-display text-5xl md:text-7xl text-forest">
              {title}<br />
              <span className="bg-mint/55 px-2">{highlight}</span>
            </h1>
            <p className="mt-6 text-[14px] text-grid leading-relaxed max-w-xl">
              A short, human-readable document describing how we operate.
              Anything ambiguous? Email{" "}
              <a
                href="mailto:info@zevo-works.in"
                className="text-forest underline underline-offset-4 decoration-forest/60"
              >
                info@zevo-works.in
              </a>{" "}
              — we'll clarify.
            </p>
          </div>

          {/* Meta sheet */}
          <div className="lg:col-span-4 p-8 md:p-10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="mono-label text-grid/55">§ METADATA</span>
              <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest">
                IN_FORCE
              </span>
            </div>
            <dl className="border hairline-strong">
              {[
                ["DOCUMENT", docId],
                ["EFFECTIVE", effective],
                ["UPDATED", updated],
                ["OPERATOR", "Zevo Works · BLR, IN"],
                ["JURISDICTION", "India"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[110px_1fr] border-b hairline last:border-b-0"
                >
                  <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                  <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/"
              className="mono-label inline-flex items-center justify-between gap-3 px-4 py-2.5 border hairline-strong text-forest hover:bg-mint/15 btn-snap"
            >
              <span>← RETURN TO INDEX</span>
              <span>↑</span>
            </Link>
          </div>
        </div>

        {/* Body: TOC + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr]">
          {/* TOC */}
          <aside className="lg:border-r hairline">
            <div className="px-6 md:px-8 py-4 border-b hairline flex items-center justify-between bg-mosaic-faint">
              <span className="mono-label text-forest">§ CONTENTS</span>
              <span className="mono-label text-grid/55">CH. 01—{String(sections.length).padStart(2, "0")}</span>
            </div>
            <nav className="lg:sticky lg:top-14">
              <ul>
                {sections.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`group block px-6 md:px-8 py-3 border-b hairline btn-snap ${
                          isActive ? "bg-paper" : "bg-paper hover:bg-mint/10"
                        }`}
                      >
                        <div className="flex items-baseline gap-3">
                          <span className={`mono-label shrink-0 ${isActive ? "text-forest" : "text-grid/55"}`}>
                            §{s.n}
                          </span>
                          <span className="flex-1 min-w-0 flex items-baseline overflow-hidden">
                            <span
                              className={`font-[Space_Grotesk] text-[13.5px] font-medium truncate ${
                                isActive ? "text-forest" : "text-grid"
                              }`}
                            >
                              {s.label}
                            </span>
                            <span className="flex-1 mx-2 border-b border-dotted hairline-strong opacity-50 translate-y-[-3px]" />
                            <span
                              className={`mono-label shrink-0 ${
                                isActive ? "text-forest" : "text-grid/55"
                              }`}
                            >
                              P.{s.n}
                            </span>
                          </span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 bg-forest shrink-0" />
                          )}
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 md:px-8 py-3 mono-label text-grid/55 flex justify-between">
                <span>END_OF_INDEX</span>
                <span>↑ TOP</span>
              </div>
            </nav>
          </aside>

          {/* Article */}
          <article className="relative bg-paper">
            <div className="p-6 md:p-10 lg:p-14 max-w-3xl relative">
              {/* margin spine */}
              <div className="absolute left-1 top-10 hidden lg:block mono-label text-grid/40 [writing-mode:vertical-rl] rotate-180">
                {docId} · my-resume
              </div>
              <div className="lg:pl-6">{children}</div>
            </div>

            {/* doc rail bottom */}
            <div className="border-t hairline px-6 md:px-10 lg:px-14 py-4 flex flex-wrap items-center justify-between gap-3 mono-label text-grid/55">
              <span>{docId} · END_OF_DOCUMENT</span>
              <Link href={pairHref} className="text-forest hover:underline underline-offset-4">
                → {pairLabel}
              </Link>
              <Link href="/" className="hover:text-forest">
                ↑ HOME
              </Link>
            </div>
          </article>
        </div>

        {/* Signature stamp */}
        <div className="grid grid-cols-2 md:grid-cols-6 border-t hairline">
          {[
            ["DRAWN_BY", "G.K.S."],
            ["CHECKED", "G.K.S."],
            ["DATE", updated],
            ["SCALE", "1 : 1"],
            ["REVISION", "v1.0"],
            ["SHEET", `${docId} / 01`],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`p-4 ${i !== 0 ? "border-l hairline" : ""} ${i === 3 ? "md:border-l" : ""}`}
            >
              <div className="mono-label !text-[9px] text-grid/55">{k}</div>
              <div className="font-[Space_Grotesk] text-[14px] font-semibold text-forest mt-1.5">
                {v}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ───── Typography helpers used inside <LegalLayout> ───── */

export function H({ id, n, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 mt-16 first:mt-0 mb-5 flex items-baseline gap-4 border-b hairline pb-3"
    >
      <span className="mono-label text-forest">§{n}</span>
      <span className="h-display text-2xl md:text-3xl text-forest flex-1">{children}</span>
      <span className="mono-label !text-[10px] text-grid/45">P.{n}</span>
    </h2>
  );
}

export function P({ children }) {
  return (
    <p className="text-[15px] text-grid leading-[1.75] mb-4">{children}</p>
  );
}

export function Quote({ children }) {
  return (
    <div className="flex gap-4 my-5">
      <div className="w-px bg-forest/40 shrink-0" />
      <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.02em] leading-[1.7] text-grid uppercase">
        {children}
      </p>
    </div>
  );
}

export function UL({ children }) {
  return <ul className="my-4 border hairline">{children}</ul>;
}

export function Li({ children }) {
  return (
    <li className="grid grid-cols-[24px_1fr] gap-3 px-4 py-3 border-b hairline last:border-b-0">
      <span className="mono-label text-forest pt-1">▸</span>
      <span className="text-[14.5px] text-grid leading-[1.65]">{children}</span>
    </li>
  );
}

export function SubLabel({ children }) {
  return (
    <div className="mt-8 mb-3 inline-flex items-center gap-2 px-2 py-1 border border-forest/30 mono-label text-forest">
      <span className="w-1.5 h-1.5 bg-forest" />
      {children}
    </div>
  );
}
