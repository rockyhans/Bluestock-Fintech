import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
export interface Ipo {
  companyName: string;
  prizeBand: number;
  open: string;
  close: string;
  issueSize: number;
  issueType: string;
  listingDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class IpoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerIPO(formData: FormData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : '',
    });

    return this.http.post(`${this.apiUrl}/register`, formData, {
      headers: headers,
      withCredentials: true,
    });
  }

  getIpos(): Observable<Ipo[]> {
    return this.http.get<Ipo[]>(`${this.apiUrl}/all`);
  }
}
