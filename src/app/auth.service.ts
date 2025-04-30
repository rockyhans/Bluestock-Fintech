import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }
  signin(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  googleSignup(googleData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/google`, googleData);
  }
  registerIpo(ipoData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, ipoData);
  }

  getAllIpos(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getIpoById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateIpo(id: string, ipoData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, ipoData);
  }

  deleteIpo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
