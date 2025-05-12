import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { IpoService } from '../Service/ipo.service';

@Component({
  selector: 'app-ipo-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ipo-info.component.html',
  styleUrls: ['./ipo-info.component.css'],
})
export class IpoInfoComponent {
  credentials: any = {
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
    companyLogo: null,
  };

  selectedComponent: string = 'ipoInfo';
  selected: string = 'info';

  ipoService = inject(IpoService); // Inject the IPO service
  authService = inject(AuthService); // Inject the AuthService

  // Verify session before registering IPO
  verifySession() {
    return this.authService.verifySession().toPromise();
  }

  // Register IPO function
  async register() {
    try {
      // Verify if the user is logged in by checking the session
      const sessionValid = await this.verifySession();
      if (!sessionValid.success) {
        alert('You must be logged in to register an IPO');
        return;
      }

      if (sessionValid.success) {
        alert('logged in to register an IPO');
      }

      // Proceed with IPO registration if the session is valid
      if (
        this.credentials.companyName &&
        this.credentials.prizeBand &&
        this.credentials.open
      ) {
        const formData = new FormData();

        Object.keys(this.credentials).forEach((key) => {
          const value = this.credentials[key];
          if (value !== null && value !== undefined) {
            if (key === 'companyLogo' && value instanceof File) {
              formData.append(key, value);
            } else {
              formData.append(key, value);
            }
          }
        });

        // Log the formData by iterating through it
        formData.forEach((value, key) => {
          console.log(`${key}:`, value);
        });

        this.ipoService.registerIPO(formData).subscribe(
          (response) => {
            console.log('IPO Registered Successfully', response);
            alert('IPO registered successfully!');
          },
          (error) => {
            console.error('Error Registering IPO', error);
            alert('Failed to register IPO. Please try again later.');
          }
        );
      } else {
        console.error('Please fill all required fields');
        alert('Please fill all required fields.');
      }
    } catch (error) {
      console.error('Session verification failed:', error);
      alert('Session verification failed. Please login again.');
    }
  }

  cancel() {
    console.log('Registration Cancelled');
  }

  select(component: string) {
    this.selected = component;
  }

  uploadLogo(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.credentials.companyLogo = file;
    }
  }

  deleteLogo() {
    this.credentials.companyLogo = null;
  }
}
