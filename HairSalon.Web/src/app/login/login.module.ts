import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginService } from "./login.service";
import { LoginRedirectService } from "./login-redirect.service";

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form.component';

const declarables = [LoginComponent, LoginFormComponent];

const providers = [LoginService, LoginRedirectService];

@NgModule({
    exports: [declarables, ReactiveFormsModule],
    imports: [ReactiveFormsModule, SharedModule],
    declarations: [declarables],
    providers: providers
})
export class LoginModule {}