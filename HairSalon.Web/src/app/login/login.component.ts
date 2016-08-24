import { Component, ChangeDetectionStrategy, Input, OnDestroy } from "@angular/core";
import { LoginService } from "./login.service";
import { LoginRedirectService } from "./login-redirect.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserProfileService } from "../core/services";

@Component({
    template: require("./login.component.html"),
    styles: [require("./login.component.scss")],
    selector: "h-login",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnDestroy { 

    private _redirectTo: any[];
    private _loginSubscription: Subscription;

    constructor(
        private _loginService: LoginService,
        private _loginRedirectService: LoginRedirectService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _userProfileService: UserProfileService) {
    }

    login() {
        let queryParams = this._router.routerState.queryParams;

        this._loginSubscription = this._loginService
            .login()
            .mergeMap(loginResult => queryParams)
            .map(qp => qp['redirectTo'])
            .subscribe(redirectTo => {                
                if (this._userProfileService.isLoggedIn) {
                    let url = redirectTo ? [redirectTo] : ['/'];
                    this._router.navigate(url);
                }
            });
    }

    public get isLoggedIn(): boolean {
        return this._userProfileService.isLoggedIn;
    }

    logout() { this._loginService.logout(); }

    public ngOnDestroy = () => {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }
}
