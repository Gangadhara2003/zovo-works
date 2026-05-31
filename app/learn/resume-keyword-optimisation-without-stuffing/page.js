import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "resume-keyword-optimisation-without-stuffing";
const TITLE = "Resume keyword optimisation — without the stuffing";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "There's a line between optimising your resume for keywords and stuffing it. Cross it and you fail with both the ATS and the recruiter. Here's how to add JD keywords so they read naturally — and honestly.",
  keywords: [
    "resume keyword optimisation",
    "keyword stuffing resume",
    "how to add keywords to resume",
    "ATS keyword optimisation",
    "natural resume keywords",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "How to add a job's keywords to your resume so they read naturally — and honestly.",
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
      name: "What counts as keyword stuffing on a resume?",
      acceptedAnswer: { "@type": "Answer", text: "Repeating the same keyword unnaturally, hiding keywords in white text, padding a skills list with terms you don't use, or claiming skills you don't have. Modern ATS detects repetition and recruiters spot padding instantly." },
    },
    {
      "@type": "Question",
      name: "How do I add keywords without stuffing?",
      acceptedAnswer: { "@type": "Answer", text: "Weave each keyword into a real bullet point that demonstrates it, mention a tool once in skills and once in context, and only include skills you genuinely have. Coverage in context beats raw frequency." },
    },
    {
      "@type": "Question",
      name: "Does the ATS reward repeating keywords?",
      acceptedAnswer: { "@type": "Answer", text: "No. Modern systems deduplicate, so saying 'Python' five times doesn't multiply your score. One keyword used meaningfully in a bullet is worth more than the same word listed repeatedly." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="Keyword optimisation gets a bad name because people confuse it with stuffing. Done right, it's just making sure your real skills are described in the words the job is scanning for. Done wrong, it tanks you with the ATS and the human. Here's the right way."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Optimisation vs stuffing — the actual difference</h2>
        <p>
          <strong>Optimisation</strong> is describing skills you genuinely have in
          the language the job uses. <strong>Stuffing</strong> is gaming the count:
          repeating words, hiding them, or claiming things you can&apos;t back up. The
          first helps you; the second gets you filtered — modern parsers
          deduplicate, and recruiters notice padding the moment they read.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The rules that keep it natural</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">1. One keyword, one home in context</h3>
        <p>
          A tool can appear in your Skills section <em>and</em> in one bullet that
          proves you used it. That&apos;s coverage, not stuffing. Listing it five times
          across the page is the opposite.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">2. Put keywords inside achievements</h3>
        <p>
          &quot;Built a CI/CD pipeline with GitHub Actions that cut deploy time 60%&quot;
          carries the keywords <em>and</em> proves them. A skills line that just
          says &quot;CI/CD, GitHub Actions&quot; is weaker on its own.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">3. Match the JD&apos;s exact terms for tools</h3>
        <p>
          The ATS matches specific technologies literally, so use the form the
          listing uses — &quot;PostgreSQL&quot; not just &quot;SQL database&quot;. For general
          concepts, natural phrasing is fine; parsers understand common synonyms.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">4. Cover the must-haves, skip the noise</h3>
        <p>
          You don&apos;t need every keyword — focus on the{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">must-haves from the requirements section</Link>{" "}
          that you genuinely match.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The honesty boundary</h2>
        <p>
          The single rule that keeps optimisation ethical: <strong>only add
          keywords for skills you actually have.</strong> A keyword you can&apos;t
          defend in an interview isn&apos;t optimisation — it&apos;s a liability that
          surfaces in round one. If the job wants a skill you lack, leave it out or
          go build a small real project so you can claim it honestly.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Doing it without the manual effort</h2>
        <p>
          This is exactly what{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          automates: it scores your keyword match against a JD, shows present vs
          missing, and rewrites bullets to include the missing keywords{" "}
          <em>you genuinely have</em> — flagging the ones you don&apos;t instead of
          stuffing them in. Optimisation with the honesty guardrail built in.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">What counts as keyword stuffing?</h3>
        <p>Repeating keywords unnaturally, hiding them in white text, padding skills with unused terms, or claiming skills you don&apos;t have.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">How do I add keywords without stuffing?</h3>
        <p>Weave each into a real bullet, mention tools once in skills and once in context, and only include genuine skills.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Does repeating keywords help?</h3>
        <p>No — modern ATS deduplicates. Context beats frequency.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/find-keywords-in-job-description" className="underline">How to find the right keywords in a job description</Link></li>
          <li><Link href="/learn/tailor-resume-to-job-description" className="underline">How to tailor your resume to a job description in 5 minutes</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
