import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ViewModelActionCreator } from "../core";

@Injectable()
export class CanActivateHomePageGuard implements CanActivate {
    constructor( private _viewModelActionCreator: ViewModelActionCreator) { }

    canActivate() {        
        return this._viewModelActionCreator
            .getByName({ name: "home" });
    }
}