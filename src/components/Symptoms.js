import React from "react"
import Fever from "../images/Fever.svg"
import Cough from "../images/Cough.svg"
import SoreThroat from "../images/SoreThroat.svg"
import SymptomCard from "./SymptomCard"

const symptoms = [
  {
    id: 1,
    title: "fever",
    image: Fever,
    description:
      "High Fever – this means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign and also may appear in 2-10 days if you affected.",
  },
  {
    id: 2,
    title: "dry cough",
    image: Cough,
    description:
      "Continuous cough – this means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).",
  },
  {
    id: 3,
    title: "sore throat",
    image: SoreThroat,
    description:
      "A sore throat can make it painful to eat and even talk. It brings scratchiness and irritation to the throat that can become worse when swallowing.",
  },
]

export default function Symptoms() {
  return (
    <div id="symptoms" className="relative mt-12 text-center">
      <h2 className="text-3xl mt-16 mb-16 tracking-wider font-bold text-blue-900">
        Symptoms of Coronavirus
      </h2>
      <div className="lg:grid grid-cols-3 gap-8 space-y-8 lg:space-y-0">
        {symptoms.map(symptom => (
          <SymptomCard key={symptom.id} symptom={symptom} />
        ))}
      </div>
    </div>
  )
}
