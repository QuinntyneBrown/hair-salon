import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavComponent, HeaderComponent, HeroComponent } from './components';
import { UserProfileService } from "./user-profile.service";
import { throwIfAlreadyLoaded } from './module-import-guard';

const declarables = [NavComponent, HeaderComponent, HeroComponent];
const providers = [UserProfileService];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
    exports: [declarables],
    declarations: [declarables],
    providers: providers
})
export class CoreModule { 
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
