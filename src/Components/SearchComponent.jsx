import React from "react"

export default function SearchComponent({ searchText, setSearchText }) {
  return (
    <div className="max-w-7xl mx-auto mt-4 mb-8 flex justify-center">
      <div className="bg-gray-600 h-12 md:h-14   py-2 px-4 md:w-[60%] max-w-[550px] flex rounded-sm  items-center gap-2 ">
        <input
          type="text"
          className=" h-full w-full   md:text-xl text-white font-medium   border-white/50 px-2 rounded-sm outline-0 focus:border-2 placeholder:font-medium placeholder:text-white"
          placeholder="Search for Crypto.. "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="md:text-xl px-5 bg-blue-600/90 rounded-sm text-white font-medium h-full cursor-pointer">
          Search
        </button>
      </div>
    </div>
  )
}
