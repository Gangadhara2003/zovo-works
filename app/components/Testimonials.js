"use client";

const REVIEWS = [
  {
    id: "T.01",
    text: "my-resume literally saved me 6 hours of formatting. Pasted the JD, got a perfect resume. I'm never going back to Google Docs.",
    name: "Sujan M B",
    role: "Software Engineer",
    tag: "swe",
  },
  {
    id: "T.02",
    text: "The AI doesn't just fill in blanks — it actually understands what recruiters want. Got 3 interview calls in the first week.",
    name: "Priya Sharma",
    role: "Product Manager",
    tag: "pm",
  },
  {
    id: "T.03",
    text: "Clean, fast, and actually affordable. This is what SaaS should be — tools that solve real problems without the enterprise tag.",
    name: "Rahul Desai",
    role: "Freelance Designer",
    tag: "design",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper border-b hairline">
      <div className="border-b hairline px-4 md:px-8 py-2 flex justify-between mono-label text-grid/60">
        <span>08 / LOGS</span>
        <span className="hidden md:inline">USER_REPORTS · VERIFIED</span>
        <span>n={REVIEWS.length}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grid/20">
        {REVIEWS.map((r) => (
          <article key={r.id} className="bg-paper p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="mono-label text-forest">{r.id}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 20 20" fill="currentColor" className="text-gold">
                    <path d="M10 1l2.6 6h6.4l-5.2 4 2 6.6L10 14l-5.8 3.6 2-6.6L1 7h6.4z" />
                  </svg>
                ))}
              </div>
            </div>

            <svg width="22" height="22" viewBox="0 0 24 24" className="text-forest/30 mb-4">
              <path fill="currentColor" d="M7 7h4v4H7zm0 4c0 4 3 6 6 6v-2c-2 0-4-1-4-4zM15 7h4v4h-4zm0 4c0 4 3 6 6 6v-2c-2 0-4-1-4-4z" />
            </svg>

            <p className="font-[JetBrains_Mono] text-[12px] leading-[1.6] text-grid flex-1">
              {r.text}
            </p>

            <div className="mt-6 pt-4 border-t hairline flex items-center gap-3">
              <div className="w-9 h-9 bg-forest text-paper mono-label !text-[11px] flex items-center justify-center">
                {r.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="mono-label text-forest">{r.name}</div>
                <div className="mono-label !text-[9px] text-grid/60 mt-0.5">
                  {r.role} · /{r.tag}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
