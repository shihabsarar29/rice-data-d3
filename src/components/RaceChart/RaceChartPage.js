import React from 'react';
import RaceChart from "./RaceChart";

  const data = [
    {label:"Asian", value:27},
    {label:"White", value:41},
    {label:"Other", value:6},
    {label:"Hispanic", value:15},
    {label:"Black", value:11},
  ]

export default function RaceChartPage() {
  return (
    
    <div style={{width:"100%", margin:"5vh"}}>
        <h1>Race/Ethnicity</h1>
        <RaceChart data={data} />
        <p>A Pie Chart showing the enrollment of students by Race/Ethnicity</p>
    </div>
  )
}
