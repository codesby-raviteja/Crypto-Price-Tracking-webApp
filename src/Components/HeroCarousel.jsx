import React from "react"
import Carousel from "./HeroCarousel/Carousel"

export default function HeroCarousel() {
  return (
    <div className="max-w-7xl mx-auto py-8  bg-orange-">
      <h1 className="text-4xl md:text-6xl md:mb-4 text-blue-700/80 font-bold text-center">
        Welcome to Crypto World
      </h1>
      <div className="max-w-lg mx-auto mt-2 md:text-lg font-medium text-gray-900">
        <p className="text-center">
          Welcome to the world's largest cryptocurrency marketplace. <br /> Get
          all the Info regarding your favorite Crypto Currency
        </p>
        <p className="text-center">Sign up to explore more about cryptos.</p>
      </div>
      <Carousel/>
    </div>
  )
}
