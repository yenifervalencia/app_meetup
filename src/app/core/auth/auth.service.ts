import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /**
   * Constructor
   */
  constructor(private _router: Router) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set accessToken(token: string) {
    localStorage.setItem('accessTokenKey', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessTokenKey') ?? '';
  }

  /**
   * Setter & getter for access token
   */
  set authenticated(value: string) {
    localStorage.setItem('authenticated', value);
  }

  get authenticated(): string {
    return localStorage.getItem('authenticated') ?? '';
  }
  signIn(form: Object): Observable<{ token: string }> {
    const response = { token: '123456' };

    this.accessToken = response.token;
    this.authenticated = 'true';

    return of(response);
  }
}
