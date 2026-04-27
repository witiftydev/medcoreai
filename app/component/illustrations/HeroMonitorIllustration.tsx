import { Activity, Brain, HeartPulse, ShieldCheck } from "lucide-react";

export default function HeroMonitorIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/80">
              Live AI Monitor
            </p>
            <p className="mt-1 text-sm text-slate-200 sm:text-base">
              Cardiac Risk Prediction
            </p>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-xs text-emerald-300">
            Stable
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: HeartPulse, label: "Heart Rate", value: "78 bpm" },
            { icon: Activity, label: "Blood Pressure", value: "120/80" },
            { icon: Brain, label: "AI Confidence", value: "97.2%" },
            { icon: ShieldCheck, label: "Emergency Risk", value: "Low" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-slate-900/70 p-3"
            >
              <item.icon className="h-4 w-4 text-cyan-300" />
              <p className="mt-2 text-xs text-slate-400">{item.label}</p>
              <p className="text-sm font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
