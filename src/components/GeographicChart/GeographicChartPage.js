import React from 'react';
import GeographicChart from "./GeographicChart";

const data = [
  { label: "Texas", value: 38 },
  { label: "International", value: 25 },
  { label: "Out-of-State", value: 36 },
]

export default function GeographicChartPage() {
  return (

    <div style={{ width: "100%", margin: "5vh" }}>
      <h1>Geographic Origin</h1>
      <GeographicChart data={data} />
      <p>A Pie Chart showing the enrollment of students by Geographic Origin
        <a href="https://oie.rice.edu/IR-reporting/student-enrollment" target="_blank">(Data Source)</a>
      </p>
    </div>
  )
}
