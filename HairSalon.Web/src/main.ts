import { NgModule } from '@angular/core';

import { AboutModule } from "./app/about/about.module";
import { AdminModule } from "./app/admin/admin.module";
import { ContactModule } from "./app/contact/contact.module";
import { GalleryModule } from "./app/gallery/gallery.module";
import { HomeModule } from "./app/home/home.module";
import { ServicesModule } from "./app/services/services.module";
import { SharedModule } from "./app/shared/shared.module";
import { WhatsNewModule } from "./app/whats-new/whats-new.module";

import { AppComponent } from "./app/app.component";


@NgModule({
    declarations:[ AppComponent ],
    imports: [
        AboutModule,
        AdminModule,
        ContactModule,
        GalleryModule,
        HomeModule,
        ServicesModule,
        SharedModule,
        WhatsNewModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
