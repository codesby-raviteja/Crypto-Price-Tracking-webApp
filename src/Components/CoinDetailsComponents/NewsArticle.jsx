import React from "react"

export default function NewsArticle({ image_url, title, description, link }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 mt-4 bg-gray-300 rounded-sm p-2">
      <img
        src={image_url}
        className="w-20 h-20  mr-auto md:w-24 md:h-24 object-cover mb-auto"
      />
      <div className="md:w-full">
        <h3 className="md:text-2xl font-semibold text-wrap line-clamp-2 md:line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-700 md:font-medium text-wrap line-clamp-2 md:line-clamp-3">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="font-semibold text-neutral-800 ml-auto flex justify-end cursor-pointer underline-offset-2  underline"
        >
          Read More &gt;&gt;
        </a>
      </div>
    </div>
  )
}
