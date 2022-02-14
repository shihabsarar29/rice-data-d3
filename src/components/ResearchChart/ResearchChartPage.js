
import React, { Component } from 'react';
import { researchStock as researchData } from './ResearchData';
import ResearchChart from './ResearchChart.jsx';
import * as _ from 'lodash';

class ResearchChartPage extends Component {

  render() {
    let content1;
    content1 = <ResearchChart data={_.cloneDeep(researchData)} />;

    return (
      <div style={{ width: "100%", margin: "5vh" }}>
        <h1>Sponsored Research</h1>
        {content1}
        <h4>X-axis: Year</h4>
        <h4>Y-axis: Funding Amount</h4>
      </div>

    );
  }
}

export default ResearchChartPage;
