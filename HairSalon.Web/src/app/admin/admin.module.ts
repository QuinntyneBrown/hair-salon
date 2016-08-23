import { NgModule } from '@angular/core';
import { routing, routedComponents } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';

const declarables = [AdminComponent, routedComponents]

@NgModule({
    exports: [declarables],
    imports: [SharedModule],
    declarations: [declarables]
})
export class AdminModule { }
