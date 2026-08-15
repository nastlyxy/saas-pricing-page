import type { PricingPlan } from "../types";

export const plans: PricingPlan[] = [
  {
    title: "Basic",
    monthlyPrice: 10.99,
    annualDiscount: 10,
    features: [
      { name: "Analytics", isIncluded: true },
      { name: "Unlimited Projects", isIncluded: true },
      { name: "Priority Support", isIncluded: false },
      { name: "Custom Domain", isIncluded: false },
      { name: "Team Collaboration", isIncluded: false },
      { name: "API Access", isIncluded: false },
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 40.99,
    annualDiscount: 10,
    features: [
      { name: "Analytics", isIncluded: true },
      { name: "Unlimited Projects", isIncluded: true },
      { name: "Priority Support", isIncluded: true },
      { name: "Custom Domain", isIncluded: true },
      { name: "Team Collaboration", isIncluded: false },
      { name: "API Access", isIncluded: false },
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    monthlyPrice: 100.99,
    annualDiscount: 10,
    features: [
      { name: "Analytics", isIncluded: true },
      { name: "Unlimited Projects", isIncluded: true },
      { name: "Priority Support", isIncluded: true },
      { name: "Custom Domain", isIncluded: true },
      { name: "Team Collaboration", isIncluded: true },
      { name: "API Access", isIncluded: true },
    ],
  },
];
