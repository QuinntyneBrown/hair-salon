import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./simple-carousel-slide.component.html"),
    styles: [require("./simple-carousel-slide.component.scss")],
    selector: "simple-carousel-slide",
    transclude: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCarouselSlideComponent {
    constructor() { }
}
