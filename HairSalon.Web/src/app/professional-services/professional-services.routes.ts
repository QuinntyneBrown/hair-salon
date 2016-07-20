import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { ProfessionalServicesContainerComponent } from "./professional-services-container.component";

export const PhotosRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/professionalservices",
        component: ProfessionalServicesContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/professionalservice/edit/:photoId",
        component: ProfessionalServicesContainerComponent,
        authorizationRequired: true
    }
];