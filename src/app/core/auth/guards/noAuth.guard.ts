import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
    constructor(private auth: AuthService, private _router: Router) {}

    canActivate(): Promise<boolean> {
        return new Promise((resolve) => {
            if (!this.auth.authenticated && !this.auth.accessToken) {
                resolve(true);
            } else {
                // redirect to main
                this._router.navigate(['/main']);
                resolve(false);
            }
        });
    }
}
