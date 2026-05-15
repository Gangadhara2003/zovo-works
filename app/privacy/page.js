import {
  LegalLayout,
  H,
  P,
  UL,
  Li,
  Quote,
  SubLabel,
} from "../components/LegalLayout";

export const metadata = {
  title: "Privacy Policy — Zevo Works",
  description:
    "How Zevo Works collects, uses, and protects your data across my-resume.in.",
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

export default function PrivacyPage() {
  return (
    <LegalLayout
      docId="PRIVACY"
      kicker="Privacy Policy"
      title="Privacy"
      highlight="policy."
      effective="2026.05.10"
      updated="2026.05.15"
      sections={SECTIONS}
      pairLabel="Read Terms of Service"
      pairHref="/terms"
    >
      <Quote>
        Zevo Works is a one-person studio. We collect only what we need to run
        the product — and we never sell your data.
      </Quote>

      <H id="overview" n="01">Overview</H>
      <P>
        <strong className="text-forest">Zevo Works</strong> ("we", "us", "our")
        builds AI-powered productivity tools, including{" "}
        <a
          href="https://my-resume.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          my-resume.in
        </a>
        . This Privacy Policy explains what data we collect across our websites
        and products, why we collect it, and the rights you have over it. We
        try to keep this human-readable — if anything is unclear, email us
        (section §11). We are the data controller for the personal data you
        submit, operate from India, and serve users worldwide.
      </P>

      <H id="data" n="02">Data we collect</H>
      <P>
        Different Zevo Works surfaces collect different data. The marketing
        site (zevo-works.in) collects almost nothing. Product-specific
        collection is enumerated below.
      </P>

      <SubLabel>Marketing site · zevo-works.in</SubLabel>
      <UL>
        <Li>
          Anonymous, aggregated traffic stats (pageviews, referrer,
          country-level region, browser/OS user-agent string).
        </Li>
        <Li>No accounts. No cookies tied to your identity.</Li>
        <Li>If you email us, we keep the message thread for support history.</Li>
      </UL>

      <SubLabel>Product · my-resume.in</SubLabel>
      <UL>
        <Li>
          <strong className="text-forest">Account data:</strong> name, email,
          hashed password (bcrypt). If you sign in with Google, we receive
          your Google email, name, profile picture URL and a Google ID — never
          your Google password.
        </Li>
        <Li>
          <strong className="text-forest">Profile data:</strong> everything
          you fill in on the Profile Hub — personal details, education, work
          experience, internships, skills, projects, certifications,
          languages, achievements and links.
        </Li>
        <Li>
          <strong className="text-forest">Résumé artefacts:</strong> uploaded
          PDFs, parsed text, generated LaTeX source, compiled PDFs, build
          metadata.
        </Li>
        <Li>
          <strong className="text-forest">Job descriptions:</strong> any JD
          text you paste in for AI tailoring.
        </Li>
        <Li>
          <strong className="text-forest">Usage telemetry:</strong> pageviews,
          route timings, user-agent string, approximate locale, a randomly
          generated session ID.
        </Li>
      </UL>

      <H id="use" n="03">How we use your data</H>
      <P>We use the data above only to:</P>
      <UL>
        <Li>authenticate you and keep your session alive;</Li>
        <Li>store your profile so you can generate unlimited résumés from it;</Li>
        <Li>compile résumés, render previews, and let you download PDFs;</Li>
        <Li>
          send your job description to our AI provider so it can tailor a
          résumé to it (see §05);
        </Li>
        <Li>diagnose bugs, monitor performance, and improve the product;</Li>
        <Li>respond to support requests.</Li>
      </UL>
      <P>
        We do not use your profile data to train AI models, and we do not run
        ads.
      </P>

      <H id="storage" n="04">Storage & retention</H>
      <P>
        Data is stored in our managed database and object storage. Compiled
        PDFs and uploaded résumés are kept until you delete them or close your
        account. Account and profile data are kept for as long as your account
        is active. When you delete your account from{" "}
        <em className="text-forest">Profile Hub → Account</em>, we permanently
        remove your account, profile, all résumés and JD data within 30 days
        from primary storage. Encrypted backups are rotated within 90 days.
      </P>

      <H id="sharing" n="05">Sharing & third parties</H>
      <P>
        We share data only with the sub-processors needed to run our products:
      </P>
      <UL>
        <Li>
          <strong className="text-forest">Cloud hosting & database</strong> —
          to store account, profile and résumé data.
        </Li>
        <Li>
          <strong className="text-forest">AI provider</strong> (e.g. OpenAI /
          Anthropic / Google AI) — when you tailor a résumé to a JD, the
          relevant profile fields and the JD text are sent to the model
          provider for inference. We do not authorise providers to train on
          this data where that option is available.
        </Li>
        <Li>
          <strong className="text-forest">Google OAuth</strong> — only if you
          choose Google sign-in.
        </Li>
        <Li>
          <strong className="text-forest">LaTeX compiler</strong> — runs in
          our infrastructure (Docker); your data is not sent to a third party
          for compilation.
        </Li>
        <Li>
          <strong className="text-forest">Legal authorities</strong> — only
          if compelled by valid legal process.
        </Li>
      </UL>
      <P>We never sell, rent, or trade your personal data.</P>

      <H id="cookies" n="06">Cookies & tracking</H>
      <P>
        The marketing site uses no identifying cookies. The my-resume.in
        product uses a single first-party HTTP-only session cookie to keep
        you logged in, and minimal first-party usage telemetry (pageviews,
        route paths). We do not use third-party advertising cookies,
        fingerprinting, or cross-site trackers anywhere.
      </P>

      <H id="rights" n="07">Your rights</H>
      <P>You can, at any time:</P>
      <UL>
        <Li>
          <strong className="text-forest">Access & correct</strong> your
          profile data directly from the Profile Hub.
        </Li>
        <Li>
          <strong className="text-forest">Export</strong> your generated
          résumés as PDF.
        </Li>
        <Li>
          <strong className="text-forest">Delete</strong> individual résumés
          or job descriptions from the dashboard.
        </Li>
        <Li>
          <strong className="text-forest">Delete your entire account</strong>{" "}
          from Profile Hub → Account → Delete Account.
        </Li>
        <Li>
          <strong className="text-forest">Withdraw consent</strong> for
          AI-tailoring by not pasting a job description.
        </Li>
      </UL>
      <P>
        Under applicable laws (GDPR / India's DPDP Act 2023 / CCPA), you may
        also have the right to data portability, restriction of processing,
        and to lodge a complaint with a supervisory authority. Email us to
        exercise any of these rights.
      </P>

      <H id="security" n="08">Security</H>
      <P>
        Passwords are hashed with bcrypt. Sessions use HTTP-only, signed
        cookies over HTTPS. We follow least-privilege access on our
        infrastructure and patch dependencies regularly. No system is
        perfectly secure; please use a strong, unique password and keep it
        private.
      </P>

      <H id="children" n="09">Children</H>
      <P>
        Our products are not directed at children under 16. If you believe a
        minor has created an account, contact us and we will remove it.
      </P>

      <H id="changes" n="10">Changes</H>
      <P>
        We may update this policy as our products evolve. Material changes
        will be highlighted on the home page or via email. The "Updated" date
        in the metadata sheet above always reflects the current version.
      </P>

      <H id="contact" n="11">Contact</H>
      <P>
        Questions, deletion requests, or anything else — email{" "}
        <a
          href="mailto:info@zevo-works.in"
          className="text-forest underline underline-offset-4 decoration-forest/60 hover:bg-mint/30"
        >
          info@zevo-works.in
        </a>
        . We aim to respond within 5 working days.
      </P>
    </LegalLayout>
  );
}
