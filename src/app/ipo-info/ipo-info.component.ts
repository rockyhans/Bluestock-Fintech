import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IpoService } from '../../ipo.service';
@Component({
  selector: 'app-ipo-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ipo-info.component.html',
  styleUrl: './ipo-info.component.css',
})
export class IpoInfoComponent {
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

  selected: string = 'info';

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
}
