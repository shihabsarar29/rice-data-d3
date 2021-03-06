
import * as d3 from 'd3';

const parseTime = d3.timeParse('%y');

let chart = {},
  x, y,
  line,
  width,
  height,
  g;

chart.create = (el, props, state) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  let svg = d3.select(el).append('svg')
    .attr('class', 'chart')
    .attr('width', props.width)
    .attr('height', props.height);

  width = svg.attr('width') - margin.left - margin.right;
  height = svg.attr('height') - margin.top - margin.bottom;
  g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  x = d3.scaleTime().rangeRound([0, width]);
  y = d3.scaleLinear().rangeRound([height, 0]);
  line = d3.line()
    .x(function (d) { return x(d.Year); })
    .y(function (d) { return y(d.Amount); });

  chart.update(state);
}

chart.update = (state) => {
  let svg = d3.select('svg');

  chart.draw(svg, state.data, state.title);
}

chart.draw = function (svg, data, title) {
  this.cleanUp();

  data.forEach(function (d) {
    d.Year = parseTime(d.Year);
    d.Number = +d.Amount;
    return d;
  });

  x.domain(d3.extent(data, function (d) { return d.Year; }));
  y.domain([0, d3.max(data, function (d) { return d.Amount; })]);

  g.append('g')
    .attr('class', 'x-axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x).ticks(d3.timeMonth.every(12)));

  g.append('g')
    .attr('class', 'y-axis')
    .call(d3.axisLeft(y))
    .append('text')
    .attr('fill', '#000')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('$ in Millions');

  g.append('path')
    .attr('class', 'chart-line')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', 'steelblue')
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
    .attr('stroke-width', 1.5)
    .attr('d', line);

  g.append('text')
    .attr('class', 'chart-title')
    .attr('x', (width / 2))
    .attr('y', 0)
    .attr('text-anchor', 'middle')
    .style('font-size', '16px')
    .text(title);
}

chart.cleanUp = function (el) {
  d3.selectAll('.x-axis').remove();
  d3.selectAll('.y-axis').remove();
  d3.selectAll('.chart-title').remove();
  d3.selectAll('.chart-line').remove();
};

export default chart;