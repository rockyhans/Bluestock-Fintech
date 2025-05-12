import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpoService } from '../Service/ipo.service';
@Component({
  selector: 'app-view-all-ipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-all-ipo.component.html',
  styleUrl: './view-all-ipo.component.css',
})
export class ViewAllIpoComponent {
  @Output() selectedComponentChange = new EventEmitter<string>();

  registerIPO() {
    this.selectedComponentChange.emit('ipoInfo');
  }
  goBack() {
    this.selectedComponentChange.emit('Upcoming IPO - View All');
  }
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
  ];

  getRowStyle(index: number): any {
    return index === 1 ? { backgroundColor: 'red', color: 'white' } : {};
  }

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

  fetchIpo: any[] = [];

  constructor(private ipoService: IpoService) {}

  ngOnInit(): void {
    this.ipoService.getIpos().subscribe({
      next: (data) => (this.fetchIpo = data),
      error: (err) => console.error('Error fetching IPOs:', err),
    });
  }

  getBadgeClassF(status: string): string {
    switch (status) {
      case 'Ongoing':
        return 'bg-warning text-dark';
      case 'Comming':
        return 'bg-primary text-white';
      case 'New Listed':
        return 'bg-success text-white';
      default:
        return 'bg-secondary text-white';
    }
  }
}
