import React from "react"
import CountUp from "react-countup"
export default function HighlightCard({ title, count, logo }) {
  return (
    <div className="w-1/2 lg:w-full text-left flex lg:justify-center my-4 lg:mb-0 items-center gap-4">
      <img src={logo} alt="" />
      <div className="text-gray-400 font-light tracking-wider text-sm capitalize">
        <p>{title}</p>

        <p className="font-bold text-lg text-blue-900">
          <CountUp end={count || 0} duration={2} separator="," />
        </p>
      </div>
    </div>
  )
}
