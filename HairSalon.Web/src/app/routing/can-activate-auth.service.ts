import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class CanActivateAuthGuard implements CanActivate {
    constructor(private userProfileService: any, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        if (this.userProfileService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });

        return false;
    }
}