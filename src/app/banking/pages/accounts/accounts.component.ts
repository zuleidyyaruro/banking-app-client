import { Component } from '@angular/core';
import { ProfileBehaviorService } from '../../../shared/services/profile-behavior.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent {
  public accounts: string[] = [];

  constructor(private profileBehaviorService: ProfileBehaviorService) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileBehaviorService.getProfile().subscribe((res) => {
      this.accounts = res.accounts;
    });
  }
}
