import { Component } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';
import { ProfileBehaviorService } from '../../../shared/services/profile-behavior.service';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public dataProfile: Profile = {} as Profile;
  public transactionData: Transaction[] = [];
  constructor(
    private profileBehaviorService: ProfileBehaviorService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit() {
    this.getProfile();
    this.getTransactions();
  }

  getProfile(): void {
    this.profileBehaviorService.getProfile().subscribe((res) => {
      this.dataProfile = res;
    });
  }

  getTransactions(): void {
    this.transactionsService.getTransactions().subscribe({
      next: (data: Transaction[]) => {
        this.transactionData = data.slice(0, 10);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  get transactionAmount(): number {
    return this.transactionData.reduce(
      (acumulador, transaccion) => acumulador + transaccion.amount,
      0
    );
  }

  get transactionBalance(): number {
    return this.transactionData.reduce(
      (acumulador, transaccion) => acumulador + transaccion.balance,
      0
    );
  }
}
