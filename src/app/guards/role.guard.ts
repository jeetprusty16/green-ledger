import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const roleGuard:
CanActivateFn = () => {

  const router =
    inject(Router);

  const role =
    localStorage.getItem(
      'gl_role'
    );

  if (
    role === 'admin' ||
    role === 'member'
  ) {
    return true;
  }

  router.navigate([
    '/dashboard'
  ]);

  return false;
};