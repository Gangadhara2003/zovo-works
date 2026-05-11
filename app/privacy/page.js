import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy — Zevo Works",
  description:
    "How Zevo Works collects, uses, and protects your data across my-resume.in and other Zevo Works products.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  { id: "overview", n: "01", label: "Overview" },
  { id: "data", n: "02", label: "Data we collect" },
  { id: "use", n: "03", label: "How we use it" },
  { id: "storage", n: "04", label: "Storage & retention" },
  { id: "sharing", n: "05", label: "Sharing & third parties" },
  { id: "cookies", n: "06", label: "Cookies & tracking" },
  { id: "rights", n: "07", label: "Your rights" },
  { id: "security", n: "08", label: "Security" },
  { id: "children", n: "09", label: "Children" },
  { id: "changes", n: "10", label: "Changes" },
  { id: "contact", n: "11", label: "Contact" },
];

function H({ id, n, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 mt-14 mb-4 flex items-baseline gap-4 font-[Anton] text-2xl sm:text-3xl uppercase tracking-tight text-charcoal"
    >
      <span className="text-base text-yellow">{n}</span>
      <span>{children}</span>
    </h2>
  );
}

function P({ children }) {
  return (
    <p className="text-charcoal/75 leading-relaxed mb-4 text-[15px]">
      {children}
    </p>
  );
}

