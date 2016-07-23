import { provide, provideAction, bootstrap } from "angular-rx-ui/src/components/core";
import { SimpleCarouselComponent } from "./simple-carousel.component";
import { SimpleCarouselSlideComponent } from "./simple-carousel-slide.component";
import { SimpleCarouselTitleComponent } from "./simple-carousel-title.component";

var app = angular.module("app.simpleCarousel", [
    "app.core"    
]);

bootstrap(app, {
    components: [SimpleCarouselComponent, SimpleCarouselSlideComponent, SimpleCarouselTitleComponent]
});
