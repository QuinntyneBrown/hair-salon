import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { UserProfileService } from "../core/services";
import { LoginRedirectService } from "../login/login-redirect.service";

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
    constructor(
        private _loginRedirectService: LoginRedirectService,
        private _userProfileService: UserProfileService,
        private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        

        if (this._userProfileService.isLoggedIn) {
            return true;
        }

        this._loginRedirectService.lastPath = state.url;

        this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });

        return false;
    }
}