import React, { useState } from "react"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function TableDatePicker() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <div>
      <DatePicker
        filterDate={(d) => {
          return new Date() > d
        }}
        placeholderText="Select Start Date"
        dateFormat="MMMM d, yyyy"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={(date) => setStartDate(date)}
      />
      <DatePicker
        filterDate={(d) => {
          return new Date() > d
        }}
        placeholderText="Select End Date"
        dateFormat="MMMM d, yyyy"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={(date) => setEndDate(date)}
      />
    </div>
  )
}
