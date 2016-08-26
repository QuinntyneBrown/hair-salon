import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { UserService } from "../core/services";
import { LoginRedirectService } from "../login/login-redirect.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
    constructor(
        private _loginRedirectService: LoginRedirectService,
        private _userService: UserService,
        private _router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this._userService
            .getCurrentUser()
            .map(data => {

                alert(JSON.stringify(data));
                return data;
            });

        //if (this._userService.isLoggedIn) {
        //    return Observable.of(true);
        //}

        //this._loginRedirectService.lastPath = state.url;

        //this._router.navigate(['/login'], { queryParams: { redirectTo: state.url } });

        //return Observable.of(true);
    }
}