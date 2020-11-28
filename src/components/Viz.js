import { useState, useRef, useEffect } from "react"

const { tableau } = window

export default function Viz() {
  const [viz, setViz] = useState(null)
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

  function initViz() {
    const onSuccess = function(parameters) {
      parameters.map((parameter) => {
        console.log("parameter.getName() : ", parameter.getName())
        console.log(
          "parameter.getCurrentValue() : ",
          parameter.getCurrentValue()
        )
        console.log("parameter.getDataType() : ", parameter.getDataType())
        console.log(
          "parameter.getAllowableValuesType() : ",
          parameter.getAllowableValuesType()
        )

        return null
      })
    }
    const onFault = function() {}

    const viz = new tableau.Viz(ref.current, url, {
      ...options,
      onFirstInteractive: () => {
        const workbook = viz.getWorkbook()
        const log = workbook.getParametersAsync().then(onSuccess, onFault)
        console.log(log)
      },
    })

    return null
  }

  useEffect(() => {
    initViz()
  })

  return <div ref={ref} />
}
