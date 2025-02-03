import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./Components/Body.jsx"
import CoinDetails from "./Components/CoinDetailsComponents/CoinDetails.jsx"
import { Provider } from "react-redux"
import { Store } from "./Store/Store.js"
import WishList from "./Components/WishList/WishList.jsx"

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={Store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/:coindId",
        element: <CoinDetails />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
)
