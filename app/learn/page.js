import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SITE_URL = "https://zevo-works.in";

export const metadata = {
  title: "Resume & job search guides — Zevo Works /learn",
  description:
    "Practical, India-focused guides on AI resume builders, ATS-friendly resumes, and tailoring a CV to any job description. Written by the team behind my-resume.",
  keywords: [
    "AI resume builder India guide",
    "ATS-friendly resume tips",
    "tailor resume to job description",
    "JD resume builder",
    "LaTeX resume",
  ],
  alternates: { canonical: "/learn" },
  openGraph: {
    title: "Zevo Works · Learn",
    description:
      "Resume guides for Indian job seekers — AI tools, ATS optimisation, JD tailoring, the lot.",
    url: `${SITE_URL}/learn`,
    type: "website",
  },
};

export const POSTS = [
  {
    slug: "ai-resume-builder-india",
    callNo: "LIB.01 · AI",
    accent: "coral",
    chip: "FEATURED",
    title: "Best free AI resume builder for India (honest 2026 comparison)",
    excerpt:
      "An honest look at AI résumé tools available to Indian job seekers — what works, what's a paywall, and where my-resume fits.",
    published: "2026.05.19",
    keywords: ["AI-resume-builder-India", "free-AI-resume", "Indian-job-market"],
    readingTime: "8 min",
    words: "≈ 2,140",
  },
  {
    slug: "tailor-resume-to-job-description",
    callNo: "LIB.02 · JD",
    accent: "mint",
    chip: "HOW-TO",
    title: "How to tailor your résumé to a job description (with AI, in 5 minutes)",
    excerpt:
      "The fastest, most honest way to match your résumé to a JD without lying — what to change, what to leave alone, and which keywords actually matter.",
    published: "2026.05.19",
    keywords: ["tailor-resume-to-job-description", "JD-matched-resume", "keyword-optimisation"],
    readingTime: "7 min",
    words: "≈ 1,820",
  },
  {
    slug: "ats-friendly-resume-tips",
    callNo: "LIB.03 · ATS",
    accent: "gold",
    chip: "FIELD GUIDE",
    title: "ATS-friendly résumé in 2026 — what really beats the filter",
    excerpt:
      "Most ATS advice online is 10 years out of date. Here's what modern parsers actually do, and the 6 rules that get you past the screen.",
    published: "2026.05.19",
    keywords: ["ATS-friendly-resume", "ATS-resume-India", "beat-ATS-filter"],
    readingTime: "6 min",
    words: "≈ 1,510",
  },
];

const ACCENT_DOT = { coral: "bg-coral", mint: "bg-mint", gold: "bg-gold" };
const ACCENT_BAR = {
  coral: "border-l-coral",
  mint: "border-l-mint",
  gold: "border-l-gold",
};

