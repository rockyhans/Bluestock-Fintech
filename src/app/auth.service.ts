import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define the interface for the user data to ensure type safety
export interface UserData {
  name: string;
  email: string;
  password: string;
  captchaToken: string; // Include captchaToken if needed
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Signup method with type-safe data
  signup(data: UserData): Observable<any> {
    return this.http.post(
      'https://4d75-122-181-78-180.ngrok-free.app/api/auth/signup',
      data,
      {
        withCredentials: true, // Include credentials in the request
      }
    );
  }

  // OAuth Signup redirection
  oauthSignup() {
    window.location.href =
      'https://b0de-122-181-78-180.ngrok-free.app/api/auth/signup/OAuth/account/google?state=signup';
  }
}
