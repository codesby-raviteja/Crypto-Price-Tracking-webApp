import React, { useEffect, useState } from "react"
import { NEWS_API } from "../config"
import NewsArticle from "./NewsArticle"
import { FaRegNewspaper } from "react-icons/fa6"
import { useParams } from "react-router-dom"

export default function NewsInsights() {
  const [newsArticles, setNewsArticles] = useState(null)

  const id = useParams()
  const coin = id.coindId.split("&")[1].split("=")[1]

  useEffect(() => {
    fetchingNews()
  }, [coin])

  async function fetchingNews() {
    try {
      const res = await fetch(NEWS_API(coin.toUpperCase()))
      const data = await res.json()
      setNewsArticles(data.results.slice(0, 4))
    } catch {
      console.log(err)
    }
  }

  return (
    <div className="px-4   md:mx-auto py-8 bg-white min-h-[562px] ">
      <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2">
        Related News <FaRegNewspaper />
      </h2>
      {newsArticles == null
        ? " "
        : newsArticles.length === 0
        ? <h2 className="text-xl font-semibold  text-center">No Articles Found ..</h2>
        : newsArticles.map((news) => (
            <NewsArticle key={news.article_id} {...news} />
          ))}
    </div>
  )
}
