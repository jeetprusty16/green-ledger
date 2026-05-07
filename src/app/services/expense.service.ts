import { Injectable, inject } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy
} from '@angular/fire/firestore';

import { Observable, from } from 'rxjs';

import {
  Expense,
  DailySummary
} from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private firestore = inject(Firestore);

  private expenseCollection =
    collection(this.firestore, 'expenses');

  // GET EXPENSES
  getExpenses(): Observable<Expense[]> {

    const q = query(
      this.expenseCollection,
      where('isDeleted', 'in', [false, null]),
      orderBy('createdAt', 'desc')
    );

    return collectionData(q, {
      idField: 'id'
    }) as Observable<Expense[]>;
  }

  // ADD EXPENSE
  addExpense(expense: Omit<Expense, 'id'>) {

    return from(
      addDoc(this.expenseCollection, expense)
    );
  }

  // UPDATE EXPENSE
  updateExpense(
    id: string,
    data: Partial<Expense>
  ) {

    const expenseDoc =
      doc(this.firestore, `expenses/${id}`);

    return from(
      updateDoc(expenseDoc, data)
    );
  }

  // SOFT DELETE
  softDeleteExpense(id: string) {

    const expenseDoc =
      doc(this.firestore, `expenses/${id}`);

    return from(
      updateDoc(expenseDoc, {
        isDeleted: true
      })
    );
  }

  // DAILY SUMMARY
  getDailySummary(date: string) {

    const summaryDoc =
      doc(this.firestore, `daily-summaries/${date}`);

    return collectionData(
      collection(this.firestore, 'daily-summaries')
    );
  }
}