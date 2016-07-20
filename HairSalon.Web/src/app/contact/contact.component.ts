import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./contact.component.html"),
    styles: [require("./contact.component.scss")],
    selector: "contact",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    constructor() { }
}
