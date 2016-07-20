import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { BiographyPageComponent } from "./biography-page.component";
import { ContactPageComponent } from "./contact-page.component";
import { HomePageComponent } from "./home-page.component";
import { GalleriesPageComponent } from "./galleries-page.component";
import { GalleryPageComponent } from "./gallery-page.component";
import { LoginPageComponent } from "./login-page.component";
import { ProfessionalServicesPageComponent } from "./professional-services-page.component";
import { WhatsNewPageComponent } from "./whats-new-page.component";

export const PagesRoutes: Array<IRouteConfig> = [
    {
        path: "/",
        component: HomePageComponent
    },
    {
        path: "/biography",
        component: BiographyPageComponent
    },
    {
        path: "/contact",
        component: ContactPageComponent
    },
    {
        path: "/login",
        component: LoginPageComponent
    },
    {
        path: "/services",
        component: ProfessionalServicesPageComponent
    },
    {
        path: "/galleries",
        component: GalleriesPageComponent
    },
    {
        path: "/gallery/:slug",
        component: GalleryPageComponent
    },
    {
        path: "/whats-new",
        component: WhatsNewPageComponent
    }
];