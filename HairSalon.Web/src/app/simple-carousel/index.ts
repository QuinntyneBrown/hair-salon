import { provide, provideAction, bootstrap } from "angular-rx-ui/src/components/core";
import { SimpleCarouselComponent } from "./simple-carousel.component";


var app = angular.module("app.simpleCarousel", [
    "app.core"    
]);

bootstrap(app, {
    components: [SimpleCarouselComponent]
});
