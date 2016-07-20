import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./hair-stylist-list.component.html"),
    styles: [require("./hair-stylist-list.component.scss")],
    selector: "hair-stylist-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HairStylistListComponent {
    constructor() { }     
}
