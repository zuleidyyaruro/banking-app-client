import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileBehaviorService } from '../../services/profile-behavior.service';
import { Profile } from '../../../banking/interfaces/profile.interface';
import { ProfileService } from '../../../banking/services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public dataProfile!: Profile;

  constructor(
    private profileBehaviorService: ProfileBehaviorService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getDataProfile().subscribe({
      next: (data) => {
        this.dataProfile = data;
        this.profileBehaviorService.setProfile(this.dataProfile);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
