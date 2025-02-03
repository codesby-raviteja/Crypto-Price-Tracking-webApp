import React from "react"

export default function SingleDetail({ title, value }) {
  return (
    <p className="flex justify-between py-2 border-b border-gray-300 px-1">
      <span className="md:font-medium text-[#768396]">{title}</span>
      <span className="font-medium text-right">{value}</span>
    </p>
  )
}
