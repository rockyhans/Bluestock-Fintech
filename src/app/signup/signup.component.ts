import { Component, HostListener, ViewChild } from '@angular/core';
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

  captchaToken: string | null = null; // 👈 store token here
  user: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.setCaptchaSize();
    
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.setCaptchaSize();
  }

  setCaptchaSize() {
    this.captchaSize = this.screenWidth < 500 ? 'compact' : 'normal';
  }

  // 👇 Capture reCAPTCHA token
  onCaptchaResolved(token: string | null) {
    this.captchaToken = token;
  }

  

  onSignup() {
    if (this.signupForm.valid) {
      if (!this.captchaToken) {
        this.errorMessage = 'Please complete the reCAPTCHA.';
        return;
      }

      const { name, email, password } = this.signupForm.value;
      const userData = {
        name,
        email,
        password,
        recaptchaToken: this.captchaToken,
      };

      this.authService.signup(userData).subscribe({
        next: (res) => {
          console.log('Signup successful:', res?.message);

          this.errorMessage = '';
          this.successMessage =
            res.message || 'Account created successfully! 🎉';
          this.signupForm.reset();
          this.captchaToken = null; // reset captcha token

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

  onGoogleSignup() {
    window.location.href = 'https://bluestockbackend.onrender.com/OAuth/account/google/signup';
  }
  
}
