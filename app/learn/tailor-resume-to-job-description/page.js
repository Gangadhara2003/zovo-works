import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "tailor-resume-to-job-description";
const TITLE = "How to tailor your resume to a job description (with AI, in 5 minutes)";
const PUBLISHED = "2026-05-19";

export const metadata = {
  title: TITLE,
  description:
    "Step-by-step: how to match your resume to any job description fast without lying or sounding like a chatbot. With concrete examples for software, marketing, and product roles.",
  keywords: [
    "tailor resume to job description",
    "JD-matched resume",
    "AI resume tailoring",
    "resume keyword optimisation",
    "ATS resume India",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "Tailor your resume to any JD in 5 minutes — what to change, what to leave alone, which keywords actually matter.",
    url: `https://zevo-works.in/learn/${SLUG}`,
    type: "article",
    publishedTime: PUBLISHED,
  },
};

const HOWTO_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to tailor your resume to a job description with AI",
  totalTime: "PT5M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Read the JD twice", text: "First pass for the role, second pass with a highlighter for must-have tools, frameworks, and seniority signals." },
    { "@type": "HowToStep", position: 2, name: "Map JD keywords against your real experience", text: "List every JD keyword. Mark which ones genuinely appear in your background — be honest." },
    { "@type": "HowToStep", position: 3, name: "Rewrite bullets to surface matching skills", text: "Re-phrase existing bullets so the keywords appear naturally. Don't invent experience." },
    { "@type": "HowToStep", position: 4, name: "Re-order sections", text: "Put the most relevant experience first. ATS reads top-down and so do humans." },
    { "@type": "HowToStep", position: 5, name: "Export ATS-friendly PDF", text: "Single column, no tables, no images. LaTeX or a clean template — never Canva." },
  ],
};

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_JSONLD) }}
      />
      <PostLayout
        title={TITLE}
        intro="Most candidates send the same resume to every role and hope. A 5-minute tailoring step doubles your callback rate — here's the lazy-correct version."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="7 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">Why tailoring matters more in 2026</h2>
        <p>
          Modern ATS systems don&apos;t just look for the role title anymore.
          They build a keyword density score for each application — JDs
          mention &quot;Kubernetes&quot; four times, your resume mentions it once, you
          score 25% on that signal. Generic resumes hit single-digit
          relevance scores and never make it to a human.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 1 — read the JD twice</h2>
        <p>
          The first pass is for the role: what does this team actually do,
          what would you be expected to ship in the first 90 days? The second
          pass is mechanical — open the JD in a text file and underline every
          tool, framework, language, or methodology mentioned.
        </p>
        <p>
          A typical software-engineer JD has 15–25 such keywords. You will
          not match all of them. That&apos;s fine.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 2 — map keywords against your actual experience</h2>
        <p>Make a three-column list:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Strong match</strong> — you&apos;ve used this in production, can talk about it for 15 minutes.</li>
          <li><strong>Weak match</strong> — used in a side project or course; can fake an interview for 5 minutes.</li>
          <li><strong>No match</strong> — never touched it.</li>
        </ul>
        <p>
          Resume goes after strong + weak matches. Honest interview
          conversations get triggered by no-matches — interviewers respect
          &quot;I haven&apos;t used Redis directly but I&apos;ve used Memcached for the
          same kind of problem&quot; far more than a fabricated bullet.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 3 — rewrite bullets to surface matches</h2>
        <p>Before:</p>
        <pre className="border hairline-strong p-3 text-[13px] bg-mosaic-faint overflow-x-auto">Built REST APIs for the order service handling 50 req/s.</pre>
        <p>After (JD mentions gRPC and Kafka):</p>
        <pre className="border hairline-strong p-3 text-[13px] bg-mosaic-faint overflow-x-auto">Built order-service REST APIs (later migrated to gRPC) consuming Kafka events at 50 req/s peak.</pre>
        <p>
          The change only works if you actually did the gRPC migration and
          consumed Kafka. Otherwise you&apos;ve set yourself up for a 20-second
          interview disaster.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 4 — re-order sections</h2>
        <p>
          For a Frontend role: Skills → Projects → Experience. For a Senior
          Backend role: Experience → Skills → Projects. The first thing the
          ATS and the human reader sees should be the section where your
          strongest evidence lives for THIS role.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Step 5 — ship an ATS-friendly PDF</h2>
        <p>
          One column. No images. No tables for layout (only for tabular
          data). Standard section headings (Experience, Education, Skills).
          LaTeX is best because the underlying text is clean; Word with a
          single-column template is second best; Canva is last.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The 5-minute version</h2>
        <p>
          Doing this manually for every application is exhausting. That&apos;s
          exactly why we built{" "}
          <a href="https://my-resume.in" target="_blank" rel="noreferrer" className="underline">my-resume</a>
          : paste the JD, click Optimise, and the AI does steps 2–5 in 30
          seconds — refusing to claim anything that isn&apos;t already in your
          profile. You then review and click Save.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">How many keywords should match?</h3>
        <p>
          Aim for 60%+ keyword coverage on must-have skills, 30%+ on
          nice-to-haves. Below 40% on must-haves, the ATS will likely filter
          you out.
        </p>
        <h3 className="text-xl font-semibold text-forest pt-2">Should I include skills I don&apos;t have on my resume?</h3>
        <p>
          No. The 30 seconds you save by lying gets paid back with a failed
          interview that closes the door on that company for a year.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
          <li><Link href="/learn/ai-resume-builder-india" className="underline">Best free AI resume builder for India (honest 2026 comparison)</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
