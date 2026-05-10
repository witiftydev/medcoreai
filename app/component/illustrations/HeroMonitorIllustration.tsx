import { Activity, Brain, HeartPulse, ShieldCheck } from "lucide-react";

export default function HeroMonitorIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-3 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl sm:p-5 md:p-6">
        <div className="mb-3 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 sm:mb-4 sm:p-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-300/80 sm:text-xs">
              Live AI Monitor
            </p>
            <p className="mt-0.5 text-xs text-slate-200 sm:text-sm md:text-base">
              Cardiac Risk Prediction
            </p>
          </div>
          <span className="animate-pulse-glow rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300 sm:px-3 sm:py-1 sm:text-xs">
            Stable
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {[
            { icon: HeartPulse, label: "Heart Rate", value: "78 bpm" },
            { icon: Activity, label: "Blood Pressure", value: "120/80" },
            { icon: Brain, label: "AI Confidence", value: "97.2%" },
            { icon: ShieldCheck, label: "Emergency Risk", value: "Low" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-slate-900/70 p-2.5 transition hover:border-cyan-400/30 sm:p-3"
            >
              <item.icon className="h-3.5 w-3.5 text-cyan-300 sm:h-4 sm:w-4" />
              <p className="mt-1.5 text-[10px] text-slate-400 sm:text-xs">
                {item.label}
              </p>
              <p className="text-xs font-semibold text-white sm:text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3 text-[10px] text-slate-500 sm:text-xs">
          <span>Updated 2s ago</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            System Online
          </span>
        </div>
      </div>
    </div>
  );
}
