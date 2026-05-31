import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "action-verbs-for-resumes";
const TITLE = "Action verbs for resumes (and the weak words to drop)";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "The verb you start a bullet with sets its strength. A categorised list of strong resume action verbs, the weak openers to delete, and how to pick the right one for each achievement.",
  keywords: [
    "action verbs for resume",
    "resume power words",
    "strong resume verbs",
    "resume bullet verbs",
    "words to avoid on resume",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "Strong resume action verbs by category, plus the weak openers to drop.",
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
      name: "What are good action verbs for a resume?",
      acceptedAnswer: { "@type": "Answer", text: "Pick verbs that match the work: Built, Led, Shipped, Cut, Grew, Automated, Designed, Migrated, Reduced, Launched, Negotiated, Streamlined. The best verb is the most accurate one — don't inflate 'helped' into 'spearheaded' if you didn't lead." },
    },
    {
      "@type": "Question",
      name: "What words should I avoid on a resume?",
      acceptedAnswer: { "@type": "Answer", text: "Weak openers like 'Responsible for', 'Helped with', 'Worked on', and 'Assisted in', plus empty adjectives like 'results-driven', 'dynamic', and 'passionate'. They describe everyone and prove nothing." },
    },
    {
      "@type": "Question",
      name: "Should every bullet start with a different verb?",
      acceptedAnswer: { "@type": "Answer", text: "Vary them enough that you're not repeating the same verb three times in a row, but accuracy beats variety. Use the verb that truly fits the achievement, even if you've used it once already." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="A bullet's first word does a lot of work. 'Responsible for the migration' is a duty; 'Led the migration' is an achievement. Same project, different signal. Here's a verb toolkit by category — and the weak words quietly dragging your resume down."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="5 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Drop these weak openers first</h2>
        <p>
          Before adding strong verbs, delete the ones that signal passivity:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Responsible for…</strong> — describes a job description, not an achievement.</li>
          <li><strong>Helped / Assisted with…</strong> — minimises your own contribution.</li>
          <li><strong>Worked on…</strong> — vague; says nothing about the outcome.</li>
          <li><strong>Duties included…</strong> — a list of tasks, not results.</li>
        </ul>
        <p>And the empty adjectives: <em>results-driven, dynamic, passionate, hardworking, motivated</em>. They&apos;re true of every applicant, so they distinguish none.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Strong verbs by category</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Built / created</h3>
        <p>Built, Designed, Developed, Engineered, Launched, Shipped, Architected, Prototyped, Implemented.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Improved / optimised</h3>
        <p>Cut, Reduced, Increased, Improved, Streamlined, Optimised, Accelerated, Automated, Simplified.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Led / owned</h3>
        <p>Led, Owned, Drove, Coordinated, Directed, Managed, Mentored, Spearheaded.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Delivered / achieved</h3>
        <p>Delivered, Achieved, Exceeded, Won, Closed, Secured, Hit, Surpassed.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Analysed / researched</h3>
        <p>Analysed, Identified, Investigated, Modelled, Forecasted, Evaluated, Measured.</p>

        <h2 className="h-display text-3xl text-forest pt-4">The one rule: accuracy over flash</h2>
        <p>
          A strong verb only works if it&apos;s true. If you supported a project,
          &quot;Supported&quot; or &quot;Contributed to&quot; is honest; &quot;Spearheaded&quot; is a claim a
          recruiter will probe in the interview. Inflated verbs are a form of
          fabrication — they read well on paper and collapse under one follow-up
          question. Pick the most accurate strong verb, not the most impressive.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Pair the verb with a number</h2>
        <p>
          A verb sets up the bullet; a metric lands it. &quot;Reduced&quot; → &quot;Reduced
          onboarding time 40%.&quot; See{" "}
          <Link href="/learn/resume-bullet-points-with-metrics" className="underline">
            the full action–impact–number formula
          </Link>{" "}
          for how the pieces fit. When you tailor a resume with{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>,
          the rewrite keeps strong verbs and your real metrics while weaving in the
          job&apos;s keywords.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">What are good resume action verbs?</h3>
        <p>Built, Led, Shipped, Cut, Grew, Automated, Designed, Migrated, Reduced, Launched — whichever most accurately fits the work.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">What words should I avoid?</h3>
        <p>&quot;Responsible for&quot;, &quot;Helped with&quot;, &quot;Worked on&quot;, and empty adjectives like &quot;dynamic&quot; and &quot;passionate&quot;.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Different verb every bullet?</h3>
        <p>Vary enough to avoid repetition, but accuracy beats variety.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/resume-bullet-points-with-metrics" className="underline">How to write resume bullet points that actually land</Link></li>
          <li><Link href="/learn/resume-summary-vs-objective" className="underline">Resume summary vs objective — which should you use?</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
