// Format the price above to USD using the locale, style, and currency.
let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  trailingZeroDisplay: "stripIfInteger",
})

const getUSD = USDollar.format

export default getUSD





let INRupee = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  trailingZeroDisplay: "stripIfInteger",
})

export const getINR = INRupee.format








export function ConvertDataToUSDollarFormate(Obj) {
  const newObject = {
    id: Obj?.id,
    name: Obj?.name,
    Image: Obj?.image,
    TodayLowCurrency: getUSD(Obj?.low_24h),
    TodayHighCurrency: getUSD(Obj?.high_24h),
    currentPrice: getUSD(Obj?.current_price),
    TodayLowNumber: Obj?.low_24h,
    TodayHighNumber: Obj?.high_24h,
    currentPriceNumber: Obj?.current_price,
    MarketCap: getUSD(Obj?.market_cap),
    MarketCapRank: Obj?.market_cap_rank,
    TradingVolume: getUSD(Obj?.total_volume),
    allTimeHigh: getUSD(Obj?.ath),
    allTimeLow: getUSD(Obj?.atl),
    volumeByMarketCap: (Obj?.total_volume / Obj?.market_cap).toFixed(3),
    PriceChangePercentage_24h: Obj?.price_change_percentage_24h?.toFixed(3),
    MaxSupply:
      getUSD(Obj?.max_supply).substring(1) + " " + Obj.symbol.toUpperCase(),
    TotalSupply:
      getUSD(Obj?.total_supply).substring(1) + " " + Obj.symbol.toUpperCase(),
    CirculatingSupply:
      getUSD(Obj?.circulating_supply).substring(1) +
      " " +
      Obj.symbol.toUpperCase(),
  }

  return newObject
}
export function ConvertDataToINRupeeFormate(Obj) {
  const newObject = {
    id: Obj?.id,
    name: Obj?.name,
    Image: Obj?.image,
    TodayLowCurrency: getINR(Obj?.low_24h),
    TodayHighCurrency: getINR(Obj?.high_24h),
    currentPrice: getINR(Obj?.current_price),
    TodayLowNumber: Obj?.low_24h,
    TodayHighNumber: Obj?.high_24h,
    currentPriceNumber: Obj?.current_price,
    MarketCap: getINR(Obj?.market_cap),
    MarketCapRank: Obj?.market_cap_rank,
    TradingVolume: getINR(Obj?.total_volume),
    allTimeHigh: getINR(Obj?.ath),
    allTimeLow: getINR(Obj?.atl),
    volumeByMarketCap: (Obj?.total_volume / Obj?.market_cap).toFixed(3),
    PriceChangePercentage_24h: Obj?.price_change_percentage_24h?.toFixed(3),
    MaxSupply:
      getINR(Obj?.max_supply).substring(1) + " " + Obj.symbol.toUpperCase(),
    TotalSupply:
      getINR(Obj?.total_supply).substring(1) + " " + Obj.symbol.toUpperCase(),
    CirculatingSupply:
      getINR(Obj?.circulating_supply).substring(1) +
      " " +
      Obj.symbol.toUpperCase(),
  }

  return newObject
}
