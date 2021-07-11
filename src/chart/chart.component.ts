import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const config = {
      options: {},
    };
    const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
    let myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 20, 40, 60, 80, 100, 120],
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        onResize() {},
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }
}
