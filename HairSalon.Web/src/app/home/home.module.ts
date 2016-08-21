import { NgModule } from '@angular/core';
import { routing, routedComponents } from './home.routing';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

const declarables = [HomeComponent, routedComponents]

@NgModule({
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class HomeModule { }
