import axios from "axios"

export function getReportByCountry(country) {
  return axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
}
