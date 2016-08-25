import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent, HeaderComponent, HeroComponent, PhotoGalleryComponent } from './components';
import { UserService, UIService } from "./services";
import { throwIfAlreadyLoaded } from './module-import-guard';

const declarables = [NavComponent, HeaderComponent, HeroComponent, PhotoGalleryComponent ];
const providers = [UserService, UIService];

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
