import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./service-provider-list.component.html"),
    styles: [require("./service-provider-list.component.scss")],
    selector: "service-provider-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceProviderListComponent {
    constructor() { }     
}
