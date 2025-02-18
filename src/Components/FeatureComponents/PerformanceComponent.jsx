import React, { useContext, useEffect, useRef, useState } from "react"
import RangeBars from "./RangeBars"
import Fundamentals from "./Fundamentals"
import { CurrencyContext } from "../../Context/CurrencyContex"
import { useParams } from "react-router-dom"
import {
  ConvertDataToINRupeeFormate,
  ConvertDataToUSDollarFormate,
} from "../CurrencyConverter"
import { StateContext } from "../../Context/StateProvider"

export default function PerformanceComponent() {
  const [currency, setCurrency] = useContext(CurrencyContext)
  const [coinDetails, setCoinetails] = useContext(StateContext)

  const id = useParams()
  const coin = id.coindId.split("&")[1].split("=")[1]
  const currencyRef = useRef(currency)


  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}`

    if (!coinDetails || currencyRef.current !== currency) {
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          
          
          console.log(json);
          setCoinetails(json[0])

        })
        .catch((err) => console.error(err))
    }

    currencyRef.current = currency
  }, [currency])

  const data = !coinDetails
    ? {}
    : currency === "inr"
    ? ConvertDataToINRupeeFormate(coinDetails)
    : ConvertDataToUSDollarFormate(coinDetails)

  return (
    <section className="bg-white w-full px-3 md:px-6 py-4  rounded-lg rounded-tl-none">
      <RangeBars {...data} />
      <Fundamentals data={data} />
    </section>
  )
}
