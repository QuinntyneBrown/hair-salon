import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GalleryService {
    constructor(private _http: Http) { }

    public get = () => {
        return this._http.get(`/api/gallery/get`)
            .map((data) => data.json());
    }
}
