import { Component }
from '@angular/core';

import { MatButtonModule }
from '@angular/material/button';

import { Router }
from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    MatButtonModule
  ],

  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  constructor(
    private router: Router
  ) {}

  login() {

    localStorage.setItem(
      'gl_loggedIn',
      'true'
    );

    localStorage.setItem(
      'gl_role',
      'admin'
    );

    const tomorrow =
      new Date();

    tomorrow.setDate(
      tomorrow.getDate() + 1
    );

    localStorage.setItem(
      'gl_sessionExpiry',
      tomorrow.toISOString()
    );

    this.router.navigate([
      '/expenses'
    ]);
  }
}