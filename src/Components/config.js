






export const TrendingCoins_URL = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`

const NEWS_API_KEY = "pub_6690213b85c72fd44cda262702c4e86eda4ac"

export const NEWS_API = (coin) => {
  return `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&qInTitle=${coin}&language=en`
}




export const COINS_LIST_URL = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`




export const FETCHING_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",

    // "x-cg-demo-api-key": conf.coinGeckoKey,
  },
}

export const getSearchedResult = (searchText, array) => {
  const newArray = array?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchText.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchText.toLowerCase())
  )

  return newArray
}
