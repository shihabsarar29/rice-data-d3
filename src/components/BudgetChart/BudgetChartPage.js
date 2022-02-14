
import React, { Component } from 'react';
import { budgetStock as budgetData } from './BudgetData';
import BudgetChart from './BudgetChart.js';
import * as _ from 'lodash';

class BudgetChartPage extends Component {

  render() {
    let content1;
    content1 = <BudgetChart data={_.cloneDeep(budgetData)}/>;

    return (
      <div>
        {content1}
      </div>
    );
  }
}

export default BudgetChartPage;
