export const FAQS = [
  {
    q: "What is Zevo Works?",
    a: "Zevo Works is a studio building AI-powered productivity tools that automate tedious workflows. Our flagship product is my-resume, an ATS-optimised resume builder.",
  },
  {
    q: "Is my-resume really free?",
    a: "Yes. my-resume is completely free to use — no credit card, no trial limits. We may add optional paid features in future, but the core resume generation will always be free.",
  },
  {
    q: "What does ATS-optimised mean?",
    a: "ATS (Applicant Tracking System) software is used by most large companies to filter resumes before a human sees them. my-resume formats every resume to pass these filters: clean structure, parseable text, the right keywords from the job description, and no exotic fonts or tables that break parsers.",
  },
  {
    q: "How does the AI tailor my resume to a job description?",
    a: "Paste the job description and my-resume's AI extracts the critical skills, seniority signals, and recruiter priorities. It then rewrites your bullet points and reorders sections to match — without inventing experience you don't have.",
  },
  {
    q: "What file format do I get?",
    a: "A PDF resume, typeset with LaTeX for pixel-perfect output. You can preview it in the browser and download whenever you're ready to apply.",
  },
  {
    q: "Is my data safe?",
    a: "Your resume content stays on our servers only as long as you keep your account. You can delete your account and all associated data at any time from the dashboard.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/50 mb-4 block">
            Frequently Asked
          </span>
          <h2 className="font-[Anton] text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] text-charcoal">
            Questions <span className="text-highlight">Answered</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl border border-charcoal/5 hover:border-yellow/30 transition-colors duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer p-6 md:p-7 list-none">
                <h3 className="font-[Anton] text-lg md:text-xl uppercase text-charcoal pr-4">
                  {item.q}
                </h3>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center group-open:bg-yellow group-open:rotate-45 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-charcoal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                <p className="text-charcoal/60 text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
