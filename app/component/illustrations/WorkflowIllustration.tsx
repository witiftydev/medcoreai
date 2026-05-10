import {
  ClipboardList,
  ScanSearch,
  Stethoscope,
  Syringe,
  ArrowDown,
} from "lucide-react";

const flow = [
  {
    title: "Digital Intake",
    desc: "Patients submit data in less than 2 minutes.",
    icon: ClipboardList,
  },
  {
    title: "AI Triage",
    desc: "Urgent cases are prioritized instantly.",
    icon: ScanSearch,
  },
  {
    title: "Doctor Review",
    desc: "Clinicians validate recommendations confidently.",
    icon: Stethoscope,
  },
  {
    title: "Outcome Tracking",
    desc: "Automatic follow-up and treatment insights.",
    icon: Syringe,
  },
];

export default function WorkflowIllustration() {
  return (
    <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-500/10 sm:p-5">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400 sm:text-sm">
          Patient Journey
        </p>
        <span className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-[10px] text-cyan-300 sm:text-xs">
          4 Steps
        </span>
      </div>
      <div className="mt-3 grid gap-2 sm:gap-3">
        {flow.map((item, index) => (
          <div key={item.title}>
            <div className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-3.5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-200 transition group-hover:from-cyan-400/30 group-hover:to-blue-500/30 sm:h-10 sm:w-10">
                <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    {item.title}
                  </p>
                  <span className="shrink-0 text-[10px] font-mono text-cyan-400/60 sm:text-xs">
                    0{index + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-400 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
            {index < flow.length - 1 && (
              <div className="flex justify-center py-0.5">
                <ArrowDown className="h-3 w-3 text-cyan-400/30" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
