import {
  ClipboardList,
  ScanSearch,
  Stethoscope,
  Syringe,
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
    <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-500/10">
      <div className="grid gap-3">
        {flow.map((item, index) => (
          <div
            key={item.title}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3"
          >
            <div className="mt-0.5 rounded-xl bg-cyan-400/15 p-2 text-cyan-200">
              <item.icon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <span className="text-xs text-cyan-300">0{index + 1}</span>
              </div>
              <p className="text-xs text-slate-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
