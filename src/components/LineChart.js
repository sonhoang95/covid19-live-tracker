import React, { useEffect, useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import moment from "moment"
import clsx from "clsx"

const generateOptions = data => {
  const categories = data.map(item => moment(item.Date).format("DD/MM/YYYY"))

  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Total Cases",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Total Cases",
        data: data.map(item => item.Confirmed),
      },
    ],
  }
}

const LineChart = ({ data }) => {
  const [options, setOptions] = useState({})
  const [reportType, setReportType] = useState("all")

  useEffect(() => {
    let customData = []
    //handle reportType
    switch (reportType) {
      case "all":
        customData = data
        break
      case "30":
        customData = data.slice(data.length - 30)
        break
      case "7":
        customData = data.slice(data.length - 7)
        break
      default:
        customData = data
        break
    }
    setOptions(generateOptions(customData))
  }, [data, reportType])

  const classNames = clsx({
    "px-3": true,
    "py-1": true,
    "border-r": true,
    "hover:text-black": true,
  })
  return (
    <div className="flex flex-col items-end gap-4">
      <div className=" text-sm tracking-wide font-light text-gray-800  border border-gray-300 rounded">
        <button
          className={`${classNames} ${
            reportType === "all" ? "text-red-600" : ""
          }`}
          onClick={() => setReportType("all")}
        >
          All
        </button>
        <button
          className={`${classNames} ${
            reportType === "30" ? "text-red-600" : ""
          }`}
          onClick={() => setReportType("30")}
        >
          30 days
        </button>
        <button
          className={`${classNames} ${
            reportType === "7" ? "text-red-600" : ""
          }`}
          onClick={() => setReportType("7")}
        >
          7 days
        </button>
      </div>
      <div className="w-full">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default React.memo(LineChart)
