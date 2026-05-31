import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "find-keywords-in-job-description";
const TITLE = "How to find the right keywords in a job description";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "The ATS scores your resume on the keywords in the job description — but which ones actually matter? A repeatable method to extract the real must-haves from any JD, without keyword-stuffing.",
  keywords: [
    "job description keywords",
    "resume keyword optimisation",
    "ATS keywords",
    "how to find keywords in a job description",
    "JD keyword matching",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "A repeatable method to pull the real must-have keywords from any job description — and add them honestly.",
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
      name: "How many keywords from the job description should my resume include?",
      acceptedAnswer: { "@type": "Answer", text: "Aim to cover most of the must-have keywords — the hard skills and tools listed under requirements — where you genuinely have them. You don't need every nice-to-have. Coverage of the core requirements matters far more than raw count." },
    },
    {
      "@type": "Question",
      name: "Where are the most important keywords in a job description?",
      acceptedAnswer: { "@type": "Answer", text: "The 'Requirements', 'Must-have', and 'Qualifications' sections carry the highest-weight keywords. The job title and the first few responsibilities also matter. Perks and company-culture lines almost never contain scored keywords." },
    },
    {
      "@type": "Question",
      name: "Should I copy keywords exactly as written in the JD?",
      acceptedAnswer: { "@type": "Answer", text: "Use the exact form for specific tools and technologies (e.g. 'PostgreSQL', 'Kubernetes') because the ATS matches those literally. For general skills, natural phrasing is fine — modern parsers understand common synonyms." },
    },
    {
      "@type": "Question",
      name: "Is it keyword stuffing if I add JD keywords to my resume?",
      acceptedAnswer: { "@type": "Answer", text: "Not if you add keywords you actually have, woven into real bullet points. Stuffing is repeating keywords unnaturally or listing skills you don't possess. Adding genuine, relevant keywords in context is exactly what you're supposed to do." },
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
        intro="Everyone says 'match the keywords in the job description'. Almost no one explains which keywords, or how to find them without turning your resume into a word salad. Here's a repeatable method that takes about ten minutes per JD."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="7 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Why keywords decide whether you get read</h2>
        <p>
          Before a recruiter sees your resume, an Applicant Tracking System (ATS)
          parses it and scores it against the job description — largely on how
          well your resume&apos;s terms overlap with the JD&apos;s. A strong
          candidate with the wrong words on the page scores lower than an average
          candidate who mirrored the listing. So the goal isn&apos;t to write a
          generic &quot;good resume&quot;; it&apos;s to write the resume <em>this</em>{" "}
          job is scanning for — honestly.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 1 — Read the JD for structure, not prose</h2>
        <p>
          A job description has zones, and they&apos;re not equally important.
          Weight your attention like this:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Job title</strong> — the single highest-signal phrase. If it says &quot;Backend Engineer&quot;, that exact role language should appear in your resume.</li>
          <li><strong>Requirements / Must-haves / Qualifications</strong> — the densest source of scored keywords. This is where you mine hardest.</li>
          <li><strong>Responsibilities / What you&apos;ll do</strong> — verbs and tools in context. Good for phrasing your bullets.</li>
          <li><strong>Nice-to-haves / Bonus</strong> — lower weight. Cover them only if you genuinely match.</li>
          <li><strong>Perks, culture, EEO statement</strong> — ignore. No scored keywords live here.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">Step 2 — Pull out three kinds of keyword</h2>
        <p>Skim the requirements and sort what you find into three buckets:</p>
        <h3 className="text-xl font-semibold text-forest pt-2">1. Hard skills &amp; tools</h3>
        <p>
          Specific, checkable nouns: <code>Python</code>, <code>PostgreSQL</code>,{" "}
          <code>Kubernetes</code>, <code>GST</code>, <code>SolidWorks</code>,{" "}
          <code>Salesforce</code>. These are matched <em>literally</em> by the ATS,
          so use the exact form the JD uses.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">2. Methods &amp; concepts</h3>
        <p>
          Agile, CI/CD, A/B testing, financial reconciliation, GD&amp;T. Modern
          parsers understand common synonyms here (&quot;CI/CD&quot; ≈ &quot;continuous
          integration&quot;), so natural phrasing is fine.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">3. Role &amp; seniority language</h3>
        <p>
          &quot;Led&quot;, &quot;owned&quot;, &quot;cross-functional&quot;, &quot;stakeholder&quot;,
          &quot;end-to-end&quot;. These shape how a recruiter reads your level. Mirror the
          ones that are genuinely true of your experience.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 3 — Separate must-haves from noise</h2>
        <p>
          Not every keyword is worth chasing. A quick test: a keyword is a{" "}
          <strong>must-have</strong> if it appears in the title or requirements,
          is repeated, or is phrased as &quot;required&quot;/&quot;must have&quot;. It&apos;s{" "}
          <strong>noise</strong> if it shows up once in a perks line or describes
          the company rather than the work. Spend your effort on the must-haves you
          can honestly claim.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 4 — Map keywords to where they belong</h2>
        <p>Each keyword has a natural home on your resume:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tools you use daily</strong> → your Skills section <em>and</em> at least one experience bullet that proves it.</li>
          <li><strong>Methods</strong> → woven into bullets (&quot;Shipped weekly under Agile&quot;), not just listed.</li>
          <li><strong>Role language</strong> → your summary and the strongest bullets.</li>
        </ul>
        <p>
          A keyword that appears only in a skills list, with no evidence in your
          experience, is weak — both to the ATS&apos;s context scoring and to the
          human who reads next.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The honesty line you don&apos;t cross</h2>
        <p>
          Adding keywords you genuinely have is optimisation. Adding ones you
          don&apos;t is a lie that surfaces in the interview. If a JD wants a skill
          you lack, you have two honest options: leave it out, or build a small,
          real project so you <em>can</em> claim it. Never list it just to pass the
          filter — you&apos;ll pass the screen and fail the conversation.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Doing this automatically</h2>
        <p>
          The manual method works, but it&apos;s slow to repeat for every
          application.{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">
            my-resume
          </a>{" "}
          does this in seconds: paste the job description and it extracts the
          must-have keywords, scores how many your resume already covers, and shows
          you a plain list of what&apos;s present versus missing. For the missing
          keywords you genuinely have, it rewrites a bullet to include them — and
          for the ones you don&apos;t, it flags the gap instead of faking it. Same
          method, none of the manual sorting.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">How many keywords should I include?</h3>
        <p>
          Cover most of the must-haves you genuinely have — the hard skills and
          tools under requirements. You don&apos;t need every nice-to-have. Coverage
          of the core requirements beats raw count.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">Should I copy keywords exactly?</h3>
        <p>
          For specific tools and technologies, yes — the ATS matches those
          literally. For general skills, natural phrasing is fine; modern parsers
          handle common synonyms.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">Isn&apos;t this just keyword stuffing?</h3>
        <p>
          No — stuffing is repeating words unnaturally or claiming skills you
          don&apos;t have. Adding genuine, relevant keywords inside real bullet
          points is exactly what you&apos;re meant to do.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/tailor-resume-to-job-description" className="underline">How to tailor your resume to a job description in 5 minutes</Link></li>
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
