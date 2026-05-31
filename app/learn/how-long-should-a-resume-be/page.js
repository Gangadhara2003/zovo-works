import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "how-long-should-a-resume-be";
const TITLE = "How long should a resume be? (The honest answer)";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "One page or two? The real answer depends on your experience — not on a rule someone repeated online. Here's how to decide, and how to cut a resume down without losing what matters.",
  keywords: [
    "how long should a resume be",
    "one page resume",
    "two page resume",
    "resume length",
    "resume length India",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "One page or two? How to decide based on your experience, and how to trim without losing impact.",
    url: `https://zevo-works.in/learn/${SLUG}`,
    type: "article",
    publishedTime: PUBLISHED,
  },
};

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should a resume be one page or two?",
      acceptedAnswer: { "@type": "Answer", text: "One page for students, freshers, and up to ~5 years of experience. Two pages are fine and often expected beyond that. Never pad to fill space, and never shrink fonts to cram two pages into one." },
    },
    {
      "@type": "Question",
      name: "Is a two-page resume bad?",
      acceptedAnswer: { "@type": "Answer", text: "No — for experienced candidates a second page is normal. What's bad is a two-page resume full of filler. Length should be earned by relevant content, not stretched to look senior." },
    },
    {
      "@type": "Question",
      name: "Does resume length affect the ATS?",
      acceptedAnswer: { "@type": "Answer", text: "Length itself isn't scored. The ATS cares about keywords and parseable structure, not page count. But a tighter, more relevant resume tends to have higher keyword density and reads better to the human after." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <PostLayout
        title={TITLE}
        intro="The internet insists every resume must be one page. That's advice for a 22-year-old, repeated until it sounds universal. The honest answer is: as long as it needs to be to show relevant impact — and not one line longer."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The rule, by experience level</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Student / fresher:</strong> one page. You don&apos;t yet have enough relevant, proven content to justify more — and you shouldn&apos;t pad it.</li>
          <li><strong>1–5 years:</strong> one page, almost always. Tighten ruthlessly; keep the strongest, most relevant work.</li>
          <li><strong>5–10 years:</strong> one or two pages. Two is fine if the second page earns its place with relevant achievements.</li>
          <li><strong>10+ years / senior:</strong> two pages is normal and often expected. Three is rare and only for academia/research (where a CV ≠ a resume).</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">The two mistakes that actually hurt you</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">1. Padding to fill space</h3>
        <p>
          A one-page resume stretched with fluff — &quot;responsible for various
          tasks&quot;, hobbies no one asked about, a skills list of 40 items — reads
          weaker than a tight three-quarter page. Recruiters skim; padding just
          dilutes your real wins. If you can&apos;t fill a page with genuinely
          relevant content, don&apos;t.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">2. Shrinking to cram</h3>
        <p>
          The opposite failure: a senior candidate squeezing two pages of content
          into one with 8pt font and zero margins. It&apos;s unreadable to humans and
          can confuse ATS parsing. If the content earns two pages, use two pages.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">How to cut a resume down (without losing what matters)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Cut old and irrelevant roles.</strong> Your internship from eight years ago can become one line, or disappear.</li>
          <li><strong>Cut weak bullets.</strong> Keep 3–4 strong, metric-led bullets per recent role; drop the &quot;assisted with…&quot; filler.</li>
          <li><strong>Tailor to the job.</strong> A bullet that doesn&apos;t support <em>this</em> application is a candidate for removal.</li>
          <li><strong>Tighten language.</strong> &quot;Was responsible for managing a team of five&quot; → &quot;Led a team of 5.&quot;</li>
          <li><strong>Drop the obvious.</strong> &quot;References available on request&quot;, your full address, a photo (unless the market expects one).</li>
        </ol>

        <h2 className="h-display text-3xl text-forest pt-4">Length and the ATS</h2>
        <p>
          Page count isn&apos;t a ranking factor. The ATS scores{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">keyword match</Link>{" "}
          and needs a parseable structure — neither depends on length. But a
          tighter, tailored resume naturally carries higher keyword density and
          reads better to the recruiter who looks next. Tailoring per job is the
          fastest way to keep it short: when you cut what doesn&apos;t fit the role,
          length takes care of itself. (That&apos;s what{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          helps you do per application.)
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">One page or two?</h3>
        <p>One page up to ~5 years of experience; two is fine and often expected beyond that. Never pad, never shrink to cram.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Is two pages bad?</h3>
        <p>Not for experienced candidates. A two-page resume full of filler is bad; length earned by relevant content is not.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Does length affect the ATS?</h3>
        <p>No — the ATS scores keywords and structure, not page count.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/resume-bullet-points-with-metrics" className="underline">How to write resume bullet points that actually land</Link></li>
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
