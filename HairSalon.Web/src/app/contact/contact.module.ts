import { NgModule } from '@angular/core';
import { routing, routedComponents } from './contact.routing';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';

const declarables = [ContactComponent, routedComponents]

@NgModule({
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class ContactModule { }
