import React, { useContext } from "react"
import { StateContext } from "../../Context/StateProvider"
import { CurrencyContext } from "../../Context/CurrencyContex"
import getUSD, { getINR } from "../CurrencyConverter"
import { useDispatch } from "react-redux"
import { addItem } from "../../Store/Slices/wishListSlice"

export default function CoinInformation() {
  const [coinDetails, setCoinetails] = useContext(StateContext)
  const [currency, setCurrency] = useContext(CurrencyContext)
  const dispatch = useDispatch()

  console.log(coinDetails)

  return (
    <div className="bg-stone-100 py-4 px-2 rounded-md  gap-2">
      <div className="flex items-center ">
        <img
          src={coinDetails?.image}
          alt={coinDetails?.name}
          className="w-10"
        />
        <span className="ml-2">
          <span className="text-2xl font-semibold ">{coinDetails?.name} </span>{" "}
          <sup className="text-base   font-medium">
            {coinDetails?.symbol?.toUpperCase()}
          </sup>
        </span>
        <span className="bg-gray-400 text-white font-medium px-2 py-1 rounded ml-auto">
          Rank #{coinDetails?.market_cap_rank}
        </span>
      </div>
      <p className="my-2 text-xl font-medium pl-1 ">
        Current Price:
        <span className="text-green-500 ml-1">
          {currency == "inr"
            ? getINR(coinDetails?.current_price)
            : getUSD(coinDetails?.current_price)}
        </span>
      </p>
      <button
        className="block hover:scale-105 transition-all duration-200 bg-orange-300 px-6 py-1.5 text-lg font-medium mx-auto rounded text-pink cursor-pointer"
        onClick={() => dispatch(addItem(coinDetails?.id))}
      >
        Add to Wishlist
      </button>
    </div>
  )
}
