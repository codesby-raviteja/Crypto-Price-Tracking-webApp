import React, { useContext, useState } from "react"
import Logo from "../assets/Logo.jfif"
import HamburgerSymbol from "../assets/Hamburger.svg"
import { Link } from "react-router-dom"

import { CiHeart } from "react-icons/ci"
import { FaXmark } from "react-icons/fa6"
import { CurrencyContext } from "../Context/CurrencyContex"

export default function Header() {
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false)

  const [currency, setCurrency] = useContext(CurrencyContext)

  return (
    <header className="shadow-md shadow-gray-600 bg-gray-700  text-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-1 sm:px-4 flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={Logo}
            className="w-12 object-cover md:w-16  rounded-full cursor-pointer"
            alt="kolinX"
          />
        </Link>
        <nav className="hidden sm:flex list-none space-x-4 md:space-x-8 items-center font-medium">
          <li>
            <Link>Crypto Taxes</Link>
          </li>

          <li>
            <Link>Resource Center</Link>
          </li>
          <select
            className="w-20 md:w-24 h-8 ml-auto mr-4 border-2  bg-gray-700 px-2 md:px-4 rounded-sm"
            onChange={(e) => {
              setCurrency(e.target.value)
            }}
          >
            <option value="inr ">IND</option>
            <option value="usd">USD</option>
          </select>
          <button className=" bg-linear-to-r from-[#2870EA] to-[#1B4AEF] py-2  text-white px-5 rounded-md cursor-pointer">
            Get Started
          </button>
          <button className=" cursor-pointer">
            <Link to={"/wishlist"} className="flex flex-col items-center">
              <CiHeart className="text-3xl" />
              <span className="text-[12px] font-medium">wishlist</span>
            </Link>
          </button>
        </nav>

        <div className={`sm:hidden relative`}>
          <div className="flex gap-2 items-center">
            <select
              className="w-20 md:w-24 h-8 ml-auto mr-4 border-2 px-2 md:px-4 rounded-sm"
              onChange={(e) => {
                setCurrency(e.target.value)
              }}
            >
              <option value="inr">IND</option>
              <option value="usd">USD</option>
            </select>
            <button className="flex flex-col items-center cursor-pointer">
              <Link to={"/wishlist"} className="flex flex-col items-center">
                <CiHeart className="text-2xl" />
                <span className="text-[12px]  font-medium">wishlist</span>
              </Link>
            </button>
            <button onClick={() => setOpenHamburgerMenu((prev) => !prev)}>
              <img
                src={HamburgerSymbol}
                alt="menu"
                className="cursor-pointer "
              />
            </button>
          </div>
          {openHamburgerMenu && (
            <nav className="absolute z-10 -right-5 top-0 bg list-none  space-y-4 font-medium bg-red-200  px-4 w-64 min-h-72 rounded-md">
              <li className="flex py-2 items-center justify-between ">
                <img src={Logo} alt="koinX" className="w-8 rounded-full" />

                <button
                  className="cursor-pointer"
                  onClick={() => setOpenHamburgerMenu((prev) => !prev)}
                >
                  <FaXmark className="text-2xl" />
                </button>
              </li>

              <li>
                <Link>Crypto Taxes</Link>
              </li>
              <li>
                <Link>Free Tools</Link>
              </li>
              <li>
                <Link>Resource Center</Link>
              </li>

              <button className="w-full bg-linear-to-r from-[#2870EA] to-[#1B4AEF] py-2  text-white px-5 rounded-md cursor-pointer">
                Get Started
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
