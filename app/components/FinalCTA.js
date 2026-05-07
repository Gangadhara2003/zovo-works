"use client";

import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const APP_URL = "https://my-resume.in";

  return (
    <section id="cta" className="relative py-24 md:py-32 px-6 bg-yellow overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-[Anton] text-[12rem] md:text-[20rem] lg:text-[28rem] uppercase text-charcoal/[0.04] leading-none whitespace-nowrap">
          ZEVO
        </span>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-charcoal/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-charcoal/5 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-20 h-20 border border-charcoal/10 rounded-full" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="font-[Anton] text-5xl md:text-6xl lg:text-8xl uppercase leading-[0.9] text-charcoal mb-6">
          Ditch The
          <br />
          Manual Grind
          <br />
          <span className="relative">
            Let AI Do It
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 400 8"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 4C100 0 300 8 400 2"
                stroke="#171e19"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-charcoal/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop tweaking margins and rewriting bullet points for every job.
          Let AI tailor your resume in seconds — zero effort, maximum output.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-lg mx-auto">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[Anton] bg-charcoal text-white text-xl uppercase px-10 py-4 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
          >
            Try It Free
            <ArrowUpRight size={20} />
          </a>
        </div>

        <p className="mt-5 text-sm text-charcoal/40">
          Free to use. No credit card. No spam, ever.
        </p>
      </div>
    </section>
  );
}
