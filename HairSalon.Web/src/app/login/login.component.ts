import { Component, ChangeDetectionStrategy, Input, OnDestroy } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserProfileService } from "../shared";

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
        private loginService: LoginService,
        private route: ActivatedRoute,
        private router: Router,
        private userProfileService: UserProfileService) {
    }

    login() {
        let queryParams = this.router.routerState.queryParams;

        this._loginSubscription = this.loginService
            .login()
            .mergeMap(loginResult => queryParams)
            .map(qp => qp['redirectTo'])
            .subscribe(redirectTo => {                
                if (this.userProfileService.isLoggedIn) {
                    let url = redirectTo ? [redirectTo] : ['/'];
                    this.router.navigate(url);
                }
            });
    }

    public get isLoggedIn(): boolean {
        return this.userProfileService.isLoggedIn;
    }

    logout() { this.loginService.logout(); }

    public ngOnDestroy = () => {
        if (this._loginSubscription) {
            this._loginSubscription.unsubscribe();
        }
    }
}
