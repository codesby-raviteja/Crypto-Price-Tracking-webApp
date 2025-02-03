import React from "react"
import TradingView from "./TradingView"
import CoinInformation from "./CoinInformation"
import TrendingCoins from "./TrendingCoins"

export default function HeroComponent() {
  return (
    <div className="max-w-7xl  mt-10  mx-auto px-4 grid grid-cols-7 gap-5">
      <div className="row-start-2 lg:row-span-1 min-h-[50vh]  col-span-7 lg:col-span-5 w-auto">
        <TradingView />
      </div>
      <div className="grid-row-3 max-w-96 lg:grid col-span-full sm:col-span-5 lg:col-span-2 gap-4  ">
        <div className="row-span-1">
          <CoinInformation />
        </div>
        <div className="hidden lg:block row-span-2">
          <TrendingCoins />
        </div>
      </div>
    </div>
  )
}
