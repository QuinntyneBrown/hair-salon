import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./customer-list.component.html"),
    styles: [require("./customer-list.component.scss")],
    selector: "customer-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent {
    constructor() { }     
}
