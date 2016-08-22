import { NgModule, ModuleWithProviders } from '@angular/core';

import { routing } from './login.routing';
import { SharedModule } from '../shared/shared.module';
import { LoginService } from "./login.service";
import { LoginRedirectService } from "./login-redirect.service";

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form.component';

const declarables = [LoginComponent, LoginFormComponent];

const providers = [LoginService, LoginRedirectService];

@NgModule({
    exports: [declarables],
    imports: [SharedModule, routing],
    declarations: [declarables]
})
export class LoginModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LoginModule,
            providers: [providers]
        };
    }
}