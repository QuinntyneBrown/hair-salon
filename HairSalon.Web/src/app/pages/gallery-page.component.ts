import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./gallery-page.component.html"),
    styles: [require("./gallery-page.component.scss")],
    selector: "gallery-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryPageComponent {
    constructor() { }
}
