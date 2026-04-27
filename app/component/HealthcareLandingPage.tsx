"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Calendar,
  Brain,
  FileText,
  UserPlus,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function HealthcareLandingPage() {
  return (
    <div className="bg-[#050b18] text-white overflow-hidden">
      {/* GLOW BACKGROUNDS */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />

      {/* HERO */}
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12">
        {/* BACKGROUND GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-cyan-300 text-sm">
              ⚡ AI-Powered Healthcare System
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
              Smarter Healthcare with{" "}
              <span className="text-cyan-400">AI Intelligence</span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Diagnose faster, manage patients better, and automate hospital
              workflows using next-generation AI technology.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:scale-105 transition">
                Get Started
              </button>

              <button className="px-6 py-3 border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition">
                Live Demo
              </button>
            </div>

            {/* MINI STATS */}
            <div className="mt-10 flex gap-6 text-sm text-gray-400">
              <p>✔ 95% AI Accuracy</p>
              <p>✔ Real-time Monitoring</p>
              <p>✔ 24/7 Support</p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* MAIN VISUAL CARD */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
            >
              {/* MOCK AI DASHBOARD */}
              <div className="space-y-4">
                <div className="h-32 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                  <span className="text-cyan-300 font-semibold">
                    AI Patient Analysis
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center text-sm text-gray-300">
                    Heart Rate
                  </div>

                  <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center text-sm text-gray-300">
                    BP Monitor
                  </div>

                  <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center text-sm text-gray-300">
                    Diagnosis AI
                  </div>

                  <div className="h-20 bg-white/5 rounded-xl flex items-center justify-center text-sm text-gray-300">
                    Reports
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FLOATING ELEMENTS */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-10 right-10 bg-cyan-500/20 px-3 py-2 rounded-full text-xs text-cyan-300"
            >
              AI Scanning...
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-10 left-10 bg-blue-500/20 px-3 py-2 rounded-full text-xs text-blue-300"
            >
              Patient Data Sync
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ["50K+", "Patients Managed"],
            ["10K+", "Doctors Connected"],
            ["95%", "AI Accuracy"],
            ["24/7", "Emergency Care"],
          ].map((s, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold text-cyan-400">{s[0]}</h2>
              <p className="text-gray-300 mt-2">{s[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY AI HEALTHCARE */}
      <section className="py-28 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Why AI is the Future of Healthcare
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Traditional healthcare is slow, reactive, and manual. AI makes it
            predictive, fast, and intelligent.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Faster Diagnosis",
                desc: "Reduce diagnosis time from hours to seconds.",
              },
              {
                title: "Error Reduction",
                desc: "Minimize human error in critical decisions.",
              },
              {
                title: "Predictive Care",
                desc: "Detect diseases before symptoms become severe.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-cyan-400 font-semibold">{item.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR + AI COLLAB */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT VISUAL */}
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            className="p-10 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 text-center"
          >
            <div className="text-6xl">🧑‍⚕️🤖</div>
            <p className="text-cyan-300 mt-4 font-semibold">
              Doctor + AI Collaboration
            </p>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold">
              AI doesn’t replace doctors — it empowers them
            </h2>

            <p className="text-gray-300 mt-4">
              MediCore AI assists doctors with real-time suggestions, risk
              alerts, and data insights so they can focus on what matters most —
              patient care.
            </p>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm">
              <li>✔ Real-time decision support</li>
              <li>✔ AI-assisted diagnosis suggestions</li>
              <li>✔ Smart patient prioritization</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FEATURES (MODERN CARDS + ICON FLOAT EFFECT) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold mb-14"
        >
          Intelligent Healthcare System
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Activity,
              title: "Live Patient Monitoring",
              desc: "Track vitals in real-time using smart hospital sensors.",
            },
            {
              icon: Calendar,
              title: "Smart Appointment System",
              desc: "AI schedules doctors & patients automatically.",
            },
            {
              icon: Brain,
              title: "AI Diagnosis Engine",
              desc: "Predict diseases based on symptoms instantly.",
            },
            {
              icon: FileText,
              title: "Digital Medical Records",
              desc: "Secure cloud-based health history storage.",
            },
            {
              icon: UserPlus,
              title: "Auto Doctor Assignment",
              desc: "System matches patients with best specialists.",
            },
            {
              icon: ShieldCheck,
              title: "Emergency Response AI",
              desc: "Instant alerts for critical medical cases.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-[-20px] right-[-20px] opacity-10">
                <f.icon size={120} />
              </div>

              <f.icon className="text-cyan-400 w-8 h-8" />
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AI INSIGHT SECTION (NEW MODERN BLOCK) */}
      <section className="py-28 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold">AI Health Intelligence Engine</h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Advanced AI analyzes patient symptoms, medical history, and hospital
            data to assist doctors in decision-making.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          className="mt-12 max-w-3xl mx-auto p-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
        >
          <HeartPulse className="mx-auto text-cyan-400 w-14 h-14" />

          <p className="text-gray-300 mt-6">
            “AI suggests possible diagnosis, severity level, and treatment
            recommendations in real time.”
          </p>
        </motion.div>
      </section>

      {/* LIVE AI DIAGNOSTIC PREVIEW */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold"
        >
          Live AI Diagnostic Preview
        </motion.h2>

        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
          See how MediCore AI analyzes patient data in real-time.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT - SIMULATION */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold mb-4">
              Patient Input Simulation
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>👤 Age: 45</p>
              <p>❤️ Heart Rate: 110 bpm</p>
              <p>🌡️ Temperature: 101.2°F</p>
              <p>🫁 Symptoms: Chest pain, fatigue</p>
            </div>

            <div className="mt-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <p className="text-cyan-300 font-medium">
                AI Result: High Risk (Cardiac Alert)
              </p>
            </div>
          </motion.div>

          {/* RIGHT - AI PROCESSING */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-10 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center"
          >
            <div className="text-6xl">🧠</div>
            <h3 className="mt-4 text-xl font-semibold text-cyan-300">
              AI Processing...
            </h3>
            <p className="text-gray-300 mt-2 text-sm">
              Analyzing vitals, symptoms & medical history
            </p>
          </motion.div>
        </div>
      </section>

      {/* REAL-TIME PATIENT DASHBOARD PREVIEW */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Real-Time Patient Dashboard</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Monitor patients, vitals, and AI insights from a unified intelligent
            healthcare dashboard.
          </p>
        </motion.div>

        {/* DASHBOARD GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 - VITAL SIGNS */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold mb-4">❤️ Vital Signs</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>
                Heart Rate: <span className="text-white">78 bpm</span>
              </p>
              <p>
                Blood Pressure: <span className="text-white">120/80</span>
              </p>
              <p>
                Oxygen Level: <span className="text-white">98%</span>
              </p>
            </div>

            <div className="mt-4 h-2 bg-cyan-500/20 rounded-full overflow-hidden">
              <motion.div
                animate={{ width: ["40%", "80%", "60%"] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="h-full bg-cyan-400"
              />
            </div>
          </motion.div>

          {/* CARD 2 - AI INSIGHT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold mb-4">🧠 AI Insight</h3>

            <p className="text-gray-300 text-sm">
              Patient condition is stable. No critical risks detected. Continue
              normal monitoring.
            </p>

            <div className="mt-4 p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-300 text-sm">
              Risk Level: LOW
            </div>
          </motion.div>

          {/* CARD 3 - ACTIVE ALERTS */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold mb-4">
              🚨 Active Alerts
            </h3>

            <ul className="text-sm text-gray-300 space-y-2">
              <li>✔ Patient #102 stable</li>
              <li>⚠ Patient #87 needs checkup</li>
              <li>✔ ICU monitoring normal</li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM GLOW STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 p-6 text-center rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
        >
          <p className="text-cyan-300 font-medium">
            ⚡ Powered by real-time hospital data + AI predictive engine
          </p>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-300 mt-4">
            Everything you need to know about MediCore AI
          </p>
        </motion.div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {[
            {
              q: "Is MediCore AI safe for patient data?",
              a: "Yes. All data is encrypted using hospital-grade security protocols and stored securely in the cloud.",
            },
            {
              q: "Can small clinics use this system?",
              a: "Absolutely. The platform is fully scalable for small clinics, hospitals, and large healthcare networks.",
            },
            {
              q: "Does AI replace doctors?",
              a: "No. AI assists doctors by providing insights, but final decisions are always made by medical professionals.",
            },
            {
              q: "Is real-time monitoring available?",
              a: "Yes. Patient vitals can be tracked in real-time using integrated IoT devices and dashboards.",
            },
          ].map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium text-white">
                {item.q}
                <span className="text-cyan-400 group-open:rotate-45 transition">
                  +
                </span>
              </summary>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-28 px-6 bg-white/5 border-y border-white/10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Choose Your Plan</h2>
          <p className="text-gray-300 mt-4">
            Flexible pricing for hospitals, clinics, and enterprises
          </p>
        </motion.div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* BASIC */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold">Basic Clinic</h3>
            <p className="text-3xl font-bold mt-4">
              $19<span className="text-sm text-gray-400">/mo</span>
            </p>

            <ul className="mt-6 text-sm text-gray-300 space-y-2">
              <li>✔ Patient Dashboard</li>
              <li>✔ Appointment System</li>
              <li>✔ Basic AI Reports</li>
            </ul>

            <button className="mt-6 w-full py-2 bg-cyan-500 text-black rounded-full font-semibold">
              Get Started
            </button>
          </motion.div>

          {/* PRO */}
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 backdrop-blur-xl"
          >
            <h3 className="text-cyan-300 font-semibold">Pro Hospital</h3>
            <p className="text-3xl font-bold mt-4">
              $49<span className="text-sm text-gray-400">/mo</span>
            </p>

            <ul className="mt-6 text-sm text-gray-300 space-y-2">
              <li>✔ AI Diagnosis Engine</li>
              <li>✔ Real-time Monitoring</li>
              <li>✔ Advanced Analytics</li>
            </ul>

            <button className="mt-6 w-full py-2 bg-cyan-500 text-black rounded-full font-semibold">
              Most Popular
            </button>
          </motion.div>

          {/* ENTERPRISE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="text-cyan-400 font-semibold">Enterprise</h3>
            <p className="text-3xl font-bold mt-4">Custom</p>

            <ul className="mt-6 text-sm text-gray-300 space-y-2">
              <li>✔ Full AI System</li>
              <li>✔ Hospital Integration</li>
              <li>✔ Dedicated Support</li>
            </ul>

            <button className="mt-6 w-full py-2 border border-cyan-400 rounded-full">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Transform Healthcare with AI Today
        </h2>

        <button className="mt-8 px-8 py-3 bg-cyan-500 text-black rounded-full font-semibold hover:scale-105 transition">
          Join MediCore AI
        </button>
      </section>
    </div>
  );
}
