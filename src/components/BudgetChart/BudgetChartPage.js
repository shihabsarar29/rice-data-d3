
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
        <h4>X-axis: Year</h4>
        <h4>Y-axis: Budget Amount</h4>
      </div>
    );
  }
}

export default BudgetChartPage;
