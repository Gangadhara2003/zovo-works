"use client";

export default function ProblemSolution() {
  const oldWay = [
    "Hours wasted formatting resumes manually",
    "Generic templates that don't beat ATS filters",
    "Juggling 10 tabs for one simple workflow",
    "Copy-pasting between tools like it's 2005",
    "Paying $30/mo for each bloated SaaS tool",
  ];

  const newWay = [
    "AI generates ATS-optimized resumes in seconds",
    "Intelligent templates that adapt to every job",
    "One platform for all your productivity tools",
    "Automated workflows that connect everything",
    "One subscription. Every tool. Always evolving",
  ];

  return (
    <section id="problem-solution" className="w-full">
      <div className="flex flex-col lg:flex-row w-full">
        {/* THE OLD WAY */}
        <div className="flex-1 bg-charcoal text-white p-10 md:p-16 lg:p-20 bg-grid-dark">
          <div className="max-w-lg mx-auto lg:ml-auto lg:mr-16">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-sage/60 mb-4 block">
              The status quo
            </span>
            <h2 className="font-[Anton] text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] mb-10 text-white/90">
              The Old
              <br />
              Way
            </h2>
            <ul className="space-y-5">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <span className="text-sage/80 text-base md:text-lg leading-relaxed group-hover:text-sage transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* THE ZEVO WAY */}
        <div className="flex-1 bg-dark-gray text-white p-10 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Yellow accent border */}
          <div className="absolute top-0 left-0 w-1 h-full bg-yellow" />

          <div className="max-w-lg mx-auto lg:mr-auto lg:ml-16">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-yellow/80 mb-4 block">
              A better way
            </span>
            <h2 className="font-[Anton] text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.9] mb-10">
              The Zevo
              <br />
              <span className="text-yellow">Way</span>
            </h2>
            <ul className="space-y-5">
              {newWay.map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow/20 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-yellow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-white/80 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
