import BillingToggle from "./components/BillingToggle";
import type { BillingCycle } from "./types";
import PricingCard from "./components/PricingCard";
import { plans } from "./data/plans";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

function App() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen py-12 transition-colors duration-300 bg-slate-50 dark:bg-slate-900">
        <div className="flex justify-end px-8 max-w-7xl mx-auto">
          <button className="rounded-full p-3 bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200 transition-all hover:scale-110" onClick={()=> setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Simple and transparent pricing
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-4">
            No hidden fees. Cancel any time
          </p>
        </div>
        <BillingToggle cycle={cycle} onChange={setCycle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-12 px-4">
          {plans.map((plan) => (
            <PricingCard key={plan.title} cycle={cycle} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
