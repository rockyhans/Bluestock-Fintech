// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-main-page',
//   standalone: true,
//   imports: [],
//   templateUrl: './main-page.component.html',
//   styleUrl: './main-page.component.css'
// })
// export class MainPageComponent {

// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-main-page',
//   standalone: true,
//   imports: [CommonModule], // <-- Add this line
//   templateUrl: './main-page.component.html',
// })
// export class MainPageComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule], // <-- Add this line
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  ipoList = [
    {
      logo: '../../assets/logo_min.png',
      company: 'XYZ Company Ltd.',
      priceBand: 'Rs 00 - 00',
      open: 'YYYY-MM-DD',
      close: 'YYYY-MM-DD',
      issueSize: '000.00 Cr.',
      issueType: 'XXX-XXX',
      listingDate: 'YYYY-MM-DD',
    },
    {
      logo: '../../assets/logo_min.png',
      company: 'XYZ Company Ltd.',
      priceBand: 'Rs 00 - 00',
      open: 'YYYY-MM-DD',
      close: 'YYYY-MM-DD',
      issueSize: '000.00 Cr.',
      issueType: 'XXX-XXX',
      listingDate: 'YYYY-MM-DD',
    },
    {
      logo: '../../assets/logo_min.png',
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
