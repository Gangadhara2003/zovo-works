"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20"
    >
      {/* Decorative floating shapes */}
      <div className="absolute top-32 left-[10%] w-20 h-20 bg-yellow/20 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-[15%] w-32 h-32 bg-yellow/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_2s]" />
      <div className="absolute top-1/2 left-[5%] w-2 h-2 bg-yellow rounded-full animate-[pulse-soft_3s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-[8%] w-3 h-3 bg-charcoal/20 rounded-full animate-[pulse-soft_4s_ease-in-out_infinite_1s]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-charcoal/10 rounded-full bg-white/60 backdrop-blur-sm">
          <span className="w-2 h-2 bg-yellow rounded-full animate-[pulse-soft_2s_ease-in-out_infinite]" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60">
            Building the future of productivity
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[Anton] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9] tracking-tight text-charcoal mb-6">
          Zero Effort
          <br />
          <span className="relative inline-block">
            Maximum
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 400 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 8C50 3 150 2 200 5C250 8 350 4 398 7"
                stroke="#ffe17c"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span className="text-highlight">Output</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-charcoal/60 max-w-xl mx-auto mb-10 leading-relaxed">
          AI-powered tools that handle the grunt work so you can focus on what
          actually matters. Build faster. Ship smarter.
        </p>

        {/* CTA Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-6 py-4 border border-charcoal/20 rounded-xl text-base bg-white focus:outline-none focus:border-charcoal/50 focus:ring-2 focus:ring-yellow/30 transition-all"
          />
          <button className="w-full sm:w-auto font-[Anton] bg-yellow text-charcoal text-xl uppercase px-8 py-4 rounded-xl hover:bg-yellow/90 hover:shadow-lg hover:shadow-yellow/20 transition-all duration-300 active:scale-95">
            Join Waitlist
          </button>
        </div>


      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
