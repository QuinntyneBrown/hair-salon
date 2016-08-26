import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { ViewModelActionCreator } from "../core";

@Injectable()
export class CanActivateContactPageGuard implements CanActivate {
    constructor(private _viewModelActionCreator: ViewModelActionCreator) { }

    canActivate() {
        return this._viewModelActionCreator
            .getByName({ name: "contact" });
    }
}