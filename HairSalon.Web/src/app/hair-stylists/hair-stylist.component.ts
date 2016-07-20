import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./hair-stylist.component.html"),
    styles: [require("./hair-stylist.component.scss")],
    selector: "hair-stylist",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HairStylistComponent {
    constructor() { }
}
