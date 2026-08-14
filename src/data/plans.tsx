import type {PricingPlan} from "../types";

export const plans: PricingPlan[] = [
  {
    title: "Basic",
    monthlyPrice: 10.99,
    annualDiscount: 10,
    features: [{ name: "analytics", isIncluded: false }],
  },
  {
    title: "Pro",
    monthlyPrice: 40.99,
    annualDiscount: 10,
    features: [{ name: "analytics", isIncluded: true }],
  },
  {
    title: "Enterprise",
    monthlyPrice: 100.99,
    annualDiscount: 10,
    features: [{ name: "analytics", isIncluded: true }],
  }
];
