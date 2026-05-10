"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, HeartPulse } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "AI Engine", href: "#ai-engine" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.label.toLowerCase(), top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return {
          id: item.label.toLowerCase(),
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      const current = sections.find(
        (s) => s.top <= 150 && s.bottom > 150
      );
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050b18]/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-cyan-400 font-bold text-xl"
        >
          <HeartPulse className="h-6 w-6" />
          MediCore AI
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.label.toLowerCase();
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-cyan-300"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-cyan-400/10 border border-cyan-400/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#050b18]/95 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col gap-1 px-4 py-5 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-gray-300 transition hover:bg-white/5 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-3 w-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-5 py-3 font-semibold text-black transition hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
