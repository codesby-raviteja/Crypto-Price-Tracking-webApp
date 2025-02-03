import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { FETCHING_OPTIONS } from "../Components/config"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    FETCHING_OPTIONS,
  }),
  endpoints: (builder) => ({
    getTrendingCoins: builder.query({
      query: (url) => ({
        url: url,
      }),
    }),
    getCoinsList: builder.query({
      query: (url) => url,
    }),
  }),
})

export const { useGetTrendingCoinsQuery, useGetCoinsListQuery } = api
