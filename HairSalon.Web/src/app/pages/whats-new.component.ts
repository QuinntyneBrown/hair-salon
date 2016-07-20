import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./whats-new.component.html"),
    styles: [require("./whats-new.component.scss")],
    selector: "whats-new",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsNewComponent {
    constructor() { }
}
