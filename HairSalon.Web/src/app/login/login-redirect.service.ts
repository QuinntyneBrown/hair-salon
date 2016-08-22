import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class LoginRedirectService {
    constructor(
        private _route: ActivatedRoute,
        private _router: Router) {
    }

    loginUrl: string = "/login";
    lastPath: string;
    defaultPath: string = "/";
    setLoginUrl = value => this.loginUrl = value;
    setDefaultUrl = value => this.defaultPath = value;

    public redirectToLogin = () => {
        // 1. Set Last Path
        // 2. Redirect to Login
    }

    public redirectPreLogin = () => {
        if (this.lastPath && this.lastPath != this.loginUrl) {
            // Redirect to last path
            this.lastPath = "";
        } else {
            // Redirect to default path
        }
    }
}