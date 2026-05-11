import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms of Service — Zevo Works",
  description:
    "The terms governing your use of Zevo Works products, including my-resume.in.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  { id: "agreement", n: "01", label: "Agreement" },
  { id: "service", n: "02", label: "The Service" },
  { id: "accounts", n: "03", label: "Accounts" },
  { id: "use", n: "04", label: "Acceptable use" },
  { id: "content", n: "05", label: "Your content" },
  { id: "ai", n: "06", label: "AI output" },
  { id: "ip", n: "07", label: "Intellectual property" },
  { id: "fees", n: "08", label: "Fees" },
  { id: "availability", n: "09", label: "Availability" },
  { id: "termination", n: "10", label: "Termination" },
  { id: "disclaimer", n: "11", label: "Disclaimer" },
  { id: "liability", n: "12", label: "Liability" },
  { id: "law", n: "13", label: "Governing law" },
  { id: "changes", n: "14", label: "Changes" },
  { id: "contact", n: "15", label: "Contact" },
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

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-28 pb-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
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
                <Scale size={12} className="text-charcoal/60" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/60">
                  Legal · Terms
                </span>
              </div>
              <h1 className="font-[Anton] text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-charcoal leading-[0.9]">
                Terms of
                <br />
                <span className="relative inline-block">
                  Service
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
              <nav className="sticky top-24 rounded-2xl border border-charcoal/10 bg-white p-3 max-h-[78vh] overflow-y-auto">
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
                These Terms of Service ("Terms") govern your access to and
                use of the websites and products operated by{" "}
                <strong className="text-charcoal">Zevo Works</strong> ("we",
                "us"), including the marketing site at{" "}
                <a
                  href="https://zevo-works.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  zevo-works.in
                </a>{" "}
                and the resume builder at{" "}
                <a
                  href="https://my-resume.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  my-resume.in
                </a>{" "}
                (each a "Service"). By accessing or using a Service you agree
                to these Terms. If you do not agree, do not use the Service.
              </P>

              <H id="agreement" n="01">
                Agreement
              </H>
              <P>
                These Terms form a binding agreement between you ("User",
                "you") and Zevo Works. Please also read our{" "}
                <Link
                  href="/privacy"
                  className="underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  Privacy Policy
                </Link>
                , which is incorporated by reference.
              </P>

              <H id="service" n="02">
                The Service
              </H>
              <P>
                Zevo Works builds AI-powered productivity tools. Our flagship
                product, my-resume.in, lets you store your professional
                profile in one place and generate ATS-optimised resumes from
                it, optionally tailored to a job description using AI.
                Features may include profile management, resume upload &
                parsing, AI tailoring, LaTeX compilation, PDF preview &
                download, and account management. Additional Zevo Works
                products may be added over time.
              </P>

              <H id="accounts" n="03">
                Accounts
              </H>
              <ul className="list-disc pl-6 mb-4">
                <Li>You must be at least 16 years old to create an account.</Li>
                <Li>
                  You are responsible for keeping your login credentials
                  confidential and for all activity under your account.
                </Li>
                <Li>
                  You must provide accurate information and update it when
                  it changes.
                </Li>
                <Li>One account per person; do not share accounts.</Li>
                <Li>
                  Notify us immediately if you believe your account has been
                  compromised.
                </Li>
              </ul>

              <H id="use" n="04">
                Acceptable use
              </H>
              <P>You agree not to:</P>
              <ul className="list-disc pl-6 mb-4">
                <Li>
                  upload content that is unlawful, infringing, defamatory,
                  or that you do not have the right to submit;
                </Li>
                <Li>
                  impersonate another person or fabricate qualifications you
                  do not hold;
                </Li>
                <Li>
                  scrape, reverse-engineer, or attempt to extract source
                  code or proprietary prompts;
                </Li>
                <Li>
                  probe, attack, overload, or disrupt the Service or its
                  underlying infrastructure;
                </Li>
                <Li>
                  use the Service to generate spam, phishing material or to
                  abuse the AI provider's terms;
                </Li>
                <Li>
                  resell or commercially redistribute the Service or large
                  parts of it without permission.
                </Li>
              </ul>
              <P>
                We may suspend or terminate accounts that violate these
                rules.
              </P>

              <H id="content" n="05">
                Your content
              </H>
              <P>
                You retain ownership of all profile data, uploaded resumes
                and job descriptions you submit ("Your Content"). You grant
                us a limited, worldwide, royalty-free licence to host,
                store, process, and transmit Your Content solely to operate
                the Service for you (e.g. to compile your resume, render
                previews, or send a JD to the AI provider for tailoring).
                This licence ends when you delete the content or your
                account.
              </P>

              <H id="ai" n="06">
                AI-generated output
              </H>
              <P>
                Resume drafts produced with AI assistance are provided "as
                is" and may contain errors, omissions, or fabricated
                details. You are solely responsible for reviewing every
                AI-generated resume before submitting it to an employer. We
                make no guarantee that AI output is accurate, complete,
                ATS-compatible with every parser, or that it will result in
                interviews or offers.
              </P>

              <H id="ip" n="07">
                Intellectual property
              </H>
              <P>
                The Service, its templates, design system, code and brand
                are owned by Zevo Works or our licensors and protected by
                intellectual property laws. We grant you a personal,
                non-transferable, revocable licence to use the Service and
                to use the resumes you generate for your own job-search
                purposes. All rights not expressly granted are reserved.
              </P>

              <H id="fees" n="08">
                Fees
              </H>
              <P>
                Our products are currently provided free of charge. We
                reserve the right to introduce paid plans in the future; if
                we do, we will give you reasonable notice and you may stop
                using or delete your account at any time.
              </P>

              <H id="availability" n="09">
                Availability
              </H>
              <P>
                The Service is provided on a best-effort basis. We do not
                promise specific uptime, response times, or that features
                will always be available. Maintenance, outages, rate limits,
                or AI provider failures may interrupt the Service from time
                to time.
              </P>

              <H id="termination" n="10">
                Termination
              </H>
              <P>
                You may stop using the Service at any time and delete your
                account from <em>Profile Hub → Account</em>. We may suspend
                or terminate your account if you breach these Terms, abuse
                the Service, or if we discontinue the Service. On
                termination, sections that by their nature should survive
                (Your Content licence wind-down, IP, disclaimers, liability,
                governing law) will survive.
              </P>

              <H id="disclaimer" n="11">
                Disclaimer of warranties
              </H>
              <P className="uppercase">
                The Service is provided "as is" and "as available" without
                warranties of any kind, express or implied, including
                without limitation warranties of merchantability, fitness
                for a particular purpose, accuracy, or non-infringement. We
                do not warrant that the Service will be uninterrupted,
                error-free, or that generated resumes will help you secure
                any job.
              </P>

              <H id="liability" n="12">
                Limitation of liability
              </H>
              <P className="uppercase">
                To the maximum extent permitted by law, Zevo Works shall not
                be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits,
                revenue, data, or job opportunities, arising from your use
                of the Service. Our aggregate liability for any claim
                relating to the Service shall not exceed INR 1,000 (or the
                total fees you paid us in the 12 months before the claim,
                if greater).
              </P>

              <H id="law" n="13">
                Governing law & disputes
              </H>
              <P>
                These Terms are governed by the laws of India. Any dispute
                arising out of or in connection with these Terms or the
                Service shall be subject to the exclusive jurisdiction of
                the courts located in Bengaluru, Karnataka. If you are a
                consumer in another jurisdiction, mandatory local
                consumer-protection laws may also apply.
              </P>

              <H id="changes" n="14">
                Changes
              </H>
              <P>
                We may update these Terms from time to time. The "Last
                updated" date at the top reflects the current version.
                Material changes will be highlighted on the home page or
                via email. Continued use of the Service after changes take
                effect constitutes acceptance of the revised Terms.
              </P>

              <H id="contact" n="15">
                Contact
              </H>
              <P>
                Questions about these Terms? Email{" "}
                <a
                  href="mailto:gangadharaks2003@gmail.com"
                  className="font-semibold underline decoration-yellow decoration-2 underline-offset-2 hover:bg-yellow/20"
                >
                  gangadharaks2003@gmail.com
                </a>
                .
              </P>

              <div className="mt-12 pt-8 border-t border-charcoal/10 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] font-semibold">
                <Link
                  href="/privacy"
                  className="text-charcoal/55 hover:text-charcoal transition-colors"
                >
                  → Read Privacy Policy
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
