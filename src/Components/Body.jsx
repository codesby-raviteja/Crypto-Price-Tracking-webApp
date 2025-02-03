import { useContext, useState } from "react"
import HeroCarousel from "./HeroCarousel"
import ListOfCoins from "./ListOfCoins"
import SearchComponent from "./SearchComponent"
import { useSelector } from "react-redux"
import { COINS_LIST_URL } from "./config"
import { CurrencyContext } from "../Context/CurrencyContex"
import { useGetCoinsListQuery } from "../Store/rtk"

export default function Body() {
  const [searchText, setSearchText] = useState("")
  const [currency, setCurrency] = useContext(CurrencyContext)
  const {
    data: coinsList,
    isLoading: listOfCoinsLoadingState,
    isError: listOfCoinsErrorState,
  } = useGetCoinsListQuery(COINS_LIST_URL(currency))

  return (
    <section className="px-2 my-4">
      <HeroCarousel />
      <SearchComponent searchText={searchText} setSearchText={setSearchText} />
      {
        <ListOfCoins
          coinsList={coinsList}
          searchText={searchText}
          listOfCoinsLoadingState={listOfCoinsLoadingState}
          listOfCoinsErrorState={listOfCoinsErrorState}
        />
      }
    </section>
  )
}
