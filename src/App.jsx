import "./App.css"
import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
import CurrencyContexProvide from "./Context/CurrencyContex"
import Footer from "./Footer"

function App() {
  return (
    <CurrencyContexProvide>
      <div className="bg-gray-400">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CurrencyContexProvide>
  )
}

export default App
