import React, { useEffect, useRef, memo } from "react"
import { useParams } from "react-router-dom"
function Sentiments() {
  const container = useRef()
  const id = useParams()

  const coin = id.coindId.split("&")[0].toUpperCase()
  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = `
            {
      "interval": "1m",
      "isTransparent": false,
      "height": "100%",
      "symbol": "COINBASE:${coin}USD",
      "showIntervalTabs": true,
      "displayMode": "single",
      "locale": "en",
      "colorTheme": "light"
    }`
    container.current.innerHTML = ""
    container.current.appendChild(script)
  }, [coin])

  return (
    <div className="w-full h-[562px]   rounded-tl-none">
      <div
        className="tradingview-widget-container flex items-center justify-center"
        ref={container}
        // style={{ height: "100%", width: "100%" }}
      >
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default memo(Sentiments)
