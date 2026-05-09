import {
  Component,
  inject,
  OnInit
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Store }
from '@ngrx/store';

import {
  Observable
} from 'rxjs';

import {
  Expense
} from '../../models/expense.model';

import * as ExpenseActions
from '../../store/actions/expense.actions';

import {
  selectAllExpenses
} from '../../store/selectors/expense.selectors';

import {
  MatTableModule
} from '@angular/material/table';

import {
  MatButtonModule
} from '@angular/material/button';

import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';

import {
  ExpenseFormDialog
} from '../expense-form-dialog/expense-form-dialog';

@Component({
  selector: 'app-expense-tracker',
  standalone: true,

  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ],

  templateUrl: './expense-tracker.html',
  styleUrl: './expense-tracker.scss'
})
export class ExpenseTracker
implements OnInit {

  private store =
    inject(Store);

  private dialog =
    inject(MatDialog);

  expenses$!:
    Observable<Expense[]>;

  displayedColumns = [
    'date',
    'category',
    'description',
    'amount',
    'paymentMode'
  ];

  ngOnInit(): void {

    this.store.dispatch(
      ExpenseActions.loadExpenses()
    );

    this.expenses$ =
      this.store.select(
        selectAllExpenses
      );
  }

  openDialog() {

    this.dialog.open(
      ExpenseFormDialog,
      {
        width: '500px'
      }
    );
  }
}