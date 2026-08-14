import type { BillingCycle } from "../types";

interface BillingToggleProps {
  cycle: BillingCycle;
  onChange: (newCycle: BillingCycle) => void;
}

export default function BillingToggle({ cycle, onChange }: BillingToggleProps) {
  return (
    <div className="flex bg-slate-800 p-1 rounded-lg w-max mx-auto mt-5">
      <button
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${cycle === "monthly" ? "bg-sky-500 text-white shadow-sm" : "text-slate-400 hover:text-white"}`}
        onClick={() => onChange("monthly")}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${cycle === "annually" ? "bg-sky-500 text-white shadow-sm" : "text-slate-400 hover:text-white"}`}
        onClick={() => onChange("annually")}
      >
        Annuallly
      </button>
    </div>
  );
}
