import React from "react"
import { useSelector } from "react-redux"
import { getWishListItems } from "../../Store/Slices/wishListSlice"
import WishListItem from "./WishListItem"

export default function WishList() {
  const data = useSelector(getWishListItems).filter((coin) => coin?.id)
  return (
    <div className="max-w-7xl mx-auto my-4 rounded bg-stone-300/80 p-4 h-[calc(100vh-250px)]">
      <h2 className="text-center text-2xl font-semibold my-8">
        Items in Your WishList
      </h2>
      <div className="">
        <div className="border-b border-gray-300 py-3 px-6 grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[2fr_1fr_1fr_1fr] gap-16px font-semibold p-6">
          <div className="cart-item">Item</div>
          <div className="item-price text-center sm:text-left">
            Current Price
          </div>
          <div className="hidden sm:block item-price">24h change</div>
          <div className="item-price text-center">Delete</div>
        </div>
        {data.length === 0 ? (
          <h3 className="text-center text-2xl font-semibold my-8">
            No Coins Added to WishList
          </h3>
        ) : (
          data.map((coin) => <WishListItem key={coin.id} {...coin} />)
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
