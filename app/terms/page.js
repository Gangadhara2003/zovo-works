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
  { id: "grievance", n: "15", label: "Grievance officer" },
  { id: "contact", n: "16", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      docId="TERMS"
      kicker="Terms of Service"
      title="Terms of"
      highlight="service."
      effective="2026.05.10"
      updated="2026.07.09"
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
        Zevo Works, a GST-registered sole proprietorship (GSTIN 29DUUPG0736G1ZA)
        based in Kempanahalli, Davanagere, Karnataka, India. Please also read our{" "}
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
        my-resume runs on a freemium model: a free tier (24 hours of unlimited
        AI access every 7 days) plus optional paid plans for continuous access —
        currently ₹59 / 7 days, ₹109 / 15 days, and ₹219 / 28 days, all inclusive
        of 18% GST. Current pricing is shown on the my-resume pricing page; we may
        revise plans or prices with at least{" "}
        <strong className="text-forest">7 days'</strong> notice before the change
        takes effect. Payments are processed by Razorpay (INR only); Razorpay may
        retain transaction records as required by applicable law and its own terms
        of service, which you accept when making a payment.
      </P>
      <UL>
        <Li>
          <strong className="text-forest">One-time passes — no auto-renewal.</strong>{" "}
          Each paid plan is a one-time, prepaid pass for a fixed number of days.
          There is no subscription, no recurring charge, and no payment mandate
          stored — nothing renews automatically. To continue after a pass ends,
          you choose to buy another.
        </Li>
        <Li>
          <strong className="text-forest">Cancellation.</strong> Because plans do
          not auto-renew, there is nothing to cancel mid-cycle. If you stop using
          the Service or delete your account during a paid period, access runs
          until the pass expires; unused time is not refunded.
        </Li>
        <Li>
          <strong className="text-forest">Refunds.</strong> Paid plans are
          non-refundable. As a good-faith exception, if a genuine problem on our
          side (a bug, downtime, or a provider-side AI failure) disrupts a paid
          feature, we extend your access by +1 day per incident on request, in
          place of a refund. The full refund policy is published at{" "}
          <a
            href="https://my-resume.in/refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
          >
            my-resume.in/refund-policy
          </a>.
        </Li>
        <Li>
          <strong className="text-forest">GST invoice.</strong> As a
          GST-registered business we issue a GST-compliant tax invoice for every
          paid transaction, delivered by Razorpay to your registered email.
        </Li>
      </UL>

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
      <P>
        When you delete your account, we permanently remove your account,
        profile, résumés and job-description data from primary storage within{" "}
        <strong className="text-forest">30 days</strong>, and purge encrypted
        backups within <strong className="text-forest">90 days</strong>, except
        where we must retain limited records (e.g. GST/tax invoices) to comply
        with law. See our{" "}
        <Link href="/privacy" className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30">Privacy Policy</Link>{" "}
        for detail.
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
          liability for any claim relating to the Service shall not exceed the
          total fees you paid us for the Service in the 12 months preceding the
          event giving rise to the claim. Nothing in these Terms excludes
          liability that cannot be excluded under applicable law.
        </span>
      </P>

      <H id="law" n="13">Governing law &amp; disputes</H>
      <P>
        These Terms are governed by the laws of India. Any dispute arising
        out of or in connection with these Terms or the Service shall be
        subject to the exclusive jurisdiction of the courts located in
        Davanagere, Karnataka (the place of our registered business). If you are
        a consumer in another jurisdiction,
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

      <H id="grievance" n="15">Grievance officer</H>
      <P>
        In line with the IT (Intermediary Guidelines and Digital Media Ethics
        Code) Rules, 2021 and the DPDP Act, 2023, the grievance officer for the
        Service is:
      </P>
      <UL>
        <Li><strong className="text-forest">Name:</strong> Gangadhara K S (Proprietor, Zevo Works)</Li>
        <Li>
          <strong className="text-forest">Email:</strong>{" "}
          <a href="mailto:info@zevo-works.in" className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30">info@zevo-works.in</a>
        </Li>
        <Li><strong className="text-forest">Address:</strong> Kempanahalli, Davanagere, Karnataka, India</Li>
      </UL>
      <P>
        We acknowledge grievances within <strong className="text-forest">24 hours</strong>{" "}
        and resolve them within <strong className="text-forest">15 days</strong> of receipt.
      </P>

      <H id="contact" n="16">Contact</H>
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
      <P>
        Zevo Works · GSTIN <strong className="text-forest">29DUUPG0736G1ZA</strong> ·
        Kempanahalli, Davanagere, Karnataka, India.
      </P>
    </LegalLayout>
  );
}
