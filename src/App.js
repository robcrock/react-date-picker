import React, { Component, useState } from "react"
import "./styles/app.css"

import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import Viz from "./components/Viz"
import DateRange from "./components/DateRange"
import { DateRangePicker } from "react-dates"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
    }
  }

  // function App() {
  // We lift the State from the DateRange to the App, so we can listen
  // for the Effect by passing the startDate and endDate into the Viz
  // const [startDate, setStartDate] = useState(null)
  // const [endDate, setEndDate] = useState(null)

  render() {
    return (
      <>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          } // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={(focusedInput) => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <Viz startDate={this.state.startDate} endDate={this.state.endDate} />
      </>
    )
  }
}

export default App
