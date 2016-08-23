import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './login.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from "./login.service";
import { LoginRedirectService } from "./login-redirect.service";

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form.component';

const declarables = [LoginComponent, LoginFormComponent];

const providers = [LoginService, LoginRedirectService];

@NgModule({
    exports: [declarables, FormsModule, ReactiveFormsModule],
    imports: [FormsModule, ReactiveFormsModule, SharedModule, routing],
    declarations: [declarables],
    providers: providers
})
export class LoginModule {}