import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { ChartOptions, ChartType, ChartDataset, ChartData } from 'chart.js';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-broker-compare',
  standalone: true,
  imports: [CommonModule, NgChartsModule, NavbarComponent],
  templateUrl: './broker-compare.component.html',
  styleUrls: ['./broker-compare.component.css'],
})
export class BrokerCompareComponent {
  brokers = [
    {
      name: 'Angel One',
      rating: 4.7,
      logo: 'https://play-lh.googleusercontent.com/q4s4UwGwtb4svI4VMs4Y6eFCUFfEi9OaH1-hcyY35GLKbRfgzT8b-IEEfd5daZVMwWk',
      accountLink: 'https://angelone.in',
      bgColor: '#fff8e1',
      complaints: 'Low complaint ratio',
      pros: ['Low brokerage', 'Fast UI'],
      cons: ['Limited customer support'],
      financials: 'Profitable since 2019',
      ratingStars: 4.6,
      charges: {
        opening: '₹0',
        maintenance: '₹0 for 1st year then ₹23.6/month',
      },
    },
    {
      name: 'Zerodha',
      rating: 4.6,
      logo: 'https://images.yourstory.com/cs/images/companies/logosC101575977223712png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff',
      accountLink: 'https://zerodha.com',
      bgColor: '#e3f2fd',
      complaints: 'Low complaint ratio',
      pros: ['Low brokerage', 'Fast UI'],
      cons: ['Limited customer support'],
      financials: 'Profitable since 2019',
      ratingStars: 4.6,
      charges: {
        opening: '₹200',
        maintenance: '₹300 per year',
      },
    },
  ];

  // Define lineChartData as ChartData<'line'>
  public lineChartData: ChartData<'line'> = {
    labels: [
      '2016-17',
      '2017-18',
      '2018-19',
      '2019-20',
      '2020-21',
      '2021-22',
      '2022-23',
    ],
    datasets: [
      {
        data: [1, 2, 4, 9, 20, 45, 48],
        label: 'Angel One',
        fill: false,
        borderColor: '#f97316',
        tension: 0.4,
      },
      {
        data: [1, 2, 5, 11, 25, 75, 78],
        label: 'Zerodha',
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.4,
      },
    ],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => val + 'L',
        },
      },
    },
  };

  public revenueChartData: ChartData<'line'> = {
    labels: [
      '2016-17',
      '2017-18',
      '2018-19',
      '2019-20',
      '2020-21',
      '2021-22',
      '2022-23',
    ],
    datasets: [
      {
        data: [10, 12, 18, 25, 35, 60, 80],
        label: 'Angel One Revenue',
        fill: true,
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        tension: 0.4,
      },
      {
        data: [8, 11, 20, 28, 40, 68, 90],
        label: 'Zerodha Revenue',
        fill: true,
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        tension: 0.4,
      },
    ],
  };

  public revenueChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Yearly Revenue (in Crores)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => val + 'Cr',
        },
      },
    },
  };

  public complaintsChartData: ChartData<'line'> = {
    labels: [
      '2016-17',
      '2017-18',
      '2018-19',
      '2019-20',
      '2020-21',
      '2021-22',
      '2022-23',
    ],
    datasets: [
      {
        data: [5, 7, 8, 10, 6, 5, 4],
        label: 'Angel One Complaints',
        fill: false,
        borderColor: '#ef4444', // red-500
        tension: 0.4,
      },
      {
        data: [6, 8, 7, 12, 9, 7, 6],
        label: 'Zerodha Complaints',
        fill: false,
        borderColor: '#3b82f6', // blue-500
        tension: 0.4,
      },
    ],
  };

  public complaintsChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Complaints Registered per Year',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
      },
    },
  };

  public angelOneShareHoldingData: ChartData<'bar'> = {
    labels: [
      'Retail',
      'HNI',
      'Institutions',
      'Foreign Investors',
      'Retail',
      'HNI',
      'Institutions',
      'Promoters',
      'Foreign Investors',
      'Institutions',
      'Promoters',
      'Foreign Investors',
    ],
    datasets: [
      {
        label: 'Angel One Share Holding (%)',
        data: [75, 55, 30, 30, 40, 75, 55, 25, 65, 45, 25, 75],
        backgroundColor: ['#f97316', '#3b82f6'], // orange
        borderRadius: 30,
        borderSkipped: false,
      },
    ],
  };

  public zerodhaShareHoldingData: ChartData<'bar'> = {
    labels: ['Retail', 'HNI', 'Institutions', 'Promoters', 'Foreign Investors' , 'Retail', 'HNI', 'Institutions', 'Promoters', 'Foreign Investors'],
    datasets: [
      {
        label: 'Zerodha Share Holding (%)',
        data: [75, 55, 30, 30, 40, 75, 55, 25, 65, 45, 25, 75],
        backgroundColor: ['#f97316', '#3b82f6'], // orange
        borderRadius: 30,
        borderSkipped: false,
      },
    ],
  };

  public shareHoldingOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Share Holding Pattern',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (val) => val + '%',
        },
      },
    },
  };

  public revenueOverYearsData: ChartData<'bar'> = {
    labels: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
    datasets: [
      {
        label: 'Angel One Revenue',
        data: [300, 500, 800, 1200, 1500],
        backgroundColor: '#f97316', // orange
      },
      {
        label: 'Zerodha Revenue',
        data: [350, 600, 950, 1400, 1700],
        backgroundColor: '#3b82f6', // blue
      },
    ],
  };

  public revenueChartOptionsX: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue Over Years',
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `₹${ctx.raw} Cr`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => `₹${val} Cr`,
        },
      },
    },
  };

  public revenueProfitOverYearsData: ChartData<'bar'> = {
    labels: ['2019-20', '2020-21', '2021-22', '2022-23', '2023-24'],
    datasets: [
      {
        label: 'Angel One Revenue',
        data: [300, 500, 800, 1200, 1500],
        backgroundColor: '#f97316',
        borderRadius: 30,
        borderSkipped: false,
      },
      {
        label: 'Angel One Profit/Loss',
        data: [50, 100, 200, 300, 350],
        backgroundColor: '#fb923c',
        borderRadius: 30,
        borderSkipped: false,
      },
      {
        label: 'Zerodha Revenue',
        data: [350, 600, 950, 1400, 1700],
        backgroundColor: '#3b82f6',
        borderRadius: 30,
        borderSkipped: false,
      },
      {
        label: 'Zerodha Profit/Loss',
        data: [70, 150, 250, 350, 400],
        backgroundColor: '#60a5fa',
        borderRadius: {
          topLeft: 30,
          topRight: 30,
          bottomLeft: 30,
          bottomRight: 30,
        },
        borderSkipped: false,
      },
    ],
  };

  public revenueProfitChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue & Profit/Loss Over Years',
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `₹${ctx.raw} Cr`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (val) => `₹${val} Cr`,
        },
      },
    },
  };
}
