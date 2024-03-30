import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  protected readonly URL = environment.backendUrl + 'users/';

  constructor(private http: HttpClient) {}

  getDataProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.URL + 'profile');
  }
}
