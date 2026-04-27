"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Brain,
  CalendarClock,
  CheckCircle2,
  Clock3,
  FileText,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";
import HeroMonitorIllustration from "./illustrations/HeroMonitorIllustration";
import WorkflowIllustration from "./illustrations/WorkflowIllustration";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function HealthcareLandingPage() {
  const features = [
    {
      icon: Activity,
      title: "Live Patient Monitoring",
      desc: "Track vitals and alerts in real time with smart dashboard streams.",
    },
    {
      icon: CalendarClock,
      title: "Smart Scheduling",
      desc: "Automatically optimize appointments by doctor specialty and urgency.",
    },
    {
      icon: Brain,
      title: "AI Diagnosis Support",
      desc: "Surface early risk signals using symptoms, labs, and patient history.",
    },
    {
      icon: FileText,
      title: "Unified Medical Records",
      desc: "Access secure records, prescriptions, and notes from one place.",
    },
    {
      icon: UserPlus,
      title: "Automated Routing",
      desc: "Assign each case to the best provider in seconds.",
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Ready Security",
      desc: "Protect data with role-based access, encryption, and audit trails.",
    },
  ];

  return (
    <div className="relative overflow-x-clip bg-[#050b18] text-white">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl md:h-96 md:w-96" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl md:h-96 md:w-96" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl md:h-96 md:w-96" />
      </div>

      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI Healthcare Platform
          </div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Launch a modern healthcare website your clients can trust.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
              Built for clinics, hospitals, and digital health teams. Show your
              services, outcomes, and AI capabilities with a responsive
              experience that looks perfect on every screen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105">
                Book a Live Demo
              </button>
              <button className="rounded-full border border-cyan-300/50 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/10">
                View Case Studies
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3">
              {[
                { k: "99.95%", v: "Uptime" },
                { k: "85+", v: "Healthcare Clients" },
                { k: "3.8M", v: "Records Processed" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <p className="text-lg font-semibold text-cyan-300">
                    {stat.k}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.v}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <HeroMonitorIllustration />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["50K+", "Patients Managed"],
            ["10K+", "Doctors Connected"],
            ["97%", "AI Prediction Precision"],
            ["24/7", "Critical Alerting"],
          ].map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-cyan-400">{s[0]}</h2>
              <p className="mt-2 text-sm text-slate-300">{s[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="features"
        className="border-y border-white/10 bg-white/5 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Everything your healthcare clients expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
            From AI triage to records and scheduling, your landing page now
            presents a full, professional service stack.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-6"
              >
                <div className="absolute -right-3 -top-3 opacity-10">
                  <f.icon className="h-16 w-16" />
                </div>
                <f.icon className="h-8 w-8 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="ai-engine"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10"
      >
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            AI engine that supports doctors, not replaces them
          </h2>
          <p className="mt-4 text-slate-300">
            MediCore AI prioritizes patients, reduces delays, and gives doctors
            clear recommendations with confidence scores.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {[
              "Real-time decision support for emergency and OPD",
              "Faster triage with explainable AI recommendations",
              "Automated compliance logs for hospital audits",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <WorkflowIllustration />
        </motion.div>
      </section>

      <section
        id="dashboard"
        className="border-y border-white/10 bg-white/5 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Client dashboard preview
              </h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Showcase exactly what hospitals and clinics will see in your
                platform.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-5 py-2 text-sm text-cyan-200 hover:bg-cyan-400/10">
              Explore Product Tour <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: HeartPulse,
                title: "Vitals",
                body: "Live telemetry for heart rate, oxygen saturation, and pressure trends.",
              },
              {
                icon: Brain,
                title: "AI Insight",
                body: "Instant risk scoring and treatment recommendations for clinicians.",
              },
              {
                icon: Clock3,
                title: "Ops Timeline",
                body: "Monitor admissions, lab updates, and discharge readiness in one place.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <item.icon className="h-7 w-7 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 xl:px-10"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pricing for every care model
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Ready-to-present plans for clinics, hospitals, and enterprise
            healthcare groups.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              name: "Starter Clinic",
              price: "$29/mo",
              points: ["Dashboard", "Scheduling", "Basic Reports"],
            },
            {
              name: "Growth Hospital",
              price: "$79/mo",
              points: ["AI Triage", "Monitoring", "Analytics"],
              featured: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              points: ["Full Integration", "Dedicated CSM", "Priority Support"],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                plan.featured
                  ? "border-cyan-300/60 bg-cyan-400/10"
                  : "border-white/10 bg-slate-950/70"
              }`}
            >
              <p className="text-cyan-300">{plan.name}</p>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {plan.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full bg-cyan-400 px-4 py-2 font-semibold text-slate-950">
                Start Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-white/5 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-4">
            {[
              {
                q: "Will this design look good on mobile and large desktop screens?",
                a: "Yes. It is optimized with responsive spacing and grids for mobile, tablet, 1024, 1440, and larger displays.",
              },
              {
                q: "Can we customize branding for each client?",
                a: "Absolutely. Colors, copy, logos, and sections are easy to update without breaking responsiveness.",
              },
              {
                q: "Is this ready for client presentations?",
                a: "Yes. The page includes clear value messaging, service blocks, dashboard previews, and pricing.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <summary className="cursor-pointer font-medium text-white">
                  {item.q}
                </summary>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 xl:px-10"
      >
        <h2 className="text-3xl font-bold sm:text-4xl">
          Ready to impress your next healthcare client?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Your landing page is now built to convert: clean, responsive, and
          presentation-ready.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950">
            Request Proposal
          </button>
          <motion.div
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-8 py-3 text-cyan-200"
          >
            Download Pitch Deck <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
