import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function DateRange({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
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
        onChange={(date) => {
          setStartDate(date)
          console.log(date)
        }}
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
