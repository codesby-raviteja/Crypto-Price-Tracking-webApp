import React, { useContext, useEffect, useRef, useState } from "react"
import { TrendingCoins_URL } from "../config"
import TopTrendingCoin from "./TopTrendingCoin"
import { FaAngleRight } from "react-icons/fa6"
import { FaAngleLeft } from "react-icons/fa6"
import { CurrencyContext } from "../../Context/CurrencyContex"
import { useDispatch, useSelector } from "react-redux"
// import {
//   getTrendingCoins,
//   getTrendingCoinsData,
//   getTrendingCoinsErrorState,
//   getTrendingCoinsLoadingState,
//   updateTrendingCoinsState,
// } from "../../Store/Slices/TrendingCoinsSlice"
import { HiH2 } from "react-icons/hi2"
import TrendingCoinShimmer from "../Shimmer/TrendingCoinShimmer"
import { useGetTrendingCoinsQuery } from "../../Store/rtk"

export default function Carousel() {
  const [currency, setCurrency] = useContext(CurrencyContext)
  const {
    data: trendingCoins,
    isLoading: trendingCoinsLoadingState,
    isError: trendingCoinsErrorState,
  } = useGetTrendingCoinsQuery(TrendingCoins_URL(currency))
  
  const carouselDiv = useRef()
  const currencyRef = useRef(currency)
  const dispatch = useDispatch()

  const scrollToRight = () => {
    carouselDiv.current.scrollLeft += 250
  }
  const scrollToLeft = () => {
    carouselDiv.current.scrollLeft -= 250
  }

  const onWheel = (e) => {
    e.stopPropagation()

    carouselDiv.current.scrollLeft += e.deltaY
  }
  

  return (
    <div className="relative max-w-[90%] mx-auto  mt-8  backdrop-opacity-10 rounded-md  ">
      <div
        className="flex gap-16 md:py-4 px-10 md:px-16  overflow-x-scroll no-scrollbar scroll-smooth"
        ref={carouselDiv}
        onWheel={onWheel}
      >
        {trendingCoinsLoadingState ? (
          Array(6)
            .fill("")
            .map((a, i) => <TrendingCoinShimmer key={i} />)
        ) : trendingCoinsErrorState ? (
          <h2 className="text-2xl font-medium  text-red-600/60 mx-auto">
            {trendingCoinsErrorState}..
          </h2>
        ) : (
          trendingCoins.map((coin) => (
            <TopTrendingCoin key={coin.id} {...coin} currency={currency} coin={coin}/>
          ))
        )}
      </div>
      <button
        className="absolute top-[30%] -translate-y-[30%] cursor-pointer -left-3 bg-blue-600/40  md:opacity-40 md:bg-blue-600/30  h-full hover:opacity-70 hover:bg-blue-600/80 transition-all duration-100"
        onClick={scrollToLeft}
      >
        <FaAngleLeft className="text-4xl md:text-7xl text-white   " />
      </button>
      <button
        className="absolute top-[30%] -translate-y-[30%] -right-3 bg-blue-600/40 cursor-pointer md:opacity-40 md:bg-blue-600/30  h-full hover:opacity-70 hover:bg-blue-600/80 transition-all duration-100"
        onClick={scrollToRight}
      >
        <FaAngleRight className="text-4xl md:text-7xl text-white   " />
      </button>
    </div>
  )
}
