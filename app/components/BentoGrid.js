"use client";

import { ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
  const APP_URL = "https://my-resume.in";
  return (
    <section id="products" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/50 mb-4 block">
            Our Products
          </span>
          <h2 className="font-[Anton] text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] text-charcoal">
            Tools That <span className="text-highlight">Work</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/60 max-w-2xl mx-auto">
            Every tool is designed with one principle — eliminate the busy work
            and let you ship faster.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Card 1: my-resume — spans 2 cols */}
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="lg:col-span-2 min-h-[420px] bg-charcoal rounded-2xl p-8 md:p-10 relative overflow-hidden card-hover group cursor-pointer block">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow/5 rounded-full blur-3xl" />
            <div className="absolute bottom-4 right-8 font-[Anton] text-[180px] leading-none text-white/[0.03] uppercase select-none">
              AI
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-yellow text-charcoal text-xs font-bold uppercase tracking-wider rounded-full">
                  Live
                </span>
                <span className="text-sage/60 text-xs font-medium uppercase tracking-wider">
                  Flagship Product
                </span>
              </div>

              <h3 className="font-[Anton] text-3xl md:text-4xl uppercase text-white mb-3">
                my-resume
              </h3>
              <p className="text-sage/70 text-base md:text-lg max-w-md leading-relaxed mb-6">
                Drop a job description. Get an ATS-optimized, professionally
                formatted resume in seconds — powered by AI + LaTeX.
              </p>

              {/* Mini mockup */}
              <div className="mt-auto flex gap-3">
                <div className="flex-1 bg-dark-gray/80 rounded-xl p-4 border border-sage/10">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-sage/20 rounded w-3/4" />
                    <div className="h-2 bg-sage/15 rounded w-1/2" />
                    <div className="h-2 bg-yellow/30 rounded w-2/3" />
                    <div className="h-2 bg-sage/10 rounded w-5/6" />
                  </div>
                </div>
                <div className="flex-1 bg-dark-gray/80 rounded-xl p-4 border border-sage/10">
                  <div className="text-xs text-sage/40 mb-2 font-medium">
                    PDF Preview
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 space-y-1.5">
                    <div className="h-1.5 bg-white/20 rounded w-1/2 mx-auto" />
                    <div className="h-1 bg-white/10 rounded w-3/4 mx-auto" />
                    <div className="h-1 bg-white/10 rounded w-2/3 mx-auto" />
                    <div className="mt-2 h-1 bg-yellow/20 rounded w-1/2" />
                    <div className="h-1 bg-white/10 rounded w-full" />
                    <div className="h-1 bg-white/10 rounded w-5/6" />
                  </div>
                </div>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-yellow text-sm font-medium group-hover:gap-3 transition-all">
                Try my-resume Free <ArrowUpRight size={16} />
              </div>
            </div>
          </a>

          {/* Card 2: More Tools Coming Soon */}
          <div className="min-h-[420px] bg-light-gray rounded-2xl p-8 relative overflow-hidden card-hover group border border-charcoal/5 flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative z-10 flex flex-col items-center">
              {/* Animated dots */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 bg-yellow rounded-full animate-[pulse-soft_2s_ease-in-out_infinite]" />
                <div className="w-3 h-3 bg-yellow/60 rounded-full animate-[pulse-soft_2s_ease-in-out_infinite_0.4s]" />
                <div className="w-3 h-3 bg-yellow/30 rounded-full animate-[pulse-soft_2s_ease-in-out_infinite_0.8s]" />
              </div>

              <div className="w-16 h-16 rounded-2xl bg-charcoal/5 flex items-center justify-center mb-6 group-hover:bg-yellow/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-charcoal/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>

              <h3 className="font-[Anton] text-2xl md:text-3xl uppercase text-charcoal mb-3">
                More Tools
                <br />
                <span className="text-yellow">Coming Soon</span>
              </h3>
              <p className="text-charcoal/40 text-sm leading-relaxed max-w-[240px]">
                We&apos;re building more AI-powered tools to automate every
                tedious workflow. Stay tuned.
              </p>

              {/* Mini preview blocks */}
              <div className="mt-6 flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-10 rounded-lg border border-dashed border-charcoal/10 flex items-center justify-center"
                  >
                    <div className="w-5 h-5 rounded bg-charcoal/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
