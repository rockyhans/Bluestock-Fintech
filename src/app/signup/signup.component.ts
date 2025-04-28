import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule here

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RecaptchaModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  showPassword = false;
  errorMessage: string = '';
  successMessage: string = '';
  captchaToken: string = '';
  screenWidth: number = window.innerWidth;
  captchaSize: 'normal' | 'compact' = 'normal';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      keepSignedIn: [false],
    });
    this.setCaptchaSize();
  }

  // Callback when CAPTCHA is resolved
  onCaptchaResolved(token: string | null) {
    this.captchaToken = token || ''; // set empty string if null
  }

  // Adjust captcha size based on screen width
  setCaptchaSize() {
    this.captchaSize = this.screenWidth < 500 ? 'compact' : 'normal';
  }

  // Listen for window resize to adjust captcha size
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.setCaptchaSize();
  }

  // Handle form submission for signup
  onSignup() {
    if (!this.captchaToken) {
      this.errorMessage = 'Please complete the CAPTCHA before signing up.';
      this.successMessage = '';
      return;
    }

    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      const user = { name, email, password, captchaToken: this.captchaToken };

      this.authService.signup(user).subscribe({
        next: (res) => {
          console.log('Signup successful:', res);
          this.errorMessage = '';
          this.successMessage = 'Account created successfully! 🎉';
          this.signupForm.reset();
          this.captchaToken = ''; // reset captcha token after success

          setTimeout(() => {
            this.router.navigate(['/Sign In']);
          }, 2000);
        },
        error: (err) => {
          console.error('Signup error:', err.error.errors);
          this.successMessage = '';
          this.errorMessage = err.error?.message || 'Something went wrong!';
        },
      });
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out the form correctly.';
      this.signupForm.markAllAsTouched();
    }
  }

  // Redirect for Google signup
  onGoogleSignup() {
    this.authService.oauthSignup();
  }
}
