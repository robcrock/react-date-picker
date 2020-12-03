import { useState, useRef, useEffect } from "react"

const { tableau } = window

export default function Viz({ startDate, endDate }) {
  // State variables
  const [viz, setViz] = useState(null)
  const [year, setYear] = useState(9)

  const ref = useRef(null)
  const url =
    "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DatePicker/Dashboard"

  const initViz = () => {
    let options = {
      hideTabs: true,
      hideToolbar: true,
      width: "900px",
      height: "540px",
    }
    setViz(new tableau.Viz(ref.current, url, options))
  }

  // Initialize viz when the page loads
  useEffect(initViz, [])

  function changeYearParameterValue(value) {
    setYear(value)
    let workbook = viz.getWorkbook()

    workbook.changeParameterValueAsync(
      "End Date",
      new Date(Date.UTC(`201${value}`, 11, 1))
    )
  }

  return (
    <>
      <lable for="end-date">End Date (enter a value between 6 and 9)</lable>
      <input
        type="text"
        name="end-date"
        onChange={(e) => changeYearParameterValue(e.target.value)}
        value={year}
      />
      <div ref={ref} />
    </>
  )
}
