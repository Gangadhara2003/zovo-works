"use client";

export default function Testimonials() {
  const reviews = [
    {
      text: "my-resume literally saved me 6 hours of formatting. Pasted the JD, got a perfect resume. I'm never going back to Google Docs.",
      name: "Arjun Mehta",
      role: "Software Engineer",
      dark: false,
      offset: false,
    },
    {
      text: "The AI doesn't just fill in blanks — it actually understands what recruiters want. Got 3 interview calls in the first week after switching.",
      name: "Priya Sharma",
      role: "Product Manager",
      dark: true,
      offset: true,
    },
    {
      text: "Clean, fast, and actually affordable. This is what SaaS should be — tools that solve real problems without the enterprise price tag.",
      name: "Rahul Desai",
      role: "Freelance Designer",
      dark: false,
      offset: false,
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/50 mb-4 block">
            What People Say
          </span>
          <h2 className="font-[Anton] text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] text-charcoal">
            Real <span className="text-highlight">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 card-hover transition-all duration-300 ${
                r.dark
                  ? "bg-charcoal text-white translate-y-0 md:translate-y-4"
                  : "bg-white border border-charcoal/10"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-5 h-5 text-yellow"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p
                className={`text-lg font-medium leading-relaxed mb-8 ${
                  r.dark ? "text-white/90" : "text-charcoal/80"
                }`}
              >
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                    r.dark
                      ? "bg-yellow text-charcoal"
                      : "bg-charcoal text-white"
                  }`}
                >
                  {r.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p
                    className={`font-[Anton] text-sm uppercase tracking-wide ${
                      r.dark ? "text-white" : "text-charcoal"
                    }`}
                  >
                    {r.name}
                  </p>
                  <p
                    className={`text-xs ${
                      r.dark ? "text-sage/50" : "text-charcoal/40"
                    }`}
                  >
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
