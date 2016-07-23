require("./app/contacts");
require("./app/content-aggregation");
require("./app/customers");
require("./app/galleries");
require("./app/menu-items");
require("./app/menus");
require("./app/pages");
require("./app/photos");
require("./app/professional-services");
require("./app/service-providers");
require("./app/shared");
require("./app/simple-carousel");
require("./app/social-share-items");

import * as reducers from "./app/app.reducers";

import { ContactsRoutes } from "./app/contacts";
import { ContentAggregationRoutes } from "./app/content-aggregation";
import { CustomersRoutes } from "./app/customers";
import { GalleriesRoutes } from "./app/galleries";
import { MenuItemsRoutes } from "./app/menu-items";
import { MenusRoutes } from "./app/menus";
import { PagesRoutes } from "./app/pages";
import { PhotosRoutes } from "./app/photos";
import { ProfessionalServicesRoutes } from "./app/professional-services";
import { ServiceProvidersRoutes } from "./app/service-providers";
import { SocialShareItemsRoutes } from "./app/social-share-items";

import { provide, provideRoutePromise, bootstrap } from "angular-rx-ui/src/components/core";
import { authorizationGuard } from "angular-rx-ui/src/components/routing/authorization-guard";
import { appGuard } from "./app/app.guard";
import { routeChangeSuccessIsAdminReducer } from "angular-rx-ui/src/components/routing/route-change-success-is-admin.reducer";

import { AppComponent } from "./app/app.component";
import { AdminAppComponent } from "./app/admin-app.component";

const appModule = angular.module("app", [
    "components",
    "ui.tinymce",

    "app.contacts",
    "app.contentAggregation",
    "app.customers",
    "app.galleries",
    "app.menuItems",
    "app.menus",
    "app.pages",
    "app.photos",
    "app.professionalServices",
    "app.shared",
    "app.simpleCarousel",
    "app.serviceProviders",
    "app.socialShareItems"
]);

bootstrap(appModule, {
    api: "api",
    components: [AppComponent, AdminAppComponent],
    loginRedirectUrl: "/",
    html5Mode: true,
    guards: [authorizationGuard, appGuard],
    run: [routeChangeSuccessIsAdminReducer],
    reducers: reducers,
    routes: [
        ...ContactsRoutes,
        ...ContentAggregationRoutes,
        ...CustomersRoutes,
        ...GalleriesRoutes,
        ...MenuItemsRoutes,
        ...MenusRoutes,
        ...PagesRoutes,
        ...PhotosRoutes,
        ...ProfessionalServicesRoutes,
        ...ServiceProvidersRoutes,
        ...SocialShareItemsRoutes
    ]
});
