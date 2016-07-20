import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { ServiceProvidersContainerComponent } from "./service-providers-container.component";

export const ServiceProvidersRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/serviceproviders",
        component: ServiceProvidersContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/serviceprovider/edit/:photoId",
        component: ServiceProvidersContainerComponent,
        authorizationRequired: true
    }
];