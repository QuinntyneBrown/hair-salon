import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

const declarables = [HomeComponent]

@NgModule({
    exports:[declarables],
    imports: [SharedModule],
    declarations: [declarables]
})
export class HomeModule { }