function Li({ children }) {
  return (
    <li className="text-charcoal/75 leading-relaxed mb-2 text-[15px]">
      {children}
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 hover:text-charcoal mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          {/* Hero card */}
          <div className="relative overflow-hidden rounded-3xl border border-charcoal/10 bg-light-gray p-8 sm:p-12 mb-12">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow/30 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-charcoal/10 mb-5">
                <Shield size={12} className="text-charcoal/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/60">
                  Legal · Privacy
                </span>
              </div>
              <h1 className="font-[Anton] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-charcoal leading-[0.9]">
                Privacy
                <br />
                <span className="relative inline-block">
                  Policy
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow -z-0" />
                </span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-charcoal/50">
                <span>Effective: 10 May 2026</span>
                <span className="hidden sm:inline">·</span>
                <span>Last updated: 10 May 2026</span>
                <span className="hidden sm:inline">·</span>
                <span>Operator: Zevo Works (zevo-works.in)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
            {/* TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 rounded-2xl border border-charcoal/10 bg-white p-3">
                <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/40">
                  Index
                </div>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-baseline gap-3 px-3 py-2 rounded-lg text-[12px] uppercase tracking-wider text-charcoal/55 hover:bg-light-gray hover:text-charcoal transition-colors"
                  >
                    <span className="text-yellow text-[10px] font-semibold">{s.n}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Body */}
            <article className="rounded-2xl border border-charcoal/10 bg-white p-6 sm:p-10">
              <P>
                <strong className="text-charcoal">Zevo Works</strong> ("we",
                "us", "our") builds AI-powered productivity tools, including{" "}
                <a
                  href="https://my-resume.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  my-resume.in
                </a>
                . This Privacy Policy explains what data we collect across our
                websites and products, why we collect it, and the rights you
                have over it. We try to keep this human-readable — if anything
                is unclear, email us (section 11).
              </P>

              <H id="overview" n="01">
                Overview
              </H>
              <P>
                Zevo Works is operated by an individual developer based in
                India and serves users worldwide. We are the data controller
                for the personal data you submit. We collect only what we need
                to operate our products, and we do not sell your data to
                anyone.
              </P>

              <H id="data" n="02">
                Data we collect
              </H>
              <P>
                Different Zevo Works products collect different data. The
                marketing site (zevo-works.in) collects almost nothing.
                Product-specific collection is described below.
              </P>
              <p className="text-charcoal/55 text-xs uppercase tracking-[0.18em] font-semibold mt-6 mb-3">
                Marketing site (zevo-works.in)
              </p>
              <ul className="list-disc pl-6 mb-6">
                <Li>
                  Anonymous, aggregated traffic stats (pageviews, referrer,
                  country-level region, browser/OS user-agent string).
                </Li>
                <Li>No accounts, no cookies tied to your identity.</Li>
                <Li>If you email us, we keep the message thread.</Li>
              </ul>
              <p className="text-charcoal/55 text-xs uppercase tracking-[0.18em] font-semibold mt-6 mb-3">
                my-resume.in product
              </p>
              <ul className="list-disc pl-6 mb-4">
                <Li>
                  <strong>Account data:</strong> name, email, hashed password
                  (bcrypt). If you sign in with Google, we receive your
                  Google email, name, profile picture URL and a Google ID —
                  never your Google password.
                </Li>
                <Li>
                  <strong>Profile data:</strong> everything you fill in on the
                  Profile Hub — personal details, education, work
                  experience, internships, skills, projects, certifications,
                  languages, achievements and links.
                </Li>
                <Li>
                  <strong>Resume artefacts:</strong> uploaded resume PDFs,
                  parsed text, generated LaTeX source, compiled PDFs and
                  build metadata.
                </Li>
                <Li>
                  <strong>Job descriptions:</strong> any JD text you paste in
                  for AI tailoring.
                </Li>
                <Li>
                  <strong>Usage telemetry:</strong> pageviews, route timings,
                  user-agent string, approximate locale, a randomly
                  generated session ID.
                </Li>
              </ul>

              <H id="use" n="03">
                How we use your data
              </H>
              <P>We use the data above only to:</P>
              <ul className="list-disc pl-6 mb-4">
                <Li>authenticate you and keep your session alive;</Li>
                <Li>
                  store your profile so you can generate unlimited resumes
                  from it;
                </Li>
                <Li>
                  compile resumes, render previews, and let you download
                  PDFs;
                </Li>
                <Li>
                  send your job description to our AI provider so it can
                  tailor a resume to it (see section 05);
                </Li>
                <Li>
                  diagnose bugs, monitor performance and improve the product;
                </Li>
                <Li>respond to support requests.</Li>
              </ul>
              <P>
                We do not use your profile data to train AI models, and we do
                not run ads.
              </P>

              <H id="storage" n="04">
                Storage & retention
              </H>
              <P>
                Data is stored in our managed database and object storage.
                Compiled PDFs and uploaded resumes are kept until you delete
                them or close your account. Account and profile data are kept
                for as long as your account is active. When you delete your
                account from <em>Profile Hub → Account</em>, we permanently
                remove your account, profile, all resumes and JD data within
                30 days from primary storage. Encrypted backups are rotated
                within 90 days.
              </P>

              <H id="sharing" n="05">
                Sharing & third parties
              </H>
              <P>
                We share data only with the sub-processors needed to run our
                products:
              </P>
              <ul className="list-disc pl-6 mb-4">
                <Li>
                  <strong>Cloud hosting & database</strong> — to store
                  account, profile and resume data.
                </Li>
                <Li>
                  <strong>AI provider</strong> (e.g. OpenAI / Anthropic /
                  Google AI) — when you tailor a resume to a job
                  description, the relevant profile fields and the JD text
                  are sent to the model provider for inference. We do not
                  authorise providers to train on this data where that
                  option is available.
                </Li>
                <Li>
                  <strong>Google OAuth</strong> — only if you choose Google
                  sign-in.
                </Li>
                <Li>
                  <strong>LaTeX compiler</strong> — runs in our infrastructure
                  (Docker); your data is not sent to a third party for
                  compilation.
                </Li>
                <Li>
                  <strong>Legal authorities</strong> — only if compelled by
                  valid legal process.
                </Li>
              </ul>
              <P>We never sell, rent, or trade your personal data.</P>

              <H id="cookies" n="06">
                Cookies & tracking
              </H>
              <P>
                The marketing site uses no identifying cookies. The
                my-resume.in product uses a single first-party HTTP-only
                session cookie to keep you logged in, and minimal first-party
                usage telemetry (pageviews, route paths). We do not use
                third-party advertising cookies, fingerprinting, or
                cross-site trackers anywhere.
              </P>

              <H id="rights" n="07">
                Your rights
              </H>
              <P>You can, at any time:</P>
              <ul className="list-disc pl-6 mb-4">
                <Li>
                  <strong>Access & correct</strong> your profile data
                  directly from the Profile Hub.
                </Li>
                <Li>
                  <strong>Export</strong> your generated resumes as PDF.
                </Li>
                <Li>
                  <strong>Delete</strong> individual resumes or job
                  descriptions from the dashboard.
                </Li>
                <Li>
                  <strong>Delete your entire account</strong> from Profile
                  Hub → Account → Delete Account.
                </Li>
                <Li>
                  <strong>Withdraw consent</strong> for AI-tailoring by not
                  pasting a job description.
                </Li>
              </ul>
              <P>
                Under applicable laws (GDPR / India's DPDP Act, 2023 /
                CCPA), you may also have the right to data portability,
                restriction of processing, and to lodge a complaint with a
                supervisory authority. Email us to exercise any of these
                rights.
              </P>

              <H id="security" n="08">
                Security
              </H>
              <P>
                Passwords are hashed with bcrypt. Sessions use HTTP-only,
                signed cookies over HTTPS. We follow least-privilege access
                on our infrastructure and patch dependencies regularly. No
                system is perfectly secure; please use a strong, unique
                password and keep it private.
              </P>

              <H id="children" n="09">
                Children
              </H>
              <P>
                Our products are not directed at children under 16. If you
                believe a minor has created an account, contact us and we
                will remove it.
              </P>

              <H id="changes" n="10">
                Changes
              </H>
              <P>
                We may update this policy as our products evolve. Material
                changes will be highlighted on the home page or via email.
                The "Last updated" date at the top always reflects the
                current version.
              </P>

              <H id="contact" n="11">
                Contact
              </H>
              <P>
                Questions, deletion requests, or anything else — email{" "}
                <a
                  href="mailto:gangadharaks2003@gmail.com"
                  className="font-semibold underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  gangadharaks2003@gmail.com
                </a>
                . We aim to respond within 5 working days.
              </P>

              <div className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] font-semibold">
                <Link
                  href="/terms"
                  className="text-charcoal/55 hover:text-charcoal transition-colors"
                >
                  → Read Terms of Service
                </Link>
                <Link
                  href="/"
                  className="text-charcoal/55 hover:text-charcoal transition-colors"
                >
                  ← Back to home
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
