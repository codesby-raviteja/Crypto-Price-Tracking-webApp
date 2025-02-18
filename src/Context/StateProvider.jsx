import { createContext } from "react"

export const StateContext = createContext()

export default function  StateContextProvider({ children, state }) {
  return <StateContext.Provider value={state}>{children}</StateContext.Provider>
}
