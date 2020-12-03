import React, { useState } from "react"
import Viz from "./components/Viz"
// // import DateRange from "./components/DateRange"
import DatePicker from "./components/DatePicker"

function App() {
  // Date Picker State
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  // Viz State
  const [viz, setViz] = useState(null)

  return (
    <>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Viz startDate={startDate} endDate={endDate} viz={viz} setViz={setViz} />
    </>
  )
}

export default App
