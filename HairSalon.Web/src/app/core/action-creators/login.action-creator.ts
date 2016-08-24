import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { USER_LOGGED_IN } from "../actions";
import { LoginService } from "../services";

@Injectable()
export class LoginActionCreator {
    constructor(private _loginService: LoginService, private _store: Store<any>) { }

    public tryToLogin = (options: { username: string, password: string }) => {
        this._loginService.tryToLogin(options)
            .subscribe((data) => {
                this._store.dispatch({
                    type: USER_LOGGED_IN,
                    payload: options
                });
            });        
    }
}