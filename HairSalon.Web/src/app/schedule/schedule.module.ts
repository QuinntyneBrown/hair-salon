import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ScheduleComponent } from './schedule.component';

const declarables = [ScheduleComponent]

@NgModule({
    imports: [SharedModule],
    declarations: [declarables],
	exports: [declarables]
})
export class ScheduleModule { }
