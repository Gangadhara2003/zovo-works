export default function Footer() {
  const currentYear = new Date().getFullYear();

  const APP_URL = "https://my-resume.in";

  const links = {
    Products: [
      { label: "my-resume", href: APP_URL },
      { label: "More Coming Soon", href: "#products", soon: true },
    ],
    Company: [
      { label: "About", href: "#features" },
      { label: "Contact", href: "mailto:info@zevo-works.in" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="font-[Anton] text-3xl uppercase tracking-tight"
            >
              Zevo Works<span className="text-yellow">.</span>
            </a>
            <p className="mt-4 text-sage/50 text-sm leading-relaxed max-w-sm">
              AI-powered productivity tools that automate the boring stuff.
              Zero effort, maximum output.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gangadhara-k-s-563142286/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage/50 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Portfolio */}
              <a
                href="https://gangadharaks.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage/50 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-200"
                aria-label="Portfolio"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:info@zevo-works.in"
                className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage/50 hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-200"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-[Anton] text-sm uppercase tracking-wider text-white/60 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...(item.href.startsWith("http") || item.href.startsWith("mailto:")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-sage/50 hover:text-white transition-colors inline-flex items-center gap-2"
                    >
                      {item.label}
                      {item.soon && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-yellow/10 text-yellow/70 rounded uppercase tracking-wider">
                          Soon
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-sage/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sage/30">
            © {currentYear} Zevo Works. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@zevo-works.in"
              className="text-xs text-sage/30 hover:text-sage/60 transition-colors"
            >
              info@zevo-works.in
            </a>
            <span className="text-xs text-sage/20">·</span>
            <p className="text-xs text-sage/30">
              Built with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
