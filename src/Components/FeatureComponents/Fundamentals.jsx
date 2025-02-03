import React from "react"
import InfoIcon from "../../assets/Info_icon.svg"
import FundamentalDetails from "./FundamentalDetails"

export default function Fundamentals({data}) {
  return (
    <div className="mt-8">
      <div className="flex gap-1.5 h-10 items-center">
        <h2 className="text-xl font-medium ">Fundamentals</h2>
        <img src={InfoIcon} className="w-5 h-5 flex items-center" />
      </div>
      <FundamentalDetails data={data}/>
    </div>
  )
}
