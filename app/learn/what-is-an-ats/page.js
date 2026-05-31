import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "what-is-an-ats";
const TITLE = "What is an ATS, and how does it read your resume?";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "An Applicant Tracking System (ATS) decides whether a human ever sees your resume. Here's what an ATS actually is, how it parses and scores your resume, and what that means for how you write it.",
  keywords: [
    "what is an ATS",
    "applicant tracking system",
    "how ATS reads resume",
    "ATS parsing",
    "ATS resume India",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "What an Applicant Tracking System is, how it parses and scores your resume, and what to do about it.",
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
      name: "What does ATS stand for?",
      acceptedAnswer: { "@type": "Answer", text: "ATS stands for Applicant Tracking System — software that companies use to collect, parse, score, and rank job applications before a recruiter reviews them." },
    },
    {
      "@type": "Question",
      name: "Do small companies in India use an ATS?",
      acceptedAnswer: { "@type": "Answer", text: "Most mid-to-large companies do. Even small startups usually apply through hiring platforms like Greenhouse, Lever, or Workday, which have ATS parsing built in. Assume your resume will be parsed by software." },
    },
    {
      "@type": "Question",
      name: "How do I know if my resume is ATS-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "A quick test: copy all the text out of your PDF into a plain text file. If the order is scrambled, sections merge, or text is missing, an ATS will struggle too. A clean single-column layout with real text copies cleanly." },
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
        intro="Before a recruiter reads a single word, software has already decided whether your resume is worth showing them. That software is the ATS. Understanding what it does — and doesn't do — changes how you write every line."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">What an ATS actually is</h2>
        <p>
          An <strong>Applicant Tracking System (ATS)</strong> is the software a
          company uses to manage hiring. When you click &quot;Apply&quot;, your resume
          goes into the ATS, not directly to a person. The system stores it,
          reads it into structured data, scores it against the role, and ranks
          you alongside everyone else who applied. Recruiters then review the
          top of that ranked list — often only the first page.
        </p>
        <p>
          The practical consequence: a great resume that the ATS can&apos;t read,
          or that scores poorly against the job, may never reach a human at all.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The three things it does</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">1. Parse</h3>
        <p>
          The ATS reads your resume and tries to extract structured fields: name,
          contact details, employers, job titles, dates, education, and skills.
          If your layout is unusual — two columns, tables, text inside images —
          parsing can scramble or drop information. A name in a header image
          becomes invisible; a sidebar of skills gets interleaved with your job
          history into nonsense.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">2. Score</h3>
        <p>
          Once parsed, the system compares your resume to the job description:
          how many of the required keywords appear, whether your titles and years
          of experience match, whether education filters are met. This is where{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">
            the keywords in the JD
          </Link>{" "}
          directly determine your score.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">3. Rank</h3>
        <p>
          Every applicant gets a score, and the ATS sorts them. Recruiters work
          top-down. If you&apos;re on page three, you&apos;re effectively invisible —
          not because you&apos;re unqualified, but because the system ranked you
          below people whose resumes matched the listing more closely.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">What an ATS does NOT do</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>It doesn&apos;t &quot;auto-reject&quot; most resumes outright — it ranks them. Low rank is the real risk, not a hard rejection.</li>
          <li>It doesn&apos;t judge your design taste. Pretty fonts earn nothing.</li>
          <li>It doesn&apos;t reward keyword stuffing — modern systems deduplicate, and a recruiter spots padding instantly.</li>
          <li>It doesn&apos;t penalise PDFs (a 2015 myth) as long as the text is real, selectable text.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">What this means for how you write</h2>
        <p>Two jobs, in order:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Be parseable.</strong> Single column, real text, standard headings (Experience, Education, Skills), consistent dates. Get this wrong and nothing else matters.</li>
          <li><strong>Be relevant.</strong> Mirror the job description&apos;s real keywords where you genuinely have the skill, woven into bullet points with evidence.</li>
        </ol>
        <p>
          That&apos;s the whole game: a resume the software can read, matched to the
          job it&apos;s being scored against. You can do both by hand, or let{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">
            my-resume
          </a>{" "}
          produce a clean, single-column, ATS-parseable resume and score your
          keyword match against any JD automatically.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">What does ATS stand for?</h3>
        <p>Applicant Tracking System — the software that collects, parses, scores, and ranks applications before a recruiter sees them.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Do small companies use an ATS?</h3>
        <p>Most do, directly or through a hiring platform (Greenhouse, Lever, Workday) that parses resumes. Assume yours will be read by software.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">How do I test if mine is ATS-friendly?</h3>
        <p>Copy all the text out of your PDF into a plain text file. If the order scrambles or text goes missing, an ATS will struggle too.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
          <li><Link href="/learn/find-keywords-in-job-description" className="underline">How to find the right keywords in a job description</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