export default function LearnIndex() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-14 bg-paper">
        {/* ───── Coord strip ───── */}
        <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
          <span>08 / LEARN</span>
          <span className="hidden md:inline">FIELD_GUIDES · CATALOG · INDIA</span>
          <span>N = {POSTS.length}</span>
        </div>

        {/* ───── Heading + issue sheet ───── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-b hairline">
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-16 lg:border-r hairline bg-mosaic-faint">
            <div className="mono-label text-forest mb-4">/learn</div>
            <h1 className="h-display text-5xl md:text-7xl text-forest leading-[0.95]">
              Field guides for<br />
              <span className="bg-mint/55 px-2">résumé-builders.</span>
            </h1>
            <p className="mt-6 text-[15px] text-grid leading-relaxed max-w-2xl">
              India-focused, no fluff. How AI résumé tools really work, what
              ATS scanners actually check for, and how to tailor your CV to a
              JD without dishonesty. Read in order or pull any volume off the
              shelf.
            </p>

            {/* Tag rail */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["#AI", "#ATS", "#JD-matching", "#LaTeX", "#India"].map((t) => (
                <span
                  key={t}
                  className="mono-label !text-[10px] px-2 py-1 border hairline-strong text-grid/75 bg-paper"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Issue sheet */}
          <div className="lg:col-span-4 p-8 md:p-10 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="mono-label text-grid/55">§ ISSUE</span>
              <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-forest" /> IN_PRINT
              </span>
            </div>
            <dl className="border hairline-strong">
              {[
                ["VOLUME", "v1"],
                ["ISSUE", "2026 · 05"],
                ["EDITOR", "Ganagdhara K.S"],
                ["READERS", "growing"],
                ["LICENCE", "CC BY · 4.0"],
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

            {/* Stack chart of read times */}
            <div className="border hairline-strong p-3">
              <div className="mono-label text-grid/55 mb-2">FIG · READ_TIME</div>
              <div className="space-y-1.5">
                {POSTS.map((p) => (
                  <div key={p.slug} className="flex items-center gap-2">
                    <span className="mono-label !text-[9px] text-grid/55 w-8">{p.callNo.split(" · ")[0].replace("LIB.", "")}</span>
                    <div className="flex-1 h-2 bg-grid/10 relative">
                      <div
                        className={`absolute inset-y-0 left-0 ${ACCENT_DOT[p.accent]}`}
                        style={{ width: `${parseInt(p.readingTime, 10) * 9}%`, opacity: 0.85 }}
                      />
                    </div>
                    <span className="mono-label !text-[9px] text-forest w-10 text-right">{p.readingTime}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── FEATURED ARTICLE ───── */}
        <FeaturedCard post={featured} />

        {/* ───── Sub-header strip ───── */}
        <div className="border-b hairline px-4 md:px-8 py-3 flex flex-wrap items-center gap-4 bg-mosaic-faint">
          <span className="mono-label text-forest">§ ON_SHELF · 02 more</span>
          <span className="hidden md:inline-flex items-center gap-2 mono-label text-grid/55">
            <span className="w-1 h-1 bg-grid/55" />
            SORTED · MOST_RECENT
          </span>
          <span className="ml-auto mono-label text-grid/55">
            scroll for ARCHIVE ↓
          </span>
        </div>

        {/* ───── Satellite articles (2-col) ───── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-grid/20 border-b hairline">
          {rest.map((p, i) => (
            <CatalogCard key={p.slug} post={p} idx={i + 2} />
          ))}
        </section>

        {/* ───── Archive / coming-soon footer ───── */}
        <section className="px-4 md:px-8 py-10 md:py-14 border-b hairline">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <div className="mono-label text-forest mb-2">/archive</div>
              <h2 className="h-display text-3xl md:text-4xl text-forest">
                More volumes — drafting.
              </h2>
            </div>
            <Link
              href="mailto:info@zevo-works.in?subject=Topic%20suggestion"
              className="mono-label inline-flex items-center gap-2 px-3.5 py-2 border border-forest text-forest hover:bg-mint/15 btn-snap"
            >
              SUGGEST_A_TOPIC →
            </Link>
          </div>

          {/* Empty placeholder shelf */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-grid/20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-paper aspect-[3/4] flex flex-col items-center justify-center mono-label text-grid/40"
              >
                <span className="!text-[9px]">LIB.0{i + 4}</span>
                <span className="!text-[8px] mt-1 text-grid/30">empty</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ───── Featured: large hero-style card ───── */
function FeaturedCard({ post }) {
  return (
    <section className="border-b hairline grid grid-cols-1 lg:grid-cols-[1.4fr_1.05fr]">
      {/* Left — copy */}
      <Link
        href={`/learn/${post.slug}`}
        className={`group block p-8 md:p-12 lg:p-16 lg:border-r hairline border-l-2 ${ACCENT_BAR[post.accent]} bg-paper relative`}
      >
        <div className="flex items-center justify-between mb-6">
          <span className="mono-label text-coral">{post.callNo}</span>
          <span className="mono-label !text-[10px] px-2 py-0.5 border border-forest bg-mint/40 text-forest inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
            {post.chip}
          </span>
        </div>

        <h2 className="h-display text-3xl md:text-5xl text-forest group-hover:text-forest-deep leading-[1.05] max-w-2xl">
          {post.title}
        </h2>

        <p className="mt-6 text-[15px] text-grid leading-relaxed max-w-xl">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {post.keywords.map((k) => (
            <span
              key={k}
              className="mono-label !text-[10px] px-2 py-0.5 border hairline-strong text-grid/75"
            >
              #{k}
            </span>
          ))}
        </div>

        <div className="mt-8 inline-flex items-center gap-2 mono-label text-forest group-hover:gap-3 transition-all">
          <span className="border-b border-forest pb-0.5">READ_ARTICLE</span>
          <span>→</span>
        </div>
      </Link>

      {/* Right — visual + catalog card */}
      <div className="p-8 md:p-10 bg-mosaic-faint relative">
        <div className="flex items-center justify-between mb-4">
          <div className="mono-label text-grid/55">FIG · CATALOG_CARD</div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-coral" />
            <span className="w-2 h-2 bg-gold" />
            <span className="w-2 h-2 bg-mint" />
          </div>
        </div>

        <div className="relative border hairline-strong corner-markers bg-paper p-5 md:p-7 min-h-[320px]">
          <span className="cm-tr" />
          <span className="cm-br" />

          {/* Header band like a card catalog */}
          <div className="border-b hairline-strong pb-3 flex items-baseline justify-between">
            <div>
              <div className="mono-label text-forest">{post.callNo}</div>
              <div className="font-[Space_Grotesk] text-[15px] font-semibold text-forest mt-1">
                ZEVO WORKS · FIELD GUIDE
              </div>
            </div>
            <div className="text-right mono-label !text-[9px] text-grid/55 leading-[1.5]">
              {post.published}<br />v1.0<br />A4 · 1 col
            </div>
          </div>

          {/* Mini abstract */}
          <div className="mt-4 space-y-1.5">
            <div className="mono-label !text-[9px] text-grid/55">ABSTRACT</div>
            <div className="h-1 bg-grid/45 w-[95%]" />
            <div className="h-1 bg-grid/45 w-[88%]" />
            <div className="h-1 bg-coral w-[60%]" />
            <div className="h-1 bg-grid/45 w-[92%]" />
            <div className="h-1 bg-grid/45 w-[75%]" />
          </div>

          {/* Metadata table */}
          <dl className="mt-5 border hairline">
            {[
              ["DOCID", post.slug.toUpperCase().slice(0, 16)],
              ["READ", post.readingTime],
              ["LENGTH", post.words],
              ["LANG", "en-IN"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[80px_1fr] border-b hairline last:border-b-0"
              >
                <dt className="px-3 py-1.5 mono-label !text-[9px] text-grid/55 border-r hairline">
                  {k}
                </dt>
                <dd className="px-3 py-1.5 mono-label !text-[10px] text-forest">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          {/* Stamp */}
          <div className="absolute -right-1 top-12 bg-forest text-paper px-2 py-1.5 mono-label !text-[9px] rotate-3">
            ON_SHELF<br />
            <span className="text-paper/65">↓ open</span>
          </div>
        </div>

        {/* shelf rail under card */}
        <div className="mt-4 h-2 bg-forest" />
        <div className="h-px bg-grid/30" />
      </div>
    </section>
  );
}

/* ───── Catalog list card ───── */
function CatalogCard({ post, idx }) {
  return (
    <Link
      href={`/learn/${post.slug}`}
      className={`group block bg-paper p-7 md:p-9 relative border-l-2 ${ACCENT_BAR[post.accent]} hover:bg-mint/[0.08] transition-colors`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="mono-label text-forest">{post.callNo}</span>
        <span className="mono-label !text-[10px] px-2 py-0.5 border hairline-strong inline-flex items-center gap-1.5 text-grid/75">
          <span className={`w-1.5 h-1.5 ${ACCENT_DOT[post.accent]}`} />
          {post.chip}
        </span>
      </div>

      {/* Mini metadata strip */}
      <div className="grid grid-cols-3 gap-px bg-grid/20 mb-6">
        {[
          ["NO", String(idx).padStart(2, "0")],
          ["READ", post.readingTime],
          ["DATE", post.published.slice(2)],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-2 py-1.5">
            <div className="mono-label !text-[8px] text-grid/55">{k}</div>
            <div className="mono-label !text-[10px] text-forest mt-0.5">{v}</div>
          </div>
        ))}
      </div>

      <h2 className="h-display text-2xl md:text-3xl text-forest group-hover:text-forest-deep leading-[1.1]">
        {post.title}
      </h2>

      <p className="mt-4 text-[14px] text-grid leading-relaxed">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {post.keywords.map((k) => (
          <span
            key={k}
            className="mono-label !text-[10px] px-2 py-0.5 border hairline-strong text-grid/70"
          >
            #{k}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t hairline flex items-center justify-between mono-label text-forest">
        <span className="border-b border-forest pb-0.5">OPEN_ARTICLE</span>
        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
      </div>
    </Link>
  );
}
