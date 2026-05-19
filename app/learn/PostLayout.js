import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RELATED = {
  "ai-resume-builder-india": [
    { slug: "tailor-resume-to-job-description", title: "How to tailor your résumé to a JD (with AI, in 5 min)" },
    { slug: "ats-friendly-resume-tips", title: "ATS-friendly résumé in 2026 — what really beats the filter" },
  ],
  "tailor-resume-to-job-description": [
    { slug: "ai-resume-builder-india", title: "Best free AI résumé builder for India (honest 2026)" },
    { slug: "ats-friendly-resume-tips", title: "ATS-friendly résumé in 2026 — what really beats the filter" },
  ],
  "ats-friendly-resume-tips": [
    { slug: "ai-resume-builder-india", title: "Best free AI résumé builder for India (honest 2026)" },
    { slug: "tailor-resume-to-job-description", title: "How to tailor your résumé to a JD (with AI, in 5 min)" },
  ],
};

const SLUG_META = {
  "ai-resume-builder-india": { call: "LIB.01 · AI", accent: "coral", chip: "FIELD GUIDE" },
  "tailor-resume-to-job-description": { call: "LIB.02 · JD", accent: "mint", chip: "HOW-TO" },
  "ats-friendly-resume-tips": { call: "LIB.03 · ATS", accent: "gold", chip: "FIELD GUIDE" },
};

const ACCENT_BAR = {
  coral: "border-l-coral",
  mint: "border-l-mint",
  gold: "border-l-gold",
};
const ACCENT_DOT = { coral: "bg-coral", mint: "bg-mint", gold: "bg-gold" };

