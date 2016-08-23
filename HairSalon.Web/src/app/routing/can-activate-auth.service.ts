import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { UserProfileService } from "../core/user-profile.service";

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
    constructor(private _userProfileService: UserProfileService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this._userProfileService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });

        return false;
    }
}