import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "resume-for-freshers-india";
const TITLE = "Resume for freshers in India (with no experience)";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "No work experience yet? A fresher resume wins on projects, internships, and skills — and still has to pass the ATS. Here's exactly what to put on it, in what order, for the Indian job market.",
  keywords: [
    "resume for freshers",
    "fresher resume India",
    "resume for freshers with no experience",
    "resume maker for freshers India",
    "engineering fresher resume",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "What to put on a fresher resume — projects, internships, skills — and how to make it ATS-friendly for the Indian market.",
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
      name: "What should a fresher put on a resume with no experience?",
      acceptedAnswer: { "@type": "Answer", text: "Lead with a Projects section (academic and personal), then internships or training, then a focused Skills section, then Education. Use the job description's keywords in your project descriptions where they genuinely apply." },
    },
    {
      "@type": "Question",
      name: "How long should a fresher resume be in India?",
      acceptedAnswer: { "@type": "Answer", text: "One page. As a fresher you don't yet have enough relevant, proven content to justify two — and padding weakens it. Keep it tight and relevant." },
    },
    {
      "@type": "Question",
      name: "Should a fresher include a photo and personal details?",
      acceptedAnswer: { "@type": "Answer", text: "Skip the photo for ATS-screened roles — images don't parse. Include name, phone, email, city, and a LinkedIn/GitHub link. Date of birth, marital status, and full address are unnecessary." },
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
        intro="A fresher resume has a chicken-and-egg problem: you need experience to get a job, and a job to get experience. The way out is to lead with what you do have — projects, internships, and real skills — structured so both the ATS and a recruiter can see your potential fast."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="7 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The order that works for freshers</h2>
        <p>
          Experienced candidates lead with work history. You don&apos;t have one yet,
          so flip the structure to put your strongest evidence first:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Header</strong> — name, phone, email, city, LinkedIn + GitHub links. No photo for ATS roles.</li>
          <li><strong>Short summary (optional)</strong> — one or two honest lines about what you&apos;re aiming for and your strongest skill.</li>
          <li><strong>Projects</strong> — your biggest asset. Lead with these.</li>
          <li><strong>Internships / training</strong> — even short ones count.</li>
          <li><strong>Skills</strong> — focused and relevant, grouped sensibly.</li>
          <li><strong>Education</strong> — degree, college, year, and CGPA if it&apos;s strong.</li>
          <li><strong>Certifications / achievements</strong> — if relevant.</li>
        </ol>

        <h2 className="h-display text-3xl text-forest pt-4">Make your projects do the heavy lifting</h2>
        <p>
          A project section is where a fresher proves capability. Write each
          project like an experience bullet: what you built, the stack, and a
          concrete outcome.
        </p>
        <div className="border hairline p-4">
          <p className="!mt-0 mono-label text-grid/55 mb-1">WEAK</p>
          <p className="!mt-0">Made a website using React.</p>
          <p className="!mt-2 mono-label text-grid/55 mb-1">STRONG</p>
          <p className="!mt-0">Built a full-stack expense tracker (React + Node + PostgreSQL); deployed on a free tier and used by 30+ classmates.</p>
        </div>
        <p>
          Two or three strong projects beat a long list of half-finished ones.
          Pick the ones closest to the jobs you&apos;re applying for, and mirror those
          listings&apos;{" "}
          <Link href="/learn/find-keywords-in-job-description" className="underline">keywords</Link>{" "}
          in your descriptions — honestly.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Skills: focused, not a dump</h2>
        <p>
          A wall of 40 skills signals nothing. Group a tight, relevant set —
          languages, frameworks, tools — and only list what you can actually talk
          about in an interview. If the job asks for a skill you&apos;re still
          learning, it&apos;s fine to include it once you&apos;ve used it in a real
          project; don&apos;t list things you&apos;ve only heard of.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">The honesty rule for freshers</h2>
        <p>
          It&apos;s tempting to inflate when you&apos;re competing against thousands. Don&apos;t.
          Indian hiring rounds are technical — a fabricated skill collapses in the
          first interview question. Everything on your resume should be something
          you can demonstrate. Tailoring to a job means emphasising your{" "}
          <em>real</em> relevant work, not inventing new work.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Keep it ATS-friendly</h2>
        <p>
          Freshers apply through portals and campus systems that parse resumes the
          same way companies do: single column, real text, standard headings,
          consistent dates. A two-column &quot;creative&quot; template is the most common
          reason a strong fresher resume scores low. If you want the structure
          handled for you,{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          builds a clean, ATS-parseable resume and checks your keyword match
          against any listing — free.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">What goes on a fresher resume with no experience?</h3>
        <p>Projects first, then internships/training, then a focused Skills section, then Education. Use the JD&apos;s keywords in your project descriptions where they genuinely apply.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">How long should it be?</h3>
        <p>One page. Keep it tight and relevant; don&apos;t pad.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Photo and personal details?</h3>
        <p>Skip the photo for ATS roles. Include name, phone, email, city, and LinkedIn/GitHub. DOB, marital status, and full address aren&apos;t needed.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/resume-bullet-points-with-metrics" className="underline">How to write resume bullet points that actually land</Link></li>
          <li><Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly resume in 2026 — what really beats the filter</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
