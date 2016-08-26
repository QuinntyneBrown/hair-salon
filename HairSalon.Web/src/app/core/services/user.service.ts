import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Store } from "@ngrx/store";
import { OAuthHelper } from "../helpers";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(private _http: Http, private _oauthHelper: OAuthHelper) { }

    public getCurrentUser = (): Observable<any> => {
        return Observable.of({ message: true });
        //return this._http.get(`/api/user/getcurrent`, { headers: this._oauthHelper.createAuthorizationHeader()})
        //    .map((data) => data.json());
    }

    public isLoggedIn: boolean = true;
}