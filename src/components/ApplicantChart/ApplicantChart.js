import React from 'react';
import ApplicantChart from "./ApplicantChartPage";

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
    
    <div style={{width:"100%"}}>
      <div style={{height:"5vh"}}></div>
        <ApplicantChart data={data} />
    </div>
  )
}
