import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  ipos = [
    {
      company: 'Adani Power',
      priceBand: '₹ 329 - 136',
      open: '2023-06-03',
      close: '2024-06-05',
      size: '45530.15 Cr.',
      type: 'Book Built',
      listing: '2023-06-10',
      status: 'Ongoing',
    },
    {
      company: 'VBL LTD',
      priceBand: '₹ 229 - 136',
      open: '2024-06-03',
      close: '2024-06-05',
      size: '1330.15 Cr.',
      type: 'Book Built',
      listing: '2018-06-10',
      status: 'Comming',
    },
    {
      company: 'Tata Motor',
      priceBand: '₹ 12549 - 136',
      open: '2024-06-03',
      close: '2024-06-05',
      size: '1340.15 Cr.',
      type: 'Book Built',
      listing: '2016-06-10',
      status: 'New Listed',
    },
    // Add more IPO entries...
  ];

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Ongoing':
        return 'bg-success-subtle text-success border-success';
      case 'Comming':
        return 'bg-warning-subtle text-warning border-warning';
      case 'New Listed':
        return 'bg-danger-subtle text-danger border-danger';
      default:
        return 'bg-secondary-subtle text-secondary border-secondary';
    }
  }
}
