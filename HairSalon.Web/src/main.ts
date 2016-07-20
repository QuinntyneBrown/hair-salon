require("./app/articles");
require("./app/contacts");
require("./app/content-aggregation");
require("./app/customers");
require("./app/galleries");
require("./app/login");
require("./app/menu-items");
require("./app/menus");
require("./app/orders");
require("./app/pages");
require("./app/photos");
require("./app/products");
require("./app/quotes");
require("./app/shared");
require("./app/social-share-items");

import * as reducers from "./app/app.reducers";
import { ContentAggregationRoutes } from "./app/content-aggregation";


import { provide, provideRoutePromise, bootstrap } from "angular-rx-ui/src/components/core";
import { authorizationGuard } from "angular-rx-ui/src/components/routing/authorization-guard";
import { appGuard } from "../app.guard";
import { routeChangeSuccessIsAdminReducer } from "angular-rx-ui/src/components/routing/route-change-success-is-admin.reducer";

import { AppComponent } from "./app/app.component";
import { AdminAppComponent } from "./app/admin-app.component";

const appModule = angular.module("app", [
    "components",

    "app.contentAggregation"
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
        ...ContentAggregationRoutes,
    ]
});
