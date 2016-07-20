import { HairStylistsContainerComponent  } from "./hair-stylists-container.component";
import { IRouteConfig } from "angular-rx-ui/src/components/core";

export const GalleriesRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/hairstylists",
        component: HairStylistsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/hairstylist/:hairstylistId",
        component: HairStylistsContainerComponent,
        authorizationRequired: true
    }
];