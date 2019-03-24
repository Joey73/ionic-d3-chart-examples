import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    this.createCircles();
  }

  createCircles(): void {
    // the data set
    const circleRadii = [40, 20, 10];

    // an SVG element to hold the SVG Circles
    const svgContainer = d3
      .select('#circles-basic')
      .append('svg')
      .attr('width', 300)
      .attr('height', 100)
      .style('border', '1px solid black');

    const circles = svgContainer
      // selectAll circle
      .selectAll('circle')
      // bind the data
      .data(circleRadii)
      // select the virtual .enter() selection
      .enter()
      // append the SVG circle elements
      .append('circle');

    // Specify the attributes for each circle.
    circles
      // cx - The x-axis coordinate of the center of the circle
      .attr('cx', 50)
      // cy - The y-axis coordinate of the center of the circle
      .attr('cy', 50)
      // r - The radius of the circle.
      .attr('r', d => d)
      // use D3.js' .style() operator to modify the CSS style property
      .style('fill', d => {
        let returnColor;
        if (d === 40) {
          returnColor = 'green';
        } else if (d === 20) {
          returnColor = 'purple';
        } else if (d === 10) {
          returnColor = 'red';
        }
        return returnColor;
      });
  }
}
