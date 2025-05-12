import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpoService, Ipo } from '../Service/ipo.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule], // <-- Add this line
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  ipoList1: Ipo[] = [];

  constructor(private ipoService: IpoService) {}

  ngOnInit(): void {
    this.ipoService.getIpos().subscribe({
      next: (data) => (this.ipoList1 = data),
      error: (err) => console.error('Error fetching IPOs:', err),
    });
  }

  ipoList = [
    {
      logo: '../../assets/logo/logo_min.png',
      company: 'XYZ Company Ltd.',
      priceBand: 'Rs 00 - 00',
      open: 'YYYY-MM-DD',
      close: 'YYYY-MM-DD',
      issueSize: '000.00 Cr.',
      issueType: 'XXX-XXX',
      listingDate: 'YYYY-MM-DD',
    },
    {
      logo: '../../assets/logo/logo_min.png',
      company: 'XYZ Company Ltd.',
      priceBand: 'Rs 00 - 00',
      open: 'YYYY-MM-DD',
      close: 'YYYY-MM-DD',
      issueSize: '000.00 Cr.',
      issueType: 'XXX-XXX',
      listingDate: 'YYYY-MM-DD',
    },
    {
      logo: '../../assets/logo/logo_min.png',
      company: 'XYZ Company Ltd.',
      priceBand: 'Rs 00 - 00',
      open: 'YYYY-MM-DD',
      close: 'YYYY-MM-DD',
      issueSize: '000.00 Cr.',
      issueType: 'XXX-XXX',
      listingDate: 'YYYY-MM-DD',
    },
  ];
}
