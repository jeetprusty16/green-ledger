import {
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import {
  ExpenseState
} from '../reducers/expense.reducer';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>(
    'expenses'
  );

export const selectAllExpenses =
  createSelector(
    selectExpenseState,
    state => state.expenses
  );

export const selectExpenseLoading =
  createSelector(
    selectExpenseState,
    state => state.loading
  );

export const selectExpenseError =
  createSelector(
    selectExpenseState,
    state => state.error
  );

export const selectTotalAmount =
  createSelector(
    selectAllExpenses,
    expenses =>
      expenses.reduce(
        (sum, e) => sum + e.amount,
        0
      )
  );