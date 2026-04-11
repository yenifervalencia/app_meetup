import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private _router: Router) {}

    canActivate(): Promise<boolean> {
       return new Promise((resolve) => {
            if (this.auth.authenticated && this.auth.accessToken) {
                console.log(this.auth.authenticated)
                resolve(true);
            } else {
                // redirect to main
                this._router.navigate(['home']);
                resolve(false);
            }
        });
    }
}
