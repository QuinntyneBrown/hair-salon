import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./galleries-page.component.html"),
    styles: [require("./galleries-page.component.scss")],
    selector: "galleries-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriesPageComponent {
    storeOnChange = state => {

    }
}
