import BillingToggle from "./components/BillingToggle"
import type { BillingCycle } from "./types"
import PricingCard from "./components/PricingCard";
import { plans } from "./data/plans";
import { useState } from "react"

function App() {

  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  return (
    <>
      <BillingToggle cycle={cycle} onChange={setCycle}/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mt-12 px-4">
        {plans.map(plan => (
          <PricingCard key={plan.title} cycle={cycle} plan={plan}/>
        ))}
      </div>
   </>
  )
}

export default App
