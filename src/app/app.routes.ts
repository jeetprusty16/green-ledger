import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Signup } from './components/auth/signup/signup';
import { Dashboard } from './components/dashboard/dashboard';
import { ExpenseTracker } from './components/expense-tracker/expense-tracker';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'signup',
    component: Signup
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]
  },

  {
    path: 'expenses',
    component: ExpenseTracker,
    canActivate: [authGuard, roleGuard]
  },

  {
    path: 'summary',
    loadComponent: () =>
      import('./components/expense-summary/expense-summary')
        .then(m => m.ExpenseSummary),
        
    canActivate: [authGuard, roleGuard]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];


