import React from 'react';
import MatriculantChart from "./MatriculantChart";

const data = [
  {
    Year: 2012,
    Number: 2528
  },
  {
    Year: 2013,
    Number: 2583
  },
  {
    Year: 2014,
    Number: 2677
  },
  {
    Year: 2015,
    Number: 2865
  },
  {
    Year: 2016,
    Number: 2785
  },
  {
    Year: 2017,
    Number: 2864
  },
  {
    Year: 2018,
    Number: 2328
  },
  {
    Year: 2019,
    Number: 2361
  },
  {
    Year: 2020,
    Number: 2555
  },
  {
    Year: 2021,
    Number: 2802
  },
]

export default function MatriculantChartPage() {
  return (
    <div style={{ width: "100%", margin: "5vh" }}>
      <h1>Matriculants</h1>
      <MatriculantChart data={data} />
      <h4>X-axis: Year</h4>
      <h4>Y-axis: Number of Matriculants</h4>
    </div>
  )
}
