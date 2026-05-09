import { Routes } from '@angular/router';

import { Login }
from './components/auth/login/login';

import { ExpenseTracker }
from './components/expense-tracker/expense-tracker';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'expenses',
    component: ExpenseTracker
  },

  {
    path: '**',
    redirectTo: 'expenses'
  }

];