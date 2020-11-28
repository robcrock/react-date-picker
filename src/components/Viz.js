import { useRef, useEffect } from "react"

const { tableau } = window

export default function Viz() {
  const ref = useRef(null)

  useEffect(() => {
    const viz = new tableau.Viz(
      ref.current,
      "https://10ax.online.tableau.com/t/developmentonlydev595736/views/DatePicker/Dashboard",
      {
        hideTabs: true,
        hideToolbar: true,
        width: "900px",
        height: "540px",
      }
    )

    return viz
  })

  return <div ref={ref} />
}
