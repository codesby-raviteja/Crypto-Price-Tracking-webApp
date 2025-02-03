import React, { useContext, useEffect, useRef, useState } from "react"
import TrendCoin from "./TrendCoin"
import { TrendingCoins_URL } from "../config"
import { CurrencyContext } from "../../Context/CurrencyContex"
import { useDispatch, useSelector } from "react-redux"
import { useGetTrendingCoinsQuery } from "../../Store/rtk"

export default function TrendingCoins() {
  const [currency, setCurrency] = useContext(CurrencyContext)
  const {
    data: trendingCoins,
    isLoading: trendingCoinsLoadingState,
    isError: trendingCoinsErrorState,
  } = useGetTrendingCoinsQuery(TrendingCoins_URL(currency))


  return (
    <div className="p-1 bg-stone-100 rounded-lg  ">
      <div className="relative bg-stone py-0 space-y-4 p-4 rounded-xl max-h-[360px] overflow-y-scroll scrollbar-thin  scroll-bar-custom">
        <h2 className="text-2xl sticky top-0 p-1 border-b border-gray-400 bg-stone-100 font-semibold ">
          Trending Coins (24h)
        </h2>
        {trendingCoins?.map((item) => {
          return (
            <TrendCoin
              key={item.id}
              imageSrc={item?.image}
              name={item.name}
              symbol={item.symbol}
              id={item.id}
              price_change_percentage_24h={item?.price_change_percentage_24h}
              state={item}
            />
          )
        })}
      </div>
    </div>
  )
}
