import React, { useContext } from "react"
import getUSD, { getINR } from "../CurrencyConverter"
import { CurrencyContext } from "../../Context/CurrencyContex"
import { Link } from "react-router-dom"

export default function CoinRow({
  market_cap_rank,
  image,
  name,
  symbol,
  id,
  current_price,
  market_cap,
  price_change_percentage_24h,
  coinObj
}) {
  const [currency, setCurrency] = useContext(CurrencyContext)
  return (
    <Link to={`/${symbol}&coin=${id}`} state={coinObj}>
      <div className="grid grid-cols-[50px_1fr_1fr_1fr_1fr] md:grid-cols-[100px_1fr_1fr_1fr_1fr_1fr] items-center justify-center px-4 border-b gap-4 border-gray-400 py-2 sm:text-lg lg:text-xl font-semibold cursor-pointer hover:bg-orange-300/80 ">
        <span className="shrink text-center">{market_cap_rank}</span>
        <div className="col-span-2 ">
          <div className="flex flex-col md:flex-row  items-center  gap-1 ">
            <img src={image} alt={name} className="w-10" />
            <span className="text-center">
              {name} <span className="hidden md:inline">- {symbol}</span>
            </span>
          </div>
        </div>
        <span className="text-center">
          {currency === "inr" ? getINR(current_price) : getUSD(current_price)}
        </span>
        <span
          className={
            price_change_percentage_24h > 0
              ? "text-green-600 shrink-0 text-center"
              : "text-red-500 shrink-0 text-center"
          }
        >
          {price_change_percentage_24h.toFixed(2)}%
        </span>
        <span className="text-nowrap hidden md:inline">
          {currency === "inr"
            ? getINR(market_cap).slice(0, 12)
            : getUSD(market_cap).slice(0, 12)}
          .. M
        </span>
      </div>
    </Link>
  )
}
