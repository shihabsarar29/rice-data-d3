import React from 'react';
import GeographicChart from "./GeographicChart";

  const data = [
    {label:"Texas", value:38},
    {label:"International", value:25},
    {label:"Out-of-State", value:36},
  ]

export default function GeographicChartPage() {
  return (
    
    <div style={{width:"100%"}}>
      <div style={{height:"5vh"}}></div>
        <GeographicChart data={data}/>
    </div>
  )
}
