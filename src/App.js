import React, { Component } from "react"
import "react-dates/lib/css/_datepicker.css"
import "./styles/app.css"

import "react-dates/initialize"
import { DateRangePicker } from "react-dates"

import Viz from "./components/Viz"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
    }
  }

  // Create the two handler functions to allow us to update the State when
  // the Viz first initializes
  setStartDate = (date) => {
    this.setState({ startDate: date })
  }

  setEndDate = (date) => {
    this.setState({ endDate: date })
  }

  render() {
    return (
      <>
        <DateRangePicker
          isOutsideRange={() => false}
          startDate={this.state.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.state.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
        />
        <Viz
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          setStartDate={this.setStartDate}
          setEndDate={this.setEndDate}
        />
      </>
    )
  }
}
