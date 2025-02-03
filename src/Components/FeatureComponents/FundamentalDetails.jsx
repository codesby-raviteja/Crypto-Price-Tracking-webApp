import React from "react"
import SingleDetail from "./SingleDetail"

export default function FundamentalDetails({ data }) {
  const {
    name,
    TodayLowCurrency,
    TodayHighCurrency,
    allTimeHigh,
    allTimeLow,
    currentPrice,
    TradingVolume,
    volumeByMarketCap,
    MarketCapRank,
    MarketCap,
    PriceChangePercentage_24h,
    symbol,
    CirculatingSupply,

    MaxSupply,
    TotalSupply,
  } = data

  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-10 ">
      <div className="space-y-1 grow">
        <SingleDetail title={name} value={currentPrice} />
        <SingleDetail
          title={"24h Low / 24h High"}
          value={`${TodayLowCurrency} / ${TodayHighCurrency}`}
        />
        <SingleDetail
          title={"Price Change 24h (%)"}
          value={`${PriceChangePercentage_24h} %`}
        />
        <SingleDetail title={"Trading Volume"} value={TradingVolume} />
        <SingleDetail title={"Market Cap"} value={MarketCap} />
        <SingleDetail title={"Volume / Market Cap"} value={volumeByMarketCap} />
      </div>
      <div className="grow">
        <SingleDetail title={"Market Cap Rank"} value={`#${MarketCapRank}`} />
        <SingleDetail title={"Total Supply"} value={TotalSupply} />
        <SingleDetail title={"Circulating Supply"} value={CirculatingSupply} />
        <SingleDetail title={"Max Supply"} value={MaxSupply} />
        <SingleDetail title={"All-Time-High"} value={allTimeHigh} />
        <SingleDetail title={"All-Time-Low"} value={allTimeLow} />
      </div>
    </div>
  )
}
