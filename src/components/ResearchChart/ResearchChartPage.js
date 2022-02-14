
import React, { Component } from 'react';
import { researchStock as researchData } from './ResearchData';
import ResearchChart from './ResearchChart.jsx';
import * as _ from 'lodash';

class ResearchChartPage extends Component {

  render() {
    let content1;
    content1 = <ResearchChart data={_.cloneDeep(researchData)}/>;

    return (
      <div>
        {content1}
      </div>
    );
  }
}

export default ResearchChartPage;
