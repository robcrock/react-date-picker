import { useState, useRef, useEffect } from "react"

const { tableau } = window

export default function Viz() {
  const [viz, setViz] = useState(null)
  const [month, setMonth] = useState(11)
  // Placeholder div
  const ref = useRef(null)
  const url =
    "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DatePicker/Dashboard"
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: "900px",
    height: "540px",
  }

  const onSuccess = (parameters) => {
    parameters.map((parameter) => {
      console.log("parameter.getName() : ", parameter.getName())
      console.log("parameter.getDataType() : ", parameter.getDataType())
      console.log("parameter.getCurrentValue() : ", parameter.getCurrentValue())

      return null
    })
  }

  const onFault = () => {}

  const initViz = () => {
    if (viz) {
      viz.dispose()
      setViz(
        new tableau.Viz(ref.current, url, {
          ...options,
          onFirstInteractive: () => {
            const workbook = viz.getWorkbook()
            workbook.changeParameterValueAsync(
              "End Date",
              new Date(Date.UTC(2019, { month }, 1))
            )
          },
        })
      )
      console.log("Month post dispose ", month)
    } else {
      setViz(
        new tableau.Viz(ref.current, url, {
          ...options, //,
          // onFirstInteractive: () => {
          //   const workbook = viz.getWorkbook()
          //   workbook.getParametersAsync().then(onSuccess, onFault)
          // },
        })
      )
    }
    console.log("Month pre dispose ", month)
  }

  useEffect(initViz, [month])

  const updateMonth = (monthArg) => {
    console.log(monthArg)
    const workbook = viz.getWorkbook()
    workbook.changeParameterValueAsync(
      "End Date",
      new Date(Date.UTC(2019, { monthArg }, 1))
    )
    setMonth(monthArg)
  }

  return (
    <>
      <input onChange={(e) => updateMonth(e.target.value)} type="text" />
      <div ref={ref} />
    </>
  )
}
