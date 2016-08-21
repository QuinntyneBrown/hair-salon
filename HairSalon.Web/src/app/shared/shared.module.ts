import { NgModule, ModuleWithProviders }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { HeaderComponent } from './header.component';

const declarables = [NavComponent, HeaderComponent];

const providers = [];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [CommonModule, FormsModule, declarables],
    declarations: [declarables],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [providers]
        };
    }
}
