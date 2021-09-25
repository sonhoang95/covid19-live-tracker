import React from "react"
import CoverMouth from "../images/CoverMouth.svg"
import HandWash from "../images/HandWash.svg"
import Sick from "../images/Sick.svg"
import FaceTouch from "../images/FaceTouch.svg"
import ProtectCard from "./ProtectCard"

const protect = [
  {
    id: 1,
    title: "Stay home if you feel unwell.",
    image: Sick,
    description:
      "Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care. ",
  },
  {
    id: 2,
    title: "Wash your hands regularly with soap",
    image: HandWash,
    description:
      "Handwashing is one of the best ways to protect yourself and your family from getting sick. Learn when and how you should wash your hands to stay healthy.",
  },
  {
    id: 3,
    title: "Avoid touching your face.",
    image: FaceTouch,
    description:
      "To help prevent infections, keep your hands away from your eyes, nose, and mouth. Why? Touching the mucous membranes on your face.",
  },
  {
    id: 4,
    title: "Cover your mouth and nose",
    image: CoverMouth,
    description:
      "Cover your mouth and nose with a tissue when you cough or sneeze. Put your used tissue in a waste basket. If you don't have a tissue, cough or sneeze into your.",
  },
]
export default function Protect() {
  return (
    <div id="protect" className="relative mt-12">
      <h2 className="text-3xl mt-16 mb-16 tracking-wider font-bold text-blue-900 text-center">
        Protect Yourself and Others
      </h2>
      <div className="lg:grid grid-cols-4 gap-10 space-y-8 lg:space-y-0">
        {protect.map(item => (
          <ProtectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
