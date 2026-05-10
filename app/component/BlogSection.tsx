"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Clock,
  BarChart3,
  Microscope,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

const posts = [
  {
    icon: Microscope,
    tag: "AI & Machine Learning",
    title: "How AI is reshaping clinical decision support in 2026",
    desc: "Explore the latest advancements in predictive diagnostics and how hospitals are integrating ML models into daily workflows.",
    date: "May 8, 2026",
    readTime: "6 min read",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: BarChart3,
    tag: "Data Analytics",
    title: "5 dashboards every hospital operations team needs",
    desc: "Real-time metrics that reduce bottlenecks, improve bed management, and give administrators full visibility across departments.",
    date: "Apr 28, 2026",
    readTime: "4 min read",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: ShieldCheck,
    tag: "Security & Compliance",
    title: "Navigating HIPAA compliance in the age of cloud healthcare",
    desc: "A practical guide to encryption, access control, and audit logging for healthcare SaaS platforms handling PHI.",
    date: "Apr 15, 2026",
    readTime: "8 min read",
    color: "from-emerald-400 to-cyan-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function BlogSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <span className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Insights
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Latest from{" "}
              <span className="gradient-text">MediCore Lab</span>
            </h2>
            <p className="mt-2 max-w-xl text-slate-300">
              Thoughts on healthcare technology, AI advancements, and best
              practices for digital health teams.
            </p>
          </div>
          <button className="hidden items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400 sm:inline-flex">
            View all articles <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/10">
                <post.icon className="h-6 w-6 text-cyan-300" />
              </div>

              <span
                className={`inline-block rounded-full bg-gradient-to-r ${post.color} bg-clip-text px-3 py-1 text-xs font-medium text-transparent`}
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  WebkitBackgroundClip: "text",
                }}
              >
                {post.tag}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-slate-400">
                {post.desc}
              </p>

              <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-purple-500/0 transition-all duration-500 group-hover:from-cyan-500/40 group-hover:via-cyan-500/20 group-hover:to-purple-500/40" />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400">
            View all articles <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
