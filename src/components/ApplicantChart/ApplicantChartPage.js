import React from 'react';
import ApplicantChart from "./ApplicantChart";

  const data = [
    {
      Year: 2012,
      Number: 15133
    },
    {
      Year: 2013,
      Number: 15415
    },
    {
      Year: 2014,
      Number: 17728
    },
    {
      Year: 2015,
      Number: 17951
    },
    {
      Year: 2016,
      Number: 18236
    },
    {
      Year: 2017,
      Number: 18063
    },
    {
      Year: 2018,
      Number: 20923
    },
    {
      Year: 2019,
      Number: 27087
    },
    {
      Year: 2020,
      Number: 23455
    },
    {
      Year: 2021,
      Number: 29544
    },
    
  ]

export default function ApplicantChartPage() {
  return (
    <div style={{width:"100%", margin:"5vh"}}>
        <h1>Applicants</h1>
        <ApplicantChart data={data} />
        <h4>X-axis: Year<br></br>
        Y-axis: Number of Applicants</h4>
        <p>A Bar Chart showing the Applicants number for first-time degree-seeking undergraduates</p>
    </div>
  )
}
