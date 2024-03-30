import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthUserResponse,
  LoginUser,
  RegisterUser,
} from '../../interfaces/auth.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected readonly URL = environment.backendUrl;

  constructor(private http: HttpClient) {}

  register(data: RegisterUser): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(this.URL + 'signup', data);
  }

  login(data: LoginUser): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(this.URL + 'signin', data);
  }
}
