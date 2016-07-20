import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { BiographyPageComponent } from "./biography-page.component";
import { HomePageComponent } from "./home-page.component";

export const PagesRoutes: Array<IRouteConfig> = [
    {
        path: "/",
        component: HomePageComponent
    }
];