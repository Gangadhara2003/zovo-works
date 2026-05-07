"use client";

import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: "01",
      title: "Paste The JD",
      desc: "Drop in the job description you're targeting. my-resume reads it deeply — understanding required skills, experience level, and what the recruiter actually cares about.",
    },
    {
      num: "02",
      title: "AI Tailors Your Resume",
      desc: "Our AI restructures your experience, rewrites bullet points, and optimizes keywords — all formatted in clean LaTeX for pixel-perfect, ATS-friendly output.",
    },
    {
      num: "03",
      title: "Download & Apply",
      desc: "Get a polished PDF resume in seconds. Every section is tailored to the job, professionally typeset, and ready to send. That's it — go get that interview.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 bg-white bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Sticky Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/50 mb-4 block">
              How my-resume works
            </span>
            <h2 className="font-[Anton] text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] text-charcoal">
              JD In,
              <br />
              Resume <span className="text-highlight">Out</span>
            </h2>
            <p className="mt-6 text-charcoal/50 leading-relaxed">
              Three steps. That&apos;s all it takes to go from job listing to tailored resume.
            </p>
          </div>

          {/* Right: Steps */}
          <div className="lg:w-2/3 space-y-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded-2xl p-8 md:p-10 border border-charcoal/5 hover:border-yellow/30 hover:bg-yellow/[0.03] transition-all duration-300"
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex items-start gap-6 md:gap-10">
                  {/* Number */}
                  <span
                    className={`font-[Anton] text-7xl md:text-8xl leading-none transition-all duration-500 select-none ${
                      activeStep === i
                        ? "text-yellow"
                        : "text-yellow/20"
                    }`}
                  >
                    {step.num}
                  </span>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="font-[Anton] text-2xl md:text-3xl uppercase text-charcoal mb-2 group-hover:text-charcoal transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-charcoal/50 text-base leading-relaxed max-w-md group-hover:text-charcoal/70 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
