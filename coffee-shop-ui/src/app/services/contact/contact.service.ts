import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createMessage(item: any): Observable<any> {
    return this.http.post(`${environment.BACKEND_URL}/api/Message/InsertMessage`, item);
  }
}
