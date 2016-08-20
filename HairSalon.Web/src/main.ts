import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app/app.component";

import './shared/rxjs-extensions';

import { routing } from './app/routing/app.routing';

import { LoginModule } from "./app/login/login.module";
import { SharedModule } from "./app/shared/shared.module";

@NgModule({
    declarations:[ AppComponent ],
    imports: [
        LoginModule,
        SharedModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
