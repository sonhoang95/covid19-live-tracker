import React from "react"

export default function CountrySelector({ value, countries, onCountryChange }) {
  return (
    <form className="space-y-1 mb-8 w-11/12 mx-auto lg:w-full">
      <label
        className="text-sm text-gray-400 font-light block"
        htmlFor="country-select"
      >
        Country:
      </label>
      <select
        value={value}
        name="countries"
        id="country-select"
        onChange={onCountryChange}
        className="bg-transparent border-b border-gray-400 text-gray-700"
      >
        {countries.map(country => (
          <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
            {country.Country}
          </option>
        ))}
      </select>
      <p className="font-light text-xs space-y-0 text-gray-400">
        Please select a country
      </p>
    </form>
  )
}
