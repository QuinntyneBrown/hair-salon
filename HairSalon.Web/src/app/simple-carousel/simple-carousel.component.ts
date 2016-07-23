import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./simple-carousel.component.html"),
    styles: [require("./simple-carousel.component.scss")],
    selector: "simple-carousel",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCarouselComponent {
    constructor() { }
}
