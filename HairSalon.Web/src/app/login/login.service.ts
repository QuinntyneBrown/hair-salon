import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../core/services';

@Injectable()
export class LoginService {
    constructor(
        private userProfileService: UserService) { }

    login():any {
        //return Observable.of(true)
        //    .do(this.toggleLogState.bind(this));
        // .do((val: boolean) => {
        //   this.isLoggedIn = true;
        //   console.log(this.isLoggedIn);
        // });
    }

    logout() {
        this._toggleLogState(false);
    }

    private _toggleLogState(val: boolean) {
        this.userProfileService.isLoggedIn = val;        
    }
}