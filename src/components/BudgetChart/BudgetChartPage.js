
import React, { Component } from 'react';
import { budgetStock as budgetData } from './BudgetData';
import BudgetChart from './BudgetChart.jsx';
import * as _ from 'lodash';

class BudgetChartPage extends Component {

  render() {
    let content1;
    content1 = <BudgetChart data={_.cloneDeep(budgetData)}/>;

    return (
      <div style={{ width: "100%", margin: "5vh" }}>
        <h1>Consolidated Budget</h1>
        {content1}
        <h4>X-axis: Year<br></br>
        Y-axis: Budget Amount</h4>
        <p>A Line Chart displaying the total budget for the last 10 years.
          <a href="https://oie.rice.edu/IR-reporting/consolidated-budget" target="_blank">(Data Source)</a>
        </p>
      </div>
    );
  }
}

export default BudgetChartPage;
