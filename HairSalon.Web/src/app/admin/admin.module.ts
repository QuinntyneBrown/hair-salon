import { NgModule } from '@angular/core';
import { routing, routedComponents } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminSideNavComponent } from './core/admin-side-nav.component';


import { ServicesComponent } from './services/services.component';

import { RouterModule } from '@angular/router';

const declarables = [
    AdminComponent,
    AdminSideNavComponent,

    ServicesComponent,

    routedComponents
];

@NgModule({
    exports: [declarables],
    imports: [SharedModule, RouterModule],
    declarations: [declarables]
})
export class AdminModule { }
