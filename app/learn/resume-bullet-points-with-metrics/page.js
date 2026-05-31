import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "resume-bullet-points-with-metrics";
const TITLE = "How to write resume bullet points that actually land";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "The difference between a resume that gets interviews and one that gets ignored is usually the bullet points. Here's a simple formula — action, impact, number — with before/after examples.",
  keywords: [
    "resume bullet points",
    "resume bullet points with metrics",
    "STAR method resume",
    "XYZ resume formula",
    "quantify resume achievements",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "A simple action–impact–number formula for resume bullets, with before/after examples.",
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
      name: "What is the XYZ formula for resume bullets?",
      acceptedAnswer: { "@type": "Answer", text: "Popularised by Google: 'Accomplished [X] as measured by [Y] by doing [Z].' In plain terms — lead with the result and a number, then say how you achieved it. It forces every bullet to carry impact." },
    },
    {
      "@type": "Question",
      name: "What if I don't have numbers for my achievements?",
      acceptedAnswer: { "@type": "Answer", text: "You usually have more than you think: time saved, people helped, frequency, scope, percentage change, or a before/after. If a number genuinely doesn't exist, lead with the concrete outcome instead — never invent a metric." },
    },
    {
      "@type": "Question",
      name: "How many bullet points per job?",
      acceptedAnswer: { "@type": "Answer", text: "Three to five for recent, relevant roles; one to two for older or less relevant ones. Quality over quantity — a few strong, metric-led bullets beat a long list of duties." },
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
        intro="Most resume bullets describe duties: 'Responsible for managing the database.' Strong bullets describe results: 'Cut query latency 40% by indexing the three slowest tables.' Same job — completely different signal. Here's how to write the second kind every time."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The formula: action → impact → number</h2>
        <p>
          Every strong bullet answers three questions: <strong>What did you do?
          What changed because of it? By how much?</strong> Lead with a strong
          action verb, state the outcome, and quantify it. This is the same idea
          behind the <em>XYZ formula</em> (&quot;Accomplished X, measured by Y, by
          doing Z&quot;) and the <em>STAR</em> method — they all push you from duties
          to results.
        </p>
        <div className="border-l-2 border-mint pl-4 py-1">
          <p className="!mt-0"><strong>Template:</strong> [Action verb] [what you did], [result] [by how much].</p>
        </div>

        <h2 className="h-display text-3xl text-forest pt-4">Before &amp; after</h2>
        <div className="space-y-4">
          <div className="border hairline p-4">
            <p className="!mt-0 mono-label text-grid/55 mb-1">WEAK</p>
            <p className="!mt-0">Responsible for the company&apos;s social media accounts.</p>
            <p className="!mt-2 mono-label text-grid/55 mb-1">STRONG</p>
            <p className="!mt-0">Grew Instagram following from 2k to 11k in 6 months by shipping 3 posts/week and a weekly reel series.</p>
          </div>
          <div className="border hairline p-4">
            <p className="!mt-0 mono-label text-grid/55 mb-1">WEAK</p>
            <p className="!mt-0">Worked on improving the checkout page.</p>
            <p className="!mt-2 mono-label text-grid/55 mb-1">STRONG</p>
            <p className="!mt-0">Redesigned the checkout flow, lifting completion rate from 61% to 72% (A/B tested over 4 weeks).</p>
          </div>
          <div className="border hairline p-4">
            <p className="!mt-0 mono-label text-grid/55 mb-1">WEAK</p>
            <p className="!mt-0">Handled month-end accounting tasks.</p>
            <p className="!mt-2 mono-label text-grid/55 mb-1">STRONG</p>
            <p className="!mt-0">Closed monthly books 3 days faster by automating reconciliation for 1,200+ transactions in Excel.</p>
          </div>
        </div>

        <h2 className="h-display text-3xl text-forest pt-4">Where to find numbers</h2>
        <p>&quot;I don&apos;t have metrics&quot; usually means you haven&apos;t looked. You almost always have one of:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Time:</strong> hours saved, faster turnaround, cycle time reduced.</li>
          <li><strong>Money:</strong> revenue, cost saved, budget managed.</li>
          <li><strong>Scale:</strong> users, transactions, team size, requests/second.</li>
          <li><strong>Change:</strong> a before/after percentage, a rank, a rate.</li>
          <li><strong>Frequency:</strong> per week, per release, per quarter.</li>
        </ul>
        <p>
          If no honest number exists, lead with the concrete <em>outcome</em>
          instead — never fabricate a metric. A made-up number is the fastest way
          to fail the interview where you&apos;re asked to explain it.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Strong action verbs (vary them)</h2>
        <p>
          Open each bullet with a verb that fits the work: <em>Built, Led, Shipped,
          Cut, Grew, Automated, Designed, Migrated, Reduced, Launched,
          Negotiated, Streamlined.</em> Avoid starting three bullets in a row with
          the same word, and skip weak openers like &quot;Responsible for&quot; or
          &quot;Helped with&quot;.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Bullets and the ATS</h2>
        <p>
          Metric-led bullets aren&apos;t just for the human reader — they&apos;re where
          your JD keywords belong. A skill named in a real, quantified bullet
          carries more weight (to the parser&apos;s context scoring and to the
          recruiter) than the same skill sitting alone in a list.{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          rewrites your bullets to weave in the keywords from a specific job —
          using your real experience, never inventing it.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">What is the XYZ formula?</h3>
        <p>&quot;Accomplished X, measured by Y, by doing Z.&quot; Lead with the result and a number, then how you achieved it.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">What if I don&apos;t have numbers?</h3>
        <p>Look for time, money, scale, change, or frequency. If none genuinely exists, lead with the concrete outcome — never invent one.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">How many bullets per job?</h3>
        <p>Three to five for recent relevant roles; one to two for older ones.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/how-long-should-a-resume-be" className="underline">How long should a resume be?</Link></li>
          <li><Link href="/learn/tailor-resume-to-job-description" className="underline">How to tailor your resume to a job description in 5 minutes</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
