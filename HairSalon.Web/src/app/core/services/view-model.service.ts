import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ViewModelService {
    constructor(private _http: Http) { }

    public getByName = (options: { name: string }) => {        
        return this._http.get(`/api/viewmodel/getByName?name=${options.name}`)
            .map((data) => data.json());
    }
}
