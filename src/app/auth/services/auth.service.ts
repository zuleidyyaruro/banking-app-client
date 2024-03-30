import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthUserResponse,
  LoginUser,
  RegisterUser,
} from '../../interfaces/auth.interface';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment.local';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly URL = environment.backendUrl;

  constructor(private http: HttpClient, private router: Router) {}

  register(data: RegisterUser): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(this.URL + 'signup', data);
  }

  login(data: LoginUser): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(this.URL + 'signin', data);
  }

  isLogedIn() {
    const token = localStorage.getItem('access-token');
    return !!token;
  }
}
