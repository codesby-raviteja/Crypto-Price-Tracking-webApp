import React, { useContext } from "react"
import getUSD, { getINR } from "../CurrencyConverter"
import { CurrencyContext } from "../../Context/CurrencyContex"
import { useDispatch } from "react-redux"
import { removeItem } from "../../Store/Slices/wishListSlice"

export default function WishListItem({
  image,
  name,
  symbol,
  id,
  current_price,
  price_change_percentage_24h,
}) {
  const [currency, setCurrency] = useContext(CurrencyContext)
  const dispatch = useDispatch()

  return (
    <div className="border-b  p-2 grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr] md:text-xl items-center px-2">
      <div className="flex  items-center gap-2 font-medium  ">
        <img src={image} alt={name} className="w-10 md:w-14 rounded-full" />
        <span className="">
          {name} <span className="hidden md:inline">- {symbol}</span>
        </span>
      </div>
      <span className="text-green-600 font-medium text-center sm:text-left">
        {currency === "inr" ? getINR(current_price) : getUSD(current_price)}
      </span>
      <span
        className={`
             hidden sm:block shrink-0 font-medium 
            ${
              price_change_percentage_24h > 0
                ? "text-green-600  "
                : "text-red-500  "
            }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </span>
      <button
        className="px-2 py-2 bg-red-400/50 cursor-pointer hover:scale-95"
        onClick={() => dispatch(removeItem(id))}
      >
        Remove
      </button>
    </div>
  )
}
