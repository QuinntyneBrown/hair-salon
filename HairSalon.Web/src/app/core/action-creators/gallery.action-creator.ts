import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { LOAD_GALLERY_SUCCESS } from "../actions";
import { GalleryService } from "../services";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GalleryActionCreator {
    constructor(private _galleryService: GalleryService, private _store: Store<any>) { }

    public getByName = (options: { name: string }): Observable<boolean> => {
        return this._galleryService.getByName({ name: options.name })
            .map( data => {
                this._store.dispatch({
                    type: LOAD_GALLERY_SUCCESS,
                    payload: data
                });
                return true;
            });
    }
}