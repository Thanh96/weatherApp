import {
    Component,
    OnInit,
    Input,
    OnChanges,
    SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit, OnChanges {
  chart = [];

  @Input() weatherDay;
  @Input() weatherChart;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
      if (changes.weatherChart || changes.weatherDay) {
          if (this.weatherChart) {
              let showDay = new Date(this.weatherDay.dt * 1000).getDate();
              let listShowDay = this.weatherChart.list.filter(res => new Date(res.dt_txt).getDate() === showDay);
              // return array contain the weather list / 3 hour

              let temp = listShowDay.map(res => res.main.temp_min);
              let allHours = listShowDay.map(res => res.dt_txt.substring(11, 16));
              this.chart = new Chart('canvas', {
                  type: 'line',
                  data: {
                      labels: allHours,
                      datasets: [
                          {
                              data: temp,
                              borderColor: '#3cba9f',
                              fill: false
                          }
                      ]
                  },
                  options: {
                      legend: {
                          display: false,
                      },
                      scales: {
                          xAxes: [{
                              display: true
                          }],
                          yAxes: [{
                              display: true
                          }]
                      }
                  }
              });
          }
      }
     // get weather chart when @input change
  }
}
