import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ServicesService {
    constructor(private _http: Http) { }

    public get = () => {
        return this._http.get(`/api/services/get`)
            .map((data) => data.json());
    }
}
