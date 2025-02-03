import React, { useEffect, useState } from "react"
import SecondHero from "./SecondHero"
import HeroComponent from "./HeroComponent"
import { useLocation } from "react-router-dom"
import StateContextProvider from "../../Context/StateProvider"

export default function CoinDetails() {
  const coindetails = useLocation().state
  const [data, setData] = useState(coindetails)
  useEffect(() => {
    setData(coindetails)
  }, [coindetails])
  return (
    <div>
      <StateContextProvider state={[data, setData]}>
        <HeroComponent />
        <SecondHero />
      </StateContextProvider>
    </div>
  )
}
