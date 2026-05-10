"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Mail,
  MapPin,
  Send,
  Globe,
  MessageCircle,
  ExternalLink,
  Hash,
} from "lucide-react";

const footerLinks = {
  Product: [
    "AI Diagnosis",
    "Patient Dashboard",
    "Appointments",
    "Medical Records",
  ],
  Company: ["About", "Careers", "Blog", "Press"],
  Support: ["Documentation", "API Reference", "Community", "Status"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-[#050b18] border-t border-white/10 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xl"
            >
              <HeartPulse />
              MediCore AI
            </motion.div>
            <p className="mt-3 max-w-xs text-sm text-gray-400 leading-relaxed">
              AI-powered healthcare system for smarter diagnosis, patient
              tracking, and hospital automation. Trusted by 10,000+ doctors
              worldwide.
            </p>

            <div className="mt-5 flex gap-3">
              {[
                { icon: Globe, href: "#" },
                { icon: MessageCircle, href: "#" },
                { icon: ExternalLink, href: "#" },
                { icon: Hash, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/10"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex max-w-xs gap-2"
            >
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-cyan-400/50 focus:bg-cyan-400/5"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-xs text-emerald-400">
                Thanks! You&apos;re subscribed.
              </p>
            )}
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition hover:text-cyan-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MediCore AI. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Terms of Service
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Global
            </span>
          </div>

          <p className="text-xs text-cyan-400 font-medium">
            Designed & Developed by{" "}
            <a
              href="https://fahimahmedifty.vercel.app"
              target="_blank"
              className="text-white hover:text-cyan-300 transition"
            >
              Fahim Ahmed Ifty
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
