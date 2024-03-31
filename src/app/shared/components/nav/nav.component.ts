import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileBehaviorService } from '../../services/profile-behavior.service';
import { Profile } from '../../../banking/interfaces/profile.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, NgbModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  public dataProfile!: Profile;
  constructor(private profileBehaviorService: ProfileBehaviorService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileBehaviorService.getProfile().subscribe((res) => {
      this.dataProfile = res;
    });
  }

  emptyDataProfile(obj: Profile): boolean {
    return Object.keys(obj).length > 0;
  }
}
