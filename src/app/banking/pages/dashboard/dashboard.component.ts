import { Component } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';
import { ProfileBehaviorService } from '../../../shared/services/profile-behavior.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public dataProfile: Profile = {} as Profile;
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
