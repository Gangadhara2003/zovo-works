import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "pdf-vs-docx-for-ats";
const TITLE = "PDF vs DOCX for ATS — which should you submit?";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "The 'PDF breaks the ATS' advice is a decade out of date. Here's the real difference between PDF and DOCX for applicant tracking systems, and how to decide which to send.",
  keywords: [
    "PDF vs DOCX ATS",
    "is PDF ATS-friendly",
    "best resume file format",
    "resume PDF or Word",
    "ATS file format",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "The real difference between PDF and DOCX for the ATS, and how to choose.",
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
      name: "Is a PDF resume ATS-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Modern ATS parses text-based PDFs reliably. The old 'PDF breaks ATS' warning dates from ~2015 and no longer holds, as long as your PDF contains real selectable text (not a scanned image)." },
    },
    {
      "@type": "Question",
      name: "Should I send PDF or Word to a job application?",
      acceptedAnswer: { "@type": "Answer", text: "Follow the listing: if it asks for DOCX, send DOCX. Otherwise PDF is the safer default because it preserves your layout exactly. Only avoid PDF if the application explicitly requests Word." },
    },
    {
      "@type": "Question",
      name: "Why do some people say to use Word for the ATS?",
      acceptedAnswer: { "@type": "Answer", text: "It's outdated caution from when older parsers struggled with PDFs. Today the bigger risks are layout and keywords, not file type. A clean single-column PDF parses fine." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="'Don't send a PDF, the ATS can't read it' is one of the most repeated pieces of resume advice — and one of the most out of date. Here's what's actually true in 2026, and how to pick a format without overthinking it."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The short answer</h2>
        <p>
          Both PDF and DOCX work with modern ATS. <strong>PDF is the safer default</strong>
          {" "}because it preserves your layout exactly on every machine. The one
          rule that overrides everything: <strong>if the application asks for a
          specific format, send that format.</strong>
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Why the &quot;PDF breaks ATS&quot; myth persists</h2>
        <p>
          Around a decade ago, some parsers genuinely struggled with PDFs. That&apos;s
          no longer the case — the major systems (Workday, Greenhouse, Lever,
          Taleo, and the rest) read text-based PDFs cleanly. The advice survived
          long after the technology moved on. What hasn&apos;t changed is that{" "}
          <em>image-based</em> PDFs fail: if you scanned a printed resume or
          exported it as a picture, no parser can read it.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">PDF: the case for</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Layout is locked.</strong> What you see is what the recruiter sees — no reflowing, no font substitution.</li>
          <li><strong>Looks professional</strong> and consistent across devices.</li>
          <li><strong>Parses fine</strong> when it&apos;s real text (which it is, if you exported from a document, not a scan).</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">DOCX: the case for</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Some older systems</strong> and a few recruiters still prefer it.</li>
          <li><strong>Editable</strong> — recruiters or agencies sometimes reformat before forwarding.</li>
          <li><strong>Zero parsing risk</strong> on legacy ATS, though this rarely matters now.</li>
        </ul>
        <p>
          The downside: DOCX can render differently on another machine (fonts,
          spacing), so your careful layout may shift.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">What actually decides your score</h2>
        <p>
          File type is a footnote. The things that move your ranking are{" "}
          <Link href="/learn/ats-friendly-resume-tips" className="underline">a parseable single-column layout</Link>{" "}
          and{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">matching the job&apos;s keywords</Link>.
          Get those right in either format and you&apos;re fine.
        </p>
        <p>
          LaTeX-typeset PDFs (what{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          produces) are a strong default: they&apos;re always real text, single-column,
          and consistent — easy for an ATS to parse and sharp for the human after.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Is a PDF resume ATS-friendly?</h3>
        <p>Yes — modern ATS parses text-based PDFs reliably. Just avoid image/scanned PDFs.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">PDF or Word?</h3>
        <p>Follow the listing. If unspecified, PDF is the safer default for layout fidelity.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Why do people still say use Word?</h3>
        <p>Outdated caution from older parsers. Today layout and keywords matter far more than file type.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
          <li><Link href="/learn/how-to-check-if-resume-is-ats-friendly" className="underline">How to check if your resume is ATS-friendly</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
