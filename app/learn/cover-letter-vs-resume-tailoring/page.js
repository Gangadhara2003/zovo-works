import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "cover-letter-vs-resume-tailoring";
const TITLE = "Cover letter vs tailoring your resume — where to spend your time";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "You have limited time per application. Should it go into a cover letter or into tailoring your resume? Here's an honest take on what moves the needle, and when a cover letter actually matters.",
  keywords: [
    "cover letter vs resume",
    "do cover letters matter",
    "tailor resume or cover letter",
    "is a cover letter necessary",
    "resume tailoring",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "Cover letter or resume tailoring — where your limited application time is best spent.",
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
      name: "Do cover letters still matter?",
      acceptedAnswer: { "@type": "Answer", text: "Sometimes. Many ATS-screened applications never read the cover letter, and the resume does the heavy lifting. But for smaller companies, career changes, and roles that explicitly ask for one, a short tailored cover letter can help. When in doubt, tailor the resume first." },
    },
    {
      "@type": "Question",
      name: "Should I prioritise the resume or the cover letter?",
      acceptedAnswer: { "@type": "Answer", text: "The resume, almost always. It's what the ATS scores and what the recruiter reads first. Tailor the resume to the job before writing any cover letter — it has the higher return on your time." },
    },
    {
      "@type": "Question",
      name: "When is a cover letter worth writing?",
      acceptedAnswer: { "@type": "Answer", text: "When the listing requests one, when you're changing careers and need to explain the pivot, when applying to a small team that reads them, or when you have a specific, genuine reason for wanting that role." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="Every application is a time budget. The honest question is where that time earns the most: a cover letter, or tailoring the resume? For most roles the answer is clear — but not always. Here's how to decide per application."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The default: tailor the resume first</h2>
        <p>
          For the typical online application, the resume is what the ATS scores and
          what the recruiter actually reads. Many cover letters are never opened.
          So your first unit of effort should almost always go into{" "}
          <Link href="/learn/tailor-resume-to-job-description" className="underline">
            tailoring the resume to the job
          </Link>
          {" "}— matching its keywords, leading with the most relevant experience.
          That&apos;s the highest-return move you can make.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">When a cover letter genuinely helps</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>The listing asks for one.</strong> Skipping it can be read as not following instructions. Send a short, tailored one.</li>
          <li><strong>You&apos;re changing careers.</strong> A resume shows <em>what</em> you did; a cover letter explains <em>why</em> you&apos;re pivoting and how it connects.</li>
          <li><strong>Small companies and startups.</strong> Fewer applicants, more likely a human reads everything. A genuine, specific note can stand out.</li>
          <li><strong>You have a real, specific reason</strong> for wanting this role or company — not generic enthusiasm.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">When to skip it</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Large-company portals that clearly funnel everything through an ATS and don&apos;t request one.</li>
          <li>High-volume applying, where a generic letter adds nothing.</li>
          <li>Any time the letter would just restate your resume in paragraph form.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">If you do write one, make it short and specific</h2>
        <p>
          Three short paragraphs: why this role/company specifically, the one or
          two most relevant things you&apos;ve done, and a clear close. Tailor it the
          same way you tailor a resume — to <em>this</em> job, not a template you
          paste everywhere. A generic cover letter is worse than none.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The efficient workflow</h2>
        <p>
          Tailor the resume per job first (fast, high-impact), then add a cover
          letter only where the four conditions above apply.{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          makes the resume half quick — paste the JD, get a tailored, ATS-ready
          resume — so you keep more time for the applications where a cover letter
          actually counts.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Do cover letters still matter?</h3>
        <p>Sometimes — for small companies, career changes, and roles that ask for one. Often the resume does the work. Tailor the resume first.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Resume or cover letter first?</h3>
        <p>Resume, almost always — it&apos;s what the ATS scores and the recruiter reads first.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">When is a cover letter worth it?</h3>
        <p>When requested, when changing careers, for small teams, or when you have a specific genuine reason.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/tailor-resume-to-job-description" className="underline">How to tailor your resume to a job description in 5 minutes</Link></li>
          <li><Link href="/learn/find-keywords-in-job-description" className="underline">How to find the right keywords in a job description</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
