import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-large-cap',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './large-cap.component.html',
  styleUrl: './large-cap.component.css'
})
export class LargeCapComponent {
  funds = [
    {
      name: 'Canara Rob Bluechip Equity Fund',
      aum: '₹ 10,816.61 Cr.',
      expenseRatio: '0.5%',
      cagr: '18.48%',
      cagrPositive: true,
      performance: 'The fund’s annualised performance has been 15.3% since inception.',
      risk: 'The fund has been categorised as Very High by SEBI and has a standard deviation of 9.09% vs its category average of 9.61%.',
      composition: 'Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%.'
    },
    {
      name: 'Baroda BNP Paribas Large Cap Fund',
      aum: '₹ 1,693.42 Cr.',
      expenseRatio: '0.92%',
      cagr: '18.19%',
      cagrPositive: true,
      performance: 'The fund’s annualised performance has been 15.3% since inception.',
      risk: 'The fund has been categorised as Very High by SEBI and has a standard deviation of 9.05% vs its category average of 9.61%.',
      composition: 'Large Cap makes up for the majority of the fund at 78.74% along with the largest allocation towards Private Banks at 18.98%.'
    }
  ];
}
