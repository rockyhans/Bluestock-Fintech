import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { IpoInfoComponent } from '../ipo-info/ipo-info.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DashboardComponent, 
    IpoInfoComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  ipoDetails = {
    companyLogo: '',
    companyName: 'XYZ Company',
    priceBand: 'Not Issue',
    openDate: 'Not Issued',
    closeDate: 'Not Issued',
    issueSize: '0000 Cr.',
    issueType: 'XXX-Type',
    listingDate: 'Not Issued',
    status: 'XXX',
    ipoPrice: 0,
    listingPrice: 0,
    listingGain: 'XXX%',
    newListingDate: 'YYYY-MM-DD',
    cmp: 0,
    currentReturn: '0.00%',
    rhpLink: 'xxx.xx',
    drhpLink: 'xxx.xx',
  };

  user: any;

  constructor(private authService: AuthService) {}

  userName: string = '';
  userInitial: string = '';


  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.userName = user.name;
    }
    if (user && user.name) {
      this.userInitial = user.name.charAt(0).toUpperCase(); // Get first letter, uppercase
    }
  }

  uploadLogo(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.ipoDetails.companyLogo = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  deleteLogo() {
    this.ipoDetails.companyLogo = '';
  }

  register() {
    console.log('Register IPO', this.ipoDetails);
  }

  cancel() {
    console.log('Cancel action');
  }

  selected: string = '';

  select(buttonType: string) {
    this.selected = buttonType;
  }

  isInfoClicked = false;
  isJournalClicked = false;

  toggleInfoColor() {
    this.isInfoClicked = !this.isInfoClicked;
  }

  toggleJournalColor() {
    this.isJournalClicked = !this.isJournalClicked;
  }
  // in app.component.ts or your parent component
  selectedComponent = 'dashboard'; // default nothing shown
}
