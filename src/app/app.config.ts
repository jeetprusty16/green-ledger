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

    provideHttpClient(),

    provideAnimationsAsync(),

    provideNativeDateAdapter()

  ]
};