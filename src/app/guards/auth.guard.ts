import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const authGuard:
CanActivateFn = () => {

  const router =
    inject(Router);

  const isLoggedIn =
    localStorage.getItem(
      'gl_loggedIn'
    ) === 'true';

  const expiry =
    new Date(
      localStorage.getItem(
        'gl_sessionExpiry'
      ) || ''
    );

  if (
    isLoggedIn &&
    expiry > new Date()
  ) {
    return true;
  }

  localStorage.removeItem(
    'gl_loggedIn'
  );

  localStorage.removeItem(
    'gl_sessionExpiry'
  );

  router.navigate(['/login']);

  return false;
};