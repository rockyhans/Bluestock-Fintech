import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [NgChartsModule],
  template: `
    <div style="display: block;">
      <canvas
        baseChart
        [data]="lineChartData"
        [options]="lineChartOptions"
        [type]="lineChartType"
      >
      </canvas>
    </div>
  `,
})
export class LineChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '2016–17',
      '2017–18',
      '2018–19',
      '2019–20',
      '2020–21',
      '2021–22',
      '2022–23',
      '2023–24',
    ],
    datasets: [
      {
        data: [5, 6, 9, 12, 18, 50, 75, 80],
        label: 'Zerodha',
        borderColor: '#3e95cd',
        fill: false,
      },
      {
        data: [4, 5, 6, 7, 8, 15, 45, 50],
        label: 'Angel One',
        borderColor: '#f39c12',
        fill: false,
      },
    ],
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public lineChartType: ChartType = 'line';
}
