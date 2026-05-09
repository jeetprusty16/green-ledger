import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import {
  provideRouter,
  withRouterConfig
} from '@angular/router';

import {
  provideHttpClient
} from '@angular/common/http';

import {
  provideAnimationsAsync
} from '@angular/platform-browser/animations/async';

import { provideNativeDateAdapter } from '@angular/material/core';

import {
  provideFirebaseApp,
  initializeApp
} from '@angular/fire/app';

import {
  provideFirestore,
  getFirestore
} from '@angular/fire/firestore';

import {
  provideAuth,
  getAuth
} from '@angular/fire/auth';

import { routes } from './app.routes';

import { environment } from '../environments/environment';

import { provideStore }
from '@ngrx/store';

import { provideEffects }
from '@ngrx/effects';

import { provideStoreDevtools }
from '@ngrx/store-devtools';

import { expenseReducer }
from './store/reducers/expense.reducer';

import { ExpenseEffects }
from './store/effects/expense.effects';

import {
  withInterceptors
} from '@angular/common/http';

import {
  authTokenInterceptor
} from './interceptors/auth-token.interceptor';

export const appConfig: ApplicationConfig = {

  providers: [

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    ),

    provideFirebaseApp(() =>
      initializeApp(environment.firebase)
    ),

    provideFirestore(() =>
      getFirestore()
    ),

    provideAuth(() =>
      getAuth()
    ),

   provideHttpClient(withInterceptors([authTokenInterceptor])),

    provideAnimationsAsync(),

    provideNativeDateAdapter(),

    provideStore({
    expenses: expenseReducer
    }),

    provideEffects([
    ExpenseEffects
    ]),

    provideStoreDevtools({
    maxAge: 25
    }),

  ]
};
