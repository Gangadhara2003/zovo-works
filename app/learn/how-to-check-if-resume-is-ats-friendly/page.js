import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "how-to-check-if-resume-is-ats-friendly";
const TITLE = "How to check if your resume is ATS-friendly (free, 5 minutes)";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "You don't need a paid tool to test your resume against the ATS. Here's a free five-minute self-check — the copy-paste test, the heading test, and the keyword test — anyone can run.",
  keywords: [
    "check if resume is ATS-friendly",
    "ATS resume test",
    "ATS checker free",
    "test resume ATS",
    "ATS resume scan",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "A free five-minute self-check to test your resume against the ATS.",
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
      name: "How can I test my resume against an ATS for free?",
      acceptedAnswer: { "@type": "Answer", text: "Run the copy-paste test: select all text in your resume PDF and paste it into a plain text editor. If the reading order stays correct and nothing is missing, it parses well. Then check that your headings are standard and the job's keywords appear." },
    },
    {
      "@type": "Question",
      name: "Are paid ATS checkers worth it?",
      acceptedAnswer: { "@type": "Answer", text: "Usually not necessary. The free copy-paste test catches the biggest parsing problems, and a keyword check against the specific job tells you the rest. A clean single-column resume rarely needs a paid scan." },
    },
    {
      "@type": "Question",
      name: "What's the most common ATS failure?",
      acceptedAnswer: { "@type": "Answer", text: "Multi-column or table layouts that scramble the reading order, and text inside images that doesn't parse at all. Both show up immediately in the copy-paste test." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="You don't need to pay for an 'ATS scan'. Three quick tests you can run yourself catch the problems that actually matter — parsing, structure, and keyword match. Here's the whole checklist."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Test 1 — The copy-paste test (most important)</h2>
        <p>
          Open your resume PDF, select all (<code>Ctrl/Cmd + A</code>), copy, and
          paste into a plain text editor (Notepad, TextEdit in plain mode, or a
          blank doc). Now read what came out.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Is the order correct?</strong> Name → contact → experience → education, top to bottom. If your sidebar skills are interleaved into your job history, you have a column problem.</li>
          <li><strong>Is anything missing?</strong> If your name, headings, or contact details vanished, they&apos;re trapped in an image or text box.</li>
          <li><strong>Is it clean text?</strong> Garbled characters mean an exotic font or encoding issue.</li>
        </ul>
        <p>This single test catches the majority of real ATS failures.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Test 2 — The heading test</h2>
        <p>
          Scan your section titles. They should be the standard buckets a parser
          looks for: <em>Experience</em>, <em>Education</em>, <em>Skills</em>,{" "}
          <em>Projects</em>, <em>Certifications</em>. Creative titles like &quot;Where
          I&apos;ve Been&quot; or &quot;My Toolkit&quot; can stop the parser from filing your content
          correctly. Rename them to the boring, standard version.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Test 3 — The keyword test</h2>
        <p>
          Put your resume and the job description side by side. For each must-have
          skill or tool in the JD, check whether it appears in your resume — and
          whether it&apos;s backed by a real bullet, not just listed.{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">
            Here&apos;s how to pull the right keywords from a JD
          </Link>. Aim to cover the core requirements you genuinely have.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Test 4 — The structure quick-scan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Single column? ✔</li>
          <li>Real selectable text everywhere (no image text)? ✔</li>
          <li>One consistent date format? ✔</li>
          <li>Standard font? ✔</li>
          <li>No critical info in headers/footers? ✔</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">Do you need a paid checker?</h2>
        <p>
          Rarely. The copy-paste test plus a keyword check against the specific job
          catches what matters. If you want it automated,{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          builds a parseable resume by default and scores your keyword match
          against any JD — so the test is built into the workflow, free.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">How do I test my resume for free?</h3>
        <p>Run the copy-paste test, then check standard headings and keyword match against the job. No paid tool needed.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Are paid ATS checkers worth it?</h3>
        <p>Usually not — the free tests catch the big issues.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">What&apos;s the most common failure?</h3>
        <p>Multi-column/table layouts and text inside images. Both show up instantly in the copy-paste test.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/ats-resume-mistakes" className="underline">Common ATS resume mistakes that sink your application</Link></li>
          <li><Link href="/learn/what-is-an-ats" className="underline">What is an ATS, and how does it read your resume?</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
