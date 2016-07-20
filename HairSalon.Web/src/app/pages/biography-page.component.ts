import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./biography-page.component.html"),
    styles: [require("./biography-page.component.scss")],
    selector: "biography-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BiographyPageComponent {
    constructor() { }
}