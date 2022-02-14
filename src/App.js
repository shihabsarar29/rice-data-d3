import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import MatriculantChartPage from './components/MatriculantChart/MatriculantChartPage';
import RaceChartPage from './components/RaceChart/RaceChartPage';
import GeographicChartPage from './components/GeographicChart/GeographicChartPage';
import ApplicantChartPage from './components/ApplicantChart/ApplicantChartPage';
import ResearchChartPage from './components/ResearchChart/ResearchChartPage';
import BudgetChartPage from './components/BudgetChart/BudgetChartPage';


function App() {
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <Sidebar />
      <div style={{width:"30px"}}></div>
      <Router>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/applicantChart"><ApplicantChartPage/></Route>
        <Route exact path="/matriculantChart"><MatriculantChartPage/></Route>
        <Route exact path="/raceChart"><RaceChartPage/></Route>
        <Route exact path="/geographicChart"><GeographicChartPage/></Route>
        <Route exact path="/researchChart"><ResearchChartPage/></Route>
        <Route exact path="/budgetChart"><BudgetChartPage/></Route>
      </Router>

    </div>
  );
}

export default App;
