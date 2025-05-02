import { HttpClient } from '@angular/common/http';
import { importProvidersFrom, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

interface SigninRequest {
  email: string;
  password: string;
  recaptchaToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://bluestockbackend.onrender.com'; // or use environment

  constructor(private http: HttpClient) {}

  signup(data: {
    name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/signup`, data, {
      withCredentials: true,
    });
  }

  signin(data: SigninRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }

  getUser(): any {
    const user =
      localStorage.getItem('user') || sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  
  
  verifySession(): Observable<any> {
    return this.http.get(`${this.baseUrl}/verify-session`, {
      withCredentials: true,
    });
  }


  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    this.userSubject.next(user);
  }

 

  // onGoogleSignup() {
  //   window.location.href = `${this.baseUrl}/OAuth/account/google/signup`;
  // }

  // onGoogleSignin() {
  //   window.location.href = `${this.baseUrl}/OAuth/account/google?state='login`;
  // }
}
