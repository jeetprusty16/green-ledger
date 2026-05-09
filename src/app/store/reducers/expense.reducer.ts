import { createReducer, on } from '@ngrx/store';

import * as ExpenseActions
from '../actions/expense.actions';

import { Expense } from '../../models/expense.model';

export interface ExpenseState {

  expenses: Expense[];

  loading: boolean;

  error: string | null;
}

export const initialState:
ExpenseState = {

  expenses: [],

  loading: false,

  error: null
};

export const expenseReducer =
  createReducer(

    initialState,

    on(
      ExpenseActions.loadExpenses,
      state => ({
        ...state,
        loading: true
      })
    ),

    on(
      ExpenseActions.loadExpensesSuccess,
      (state, { expenses }) => ({
        ...state,
        loading: false,
        expenses
      })
    ),

    on(
      ExpenseActions.setError,
      (state, { error }) => ({
        ...state,
        loading: false,
        error
      })
    )
  );