import React from "react";


export default function Home() {

  return (
    <div style={{ marginTop: "5vh", marginLeft: "4vh" }}>
      <h1>Rice Data Visualization with D3.js</h1>
      <p>Data visualization is the graphical representation of information and data.
        By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way
        to see and understand trends, outliers, and patterns in data.
      </p>
      <p>To present data visualizations, this react web app used D3.js, a JavaScript library for producing dynamic,
        interactive data visualizations in web browsers.
      </p>
      <img src="https://www.linkpicture.com/q/How-to-integrate-React-D3-The-right-way-adeveloperdiary.com-4.jpg" />
      <p>The following visualizations are displayed taking the data from the Institutional Research Reports of Rice University
        <a href="https://oie.rice.edu/IR-reporting" target="_blank">(Link)</a>
      </p>

      <ol>
        <li>Bar Chart showing the Applicants number for first-time degree-seeking undergraduates</li>
        <li>Bar Chart showing the Matriculants number for first-time degree-seeking undergraduates</li>
        <li>Pie Chart showing the enrollment of students by Race/Ethnicity</li>
        <li>Pie Chart showing the enrollment of students by Geographic Origin</li>
        <li>Line Chart displaying the total budget for the last 10 years</li>
        <li>Line Chart displaying the end-of-fiscal year sponsored research revenues</li>
      </ol>

    </div>
  );
}
