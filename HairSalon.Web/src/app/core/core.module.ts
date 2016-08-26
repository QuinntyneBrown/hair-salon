import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideStore } from "@ngrx/store";

import { NavComponent, HeaderComponent, HeroComponent, PhotoGalleryComponent } from './components';

import { UserService, UIService, ViewModelService } from "./services";

import { ViewModelActionCreator } from "./action-creators";

import { OAuthHelper } from "./helpers";
import { userLoggedIn } from "./reducers/user-logged-in.reducer";

import { throwIfAlreadyLoaded } from './module-import-guard';

const declarables = [NavComponent, HeaderComponent, HeroComponent, PhotoGalleryComponent];

const providers = [

    ViewModelActionCreator,

    UserService,
    UIService,
    ViewModelService,

    OAuthHelper,
    provideStore(userLoggedIn)
];

@NgModule({
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class CoreModule { 
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
