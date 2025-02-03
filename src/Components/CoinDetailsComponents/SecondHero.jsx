import React, { useState } from "react"
import PerformanceComponent from "../FeatureComponents/PerformanceComponent"
import NewsInsights from "./NewsInsights"
import Sentiments from "./Sentiments"

export default function SecondHero() {
  const [currentTab, setCurrenTab] = useState(0)
  const Tabs = [
    {
      tabInfo: "Overview / Fundamentals",
      tab: PerformanceComponent,
    },
    {
      tabInfo: "News Insights",
      tab: NewsInsights,
    },
    {
      tabInfo: "Sentiments",
      tab: Sentiments,
    },
  ]

  const ActiveTab = Tabs[currentTab].tab
  return (
    <div className="max-w-7xl mx-auto my-4  ">
      <div className=" px-2 md:px-4 ">
        <div className="flex px-2 md:gap-8 max-w-fit bg-white rounded sm: rounded-bl-none rounded-br-none border-b border-gray-300">
          {Tabs.map(({ tabInfo }, idx) => (
            <span
              key={tabInfo}
              className={`md:text-lg  cursor-pointer  line-clamp-1 px-2 ${
                currentTab === idx ? "text-blue-500 font-bold" : " font-medium "
              } `}
              onClick={() => setCurrenTab(idx)}
            >
              {tabInfo}
            </span>
          ))}
        </div>
      </div>
      <div className="px-2 md:px-4">
        <ActiveTab />
      </div>
    </div>
  )
}
