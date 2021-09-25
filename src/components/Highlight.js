import React from "react"
import gray from "../images/gray.svg"
import red from "../images/red.svg"
import green from "../images/green.svg"
import HighlightCard from "./HighlightCard"
export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 50] : []
  const summary = [
    {
      title: "total cases",
      count: data.Confirmed,
      logo: red,
    },

    {
      title: "total recovered",
      count: data.Recovered,
      logo: green,
    },

    {
      title: "total dealth",
      count: data.Deaths,
      logo: gray,
    },
  ]
  return (
    <div className="grid text-left grid-cols-1 lg:grid-cols-3 lg:gap-10 bg-white p-4 lg:p-10 place-items-center mb-8 container mx-auto">
      {summary.map((item, index) => (
        <HighlightCard
          key={index}
          title={item.title}
          count={item.count}
          logo={item.logo}
        />
      ))}
    </div>
  )
}
