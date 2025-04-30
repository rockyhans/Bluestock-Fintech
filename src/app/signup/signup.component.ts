import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

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
    });
    this.setCaptchaSize();
  }

  // Adjust captcha size based on screen width
  setCaptchaSize() {
    this.captchaSize = this.screenWidth < 500 ? 'compact' : 'normal';
  }

  // Listen for window resize automatically
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.setCaptchaSize();
  }

  // Submit signup form
  onSignup() {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      const userData = { name, email, password };

      this.authService.signup(userData).subscribe({
        next: (res) => {
          console.log('Signup successful:', res);
          this.errorMessage = '';
          this.successMessage =
            res.message || 'Account created successfully! 🎉';
          this.signupForm.reset();

          setTimeout(() => {
            this.router.navigate(['/Sign In']);
          }, 2000);
        },
        error: (err) => {
          console.error('Signup error:', err);
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

  // Google signup
  onGoogleSignup() {
    const dummyGoogleUser = {
      name: 'Google User',
      email: 'googleuser@example.com',
      googleId: 'FAKE_GOOGLE_ID',
    };

    this.authService.googleSignup(dummyGoogleUser).subscribe({
      next: (res) => {
        console.log('Google signup successful:', res);
        this.errorMessage = '';
        this.successMessage = res.message || 'Google signup successful! 🎉';
        setTimeout(() => {
          this.router.navigate(['/Sign In']);
        }, 2000);
      },
      error: (err) => {
        console.error('Google signup error:', err);
        this.successMessage = '';
        this.errorMessage = err.error?.message || 'Google signup failed!';
      },
    });
  }
}
