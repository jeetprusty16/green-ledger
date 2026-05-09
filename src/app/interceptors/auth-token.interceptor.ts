import { inject }
from '@angular/core';

import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  Auth
} from '@angular/fire/auth';

export const authTokenInterceptor:
HttpInterceptorFn = (req, next) => {

  const auth =
    inject(Auth);

  const token =
    auth.currentUser;

  if (token) {

    const cloned =
      req.clone({

        setHeaders: {
          Authorization:
            'Bearer token'
        }
      });

    return next(cloned);
  }

  return next(req);
};