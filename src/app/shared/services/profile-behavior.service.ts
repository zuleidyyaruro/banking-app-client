import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../../banking/interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileBehaviorService {
  private profileSubject = new BehaviorSubject<Profile>({} as Profile);

  constructor() {}

  setProfile(profile: Profile) {
    this.profileSubject.next(profile);
  }

  getProfile() {
    return this.profileSubject.asObservable();
  }
}
