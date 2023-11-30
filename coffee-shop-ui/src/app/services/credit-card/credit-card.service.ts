import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  constructor(private http: HttpClient) { }
  checkCreditCard(creditCard: CreditCard): Observable<any> {
    return this.http.post(`${environment.BACKEND_URL}/api/CreditCard/CheckCreditCard`, creditCard);
  }
  updateCreditCardBalance(value: number, creditCardNumber: string): Observable<any> {
    return this.http.put(`${environment.BACKEND_URL}/api/CreditCard/UpdateBalance/${creditCardNumber}`, value);
  }
}
