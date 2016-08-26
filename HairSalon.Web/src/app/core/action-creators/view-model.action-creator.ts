import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { LOAD_VIEW_MODEL_SUCCESS } from "../actions";
import { ViewModelService } from "../services";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ViewModelActionCreator {
    constructor(private _viewModelService: ViewModelService, private _store: Store<any>) { }

    public getByName = (options: { name: string }): Observable<boolean> => {
        return this._viewModelService.getByName({ name: options.name })
            .map(data => {
                this._store.dispatch({
                    type: LOAD_VIEW_MODEL_SUCCESS,
                    payload: data
                });
                return true;
            });
    }
}