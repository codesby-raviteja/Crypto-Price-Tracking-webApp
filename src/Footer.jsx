import React from "react"
import Logo from "../src/assets/Logo.jfif"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-4 text-gray-300 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center m px-4 justify-between">
        <div className="sm:w-[50%] flex items-center gap-2 my-4 ">
          <img src={Logo} alt="crypto House" className="w-20 self-start " />
          <p className="text-sm">
            Crypto House provides a fundamental analysis of the crypto market.
            In addition to tracking price, volume and market capitalisation,you
            can also read related news regarding the crytocoins.
          </p>
        </div>
        <div className=" flex justify-between sm:gap-8">
          <div>
            <h4 className="text font-medium mb-2  text-gray-100">
              About Crypto House
            </h4>
            <ul className="text-center sm:text-left text-sm space-y-1">
              <li>About Us</li>
              <li>Help center</li>
              <li>Terms of Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text font-medium mb-2  text-gray-100">Resources</h4>
            <ul className="text-center sm:text-left text-sm space-y-1">
              <li>Crypto News</li>
              <li>Crypto API</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center mt-2">© 2025 Crypto House. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
