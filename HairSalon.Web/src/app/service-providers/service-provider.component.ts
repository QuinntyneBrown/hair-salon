import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./service-provider.component.html"),
    styles: [require("./service-provider.component.scss")],
    selector: "service-provider",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceProviderComponent {
    constructor() { }
}