export default function PostLayout({
  title,
  intro,
  published,
  updated,
  slug,
  readingTime = "6 min",
  children,
}) {
  const meta = SLUG_META[slug] ?? { call: "LIB.00", accent: "mint", chip: "ARTICLE" };
  const related = RELATED[slug] ?? [];

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14 bg-paper">
        {/* ── Coord strip ── */}
        <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
          <span>{meta.call.replace(" · ", "/")}</span>
          <span className="hidden md:inline">FIELD_GUIDE · /learn</span>
          <span>{readingTime.toUpperCase()} READ</span>
        </div>

        {/* ── Heading sheet ── */}
        <section className={`grid grid-cols-1 lg:grid-cols-12 border-b hairline border-l-2 ${ACCENT_BAR[meta.accent]} bg-mosaic-faint`}>
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline">
            <Link
              href="/learn"
              className="mono-label inline-flex items-center gap-2 text-grid/55 hover:text-forest mb-6"
            >
              <span>←</span> CATALOG / index
            </Link>

            <div className="flex items-center justify-between mb-5">
              <span className={`mono-label text-${meta.accent === "coral" ? "coral" : "forest"}`}>{meta.call}</span>
              <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest inline-flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 ${ACCENT_DOT[meta.accent]}`} />
                {meta.chip}
              </span>
            </div>

            <h1 className="h-display text-4xl md:text-6xl text-forest leading-[1.02] max-w-3xl">
              {title}
            </h1>

            {intro && (
              <div className="mt-6 flex gap-4 max-w-2xl">
                <div className="w-px bg-forest/40 shrink-0" />
                <p className="text-[15px] md:text-[16px] text-grid leading-[1.7]">
                  {intro}
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3 mono-label text-grid/55">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-forest" />
                By G.K.S. · ZEVO WORKS
              </span>
              <span>·</span>
              <time dateTime={published}>{formatDate(published)}</time>
              {updated && updated !== published && (
                <>
                  <span>·</span>
                  <span>UPDATED {formatDate(updated)}</span>
                </>
              )}
            </div>
          </div>

          {/* Article metadata sheet */}
          <aside className="lg:col-span-4 p-8 md:p-10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="mono-label text-grid/55">§ METADATA</span>
              <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest">
                IN_PRINT
              </span>
            </div>
            <dl className="border hairline-strong bg-paper">
              {[
                ["DOCID", slug.toUpperCase().slice(0, 18)],
                ["READ", readingTime],
                ["PUBLISHED", (published ?? "").replaceAll("-", ".")],
                ["LANG", "en-IN"],
                ["LICENCE", "CC BY · 4.0"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[100px_1fr] border-b hairline last:border-b-0"
                >
                  <dt className="px-3 py-2 mono-label text-grid/55 border-r hairline">{k}</dt>
                  <dd className="px-3 py-2 mono-label !text-[11px] text-forest">{v}</dd>
                </div>
              ))}
            </dl>

            <a
              href="https://my-resume.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center justify-between gap-2 px-4 py-2.5 bg-forest text-paper hover:bg-forest-deep btn-snap"
            >
              <span>LAUNCH /my-resume</span>
              <span>→</span>
            </a>
          </aside>
        </section>

        {/* ── Article body ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
          {/* Left rail — sticky meta + progress */}
          <aside className="hidden lg:block lg:border-r hairline">
            <div className="lg:sticky lg:top-14 p-6 md:p-8">
              <div className="mono-label text-grid/55 mb-3">§ RAIL</div>
              <div className="border hairline">
                <div className="p-3 border-b hairline">
                  <div className="mono-label text-grid/55 mb-1.5">CALL_NO</div>
                  <div className="mono-label !text-[11px] text-forest">{meta.call}</div>
                </div>
                <div className="p-3 border-b hairline">
                  <div className="mono-label text-grid/55 mb-1.5">SHELF</div>
                  <div className="mono-label !text-[11px] text-forest">/learn / {slug}</div>
                </div>
                <div className="p-3">
                  <div className="mono-label text-grid/55 mb-1.5">CONTENTS</div>
                  <ol className="mono-label !text-[10px] !tracking-normal text-grid space-y-1.5">
                    <li>· intro</li>
                    <li>· main argument</li>
                    <li>· honest examples</li>
                    <li>· faq</li>
                    <li>· related ↓</li>
                  </ol>
                </div>
              </div>

              <Link
                href="/learn"
                className="mt-5 mono-label inline-flex items-center gap-2 text-grid/55 hover:text-forest"
              >
                ← back to catalog
              </Link>
            </div>
          </aside>

          {/* Body */}
          <article className="relative">
            <div className="max-w-3xl px-4 md:px-10 lg:px-14 py-10 md:py-14 relative">
              {/* spine label */}
              <div className="absolute left-1 top-12 hidden lg:block mono-label text-grid/40 [writing-mode:vertical-rl] rotate-180">
                {meta.call} · my-resume
              </div>

              <div className="prose-zw lg:pl-8 text-[16px] md:text-[17px] text-grid leading-[1.75] space-y-5">
                {children}
              </div>

              {/* Tear-off CTA ticket */}
              <div className="mt-12 lg:ml-8 relative border hairline-strong corner-markers bg-mint/15 p-6 md:p-8">
                <span className="cm-tr" />
                <span className="cm-br" />
                <div className="flex items-center justify-between mb-3">
                  <span className="mono-label text-forest">// TRY_IT · /my-resume</span>
                  <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest text-forest">FREE</span>
                </div>
                <h3 className="h-display text-2xl md:text-3xl text-forest">
                  Build a JD-tailored résumé in 5 minutes.
                </h3>
                <p className="mt-3 text-[14px] text-grid leading-relaxed max-w-md">
                  No credit card. Paste any JD, let the pipeline restructure
                  your résumé. Free forever.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://my-resume.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-label inline-flex items-center gap-2 px-4 py-2.5 bg-forest text-paper hover:bg-forest-deep btn-snap"
                  >
                    LAUNCH_APP <span>→</span>
                  </a>
                  <Link
                    href="/#how-it-works"
                    className="mono-label inline-flex items-center gap-2 px-4 py-2.5 border border-forest text-forest hover:bg-mint/30 btn-snap"
                  >
                    SEE_PIPELINE <span>↗</span>
                  </Link>
                </div>

                {/* tear edge */}
                <div className="absolute -bottom-px left-4 right-4 border-t-2 border-dashed border-forest/40" />
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-paper px-2 mono-label !text-[9px] text-grid/55">
                  ━━ tear here ━━
                </div>
              </div>

              {/* Related / footnote section */}
              {related.length > 0 && (
                <div className="mt-14 lg:ml-8">
                  <div className="mono-label text-grid/55 mb-4">§ SEE_ALSO</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid/20">
                    {related.map((r) => {
                      const m = SLUG_META[r.slug] ?? { call: "LIB.??", accent: "mint" };
                      return (
                        <Link
                          key={r.slug}
                          href={`/learn/${r.slug}`}
                          className={`bg-paper p-5 border-l-2 ${ACCENT_BAR[m.accent]} hover:bg-mint/10 group`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <span className="mono-label text-forest">{m.call}</span>
                            <span className="mono-label text-grid/45">→</span>
                          </div>
                          <div className="font-[Space_Grotesk] text-[15px] font-semibold text-forest leading-snug">
                            {r.title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Article footer rail */}
              <div className="mt-14 lg:ml-8 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-3 mono-label text-grid/55">
                <Link href="/learn" className="hover:text-forest">
                  ← catalog
                </Link>
                <span>END_OF_ARTICLE · ↑ top</span>
                <Link href="/contact" className="hover:text-forest">
                  question? /contact →
                </Link>
              </div>
            </div>
          </article>
        </section>

        {/* ── Signature block ── */}
        <div className="grid grid-cols-2 md:grid-cols-6 border-t hairline">
          {[
            ["WRITTEN_BY", "G.K.S."],
            ["REVIEWED", "G.K.S."],
            ["DATE", (published ?? "").replaceAll("-", ".")],
            ["LANG", "en-IN"],
            ["REVISION", updated ? "v1.1" : "v1.0"],
            ["DOCID", meta.call.replace(/\s+/g, "")],
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

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
