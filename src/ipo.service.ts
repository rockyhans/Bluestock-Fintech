// ipo.service.ts (new file if not exists)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpoService {
  private apiUrl = 'http://localhost:5000/api/ipo';

  constructor(private http: HttpClient) {}

  registerIpo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
