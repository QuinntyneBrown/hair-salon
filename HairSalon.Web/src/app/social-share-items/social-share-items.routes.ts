import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { SocialShareItemsContainerComponent } from "./social-share-items-container.component";

export const SocialShareItemsRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/socialshareitems",
        component: SocialShareItemsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/socialshareitem/edit/:socialShareItemId",
        component: SocialShareItemsContainerComponent,
        authorizationRequired: true
    }
];