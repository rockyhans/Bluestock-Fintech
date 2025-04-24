import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  errorMessage: string = '';

  signupForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isRobot: [false, Validators.requiredTrue],
      keepSignedIn: [false],
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      const user = { username: name, email, password };
  
      this.authService.signup(user).subscribe({
        next: (res) => {
          console.log('Signup successful:', res);
          this.errorMessage = ''; // clear error if successful
        },
        error: (err) => {
          console.error('Signup error:', err);
          this.errorMessage = err.error?.message || 'Something went wrong!';
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.signupForm.markAllAsTouched();
    }
  }
  
}
