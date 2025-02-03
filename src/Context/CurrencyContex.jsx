import { createContext, useState } from "react"

export const CurrencyContext = createContext()

export default function CurrencyContexProvide({ children }) {
  const [currency, setCurrency] = useState("inr")
  return (
    <CurrencyContext.Provider value={[currency, setCurrency]}>
      {children}
    </CurrencyContext.Provider>
  )
}
