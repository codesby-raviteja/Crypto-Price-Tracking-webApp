import { configureStore } from "@reduxjs/toolkit"
import { api } from "./rtk"
import wishList from "./Slices/wishListSlice"

export const Store = configureStore({
  reducer: {
    wishlist: wishList,
    [api.reducerPath]: api.reducer,
  },
  middleware: (defaultMiddleware) => [...defaultMiddleware(), api.middleware],
})
