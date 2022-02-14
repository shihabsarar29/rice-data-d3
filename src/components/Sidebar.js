import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";


export default function Sidebar() {
  return (
      
    <ProSidebar style={{height:"100vh"}}>
      <div style={{height:"5vh"}}></div>
      <Menu iconShape="square">
        <MenuItem><a href="/">Home</a></MenuItem>
        <div style={{height:"2vh"}}></div>
        <SubMenu title={"Undergraduate Statistics"}>
          <MenuItem><a href="/applicantChart">Applicants</a></MenuItem>
          <MenuItem><a href="/matriculantChart">Matriculants</a></MenuItem>
        </SubMenu>

        <SubMenu title={"Student Demographics"}>
          <MenuItem><a href="/raceChart">Race/Ethnicity</a></MenuItem>
          <MenuItem><a href="/geographicChart">Geographic Origin</a></MenuItem>
        </SubMenu>

        <SubMenu title={"Financial Resources"}>
          <MenuItem><a href="/budgetChart">Consolidated Budget</a></MenuItem>
          <MenuItem><a href="/researchChart">Sponsored Research</a></MenuItem>
        </SubMenu>

      </Menu>
    </ProSidebar>
  );
}
