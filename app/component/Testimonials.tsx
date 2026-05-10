"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief of Cardiology, MedStar Health",
    avatar: "SC",
    content:
      "MediCore AI transformed how our cardiology unit processes patient data. The AI triage system cut our response time by 60% and the dashboard is incredibly intuitive.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "CTO, Africa Health Network",
    avatar: "JO",
    content:
      "We deployed MediCore across 12 clinics in Nigeria. The offline-capable architecture and multilingual support made adoption seamless for our teams.",
    rating: 5,
  },
  {
    name: "Emily Torres",
    role: "VP of Product, CureAI",
    avatar: "ET",
    content:
      "The compliance-ready infrastructure saved us months of HIPAA audit prep. Our enterprise clients were impressed by the security-first architecture out of the box.",
    rating: 5,
  },
  {
    name: "Dr. Raj Patel",
    role: "Medical Director, Apollo Hospitals",
    avatar: "RP",
    content:
      "From scheduling to AI-assisted diagnosis, this platform does it all. Our doctors actually enjoy using it — the UI is clean and the insights are actionable.",
    rating: 5,
  },
  {
    name: "Anna Larsson",
    role: "Head of Digital Health, Karolinska",
    avatar: "AL",
    content:
      "MediCore's predictive analytics helped us reduce hospital readmission rates by 34% in just six months. The ROI has been exceptional for our department.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="border-y border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-purple-300/30 bg-purple-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-200">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Trusted by healthcare{" "}
            <span className="gradient-text">leaders worldwide</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            See how hospitals and clinics are transforming patient care with
            MediCore AI.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 sm:p-10">
            <Quote className="absolute right-4 top-4 h-12 w-12 text-cyan-500/10 sm:right-8 sm:top-8 sm:h-20 sm:w-20" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-bold text-white sm:h-14 sm:w-14 sm:text-base">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                  &ldquo;{t.content}&rdquo;
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-cyan-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
