﻿import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
    constructor(private _http: Http) { }

    public tryToLogin = (options: { username: string, password: string }): Observable<any> => {
        return this._http.post(`/api/token`, this._formEncode(options))
            .map((data) => data.json());
    }

    private _formEncode = data => {
        var pairs = [];
        for (var name in data) {
            pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        return pairs.join('&').replace(/%20/g, '+');
    }
}