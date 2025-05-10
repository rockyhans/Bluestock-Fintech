import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpoService {
  private apiUrl = 'http://localhost:9000/ipo'; // Backend URL

  constructor(private http: HttpClient) {}

  registerIPO(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, formData, {
     withCredentials: true
    });
  }
}
