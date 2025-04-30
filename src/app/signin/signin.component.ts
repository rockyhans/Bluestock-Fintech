import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  signinForm: FormGroup;
  showPassword = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      keepSignedIn: [false],
    });
  }

  // Handle form submission for signin
  onSignin() {
    if (this.signinForm.valid) {
      const { email, password, keepSignedIn } = this.signinForm.value;
      this.authService.signin({ email, password }).subscribe({
        next: (res) => {
          console.log('Signin successful:', res);
          this.errorMessage = '';
          this.successMessage = 'Signed in successfully! 🎉';

          if (keepSignedIn) {
            localStorage.setItem('token', res.token);
          } else {
            sessionStorage.setItem('token', res.token);
          }

          this.signinForm.reset();
          setTimeout(() => {
            this.router.navigate(['/Ragister IPO Details And Dasboard']);
          }, 2000);
        },
        error: (err) => {
          console.error('Signin error:', err);
          this.successMessage = '';
          this.errorMessage = err.error?.message || 'Something went wrong!';
        },
      });
    } else {
      this.successMessage = '';
      this.errorMessage = 'Please fill out the form correctly.';
      this.signinForm.markAllAsTouched();
    }
  }

  // Google signup
  onGoogleSignin() {
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
