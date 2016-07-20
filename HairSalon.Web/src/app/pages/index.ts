import { bootstrap, provide, provideAction } from "angular-rx-ui/src/components/core";
import { BiographyPageComponent } from "./biography-page.component";
import { ContactPageComponent } from "./contact-page.component";
import { HomePageComponent } from "./home-page.component";
import { GalleriesPageComponent } from "./galleries-page.component";
import { GalleryPageComponent } from "./gallery-page.component";
import { LoginPageComponent } from "./login-page.component";
import { ProfessionalServicesPageComponent } from "./professional-services-page.component";
import { WhatsNewPageComponent } from "./whats-new-page.component";

const pagesModule = (<any>angular.module("app.pages", []));

bootstrap(pagesModule, {
    components: [
        BiographyPageComponent,
        ContactPageComponent,
        GalleriesPageComponent,
        GalleryPageComponent,
        HomePageComponent,
        LoginPageComponent,
        ProfessionalServicesPageComponent,
        WhatsNewPageComponent 
    ]
});

export * from "./pages.routes";