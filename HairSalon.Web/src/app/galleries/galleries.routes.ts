import { GalleriesContainerComponent  } from "./galleries-container.component";
import { IRouteConfig } from "angular-rx-ui/src/components/core";

export const GalleriesRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/galleries",
        component: GalleriesContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/gallery/:galleryid",
        component: GalleriesContainerComponent,
        authorizationRequired: true
    }
];