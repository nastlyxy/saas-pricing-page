export type BillingCycle = 'monthly' | 'annually';
export interface Feature{
    name: string,
    isIncluded: boolean
}
export interface PricingPlan{
    title: string,
    monthlyPrice: number,
    annualDiscount?: number,
    features: Feature[],
}