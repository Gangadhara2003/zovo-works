import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "resume-summary-vs-objective";
const TITLE = "Resume summary vs objective — which should you use?";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "Should the top of your resume be a summary or an objective — or neither? Here's the difference, when each works, and how to write one that earns its space at the top of the page.",
  keywords: [
    "resume summary vs objective",
    "resume summary",
    "resume objective",
    "professional summary resume",
    "resume headline",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "Summary or objective at the top of your resume — the difference, and when each works.",
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
      name: "What's the difference between a resume summary and an objective?",
      acceptedAnswer: { "@type": "Answer", text: "A summary states what you offer — your experience and strongest, most relevant skills. An objective states what you want — the role you're seeking. Summaries suit experienced candidates; objectives suit freshers or career changers who need to signal direction." },
    },
    {
      "@type": "Question",
      name: "Do I even need a summary on my resume?",
      acceptedAnswer: { "@type": "Answer", text: "It's optional. A sharp two-line summary tailored to the job can help a recruiter immediately; a generic one wastes prime space. If you can't make it specific and relevant, the space is better spent on experience." },
    },
    {
      "@type": "Question",
      name: "How long should a resume summary be?",
      acceptedAnswer: { "@type": "Answer", text: "One to three lines. It's a hook, not a paragraph. Lead with your role and years, then your most relevant strength for this specific job." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="The few lines under your name are the most-read real estate on your resume — and the most wasted. Summary, objective, or nothing? Here's how to choose, and how to write one that actually earns the space."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Summary vs objective — the difference</h2>
        <p>
          A <strong>summary</strong> answers &quot;what do you offer?&quot; — your
          experience and strongest relevant skills, condensed. An{" "}
          <strong>objective</strong> answers &quot;what do you want?&quot; — the role
          you&apos;re targeting. The right choice depends on where you are.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">When to use a summary</h2>
        <p>
          If you have experience to summarise, use a summary. It lets a recruiter
          grasp your value in two lines before they read further.
        </p>
        <div className="border hairline p-4">
          <p className="!mt-0 mono-label text-grid/55 mb-1">EXAMPLE — SUMMARY</p>
          <p className="!mt-0">Backend engineer with 4 years building high-throughput APIs in Go and PostgreSQL. Cut p95 latency 38% on a payments service; comfortable owning a feature from schema to deploy.</p>
        </div>

        <h2 className="h-display text-3xl text-forest pt-4">When to use an objective</h2>
        <p>
          If you&apos;re a fresher or changing careers, an objective signals direction
          a summary can&apos;t — because you don&apos;t yet have a track record in the new
          field to summarise.
        </p>
        <div className="border hairline p-4">
          <p className="!mt-0 mono-label text-grid/55 mb-1">EXAMPLE — OBJECTIVE</p>
          <p className="!mt-0">Final-year CS student seeking a backend developer role, with hands-on projects in Node.js and PostgreSQL and a 2-month data internship. Eager to ship production code on a small team.</p>
        </div>
        <p>
          For freshers, also see{" "}
          <Link href="/learn/resume-for-freshers-india" className="underline">the full fresher-resume guide</Link>.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">When to use neither</h2>
        <p>
          If you can&apos;t make it specific to the job, skip it. A generic line —
          &quot;Hardworking professional seeking a challenging role to utilise my
          skills&quot; — is worse than nothing; it burns your best space saying
          something true of everyone. The space is better spent on a strong first
          experience bullet.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">How to write one that works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>One to three lines.</strong> It&apos;s a hook, not a bio.</li>
          <li><strong>Lead with role + years</strong> (or, for freshers, field + standout project).</li>
          <li><strong>Tailor it to the job.</strong> The one strength you highlight should be the one this listing most wants.</li>
          <li><strong>Include a real keyword or two</strong> from the JD — naturally.</li>
          <li><strong>No fluff adjectives.</strong> &quot;Results-driven&quot;, &quot;dynamic&quot;, &quot;passionate&quot; say nothing.</li>
        </ul>
        <p>
          Because the best summary changes per job,{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          tailors the top of your resume to each JD&apos;s language along with the rest.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Summary or objective?</h3>
        <p>Summary if you have experience to offer; objective if you&apos;re a fresher or career changer signalling direction.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Do I need one at all?</h3>
        <p>It&apos;s optional. A specific, tailored one helps; a generic one wastes space.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">How long?</h3>
        <p>One to three lines — a hook, not a paragraph.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/resume-bullet-points-with-metrics" className="underline">How to write resume bullet points that actually land</Link></li>
          <li><Link href="/learn/action-verbs-for-resumes" className="underline">Action verbs for resumes (and the weak words to drop)</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
