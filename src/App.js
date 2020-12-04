import { useState, useEffect } from "react"
import Viz from "./components/Viz"
// // import DateRange from "./components/DateRange"
import DateRange from "./components/DateRange"

function App() {
  // Date Picker State
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  // Viz State
  const [viz, setViz] = useState(null)

  async function changeYearParameterValueStart(startDate, endDate) {
    let startYear, startMonth, startDay, endYear, endMonth, endDay
    if (startDate === null) {
      startYear = 2016
      startMonth = 0
      startDay = 1
    } else {
      console.log("Inside of the function...")
      console.log("Start Date year is ", startDate.getUTCFullYear())
      console.log("Start Date month is ", startDate.getUTCMonth() + 1)
      console.log("Start Date day is ", startDate.getUTCDate())
      startYear = startDate.getUTCFullYear()
      startMonth = startDate.getUTCMonth()
      startDay = startDate.getUTCDate()
    }

    if (endDate === null) {
      endYear = 2019
      endMonth = 11
      endDay = 31
    } else {
      console.log("Inside of the function...")
      console.log("End Date year is ", endDate.getUTCFullYear())
      console.log("End Date month is ", endDate.getUTCMonth() + 1)
      console.log("End Date day is ", endDate.getUTCDate())
      endYear = endDate.getUTCFullYear()
      endMonth = endDate.getUTCMonth()
      endDay = endDate.getUTCDate()
    }

    // Andre: if there is no viz object then log something, else run the parameter switch.
    // Andre: this function will run a few times, because the app component changes state whenever the viz state is created. So you'll see a few console logs until the viz has settled
    if (viz !== null) {
      const workbook = viz.getWorkbook()
      console.log("We got a viz", workbook)
      const parameters = await workbook.getParametersAsync()
      console.log("What types are our params?", parameters[0].getDataType())

      // Andre: hardcoding the end and start date here to make the viz work
      // there is something wrong with the two dates being set by the react date picker library. They return an object. But Tableau expects a 'Date' type - see: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#changeParameterValueAsync
      // you can log data types by doing console.log(typeof varToCheckTypeOf)
      workbook.changeParameterValueAsync(
        "Start Date",
        new Date(Date.UTC(startYear, startMonth, startDay))
      )
      workbook.changeParameterValueAsync(
        "End Date",
        new Date(Date.UTC(endYear, endMonth, endDay))
      )
    } else {
      console.log("We don't have a viz yet")
    }
  }

  useEffect(() => {
    changeYearParameterValueStart(startDate, endDate)
    // re-run this effect when the dates changes
  }, [startDate, endDate])

  return (
    <>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Viz startDate={startDate} endDate={endDate} setViz={setViz} />
    </>
  )
}

export default App
