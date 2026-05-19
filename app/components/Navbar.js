"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "#hero", label: "Index", idx: "00" },
  { href: "#products", label: "Products", idx: "01" },
  { href: "#features", label: "System", idx: "02" },
  { href: "#how-it-works", label: "Process", idx: "03" },
  { href: "#faq", label: "Docs", idx: "04" },
  { href: "/learn", label: "Learn", idx: "05" },
  { href: "/contact", label: "Contact", idx: "06" },
];

const TRACK_TWEEN = { type: "tween", duration: 0.22, ease: [0.32, 0.72, 0, 1] };

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => {
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.href.slice(1));
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 140 && r.bottom >= 140) {
          setActive(item.href.slice(1));
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleClick = (e, href) => {
    // Absolute paths (e.g. /contact, /privacy) route to a real page in both
    // home and sub-page contexts. Only `#anchor` hrefs use smooth-scroll.
    if (href.startsWith("/")) {
      e.preventDefault();
      router.push(href);
      setIsMenuOpen(false);
      return;
    }
    if (!isHome) {
      e.preventDefault();
      router.push(`/${href}`);
      setIsMenuOpen(false);
      return;
    }
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const trackedId = hovered ?? active;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="nav-frame pointer-events-auto bg-paper/90 backdrop-blur-md border-b border-x hairline">
        <div className="flex items-center justify-between h-14 px-4 md:px-8">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="relative w-8 h-8 bg-forest flex items-center justify-center overflow-hidden">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F7F7F5" strokeWidth="2.5" className="relative z-10">
                <path d="M4 5h16L6 19h14" strokeLinecap="square" />
              </svg>
              <span className="absolute inset-0 bg-mint translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
            </div>
            <span className="font-[Space_Grotesk] font-bold text-[15px] tracking-tight text-forest hidden sm:inline">
              Zevo<span className="text-coral">/</span>Works
            </span>
          </Link>

          {/* ── Center nav with tracking outline ── */}
          <nav
            className="hidden md:block relative"
            onMouseLeave={() => setHovered(null)}
          >
            <ul className="flex items-center gap-1 relative">
              {NAV_ITEMS.map((item) => {
                const id = item.href.slice(1);
                const isTracked = trackedId === id;
                const isActive = active === id;

                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      onMouseEnter={() => setHovered(id)}
                      className={`relative mono-label flex items-center gap-1.5 px-3 py-1.5 btn-snap ${
                        isActive ? "text-forest" : "text-grid/60 hover:text-forest"
                      }`}
                    >
                      {/* Tracking outline — shared layoutId so it morphs between items */}
                      {isTracked && (
                        <motion.span
                          layoutId="nav-tracker"
                          className="absolute inset-0 pointer-events-none"
                          transition={TRACK_TWEEN}
                        >
                          {/* L-corner brackets, drawn with pseudo borders */}
                          <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-forest" />
                          <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-forest" />
                          <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-forest" />
                          <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-forest" />
                          {/* under-line tick */}
                          <span className="absolute left-1/2 -bottom-[5px] -translate-x-1/2 w-1 h-1 bg-forest" />
                        </motion.span>
                      )}

                      {/* Active fill — also shared id, separate layer */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-fill"
                          className="absolute inset-0 bg-mint/30 -z-0"
                          transition={TRACK_TWEEN}
                        />
                      )}

                      <span className="relative z-10 text-forest/50">{item.idx}.</span>
                      <span className="relative z-10">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Live "tracked" status pill — reads the currently tracked id */}
            <div className="absolute -bottom-6 right-0 mono-label !text-[8px] text-grid/45 hidden lg:flex items-center gap-1.5 pointer-events-none">
              <span className="w-1 h-1 bg-forest animate-[blink_1.4s_steps(2)_infinite]" />
              TRK · {trackedId.toUpperCase()}
            </div>
          </nav>

          {/* ── Right buttons ── */}
          <div className="flex items-center gap-2">
            <a
              href={"https://my-resume.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex mono-label items-center gap-2 px-3.5 py-2 border border-forest/40 text-forest hover:bg-forest/5 btn-snap"
            >
              <span className="w-1.5 h-1.5 bg-mint border border-forest" />
              Sign In
            </a>
            <a
              href={"https://my-resume.in"}
              target="_blank"
              rel="noopener noreferrer"
              className="group mono-label relative inline-flex items-center gap-2 px-3.5 py-2 bg-forest text-paper btn-snap overflow-hidden"
            >
              <span className="absolute inset-0 bg-forest-deep translate-y-full group-hover:translate-y-0 transition-transform duration-200 ease-out" />
              <span className="relative">Launch_App</span>
              <span aria-hidden className="relative group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <button
              className="md:hidden p-2 border hairline text-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t hairline bg-paper">
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`mono-label relative flex items-center gap-3 px-6 py-4 border-b hairline ${
                      isActive ? "text-forest bg-mint/20" : "text-forest"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-forest" />
                    )}
                    <span className="text-forest/40">{item.idx}.</span>
                    {item.label}
                    <span className="ml-auto">→</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
