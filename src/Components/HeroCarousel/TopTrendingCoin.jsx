import React from "react"
import getUSD, { getINR } from "../CurrencyConverter"
import { Link } from "react-router-dom"

export default function TopTrendingCoin({
  image,
  current_price,
  symbol,
  price_change_percentage_24h,
  name,
  currency,
  id,
  coin
}) {
  return (
    <Link
      to={`/${symbol}&coin=${id}`}
      className="shrink-0 flex flex-col items-center cursor-pointer bg-stone-500/20 py-2 px-4 rounded-md"
      state={coin}
    >
      <img src={image} alt={name} className="rounded-full w-16 md:w-24" />
      <p className="mt-2 flex items-center gap-2">
        <span className="text-lg font-medium">{symbol.toUpperCase()} </span>
        <span
          className={`font-medium ${
            price_change_percentage_24h > 0
              ? "text-green-400/90"
              : "text-red-500"
          }`}
        >
          {price_change_percentage_24h.toFixed(2)}%
        </span>
      </p>
      <span className="text-lg font-medium text-white">
        {" "}
        {currency == "inr" ? getINR(current_price) : getUSD(current_price)}
      </span>
    </Link>
  )
}
