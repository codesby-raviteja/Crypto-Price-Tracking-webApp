import React from "react"
import Uptriangle from "../../assets/Uptriangle.svg"
import getUSD from "../CurrencyConverter"

export default function RangeBars({
  TodayLowCurrency,
  TodayHighCurrency,
  allTimeHigh,
  allTimeLow,
  currentPrice,
  currentPriceNumber,
  TodayLowNumber,
  TodayHighNumber,
}) {
  const currentPriceBarPosition = (current, Low, High) => {
    const percentage = ((current - Low) / (High - Low)) * 100
    return `${Math.floor(percentage)}%`
  }


  return (
    <>
      <h2 className="text-2xl font-semibold">Performance</h2>
      <div className="flex items-center justify-between mt-6 md:gap-8">
        <div className="flex flex-col  items-center sm:gap-2 shrink-0 md:w-24">
          <span className="md:font-medium" >Today's Low</span>
          <span>{TodayLowCurrency}</span>
        </div>
        <div className="relative w-full h-2 rounded-2xl bg-linear-[90deg,#ff4949_0%,#FF4E11_15%,#FC870A_30%,#FFAF11_48%,#C2CB21_62%,#11EB68_100%] grow-0 ">
          <span
            className="absolute top-full flex flex-col "
            style={{
              left: currentPriceBarPosition(
                currentPriceNumber,
                TodayLowNumber,
                TodayHighNumber
              ),
            }}
          >
            <img className="w-5 h-5 r" src={Uptriangle} alt="" />
            <span className="absolute font-medium flex justify-center top-full -translate-x-[40%] bg-gray-300 py-1 px-4 text-sm rounded">
              {currentPrice}
            </span>
          </span>
        </div>
        <div className="flex flex-col sm:gap-2 items-center shrink-0 md:w-24">
          <span className="md:font-medium">Today's High</span>
          <span>{TodayHighCurrency}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 md:gap-8">
        <div className="flex flex-col  items-center sm:gap-2 shrink-0 md:w-24">
          <span className="sm:font-medium">All Time Low</span>
          <span>{allTimeLow}</span>
        </div>
        <div className="w-full h-2 rounded-2xl bg-linear-[90deg,#ff4949_0%,#FF4E11_15%,#FC870A_30%,#FFAF11_48%,#C2CB21_62%,#11EB68_100%] grow-0 "></div>
        <div className="flex flex-col sm:gap-2 items-center shrink-0 md:w-24">
          <span className="sm:font-medium text-nowrap">All Time High</span>
          <span>{allTimeHigh}</span>
        </div>
      </div>
    </>
  )
}
