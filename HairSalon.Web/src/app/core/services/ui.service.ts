import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class UIService {
    constructor(private _http: Http) { }

    public getViewModel = (options: { name: string }) => {

    }
}