import React, { useState } from "react";
import Viz from "./components/Viz";
// // import DateRange from "./components/DateRange"
import DatePicker from "./components/DatePicker";

function App() {
  // Date Picker State
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // Viz State
  const [viz, setViz] = useState(null);

  async function changeYearParameterValueStart() {
    // Andre: if there is no viz object then log something, else run the parameter switch.
    // Andre: this function will run a few times, because the app component changes state whenever the viz state is created. So you'll see a few console logs until the viz has settled
    if (viz !== null) {
      const workbook = viz.getWorkbook();
      console.log("We got a viz", workbook);
      const parameters = await workbook.getParametersAsync();
      console.log("What types are our params?", parameters[0].getDataType());

      // Andre: hardcoding the end and start date here to make the viz work
      // there is something wrong with the two dates being set by the react date picker library. They return an object. But Tableau expects a 'Date' type - see: https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#changeParameterValueAsync
      // you can log data types by doing console.log(typeof varToCheckTypeOf)
      workbook.changeParameterValueAsync(
        "End Date",
        new Date(Date.UTC(2017, 0, 1))
      );
      workbook.changeParameterValueAsync(
        "Start Date",
        new Date(Date.UTC(2016, 0, 1))
      );
    } else {
      console.log("We don't have a viz yet");
    }
  }

  React.useEffect(() => {
    changeYearParameterValueStart();
    // re-run this effect when the dates changes
  }, [startDate, endDate]);

  return (
    <>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Viz startDate={startDate} endDate={endDate} viz={viz} setViz={setViz} />
    </>
  );
}

export default App;
