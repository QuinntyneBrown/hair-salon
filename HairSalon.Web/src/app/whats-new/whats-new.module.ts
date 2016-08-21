import { NgModule } from '@angular/core';
import { routing, routedComponents } from './whats-new.routing';
import { SharedModule } from '../shared/shared.module';
import { WhatsNewComponent } from './whats-new.component';

const declarables = [WhatsNewComponent, routedComponents]

@NgModule({
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class WhatsNewModule { }
