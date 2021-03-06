import { NgModule, provide } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import './core/rxjs-extensions';

import { routing } from './routing/app.routing';

import { PageNotFoundComponent } from "./page-not-found.component";

/* Feature Modules */
import { CoreModule } from './core/core.module';

import { AboutModule } from "./about/about.module";
import { AdminModule } from "./admin/admin.module";
import { ContactModule } from "./contact/contact.module";
import { GalleryModule } from "./gallery/gallery.module";
import { HomeModule } from "./home/home.module";
import { LoginModule } from "./login/login.module";
import { ServicesModule } from "./services/services.module";
import { SharedModule } from "./shared/shared.module";
import { WhatsNewModule } from "./whats-new/whats-new.module";

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [   
        CoreModule,
             
        AboutModule,
        AdminModule,
        ContactModule,
        GalleryModule,
        HomeModule,
        LoginModule,
        ServicesModule,
        SharedModule,
        WhatsNewModule,

        routing,

        BrowserModule,
        HttpModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


export * from "./environment";
