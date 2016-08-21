import { NgModule } from '@angular/core';
import { routing, routedComponents } from './gallery.routing';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery.component';

const declarables = [GalleryComponent, routedComponents]

@NgModule({
    imports: [routing, SharedModule],
    declarations: [declarables]
})
export class GalleryModule { }
