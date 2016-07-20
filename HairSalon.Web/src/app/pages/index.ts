import { bootstrap, provide, provideAction } from "angular-rx-ui/src/components/core";
import { BiographyPageComponent } from "./biography-page.component";
import { HomePageComponent } from "./home-page.component";


const pagesModule = (<any>angular.module("app.pages", []));

bootstrap(pagesModule, {
    components: [
        BiographyPageComponent,
        HomePageComponent
    ]
});

export * from "./pages.routes";