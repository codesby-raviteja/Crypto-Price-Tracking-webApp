import { createSelector, createSlice } from "@reduxjs/toolkit"

const findIndex = (arr, id) => {
  return arr.findIndex((arr) => (arr === id))
}

const wishList = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const index = findIndex(state, action.payload)
      if (index === -1) {
        state.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      const index = findIndex(state, action.payload)
      state.splice(index, 1)
    },
  },
})

export const { addItem, removeItem } = wishList.actions

const selectWishlist = (state) => state.wishlist
const selectApi = (state) => state.api

// Memoized selector
export const getWishListItems = createSelector(
  [selectWishlist, selectApi], // Input selectors
  (wishlist, api) => {
    // Extract the data from the API queries
    if (wishList.length === 0) return []
    const TotalCoins =
      Object.values(api?.queries)[0]?.endpointName === "getCoinsList"
        ? Object.values(api.queries)[0]?.data
        : Object.values(api.queries)[1]?.data

    // Map over the wishlist and find the corresponding coin data
    const wishListItems = wishlist.map((id) => {
      return TotalCoins?.find((coin) => coin.id === id)
    })

    return wishListItems
  }
)

export default wishList.reducer
