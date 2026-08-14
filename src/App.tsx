import BillingToggle from "./components/BillingToggle"
import type { BillingCycle } from "./types"
import { useState } from "react"

function App() {

  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  return (
    <>
      <BillingToggle cycle={cycle} onChange={setCycle}/>
   </>
  )
}

export default App
