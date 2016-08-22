import { NgModule } from '@angular/core';
import { routing, routedComponents } from './services.routing';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services.component';

const declarables = [ServicesComponent, routedComponents]

@NgModule({
    exports: [declarables],
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class ServicesModule { }
