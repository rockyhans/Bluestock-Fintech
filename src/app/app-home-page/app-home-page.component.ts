import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-home-page',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './app-home-page.component.html',
  styleUrl: './app-home-page.component.css',
})
export class AppHomePageComponent {
  // learn-chart.component.ts
  learnItems = [
    'Technical, Fundamental',
    'Finology, Facts, Equity',
    'Trading Psychology',
    'Risk Assessment',
    'Option Trading',
  ];

  analytics = [
    'Live Sector Trend',
    'IPO DRHP',
    'Sectoral Distribution',
    'Stock Overview',
    'TradingView Chart',
    'Technical, Fundamental',
  ];

  club = ['Educational Resources', 'Real-time Chat', 'Forums'];
  testimonials = [
    {
      name: 'Venkatesh',
      feedback: `Excellent app with a fantastic UI! 🤩 Even though the app is still in progressive mode,
      I must say it is getting better every day. It has an amazing user interface.`,
    },
    {
      name: 'Sarthak',
      feedback: `Bluestock app provides a user-friendly interface 🧭 The clean design and intuitive navigation enhance the overall experience.`,
    },
    {
      name: 'Sakshi',
      feedback: `BlueStock for chart learning & technical and it has exceeded my expectations.
      The UI is well-designed, making it a breeze to navigate and learn charts.`,
    },
  ];

  brokers = [
    { name: 'Angel One', logo: 'assets/angelone.png' },
    { name: 'Zerodha', logo: 'assets/zerodha.png' },
    { name: 'Upstox', logo: 'assets/upstox.png' },
    { name: 'Groww', logo: 'assets/groww.png' },
  ];

  broker1 = 'Angel One';
  broker2 = 'Zerodha';
}
