// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react"
import { useParams } from "react-router-dom"

function TradingViewWidget() {
  const container = useRef()
  const id = useParams()
  const coin = id.coindId.split("&")[0].toUpperCase()

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${coin}usd",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "backgroundColor": "rgba(242, 242, 242, 1)",
          "gridColor": "rgba(0, 0, 0, 0.06)",
          "hide_top_toolbar": true,
          "withdateranges": true,
          "allow_symbol_change": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`
    container.current.innerHTML = ""
    container.current.appendChild(script)
  }, [coin])

  return (
    <div
      className="tradingview-widget-container rounded-lg"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        ></a>
      </div>
    </div>
  )
}

export default memo(TradingViewWidget)
