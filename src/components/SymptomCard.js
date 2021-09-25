import React from "react"

export default function SymptomCard({ symptom }) {
  return (
    <div className="bg-white p-8 flex flex-col items-center gap-4 shadow-lg ">
      <div className="capitalize text-lg font-bold space-y-4 tracking-wider text-blue-800">
        <img src={symptom.image} alt="" />
        <h2>{symptom.title}</h2>
      </div>
      <p className="text-gray-500 font-light">{symptom.description}</p>
    </div>
  )
}
