import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-three.component.html',
  styleUrl: './comp-three.component.css',
})
export class CompThreeComponent {
  brokerList: BrokerCard[] = [
    {
      name: 'Zerodha',
      logo: '../../assets/aaaa-removebg-preview.png',
      bgColor: '#e8f0ff',
      reviews: '15K ',
      accounts: '50.2K',
      offer: 'Open Demat A/c for FREE',
      features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
      charges: {
        opening: '₹ Rs. 0',
        maintenance: '₹300 ⓘ',
        delivery: '₹20 ⓘ',
        intraday: '₹20 ⓘ',
      },
    },
    {
      name: 'AngelOne',
      logo: '../../assets/angel-removebg-preview.png',
      bgColor: '#fff2d6',
      reviews: '15K',
      accounts: '50.2K',
      offer: 'Open Demat A/c for FREE',
      features: ['Equity', 'Commodity', 'Currency', 'Futures', 'Options'],
      charges: {
        opening: '₹ Rs. 0',
        maintenance: '₹300 ⓘ',
        delivery: '₹20 ⓘ',
        intraday: '₹20 ⓘ',
      },
    },
  ];
}

export interface BrokerCard {
  name: string;
  logo: string;
  bgColor: string;
  reviews: string;
  accounts: string;
  offer: string;
  features: string[];
  charges: {
    opening: string;
    maintenance: string;
    delivery: string;
    intraday: string;
  };
}
