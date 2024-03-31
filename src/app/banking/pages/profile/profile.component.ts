import { Component } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';
import { ProfileBehaviorService } from '../../../shared/services/profile-behavior.service';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgbRating],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  public dataProfile: Profile = {} as Profile;
  public rating = 8;
  constructor(private profileBehaviorService: ProfileBehaviorService) {}

  ngOnInit() {
    this.getProfile();
  }

  getProfile(): void {
    this.profileBehaviorService.getProfile().subscribe((res) => {
      this.dataProfile = res;
    });
  }
}
