import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "ats-friendly-resume-tips";
const TITLE = "ATS-friendly resume in 2026 — what really beats the filter";
const PUBLISHED = "2026-05-19";

export const metadata = {
  title: TITLE,
  description:
    "Most ATS advice online is a decade out of date. Here's what modern parsers actually check, the 6 rules that get you past the screen, and the myths to ignore.",
  keywords: [
    "ATS-friendly resume",
    "ATS resume India",
    "beat ATS filter",
    "ATS keyword optimisation",
    "resume parsing 2026",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "What ATS scanners actually do in 2026 — and the 6 rules that get your resume to a human.",
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
      name: "Do all companies in India use ATS?",
      acceptedAnswer: { "@type": "Answer", text: "Nearly every mid-to-large company does. Startups under ~50 people often skip it, but their hiring portals (Greenhouse, Lever, Workday) all have ATS parsing built in." },
    },
    {
      "@type": "Question",
      name: "Does using PDF break ATS parsing?",
      acceptedAnswer: { "@type": "Answer", text: "No, that's a 2015 myth. Modern ATS parses PDFs cleanly as long as the underlying text is real text (not images). LaTeX-typeset PDFs are actually easier for ATS to parse than Word." },
    },
    {
      "@type": "Question",
      name: "Should I include keywords in white text to game the ATS?",
      acceptedAnswer: { "@type": "Answer", text: "No. Every modern ATS detects this and either flags the resume or strips formatting. Once a recruiter sees it, you're permanently filtered." },
    },
    {
      "@type": "Question",
      name: "Are Canva resumes ATS-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Most Canva templates use multi-column layouts and graphic elements that break ATS parsing. Use Canva for design portfolios, not for the resume you submit to job portals." },
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
        intro="ATS systems in 2026 are smarter than they were in 2016 but not by as much as the internet wants you to believe. Here's what they actually do, what they ignore, and the six rules that keep your resume in the pile."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">What an ATS actually does</h2>
        <p>An Applicant Tracking System does three things, in this order:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Parse</strong> the resume into structured fields (name, email, employer, dates, skills).</li>
          <li><strong>Score</strong> against the JD on keyword coverage, years of experience, and education filters.</li>
          <li><strong>Rank</strong> all candidates and surface the top N to a human recruiter.</li>
        </ol>
        <p>
          If parsing fails (90% of weird-template resumes), the score is zero
          and your resume never reaches step 3. The whole game is making
          parsing succeed AND scoring well — not just one or the other.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The 6 rules that actually work</h2>

        <h3 className="text-xl font-semibold text-forest pt-2">1. Single-column layout</h3>
        <p>
          Two-column resumes are the #1 cause of parsing failure. The ATS
          reads top-to-bottom-left-to-right; a left sidebar with skills will
          get interleaved with the experience on the right and end up
          unreadable nonsense in the parsed text.
        </p>

        <h3 className="text-xl font-semibold text-forest pt-2">2. Standard section headings</h3>
        <p>
          Use <em>Experience</em>, <em>Education</em>, <em>Skills</em>,
          <em>Projects</em>. Not &quot;My Journey&quot;, not &quot;Tools of the Trade&quot;.
          The parser literally looks for these exact phrases to bucket content
          into the right fields.
        </p>

        <h3 className="text-xl font-semibold text-forest pt-2">3. Real text, not images</h3>
        <p>
          Don&apos;t put your name or contact details in an image. Don&apos;t
          screenshot your skills section. If you can&apos;t select-and-copy text
          from your PDF, an ATS can&apos;t read it.
        </p>

        <h3 className="text-xl font-semibold text-forest pt-2">4. Keyword density without stuffing</h3>
        <p>
          Match the JD&apos;s keywords in <strong>at least 60% coverage on
          must-haves</strong>. But don&apos;t list &quot;Python, Python, Python&quot; — modern
          ATS deduplicates and the recruiter will notice. Weave keywords into
          bullet points where they make sense.
        </p>

        <h3 className="text-xl font-semibold text-forest pt-2">5. Consistent date format</h3>
        <p>
          Pick one: <code>Jan 2024 – Mar 2025</code> OR <code>01/2024 – 03/2025</code>. Don&apos;t mix.
          The parser computes years-of-experience from these and inconsistent
          formats trigger validation failures.
        </p>

        <h3 className="text-xl font-semibold text-forest pt-2">6. Plain fonts</h3>
        <p>
          Arial, Helvetica, Times, Computer Modern (LaTeX default), Calibri,
          Lato. Anything else is risk for no reward. Recruiters are not
          checking your typography taste — they&apos;re scanning for keywords.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Myths to ignore</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>&quot;PDF breaks ATS&quot;</strong> — false in 2026. Both PDF and DOCX work if the text is real.</li>
          <li><strong>&quot;Hide keywords in white text&quot;</strong> — every modern ATS strips this and many flag it.</li>
          <li><strong>&quot;You need to use exactly the JD&apos;s wording&quot;</strong> — modern ATS uses synonyms. &quot;CI/CD&quot; matches &quot;continuous integration&quot;.</li>
          <li><strong>&quot;Resume must be exactly 1 page&quot;</strong> — true for entry level, false for 5+ years experience. Quality &gt; length.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Do all companies in India use ATS?</h3>
        <p>
          Nearly every mid-to-large company does. Startups under ~50 people
          often skip it, but their hiring portals (Greenhouse, Lever,
          Workday) all have ATS parsing built in.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">Does PDF break ATS?</h3>
        <p>
          No, that&apos;s a 2015 myth. As long as the PDF text is selectable
          (not a scanned image), parsers handle it fine. LaTeX-typeset PDFs
          actually parse cleaner than most Word docs.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">Are Canva resumes ATS-friendly?</h3>
        <p>
          Most Canva templates use multi-column layouts and decorative
          graphics that break parsing. Use Canva for portfolio sites, not
          for the resume you submit to a JD.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/tailor-resume-to-job-description" className="underline">How to tailor your resume to a job description in 5 minutes</Link></li>
          <li><Link href="/learn/ai-resume-builder-india" className="underline">Best free AI resume builder for India (honest 2026 comparison)</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
