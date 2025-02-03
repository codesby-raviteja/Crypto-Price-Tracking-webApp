import React from "react"

export default function TabelHeading() {
  return (
    <div className="grid grid-cols-[50px_1fr_1fr_1fr_1fr] md:grid-cols-[100px_1fr_1fr_1fr_1fr_1fr] pt-4 items-center  gap-4 px-4 border-b bg-blue-500/60  border-gray-400 py-2 text-lg sm:text-xl lg:text-2xl font-semibold ">
      <span className="text-center"># Rank</span>
      <span className="col-span-2 text-center md:text-left md:pl-8">Coins</span>
      <span className="  sm:text-nowrap">Current Price</span>
      <span className="sm:text-nowrap">24h Change</span>
      <span className="hidden md:inline">Market Cap</span>
    </div>
  )
}
