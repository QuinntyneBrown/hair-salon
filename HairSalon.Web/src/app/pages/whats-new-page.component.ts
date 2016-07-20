import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./whats-new-page.component.html"),
    styles: [require("./whats-new-page.component.scss")],
    selector: "whats-new-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsNewPageComponent {
    constructor() { }
}
