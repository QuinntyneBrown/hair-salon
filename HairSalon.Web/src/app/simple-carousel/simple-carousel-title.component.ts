import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./simple-carousel-title.component.html"),
    styles: [require("./simple-carousel-title.component.scss")],
    selector: "simple-carousel-title",
    transclude: true,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCarouselTitleComponent {
    constructor() { }
}
