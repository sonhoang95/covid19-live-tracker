import React from "react"
import covid from "../images/covid.svg"
import virus from "../images/virus.svg"
import { Link } from "react-scroll"
export default function Header() {
  return (
    <>
      <div className="bg-primary">
        <header className="lg:fixed top-0 left-0 lg:min-w-full z-10 lg:flex items-center bg-primary px-10 py-6 text-gray-200 border-b border-gray-500 container mx-auto">
          <div className="flex items-center justify-center lg:justify-start gap-2 lg:flex-1">
            <img src={virus} alt="" className="w-10 h-10" />
            <h1 className="uppercase font-semibold tracking-wider">covid-19</h1>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-light text-gray-300 uppercase text-sm tracking-widest">
            <Link
              className="cursor-pointer"
              smooth={true}
              spy={true}
              activeClassName="text-red-600"
              to="home"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer"
              smooth={true}
              spy={true}
              activeClassName="text-red-600"
              to="symptoms"
            >
              Covid-19 Symtoms
            </Link>
            <Link
              className="cursor-pointer"
              smooth={true}
              spy={true}
              activeClassName="text-red-600"
              to="protect"
            >
              what to do
            </Link>
          </div>
        </header>
        <div className="bg-primary flex flex-col lg:flex-row items-center justify-between relative container mx-auto mt-20">
          <img
            className="absolute opacity-10 w-24 h-24 top-12 left-12"
            src={virus}
            alt=""
          />

          <img
            className="absolute opacity-10 w-14 h-14 top-48 left-96"
            src={virus}
            alt=""
          />

          <img className="absolute opacity-10 w-24 h-24" src={virus} alt="" />
          <img
            className="absolute top-0 -right-60 opacity-10 w-64 h-64"
            src={virus}
            alt=""
          />

          <img
            className="absolute -bottom-20 left-96 opacity-10 w-52 h-52"
            src={virus}
            alt=""
          />
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-12">
            <div className="lg:w-1/2 p-8 lg:p-10 space-y-8 text-gray-300 justify-center text-center lg:text-left">
              <h1 className="text-white text-4xl tracking-wide uppercase">
                Covid-19 live tracker
              </h1>
              <p className="font-extralight">
                The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
                China in December 2019, the outbreak was later recognized as a
                pandemic by the World Health Organization (WHO) on 11 March
                2020.
              </p>
              <Link
                to="protect"
                smooth={true}
                spy={true}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 uppercase text-white font-light rounded hover:scale-105 transform transition duration-400 inline-block cursor-pointer"
              >
                How to protect
              </Link>
            </div>
            <div className="w-3/4 lg:w-1/2 p-10 flex items-center justify-center lg:justify-end">
              <img src={covid} alt="animate covid" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
