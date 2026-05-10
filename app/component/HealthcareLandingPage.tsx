"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  Bot,
  ChevronRight,
  Star,
} from "lucide-react";
import HeroMonitorIllustration from "./illustrations/HeroMonitorIllustration";
import WorkflowIllustration from "./illustrations/WorkflowIllustration";
import Testimonials from "./Testimonials";
import BlogSection from "./BlogSection";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <AnimatedCounterValue value={value} suffix={suffix} />
      ) : (
        "0"
      )}
    </span>
  );
}

function AnimatedCounterValue({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <CountingNumber value={value} suffix={suffix} />
      ) : (
        "0" + suffix
      )}
    </span>
  );
}

function CountingNumber({ value, suffix }: { value: number; suffix: string }) {
  const displayed = value;
  return (
    <span>
      {displayed.toLocaleString()}
      {suffix}
    </span>
  );
}

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
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl md:h-96 md:w-96" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-1/4 top-2/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* ========== HERO ========== */}
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            AI Healthcare Platform
          </div>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Intelligent care,{" "}
              <span className="gradient-text">powered by AI</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg leading-relaxed">
              Built for clinics, hospitals, and digital health teams. Show your
              services, outcomes, and AI capabilities with a responsive
              experience that looks perfect on every screen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="group rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95">
                Book a Live Demo
                <ChevronRight className="ml-1.5 inline-block h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button className="rounded-full border border-cyan-300/50 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/10 hover:border-cyan-300/70">
                View Case Studies
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {[
                { k: "99.95%", v: "Uptime SLA" },
                { k: "85+", v: "Healthcare Clients" },
                { k: "3.8M", v: "Records Processed" },
              ].map((stat) => (
                <div
                  key={stat.v}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="animate-float">
            <HeroMonitorIllustration />
          </div>
        </motion.div>
      </section>

      {/* ========== STATS BANNER ========== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6">
          {[
            { value: 50000, suffix: "+", label: "Patients Managed", icon: HeartPulse },
            { value: 10000, suffix: "+", label: "Doctors Connected", icon: UserPlus },
            { value: 97, suffix: "%", label: "AI Prediction Precision", icon: Brain },
            { value: 24, suffix: "/7", label: "Critical Alerting", icon: Activity },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-white/[0.02]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20">
                <s.icon className="h-6 w-6 text-cyan-300" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs text-slate-400">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== FEATURES ========== */}
      <section
        id="features"
        className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24 mt-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Features
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Everything your healthcare{" "}
              <span className="gradient-text">clients expect</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              From AI triage to records and scheduling, your landing page now
              presents a full, professional service stack.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="absolute -right-3 -top-3 opacity-5 transition-all duration-500 group-hover:opacity-15 group-hover:scale-110">
                  <f.icon className="h-20 w-20" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-2.5">
                    <f.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-blue-500/0 transition-all duration-500 group-hover:from-cyan-500/40 group-hover:via-cyan-500/20 group-hover:to-blue-500/40" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== AI ENGINE ========== */}
      <section
        id="ai-engine"
        className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 xl:px-10 sm:py-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full border border-purple-300/30 bg-purple-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-200">
            AI Technology
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            AI engine that supports doctors,{" "}
            <span className="gradient-text">not replaces them</span>
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            MediCore AI prioritizes patients, reduces delays, and gives doctors
            clear recommendations with confidence scores. Our models are
            trained on millions of anonymized clinical cases.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {[
              {
                icon: Bot,
                text: "Real-time decision support for emergency and OPD",
              },
              {
                icon: Brain,
                text: "Faster triage with explainable AI recommendations",
              },
              {
                icon: ShieldCheck,
                text: "Automated compliance logs for hospital audits",
              },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15">
                  <item.icon className="h-4 w-4 text-cyan-300" />
                </div>
                <span className="mt-1.5">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <WorkflowIllustration />
        </motion.div>
      </section>

      {/* ========== DASHBOARD ========== */}
      <section
        id="dashboard"
        className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                Dashboard
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Client dashboard{" "}
                <span className="gradient-text">preview</span>
              </h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Showcase exactly what hospitals and clinics will see in your
                platform.
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 px-5 py-2.5 text-sm text-cyan-200 transition hover:bg-cyan-400/10">
              Explore Product Tour{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="mt-10 grid gap-5 lg:grid-cols-3"
          >
            {[
              {
                icon: HeartPulse,
                title: "Vitals",
                body: "Live telemetry for heart rate, oxygen saturation, and pressure trends.",
                gradient: "from-cyan-400/20 to-blue-500/20",
              },
              {
                icon: Brain,
                title: "AI Insight",
                body: "Instant risk scoring and treatment recommendations for clinicians.",
                gradient: "from-purple-400/20 to-pink-500/20",
              },
              {
                icon: Clock3,
                title: "Ops Timeline",
                body: "Monitor admissions, lab updates, and discharge readiness in one place.",
                gradient: "from-emerald-400/20 to-cyan-500/20",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div
                  className={`inline-flex rounded-xl bg-gradient-to-br ${item.gradient} p-3`}
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* ========== BLOG ========== */}
      <BlogSection />

      {/* ========== PRICING ========== */}
      <section
        id="pricing"
        className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Pricing
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Pricing for every{" "}
              <span className="gradient-text">care model</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Ready-to-present plans for clinics, hospitals, and enterprise
              healthcare groups.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="mt-12 grid gap-5 md:grid-cols-3"
          >
            {[
              {
                name: "Starter Clinic",
                price: "$29",
                period: "/month",
                desc: "Perfect for small clinics getting started with digital health.",
                points: [
                  "Patient Dashboard",
                  "Smart Scheduling",
                  "Basic Reports",
                  "Email Support",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Growth Hospital",
                price: "$79",
                period: "/month",
                desc: "For growing hospitals that need AI-powered insights.",
                featured: true,
                points: [
                  "Everything in Starter",
                  "AI Triage System",
                  "Advanced Analytics",
                  "Real-time Monitoring",
                  "Priority Support",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                desc: "For large healthcare networks with custom requirements.",
                points: [
                  "Full Platform Integration",
                  "Dedicated CSM",
                  "Custom AI Models",
                  "SLA Guarantee",
                  "On-premise Option",
                ],
                cta: "Contact Sales",
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-500 ${
                  plan.featured
                    ? "border-cyan-400/50 bg-gradient-to-b from-cyan-400/10 to-transparent shadow-xl shadow-cyan-500/10 scale-[1.02] md:scale-105"
                    : "border-white/10 bg-slate-950/70 hover:border-white/20"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-4 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </div>
                )}
                <p className="text-sm font-medium uppercase tracking-wider text-cyan-300">
                  {plan.name}
                </p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-slate-400">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>
                <ul className="mt-6 space-y-3">
                  {plan.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full px-4 py-3 font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-black hover:shadow-lg hover:shadow-cyan-500/25"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section id="faq" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="mt-10 space-y-4"
          >
            {[
              {
                q: "Will this design look good on mobile and large desktop screens?",
                a: "Yes. It is optimized with responsive spacing and grids for mobile, tablet, 1024, 1440, and larger displays. Every component adapts seamlessly.",
              },
              {
                q: "Can we customize branding for each client?",
                a: "Absolutely. Colors, copy, logos, and sections are easy to update without breaking responsiveness. The theme system makes rebranding effortless.",
              },
              {
                q: "Is this ready for client presentations?",
                a: "Yes. The page includes clear value messaging, service blocks, dashboard previews, testimonials, and pricing. It's designed to convert.",
              },
              {
                q: "What kind of support do you offer?",
                a: "We provide 24/7 technical support, documentation, API reference, and dedicated CSM for enterprise plans.",
              },
            ].map((item) => (
              <motion.details
                key={item.q}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-slate-950/70 p-5 transition-all duration-300 hover:border-white/20 open:border-cyan-400/30"
              >
                <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-white sm:text-base">
                  {item.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        id="contact"
        className="border-t border-white/10 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              <Star className="h-3.5 w-3.5" />
              Get Started Today
            </div>
            <h2 className="mt-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Ready to transform your
              <br />
              <span className="gradient-text">healthcare workflow?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Join 10,000+ healthcare professionals already using MediCore AI.
              Start your free trial today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="group rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-3 font-semibold text-black transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105 active:scale-95">
                Request Proposal
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border border-cyan-300/40 px-8 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/10">
                Download Pitch Deck
              </button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              No credit card required &middot; Free 14-day trial &middot; Cancel
              anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
