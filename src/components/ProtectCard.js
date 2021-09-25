import React from "react"

export default function ProtectCard({ item }) {
  return (
    <div className="bg-white p-8 flex flex-col items-center gap-4 shadow-lg text-center lg:text-left ">
      <div className="capitalize text-lg font-bold space-y-4 tracking-wider text-blue-800 flex flex-col items-center">
        <img className="w-24 h-24" src={item.image} alt="" />
        <h2>{item.title}</h2>
      </div>
      <p className="text-gray-500 font-light">{item.description}</p>
    </div>
  )
}
