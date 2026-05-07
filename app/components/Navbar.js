"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "products",
        "features",
        "how-it-works",
        "cta",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(targetId.replace("#", ""));
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#hero", label: "Home", id: "hero" },
    { href: "#products", label: "Products", id: "products" },
    { href: "#features", label: "Why Us", id: "features" },
    { href: "#how-it-works", label: "Process", id: "how-it-works" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className={`
          flex items-center justify-between
          px-4 md:px-3 py-2.5
          rounded-full
          transition-all duration-500
          w-full max-w-5xl
          ${
            isScrolled || isMenuOpen
              ? "bg-charcoal/70 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              : "bg-white/[0.04] backdrop-blur-xl border border-charcoal/[0.06]"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="pl-3 shrink-0"
        >
          <img
            src="/zevo-works logo.png"
            alt="Zevo Works"
            className="h-8 w-auto transition-all duration-500"
            style={{
              filter: (isScrolled || isMenuOpen) ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-0.5 mx-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`
                relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200
                ${
                  activeSection === item.id
                    ? isScrolled
                      ? "text-white"
                      : "text-charcoal"
                    : isScrolled
                    ? "text-white/40 hover:text-white/80"
                    : "text-charcoal/40 hover:text-charcoal/80"
                }
              `}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activePill"
                  className={`absolute inset-0 rounded-full border ${
                    isScrolled
                      ? "bg-white/[0.08] border-white/[0.06]"
                      : "bg-charcoal/[0.06] border-charcoal/[0.06]"
                  }`}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://my-resume.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 bg-yellow text-charcoal text-sm font-bold rounded-full hover:bg-yellow/90 hover:shadow-[0_0_20px_rgba(255,225,124,0.3)] transition-all duration-300"
          >
            Get Started
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled || isMenuOpen
                ? "text-white/60 hover:text-white hover:bg-white/10"
                : "text-charcoal/60 hover:text-charcoal hover:bg-charcoal/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-[72px] left-4 right-4 bg-charcoal/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.5)] md:hidden overflow-hidden"
          >
            <div className="p-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-3 text-base font-medium transition-all duration-200 rounded-xl
                    ${
                      activeSection === item.id
                        ? "text-yellow bg-white/[0.06]"
                        : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                    }
                  `}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.06] mt-3">
                <a
                  href="https://my-resume.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 text-sm font-bold bg-yellow text-charcoal rounded-full hover:bg-yellow/90 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
