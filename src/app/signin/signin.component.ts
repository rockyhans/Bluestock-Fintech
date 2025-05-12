import { Component, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecaptchaModule, RecaptchaComponent } from 'ng-recaptcha';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  captchaSiteKey = environment.recaptchaSiteKey;

  signinForm: FormGroup;
  showPassword = false;
  errorMessage: string = '';
  successMessage: string = '';
  screenWidth: number = window.innerWidth;
  captchaSize: 'normal' | 'compact' = 'normal';

  captchaToken: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepSignedIn: [false],
    });

    this.setCaptchaSize();
  }

  ngOnInit() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.setCaptchaSize();
  }

  setCaptchaSize() {
    this.captchaSize = this.screenWidth < 500 ? 'compact' : 'normal';
  }

  onCaptchaResolved(token: string | null) {
    this.captchaToken = token;
  }

  onSignin() {
    if (this.signinForm.valid) {
      if (!this.captchaToken) {
        this.errorMessage = 'Please complete the reCAPTCHA.';
        return;
      }

      const { email, password, keepSignedIn } = this.signinForm.value;
      const userData = {
        email,
        password,
        recaptchaToken: this.captchaToken,
      };

      this.authService.signin(userData).subscribe({
        next: (res) => {
          console.log('Signin successful:', res);
          console.log('Document.cookie after signin:', document.cookie);
          if (res.user) {
            const userData = JSON.stringify(res.user);
            if (keepSignedIn) {
              localStorage.setItem('user', userData);
            } else {
              sessionStorage.setItem('user', userData);
            }
          }

          this.errorMessage = '';
          this.successMessage = res.message || 'Signed in successfully! 🎉';
          this.signinForm.reset();
          this.captchaToken = null;

          setTimeout(() => {
            this.router.navigate(['/Ragister-IPO-Details-And-Dasboard']);
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

  onGoogleSignin() {
    window.location.href = environment.googleSigninUrl;
  }
}
