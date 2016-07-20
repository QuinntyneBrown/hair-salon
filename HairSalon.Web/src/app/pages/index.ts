import { bootstrap, provide, provideAction } from "angular-rx-ui/src/components/core";
import { BiographyPageComponent } from "./biography-page.component";
import { ContactPageComponent } from "./contact-page.component";
import { HomePageComponent } from "./home-page.component";
import { GalleriesPageComponent } from "./galleries-page.component";
import { GalleryPageComponent } from "./gallery-page.component";
import { ProfessionalServicesPageComponent } from "./professional-services-page.component";
import { WhatsNewComponent } from "./whats-new.component";

const pagesModule = (<any>angular.module("app.pages", []));

bootstrap(pagesModule, {
    components: [
        BiographyPageComponent,
        ContactPageComponent,
        GalleriesPageComponent,
        GalleryPageComponent,
        HomePageComponent,
        ProfessionalServicesPageComponent,
        WhatsNewComponent 
    ]
});

export * from "./pages.routes";