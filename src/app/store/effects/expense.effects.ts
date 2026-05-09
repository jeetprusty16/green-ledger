import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType }
from '@ngrx/effects';

import { switchMap, map, catchError }
from 'rxjs/operators';

import { of } from 'rxjs';

import * as ExpenseActions
from '../actions/expense.actions';

import { ExpenseService }
from '../../services/expense.service';

@Injectable()
export class ExpenseEffects {

  private actions$ = inject(Actions);

  private expenseService =
    inject(ExpenseService);

  loadExpenses$ = createEffect(() =>

    this.actions$.pipe(

      ofType(
        ExpenseActions.loadExpenses
      ),

      switchMap(() =>

        this.expenseService
          .getExpenses()

          .pipe(

            map(expenses =>

              ExpenseActions
                .loadExpensesSuccess({
                  expenses
                })
            ),

            catchError(error =>

              of(
                ExpenseActions.setError({
                  error: error.message
                })
              )
            )
          )
      )
    )
  );
}