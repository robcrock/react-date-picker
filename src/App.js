import React, { useState } from "react"
import Viz from "./components/Viz"
// // import DateRange from "./components/DateRange"
import DatePicker from "./components/DatePicker"

function App() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={setStartDate}
        handleEndDateChange={setEndDate}
      />
      <Viz startDate={startDate} endDate={endDate} />
    </>
  )
}

export default App
