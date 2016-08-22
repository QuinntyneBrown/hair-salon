//http://stackoverflow.com/questions/34464108/angular2-set-headers-for-every-request

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LocalStorageManager } from "./local-storage-manager.service";

@Injectable()
export class HttpClient {
    constructor(private _http: Http, private _localStorageManager: LocalStorageManager) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' +
            this._localStorageManager.get({ name: "token" }));
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this._http.post(url, data, {
            headers: headers
        });
    }
}