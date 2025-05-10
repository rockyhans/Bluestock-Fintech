import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IpoService } from '../ipo.service'; // Import the IPO service

@Component({
  selector: 'app-ipo-info',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule
  templateUrl: './ipo-info.component.html',
  styleUrls: ['./ipo-info.component.css'],
})
export class IpoInfoComponent {
  ipoDetails: any = {
    companyName: '',
    prizeBand: '',
    open: '',
    close: '',
    issueSize: '',
    issueType: '',
    listingDate: '',
    status: 'Upcoming',
    ipoPrice: '',
    listingPrice: '',
    listingGain: '',
    cmp: '',
    currentReturn: '',
    rhp: '',
    drhp: '',
    companyLogo: null
  };

  selectedComponent: string = 'ipoInfo';
  selected: string = 'info';
  ipoService = inject(IpoService); // Injecting the IPO service

  register() {
    if (this.ipoDetails.companyName && this.ipoDetails.prizeBand && this.ipoDetails.open) {
      const formData = new FormData();
      
      // Append form data fields
      formData.append('companyName', this.ipoDetails.companyName);
      formData.append('priceBand', this.ipoDetails.prizeBand);
      formData.append('open', this.ipoDetails.open);
      formData.append('close', this.ipoDetails.close);
      formData.append('issueSize', this.ipoDetails.issueSize);
      formData.append('issueType', this.ipoDetails.issueType);
      formData.append('listingDate', this.ipoDetails.listingDate);
      formData.append('status', this.ipoDetails.status);
      formData.append('ipoPrice', this.ipoDetails.ipoPrice);
      formData.append('listingPrice', this.ipoDetails.listingPrice);
      formData.append('listingGain', this.ipoDetails.listingGain);
      formData.append('cmp', this.ipoDetails.cmp);
      formData.append('currentReturn', this.ipoDetails.currentReturn);
      formData.append('rhp', this.ipoDetails.rhp);
      formData.append('drhp', this.ipoDetails.drhp);

      // If logo is uploaded, append it to FormData
      if (this.ipoDetails.companyLogo) {
        formData.append('companyLogo', this.ipoDetails.companyLogo);
      }

      // Call the service to send data to backend
      this.ipoService.registerIPO(formData).subscribe(
        response => {
          console.log('IPO Registered Successfully', response);
        },
        error => {
          console.error('Error Registering IPO', error);
        }
      );
    } else {
      console.error('Please fill all required fields');
    }
  }

  cancel() {
    // Clear form or redirect based on your app's logic
    console.log('Registration Cancelled');
  }

  select(component: string) {
    this.selected = component;
  }

  uploadLogo(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.ipoDetails.companyLogo = file;
    }
  }

  deleteLogo() {
    this.ipoDetails.companyLogo = null;
  }
}
