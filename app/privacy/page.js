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
  { id: "processing", n: "10", label: "How your résumé is processed" },
  { id: "grievance", n: "11", label: "Grievance officer" },
  { id: "changes", n: "12", label: "Changes" },
  { id: "contact", n: "13", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      docId="PRIVACY"
      kicker="Privacy Policy"
      title="Privacy"
      highlight="policy."
      effective="2026.05.10"
      updated="2026.07.09"
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
        submit. Zevo Works is a sole proprietorship (GSTIN 29DUUPG0736G1ZA) based
        in Kempanahalli, Davanagere, Karnataka, India, serving users worldwide.
      </P>
      <P>
        We collect and process your personal data{" "}
        <strong className="text-forest">with your consent</strong>, which you give
        when you register an account and when you choose to use AI features. You
        may withdraw consent for AI features at any time by not using them, and
        withdraw consent entirely by deleting your account — which triggers
        deletion of your data as described in §04 (see also §07).
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
          route timings, user-agent string, approximate locale, and a randomly
          generated session ID created per visit and not linked to your account
          or identity.
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
        Support email threads are kept for up to 24 months, then deleted, unless
        a longer period is needed to resolve an ongoing issue or meet a legal or
        tax obligation.
      </P>

      <H id="sharing" n="05">Sharing & third parties</H>
      <P>
        We share data only with the sub-processors needed to run our products:
      </P>
      <UL>
        <Li>
          <strong className="text-forest">Cloud hosting & database</strong> —
          our application, database (PostgreSQL) and file storage run on a
          Hostinger VPS; as our infrastructure provider, Hostinger has access to
          data at rest on that server.
        </Li>
        <Li>
          <strong className="text-forest">AI providers</strong> — when you use
          AI features, the relevant text is sent to a model provider for
          inference through our provider chain:{" "}
          <strong className="text-forest">DeepSeek</strong> (via NVIDIA NIM),{" "}
          <strong className="text-forest">NVIDIA NIM</strong>,{" "}
          <strong className="text-forest">Anthropic (Claude)</strong> and{" "}
          <strong className="text-forest">Google (Gemini)</strong>. We do not
          authorise providers to train on this data where that option is
          available, and we keep this list current as our providers change.
        </Li>
        <Li>
          <strong className="text-forest">Razorpay</strong> (payments) — when you
          buy a paid plan, your name, email and payment details are processed by
          Razorpay to complete the transaction and issue a GST invoice. We never
          see or store your full card number, UPI PIN, or bank credentials.
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
      <P>
        <strong className="text-forest">Cross-border processing.</strong> Some of
        our sub-processors (including the AI providers above) operate servers
        outside India. By using the AI features, you consent to your data being
        transferred to and processed in the jurisdictions where these providers
        operate. We send only the text needed for the feature you invoked and
        rely on those providers' contractual and technical safeguards.
      </P>

      <H id="cookies" n="06">Cookies & tracking</H>
      <P>
        The marketing site uses no identifying cookies. The my-resume.in
        product uses a single first-party, HTTP-only <strong className="text-forest">session
        cookie</strong> that is strictly necessary to keep you logged in — it
        carries no advertising or tracking function, so it does not require
        separate consent. Our usage telemetry (pageviews, route paths, timings) is
        first-party and <strong className="text-forest">anonymised / non-personal</strong> —
        not linked to your account. We do not use third-party advertising cookies,
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
          <strong className="text-forest">Withdraw consent</strong> — for AI
          features, by not using them; entirely, by deleting your account, which
          triggers deletion of your data per §04.
        </Li>
      </UL>
      <P>
        Under applicable laws (GDPR, where you are in the EU/EEA, and India's
        DPDP Act, 2023), you may also have the right to data portability,
        restriction of processing, and to lodge a complaint with a supervisory
        authority. Email us to exercise any of these rights; we aim to respond to
        such data-rights requests within <strong className="text-forest">30 days</strong>{" "}
        (general queries are usually answered sooner — see §13).
      </P>

      <H id="security" n="08">Security</H>
      <P>
        Passwords are hashed with bcrypt. Sessions use HTTP-only, signed
        cookies over HTTPS. We follow least-privilege access on our
        infrastructure and patch dependencies regularly. No system is
        perfectly secure; please use a strong, unique password and keep it
        private.
      </P>
      <P>
        <strong className="text-forest">Data breach notification.</strong> In the
        event of a personal-data breach that is likely to affect you, we will
        notify affected users and the Data Protection Board of India without undue
        delay, as required by the DPDP Act, 2023.
      </P>

      <H id="children" n="09">Children</H>
      <P>
        Our products are not directed at children under 16. If you believe a
        minor has created an account, contact us and we will remove it.
      </P>

      <H id="processing" n="10">How your résumé is processed</H>
      <P>
        When you upload a résumé, we handle it in a deliberate, privacy-conscious
        sequence. The key point up front:{" "}
        <strong className="text-forest">your original file is never sent to the AI</strong> —
        only the plain text pulled from it is — and the uploaded file is deleted
        straight after that text is extracted.
      </P>
      <UL>
        <Li><strong className="text-forest">1. Upload &amp; validation.</strong> You upload a PDF or DOCX (max 5 MB), saved temporarily on our server under a random, unique filename.</Li>
        <Li><strong className="text-forest">2. Text extraction.</strong> We extract only the text content (pdf-parse for PDFs, mammoth for DOCX). If too little text comes out (under ~50 characters — usually a scanned or image-only file), the upload is rejected. Text is capped at ~200,000 characters.</Li>
        <Li><strong className="text-forest">3. Local pre-processing.</strong> Before any AI call, a local scan pulls your email, phone, links, name and interests as safety-net fallbacks — this runs on our servers and is not part of what is sent to the AI.</Li>
        <Li><strong className="text-forest">4. Sending to the AI.</strong> Only the plain text is sent to a model provider — never the original file — wrapped in a detailed set of instructions to return structured data. Requests run through our provider chain (see §05).</Li>
        <Li><strong className="text-forest">5. Retry &amp; fallback.</strong> If the AI returns malformed data, we ask it to correct the format; for long résumés we use a two-pass approach and merge the results.</Li>
        <Li><strong className="text-forest">6. Post-processing.</strong> We merge the locally-extracted contacts over the AI result, normalise names, de-duplicate skills, and split long paragraph bullets into individual points.</Li>
        <Li><strong className="text-forest">7. Cleanup.</strong> The uploaded file is permanently deleted from our server — the original document is never kept long-term. Only the structured profile and any résumé you save are retained, per §04.</Li>
      </UL>

      <H id="grievance" n="11">Grievance officer</H>
      <P>
        For any privacy or data-protection concern, our Grievance Officer under
        the IT (Intermediary Guidelines) Rules, 2021 and the DPDP Act, 2023 is:
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
        We acknowledge complaints within <strong className="text-forest">24 hours</strong>{" "}
        and resolve them within <strong className="text-forest">15 days</strong> of receipt.
      </P>

      <H id="changes" n="12">Changes</H>
      <P>
        We may update this policy as our products evolve. Material changes
        will be highlighted on the home page or via email. The "Updated" date
        in the metadata sheet above always reflects the current version.
      </P>

      <H id="contact" n="13">Contact</H>
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
