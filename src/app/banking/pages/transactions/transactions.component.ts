import { Component } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  public transactionData: Transaction[] = [];
  constructor(private transactionsService: TransactionsService) {}

  ngOnInit(): void {
    this.getTransactions();
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
}
