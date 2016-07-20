import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./gallery-list.component.html"),
    styles: [require("./gallery-list.component.scss")],
    selector: "gallery-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListComponent {
    constructor() { }     
}
