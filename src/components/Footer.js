import React from "react"
import virus from "../images/virus.svg"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"
export default function Footer() {
  return (
    <div className="mt-12 bg-primary px-8 py-16 space-y-10 lg:space-y-0 lg:grid grid-cols-3 gap-20 text-center">
      <div className="space-y-4 text-gray-300">
        <div className="flex gap-4 text-lg font-semibold tracking-wider items-center justify-center uppercase text-gray-200">
          <img src={virus} alt="virus icon" />
          <h1>covid-19</h1>
        </div>
        <p className="hidden lg:block">
          Covid-19 is a live tracking tool to help cope with the current global
          pandemic
        </p>
      </div>

      <div className="space-y-4 text-gray-300">
        <div className="font-light text-sm">
          <h2 className="uppercase text-gray-200 mb-4 text-lg">Contact us</h2>
          <p>Tel:1-866-342-6892</p>
          <p>support@covid19.com</p>
        </div>
        <div className="font-light text-sm">
          <h2 className="uppercase text-gray-200 text-lg">Location</h2>
          <p>Worldwide, USA-1206</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="uppercase text-gray-200 mb-4 text-lg">Keep in Touch</h2>
        <div className="flex gap-4">
          <FaFacebook className="text-gray-200 w-5 h-5" />
          <FaYoutube className="text-gray-200 w-5 h-5" />
          <FaInstagram className="text-gray-200 w-5 h-5" />
        </div>
      </div>
    </div>
  )
}
