import { useState } from "react"
import Viz from "./components/Viz"
import DateRange from "./components/DateRange"

function App() {
  // We lift the State from the DateRange to the App, so we can listen
  // for the Effect by passing the startDate and endDate into the Viz
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <>
      <DateRange
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Viz startDate={startDate} endDate={endDate} />
    </>
  )
}

export default App
