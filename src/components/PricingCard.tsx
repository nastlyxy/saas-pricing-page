import type { PricingPlan, BillingCycle } from "../types";

interface PricingCardProps {
  plan: PricingPlan;
  cycle: BillingCycle;
}

export default function PricingCard({ plan, cycle }: PricingCardProps) {
  let displayPrice;
  if (cycle === "monthly") {
    displayPrice = plan.monthlyPrice;
  } else {
    let annualPrice = 12 * plan.monthlyPrice;
    if (plan.annualDiscount) {
      annualPrice -= (plan.annualDiscount * annualPrice) / 100;
    }
    displayPrice = annualPrice.toFixed(2);
  }

  return (
    <div className="flex flex-col bg-slate-800 rounded-xl p-8 border border-slate-700">
      <div className="text-2xl font-semibold text-white">{plan.title}</div>
      <div className="text-4xl font-bold mt-4">
        {displayPrice}
        <span className="text-slate-400">
          {cycle === "monthly" ? "/mo" : "/yr"}
        </span>
      </div>
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature.name} className={feature.isIncluded? "text-white" : "text-slate-500"}>
            <span
              className={
                feature.isIncluded ? "text-green-500" : ""
              }
            >
              {feature.isIncluded? "✓ ": "✕ "}
            </span>
            {feature.name}
          </li>
        ))}
      </ul>
      <button className="w-full mt-8 bg-sky-500 rounded-xl text-white py-3 font-semibold transition-colors hover:bg-sky-400">Get Started</button>
    </div>
  );
}
