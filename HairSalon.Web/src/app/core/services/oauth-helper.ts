import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Headers } from "@angular/http";

@Injectable()
export class OAuthHelper {
    constructor(private _store: Store<any>) { }

    public createAuthorizationHeader(): Headers {
        const headers = new Headers();
        const token = this._store.select("token");
        headers.append('Authorization', `Bearer ${token}`);
        return headers;
    }
}