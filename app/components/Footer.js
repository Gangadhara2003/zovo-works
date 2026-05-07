export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Products: [
      { label: "my-resume", href: "#products" },
      { label: "More Coming Soon", href: "#products", soon: true },
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
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
              {["X", "LI", "GH"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage/50 text-xs font-bold hover:bg-yellow hover:text-charcoal hover:border-yellow transition-all duration-200"
                >
                  {s}
                </a>
              ))}
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
          <p className="text-xs text-sage/30">
            Built with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
