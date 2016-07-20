import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./contact-list.component.html"),
    styles: [require("./contact-list.component.scss")],
    selector: "contact-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
    constructor() { }     
}
