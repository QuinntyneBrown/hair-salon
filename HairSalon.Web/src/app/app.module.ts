import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import './app/shared/rxjs-extensions';

import { routing } from './routing/app.routing';

import { LoginModule } from "./login/login.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        LoginModule,
        SharedModule.forRoot(),
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
