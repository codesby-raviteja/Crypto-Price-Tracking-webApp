import React, { useContext, useEffect, useRef, useState } from "react"
import CoinRow from "./ListOfCoins/CoinRow"
import { CurrencyContext } from "../Context/CurrencyContex"
import TabelHeading from "./ListOfCoins/TabelHeading"
import { useDispatch } from "react-redux"

import { getSearchedResult } from "./config"

export default function ListOfCoins({
  coinsList,
  searchText,
  listOfCoinsLoadingState,
  listOfCoinsErrorState,
  error,
}) {
  const [pageNumber, setPageNumber] = useState(1)
  const [currency, setCurrency] = useContext(CurrencyContext)
  const ListOfCoins = getSearchedResult(searchText, coinsList)
  const currencyRef = useRef(currency)
  const dispatch = useDispatch()

  if (listOfCoinsLoadingState) {
    return <h3 className="text-2xl text-center mt-4">Loading...</h3>
  }
  if (listOfCoinsErrorState) {
    return (
      <div className="h-[calc(100vh-630px)] flex items-center justify-center">
        <h3 className="text-2xl text-center mt-4 text-red-600/70 font-medium">
          {error?.data?.status?.error_message.split(".")[0]}. Please reload
          After sometime..
        </h3>
      </div>
    )
  }

  const TotalPages = Math.ceil(ListOfCoins.length / 10)
  const PageRangeStart = (pageNumber - 1) * 10
  const pageRangeEnd = pageNumber * 10

  return (
    <div className="max-w-6xl mx-auto mt-16 bg-gray-300 pb-4  overflow-hidden rounded-md">
      <TabelHeading />
      <div>
        {ListOfCoins.length === 0 ? (
          <h3 className="text-2xl text-center mt-4 font-medium">
            No Coin Found
          </h3>
        ) : (
          ListOfCoins.filter(
            (coin, idx) => idx >= PageRangeStart && idx < pageRangeEnd
          ).map((coin) => <CoinRow key={coin.id} {...coin} coinObj={coin} />)
        )}
      </div>
      <div className="flex gap-4 justify-center px-8 py-4 flex-wrap ">
        {new Array(TotalPages).fill("").map((item, index) => (
          <span
            key={index}
            className="bg-blue-500 w-8 h-8 flex items-center justify-center  cursor-pointer rounded-full"
            onClick={() => setPageNumber(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  )
}
