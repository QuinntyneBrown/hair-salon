import { NgModule } from '@angular/core';
import { routing, routedComponents } from './about.routing';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';

const declarables = [AboutComponent, routedComponents]

@NgModule({
    exports: [declarables],
    imports: [SharedModule],
    declarations: [declarables]
})
export class AboutModule { }

