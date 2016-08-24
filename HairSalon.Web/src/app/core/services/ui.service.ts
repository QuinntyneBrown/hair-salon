import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class UIService {
    constructor(private _http: Http) { }

    public getViewModel = (options: { name: string }): Observable<any> => {
        return this._http.get(`/api/viewmodel/get?name=${options.name}`)
            .map((data) => data.json());
    }
}