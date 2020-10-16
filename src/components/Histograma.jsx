import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import "./histograma.css";

// jimport useEffect and useRef
// add  to svg
const BarChart = ({xdim, ydim, margin, xdata, ydata}) => {

   const chart = useRef(null);
   useEffect(() => {
     const svg = d3.select(chart.current);

     addAxes(svg);
     addBars(svg);
     addText(svg);
   }, [xdim, ydim, margin, xdata, ydata]);


   // Adding the "x" and "y" axes it's info
   const addAxes = (svg) => {

      // The "x" axe
     const xscale = d3.scaleBand()
                      .domain(xdata)
                      .range([margin.left, xdim + margin.left]);

     const xAxis = d3.axisBottom(xscale);

     // Adding "x" axe to svg
     svg.append("g")
        .call(xAxis)
        .attr("transform", `translate(0, ${ydim + margin.top})`);

     // The "y" axe
     const yscale = d3.scaleLinear()
                      .domain([0, d3.max(ydata)])
                      .range([ydim, 0]);

     const yAxis = d3.axisLeft(yscale);

     // Adding "y" axe to svg
     svg.append("g")
        .call(yAxis)
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
   }

   // Adding the chart stuff
   const addBars = (svg) => {
     const linearScale = d3.scaleLinear()
                           .domain([0, d3.max(ydata)])
                           .range([0, ydim]);

     const scaledYData = ydata.map(yval => {
       return linearScale(yval);
     });

     svg.selectAll("rect")
        .data(scaledYData)
        .enter()
        .append("rect")
        .attr("width", xscale.bandwidth())
        .attr("height", (d) => {
          return d;
        })
        .attr("x", (d, i) => {
          return xscale(xdata[i]);
        })
        .attr("y", (d) => {
          return margin.top + ydim - d;
        })
        .attr("fill", "#19d3da")
        .attr("stroke", "rgba(0, 0, 0, 0.3)");

     svg.selectAll("text")
        .data(scaledYData)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => ydim - (10 * d) - 3);
   }

   // Title of the graph
   const addText = (svg) => {
     svg.append("text")
        .text("Number of Each Month Posts in 2019")
        .attr("text-anchor", "middle")
        .attr("x", (margin.left + margin.right + xdim) / 2)
        .attr("y", (margin.top) / 2)

     svg.append("text")
        .text("Number of Posts")
        .attr("x", -(margin.top + margin.bottom + ydim) / 2)
        .attr("y", margin.left / 2)
        .attr("transform", `rotate(-90, ${margin.left / 2}, ${margin.top / 2})`)

   }

   const xscale = d3.scaleBand()
                    .domain(xdata)
                    .range([margin.left, xdim + margin.left])
                    .padding(0.2);


   const yscale = d3.scaleLinear()
                   .domain([0, d3.max(ydata)])
                   .range([ydim, 0]);


    return (
      <div className="the-chart">
        <svg viewBox={`0 0 ${xdim + margin.left + margin.right} ${ydim + margin.top + margin.bottom}`}
             preserveAspectRatio="xMinYMin"
             width="100%"
             height="100%"
             style={{backgroundColor: "#686d76"}}
             ref={chart}
             >

        </svg>
      </div>
    );

}

export default BarChart;

















//
// componentDidMount() {
//   this.drawChart();
// }
//
// drawChart() {
//   const data = this.props.data;
//
//   const svg = d3.select("body")
//   .append("svg")
//   .attr("width", this.props.width)
//   .attr("height", this.props.height)
//   .style("margin-left", 100);
//
//   svg.selectAll("rect")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", (d, i) => i * 70)
//     .attr("y", (d, i) => this.props.height - 10 * d)
//     .attr("width", 18)
//     .attr("height", (d, i) => d * 10)
//     .attr("fill", "green")
//
//   svg.selectAll("text")
//     .data(data)
//     .enter()
//     .append("text")
//     .text((d) => d)
//     .attr("x", (d, i) => i * 70)
//     .attr("y", (d, i) => this.props.height - (10 * d) - 3);
//
//
//
// }
//
// render(){
//   return (
//     <div>
//     <div id={"#" + this.props.id}></div>
//     </div>
//   );
// }
