import { NgModule } from '@angular/core';
import { routing, routedComponents } from './about.routing';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';

const declarables = [AboutComponent, routedComponents]

@NgModule({
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class AboutModule { }

