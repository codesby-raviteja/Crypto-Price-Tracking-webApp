import React from "react"
import { Link } from "react-router-dom"

export default function TrendCoin({ imageSrc, name, symbol, price_change_percentage_24h, id,state }) {
  const percentageChange = price_change_percentage_24h.toFixed(2)
  
  return (
    <Link
      to={`/${symbol}&coin=${id}`}
      state={state}
      className="flex justify-between items-center hover:bg-gray-200 hover:rounded-sm p-1"
    >
      <p className="flex items-center gap-2 font-medium">
        <img src={imageSrc} alt={name} className="w-10 rounded-full" />
        {name} ({symbol})
      </p>
      <span
        className={`${
          percentageChange > 0 ? "bg-green-300" : "bg-red-300"
        } p-1 px-2 min-w-16 font-medium rounded-sm`}
      >
        {percentageChange}
      </span>
    </Link>
  )
}
