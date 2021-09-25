import { useEffect, useState } from "react"
import CountrySelector from "./components/CountrySelector"
import Header from "./components/Header"
import Highlight from "./components/Highlight"
import Summary from "./components/Summary"
import useFetch from "./helpers/useFetch"
import { getReportByCountry } from "./helpers/apiHelper"
import { sortBy } from "lodash"
import Symptoms from "./components/Symptoms"
import Protect from "./components/Protect"
import Footer from "./components/Footer"

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState("")
  const [report, setReport] = useState([])

  const { get } = useFetch("https://api.covid19api.com/")

  useEffect(() => {
    get("countries")
      .then(data => {
        const countries = sortBy(data, "Country")
        setCountries(countries)
        // console.log(data)

        // set default country
        setSelectedCountry("us")
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (selectedCountry) {
      const { Slug } = countries.find(
        country => country.ISO2.toLowerCase() === selectedCountry
      )
      //call api
      getReportByCountry(Slug).then(res => {
        //delete the last item of report as it won't be accurate
        res.data.pop()
        setReport(res.data)
      })
    }
  }, [countries, selectedCountry])

  function handleCountryChange(e) {
    setSelectedCountry(e.target.value)
  }

  return (
    <div id="home">
      <Header />
      <div className="min-h-screen bg-secondary">
        <div className="container gap-10 mx-auto p-10">
          <CountrySelector
            countries={countries}
            onCountryChange={handleCountryChange}
            value={selectedCountry}
          />
          <Highlight report={report} />
          <Summary report={report} selectedCountry={selectedCountry} />
          <Symptoms />
          <Protect />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
