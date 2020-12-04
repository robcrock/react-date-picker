import { useRef, useEffect } from "react"

const { tableau } = window

export default function Viz({ endDate, viz, setViz }) {
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
    console.log(value)
    let options = {
      hideTabs: true,
      hideToolbar: true,
      width: "900px",
      height: "540px",
      onFirstInteractive: () => {
        console.log("Loading..")
        viz
          .getWorkbook()
          .workbook.changeParameterValueAsync("End Date", { endDate })
      },
    }
    if (viz) {
      viz.dispose()
      setViz(new tableau.Viz(ref.current, url, options))
    }
  }

  useEffect(() => changeYearParameterValue(endDate), [endDate])

  return <div ref={ref} />
}
