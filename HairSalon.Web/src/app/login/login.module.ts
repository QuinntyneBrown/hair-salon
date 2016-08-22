import { NgModule } from '@angular/core';

import { routing, routedComponents } from './login.routing';
import { SharedModule } from '../shared/shared.module';

const declarables = [routedComponents];

@NgModule({
    exports: [declarables],
    imports: [SharedModule, routing],
    declarations: [declarables]
})
export class LoginModule { }