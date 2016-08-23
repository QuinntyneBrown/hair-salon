import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const declarables = [];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [CommonModule, FormsModule, declarables],
    declarations: [declarables],
})
export class SharedModule {}
