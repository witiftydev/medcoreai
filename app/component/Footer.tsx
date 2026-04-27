"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050b18] border-t border-white/10 text-white">
      {/* GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full bottom-0 left-0" />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-cyan-400 font-bold text-xl"
          >
            <HeartPulse />
            MediCore AI
          </motion.div>
          <p className="text-gray-400 text-sm mt-3">
            AI-powered healthcare system for smarter diagnosis, patient
            tracking, and hospital automation.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>AI Diagnosis</li>
            <li>Patient Dashboard</li>
            <li>Appointments</li>
            <li>Medical Records</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400 text-sm">support@medicore.ai</p>
          <p className="text-gray-400 text-sm mt-2">
            Global Healthcare Network
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} MediCore AI. All rights reserved.
        </motion.p>

        <p className="text-cyan-400 text-sm mt-2 font-medium">
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
    </footer>
  );
}
