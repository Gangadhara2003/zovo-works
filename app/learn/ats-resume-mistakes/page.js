import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "ats-resume-mistakes";
const TITLE = "Common ATS resume mistakes that sink your application";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "Most resumes that never get a reply weren't unqualified — they were unreadable to the ATS. Here are the most common ATS resume mistakes and the exact fix for each.",
  keywords: [
    "ATS resume mistakes",
    "why resume gets rejected",
    "ATS parsing errors",
    "resume not getting shortlisted",
    "ATS resume fix",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "The most common ATS resume mistakes — and the exact fix for each.",
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
      name: "Why does my resume never get a response?",
      acceptedAnswer: { "@type": "Answer", text: "The most common reasons are ATS-related: a layout the parser can't read (columns, tables, text in images), missing keywords from the job description, or non-standard section headings. Fixing parseability and keyword match usually has the biggest effect." },
    },
    {
      "@type": "Question",
      name: "Do tables and columns break the ATS?",
      acceptedAnswer: { "@type": "Answer", text: "Often, yes. Multi-column layouts and tables are the single most common cause of scrambled parsing. The ATS reads left-to-right, top-to-bottom, so a sidebar gets interleaved with your main content. Use a single-column layout." },
    },
    {
      "@type": "Question",
      name: "Should I use a creative resume template?",
      acceptedAnswer: { "@type": "Answer", text: "Not for roles screened by an ATS. Graphics, icons, and decorative layouts look good to a human but confuse parsers. Save creative formats for portfolios; submit a clean, single-column resume to job portals." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="When a strong candidate hears nothing back, the resume usually didn't fail on merit — it failed on format. These are the mistakes that quietly drop your ranking before a human ever looks, and the fix for each."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">1. Two-column or table-based layouts</h2>
        <p>
          The biggest one. An ATS reads in a single top-to-bottom, left-to-right
          pass. A two-column resume — skills in a sidebar, experience on the
          right — gets interleaved into unreadable order. <strong>Fix:</strong> use
          a clean single-column layout. Everything stacks vertically in the order
          you intend.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">2. Text inside images or graphics</h2>
        <p>
          A name in a header banner, skills shown as a chart, contact details in a
          logo — none of it parses. If you can&apos;t select and copy the text in your
          PDF, the ATS can&apos;t read it. <strong>Fix:</strong> every word must be real,
          selectable text.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">3. Non-standard section headings</h2>
        <p>
          &quot;My Journey&quot;, &quot;What I Bring&quot;, &quot;Tools of the Trade&quot; — clever, but the
          parser looks for standard buckets. <strong>Fix:</strong> use{" "}
          <em>Experience</em>, <em>Education</em>, <em>Skills</em>, <em>Projects</em>.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">4. Missing the job&apos;s keywords</h2>
        <p>
          A perfectly formatted resume still scores low if it doesn&apos;t reflect the
          job description&apos;s language. <strong>Fix:</strong>{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">find the JD&apos;s must-have keywords</Link>{" "}
          and include the ones you genuinely have, in context.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">5. Inconsistent date formats</h2>
        <p>
          The ATS computes years of experience from your dates. Mixing
          <code>Jan 2024</code> with <code>03/2025</code> with <code>2023–present</code>
          {" "}can trigger parsing errors. <strong>Fix:</strong> pick one format and use
          it everywhere.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">6. Keyword stuffing &amp; white-text tricks</h2>
        <p>
          Hidden white-text keywords and &quot;Python, Python, Python&quot; padding are
          detected and stripped by modern systems — and instantly kill your
          credibility with the recruiter who sees them. <strong>Fix:</strong> weave
          real keywords into real bullets.{" "}
          <Link href="/learn/resume-keyword-optimisation-without-stuffing" className="underline">Here&apos;s how, without stuffing</Link>.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">7. Exotic fonts and heavy formatting</h2>
        <p>
          Unusual fonts can render as garbled characters in some parsers.{" "}
          <strong>Fix:</strong> stick to standard fonts (Arial, Calibri, Times,
          Computer Modern) and skip text boxes, headers/footers for critical info,
          and decorative dividers.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">8. One generic resume for every job</h2>
        <p>
          The same resume sent everywhere matches few of any given listing&apos;s
          keywords. <strong>Fix:</strong>{" "}
          <Link href="/learn/tailor-resume-to-job-description" className="underline">tailor per job</Link> —
          it&apos;s the highest-leverage change you can make.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The quick self-check</h2>
        <p>
          Copy all the text out of your resume PDF into a plain text editor. If the
          order scrambles, sections merge, or text vanishes, the ATS sees the same
          mess.{" "}
          <Link href="/learn/how-to-check-if-resume-is-ats-friendly" className="underline">Full ATS self-check here</Link>.
          If you&apos;d rather not fight the formatting,{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          outputs a clean, single-column, parseable resume by default.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Why does my resume never get a response?</h3>
        <p>Usually a layout the ATS can&apos;t read, missing JD keywords, or non-standard headings. Fix parseability and keyword match first.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Do tables and columns break the ATS?</h3>
        <p>Often. They&apos;re the most common cause of scrambled parsing. Use a single-column layout.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Are creative templates a problem?</h3>
        <p>For ATS-screened roles, yes. Keep creative formats for portfolios.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/how-to-check-if-resume-is-ats-friendly" className="underline">How to check if your resume is ATS-friendly</Link></li>
          <li><Link href="/learn/what-is-an-ats" className="underline">What is an ATS, and how does it read your resume?</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
