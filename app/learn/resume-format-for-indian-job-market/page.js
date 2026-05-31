import Link from "next/link";
import PostLayout from "../PostLayout";

const SLUG = "resume-format-for-indian-job-market";
const TITLE = "Resume format for the Indian job market (2026)";
const PUBLISHED = "2026-05-28";

export const metadata = {
  title: TITLE,
  description:
    "What to include, what to leave out, and how to structure a resume for hiring in India — from personal details and photos to length, sections, and passing the ATS.",
  keywords: [
    "resume format India",
    "Indian resume format",
    "CV format India",
    "resume format for freshers India",
    "biodata vs resume",
  ],
  alternates: { canonical: `/learn/${SLUG}` },
  openGraph: {
    title: TITLE,
    description:
      "How to structure a resume for the Indian job market — what to include and what to drop.",
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
      name: "Should an Indian resume include a photo?",
      acceptedAnswer: { "@type": "Answer", text: "For most corporate and tech roles screened by an ATS, skip the photo — images don't parse and aren't needed. Some traditional sectors and certain roles still expect one; follow the norm for your field, but never put critical text inside the image." },
    },
    {
      "@type": "Question",
      name: "What personal details go on an Indian resume?",
      acceptedAnswer: { "@type": "Answer", text: "Name, phone, professional email, city, and LinkedIn/GitHub links. Date of birth, marital status, father's name, full residential address, and religion are outdated 'biodata' fields — leave them off a modern resume unless a specific employer requires them." },
    },
    {
      "@type": "Question",
      name: "Is a biodata the same as a resume?",
      acceptedAnswer: { "@type": "Answer", text: "No. Biodata is an older format heavy on personal details. A modern resume focuses on skills, experience, and achievements relevant to the job. For corporate, tech, and most professional roles, use a resume, not biodata." },
    },
  ],
};

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <PostLayout
        title={TITLE}
        intro="Indian resume advice is full of holdovers from the 'biodata' era — photos, date of birth, father's name. Modern hiring here works like everywhere else: skills, achievements, and a clean format the ATS can read. Here's what to keep and what to drop."
        published={PUBLISHED}
        slug={SLUG}
        readingTime="6 min"
      >
        <h2 className="h-display text-3xl text-forest pt-2">The structure that works</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Header</strong> — name, phone, professional email, city, LinkedIn + GitHub (for tech).</li>
          <li><strong>Summary or objective</strong> — optional, one to three lines, tailored. (<Link href="/learn/resume-summary-vs-objective" className="underline">which to use</Link>.)</li>
          <li><strong>Experience</strong> — for experienced candidates; or <strong>Projects</strong> first for freshers.</li>
          <li><strong>Skills</strong> — focused and relevant, grouped.</li>
          <li><strong>Education</strong> — degree, institution, year, CGPA if strong.</li>
          <li><strong>Certifications / achievements</strong> — if relevant.</li>
        </ol>

        <h2 className="h-display text-3xl text-forest pt-4">What to leave OUT (the biodata holdovers)</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Date of birth, marital status, father&apos;s name</strong> — outdated and irrelevant to hiring.</li>
          <li><strong>Full residential address</strong> — your city is enough.</li>
          <li><strong>Religion, nationality, languages-known-at-mother-tongue-level</strong> — skip unless genuinely relevant to the role.</li>
          <li><strong>&quot;Declaration&quot; and signature block</strong> — a relic; recruiters don&apos;t need it.</li>
          <li><strong>Photo</strong> — skip for ATS-screened corporate/tech roles (see FAQ).</li>
        </ul>
        <p>
          Every line that isn&apos;t helping you get the interview is taking space from
          something that could.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Length and layout</h2>
        <p>
          One page for freshers and up to ~5 years of experience; two pages are
          fine beyond that. (<Link href="/learn/how-long-should-a-resume-be" className="underline">full guidance on length</Link>.)
          Single column, standard headings, real selectable text, consistent dates,
          a standard font — the same rules that keep any resume{" "}
          <Link href="/learn/ats-friendly-resume-tips" className="underline">ATS-friendly</Link>{" "}
          apply here.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">Resume vs biodata vs CV</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Resume</strong> — one to two pages, skills and achievements, tailored to a job. Use this for corporate, tech, and most professional roles.</li>
          <li><strong>Biodata</strong> — older, personal-detail-heavy format. Largely outdated for professional hiring.</li>
          <li><strong>CV</strong> — long, comprehensive, used in academia and research. Different document, different purpose.</li>
        </ul>

        <h2 className="h-display text-3xl text-forest pt-4">Tailor it, then ship it</h2>
        <p>
          A clean Indian-market resume still has to match each job&apos;s keywords to
          rank well.{" "}
          <a href="https://my-resume.in" target="_blank" rel="noopener noreferrer" className="underline">my-resume</a>{" "}
          handles the format and tailors to any JD — built for Indian job seekers,
          free.
        </p>

        <h2 className="h-display text-3xl text-forest pt-4">FAQ</h2>
        <h3 className="text-xl font-semibold text-forest pt-2">Should an Indian resume include a photo?</h3>
        <p>Skip it for most ATS-screened corporate/tech roles. Follow your field&apos;s norm, but never put critical text in the image.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">What personal details to include?</h3>
        <p>Name, phone, email, city, LinkedIn/GitHub. Drop DOB, marital status, father&apos;s name, and full address.</p>
        <h3 className="text-xl font-semibold text-forest pt-2">Is biodata the same as a resume?</h3>
        <p>No — biodata is an older personal-detail format. Use a modern resume for professional roles.</p>

        <h2 className="h-display text-3xl text-forest pt-4">Related guides</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="/learn/resume-for-freshers-india" className="underline">Resume for freshers in India (with no experience)</Link></li>
          <li><Link href="/learn/best-job-portals-in-india" className="underline">Best job portals in India (and how to use them well)</Link></li>
        </ul>
      </PostLayout>
    </>
  );
}
