import React, { useEffect, useState } from "react"
import HighMap from "./HighMap"
import LineChart from "./LineChart"

export default function Summary({ report, selectedCountry }) {
  const [mapData, setMapdata] = useState({})
  useEffect(() => {
    if (selectedCountry) {
      import(
        `@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`
      ).then(res => setMapdata(res))
    }
  }, [selectedCountry])
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-10">
        <div className="w-full">
          <LineChart data={report} />
        </div>
        <div className="w-full lg:w-1/3">
          <HighMap mapData={mapData} />
        </div>
      </div>
    </>
  )
}
