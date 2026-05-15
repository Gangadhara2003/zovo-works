import Link from "next/link";
import {
  LegalLayout,
  H,
  P,
  UL,
  Li,
  Quote,
} from "../components/LegalLayout";

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

export default function TermsPage() {
  return (
    <LegalLayout
      docId="TERMS"
      kicker="Terms of Service"
      title="Terms of"
      highlight="service."
      effective="2026.05.10"
      updated="2026.05.15"
      sections={SECTIONS}
      pairLabel="Read Privacy Policy"
      pairHref="/privacy"
    >
      <Quote>
        Plain English: use the tools as intended. We don't promise miracles.
        Don't break the law. Email us if anything's unclear.
      </Quote>

      <P>
        These Terms of Service ("Terms") govern your access to and use of the
        websites and products operated by{" "}
        <strong className="text-forest">Zevo Works</strong> ("we", "us"),
        including the marketing site at{" "}
        <a
          href="https://zevo-works.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          zevo-works.in
        </a>{" "}
        and the résumé builder at{" "}
        <a
          href="https://my-resume.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          my-resume.in
        </a>{" "}
        (each a "Service"). By accessing or using a Service you agree to these
        Terms. If you do not agree, do not use the Service.
      </P>

      <H id="agreement" n="01">Agreement</H>
      <P>
        These Terms form a binding agreement between you ("User", "you") and
        Zevo Works. Please also read our{" "}
        <Link
          href="/privacy"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          Privacy Policy
        </Link>
        , which is incorporated by reference.
      </P>

      <H id="service" n="02">The Service</H>
      <P>
        Zevo Works builds AI-powered productivity tools. Our flagship product,
        my-resume.in, lets you store your professional profile in one place
        and generate ATS-optimised résumés from it, optionally tailored to a
        job description using AI. Features may include profile management,
        résumé upload &amp; parsing, AI tailoring, LaTeX compilation, PDF
        preview &amp; download, and account management. Additional Zevo Works
        products may be added over time.
      </P>

      <H id="accounts" n="03">Accounts</H>
      <UL>
        <Li>You must be at least 16 years old to create an account.</Li>
        <Li>
          You are responsible for keeping your login credentials confidential
          and for all activity under your account.
        </Li>
        <Li>You must provide accurate information and update it when it changes.</Li>
        <Li>One account per person; do not share accounts.</Li>
        <Li>Notify us immediately if you believe your account has been compromised.</Li>
      </UL>

      <H id="use" n="04">Acceptable use</H>
      <P>You agree not to:</P>
      <UL>
        <Li>
          upload content that is unlawful, infringing, defamatory, or that you
          do not have the right to submit;
        </Li>
        <Li>
          impersonate another person or fabricate qualifications you do not
          hold;
        </Li>
        <Li>
          scrape, reverse-engineer, or attempt to extract source code or
          proprietary prompts;
        </Li>
        <Li>
          probe, attack, overload, or disrupt the Service or its underlying
          infrastructure;
        </Li>
        <Li>
          use the Service to generate spam, phishing material, or to abuse the
          AI provider's terms;
        </Li>
        <Li>
          resell or commercially redistribute the Service or large parts of it
          without permission.
        </Li>
      </UL>
      <P>We may suspend or terminate accounts that violate these rules.</P>

      <H id="content" n="05">Your content</H>
      <P>
        You retain ownership of all profile data, uploaded résumés and job
        descriptions you submit ("Your Content"). You grant us a limited,
        worldwide, royalty-free licence to host, store, process, and transmit
        Your Content solely to operate the Service for you (e.g. to compile
        your résumé, render previews, or send a JD to the AI provider for
        tailoring). This licence ends when you delete the content or your
        account.
      </P>

      <H id="ai" n="06">AI-generated output</H>
      <P>
        Résumé drafts produced with AI assistance are provided "as is" and
        may contain errors, omissions, or fabricated details. You are solely
        responsible for reviewing every AI-generated résumé before submitting
        it to an employer. We make no guarantee that AI output is accurate,
        complete, ATS-compatible with every parser, or that it will result in
        interviews or offers.
      </P>

      <H id="ip" n="07">Intellectual property</H>
      <P>
        The Service, its templates, design system, code and brand are owned by
        Zevo Works or our licensors and protected by intellectual property
        laws. We grant you a personal, non-transferable, revocable licence to
        use the Service and to use the résumés you generate for your own
        job-search purposes. All rights not expressly granted are reserved.
      </P>

      <H id="fees" n="08">Fees</H>
      <P>
        Our products are currently provided free of charge. We reserve the
        right to introduce paid plans in the future; if we do, we will give
        you reasonable notice and you may stop using or delete your account
        at any time.
      </P>

      <H id="availability" n="09">Availability</H>
      <P>
        The Service is provided on a best-effort basis. We do not promise
        specific uptime, response times, or that features will always be
        available. Maintenance, outages, rate limits, or AI provider failures
        may interrupt the Service from time to time.
      </P>

      <H id="termination" n="10">Termination</H>
      <P>
        You may stop using the Service at any time and delete your account
        from <em className="text-forest">Profile Hub → Account</em>. We may
        suspend or terminate your account if you breach these Terms, abuse the
        Service, or if we discontinue the Service. On termination, sections
        that by their nature should survive (Your Content licence wind-down,
        IP, disclaimers, liability, governing law) will survive.
      </P>

      <H id="disclaimer" n="11">Disclaimer of warranties</H>
      <P>
        <span className="uppercase tracking-[0.04em]">
          The Service is provided "as is" and "as available" without
          warranties of any kind, express or implied, including without
          limitation warranties of merchantability, fitness for a particular
          purpose, accuracy, or non-infringement. We do not warrant that the
          Service will be uninterrupted, error-free, or that generated
          résumés will help you secure any job.
        </span>
      </P>

      <H id="liability" n="12">Limitation of liability</H>
      <P>
        <span className="uppercase tracking-[0.04em]">
          To the maximum extent permitted by law, Zevo Works shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of profits, revenue, data, or job
          opportunities, arising from your use of the Service. Our aggregate
          liability for any claim relating to the Service shall not exceed
          INR 1,000 (or the total fees you paid us in the 12 months before
          the claim, if greater).
        </span>
      </P>

      <H id="law" n="13">Governing law &amp; disputes</H>
      <P>
        These Terms are governed by the laws of India. Any dispute arising
        out of or in connection with these Terms or the Service shall be
        subject to the exclusive jurisdiction of the courts located in
        Bengaluru, Karnataka. If you are a consumer in another jurisdiction,
        mandatory local consumer-protection laws may also apply.
      </P>

      <H id="changes" n="14">Changes</H>
      <P>
        We may update these Terms from time to time. The "Updated" date in
        the metadata sheet above reflects the current version. Material
        changes will be highlighted on the home page or via email. Continued
        use of the Service after changes take effect constitutes acceptance
        of the revised Terms.
      </P>

      <H id="contact" n="15">Contact</H>
      <P>
        Questions about these Terms? Email{" "}
        <a
          href="mailto:info@zevo-works.in"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          info@zevo-works.in
        </a>
        .
      </P>
    </LegalLayout>
  );
}
