import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

const declarables = [];

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, declarables],
    declarations: [declarables],
})
export class SharedModule {}
