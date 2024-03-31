import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  protected readonly URL = environment.backendUrl;

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.URL + 'transactions');
  }
}
