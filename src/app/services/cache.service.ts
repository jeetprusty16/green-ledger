import { Injectable } from '@angular/core';

import Dexie, { Table } from 'dexie';

import { Expense } from '../models/expense.model';

export interface CachedExpense {

  id?: number;

  cacheKey: string;

  data: Expense[];

  expiresAt: number;
}

class GreenLedgerDB extends Dexie {

  expenses!: Table<CachedExpense>;

  constructor() {

    super('GreenLedgerDB');

    this.version(1).stores({
      expenses: '++id, cacheKey, expiresAt'
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private db = new GreenLedgerDB();

  private CACHE_TTL =
    5 * 60 * 1000;

  async getCachedExpenses(
    key: string
  ): Promise<Expense[] | null> {

    const entry =
      await this.db.expenses
        .where('cacheKey')
        .equals(key)
        .first();

    if (
      entry &&
      entry.expiresAt > Date.now()
    ) {
      return entry.data;
    }

    return null;
  }

  async setCachedExpenses(
    key: string,
    data: Expense[]
  ): Promise<void> {

    await this.db.expenses.put({
      cacheKey: key,
      data,
      expiresAt:
        Date.now() + this.CACHE_TTL
    });
  }
}