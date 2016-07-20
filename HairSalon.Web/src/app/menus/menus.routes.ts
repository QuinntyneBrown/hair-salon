import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { MenusContainerComponent } from "./menus-container.component";

export const PhotosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/menus",
        component: MenusContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/menu/edit/:photoId",
        component: MenusContainerComponent,
        authorizationRequired: true
    }
];