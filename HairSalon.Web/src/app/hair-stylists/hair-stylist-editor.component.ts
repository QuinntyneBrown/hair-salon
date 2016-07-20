import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./hair-stylist-editor.component.html"),
    styles: [require("./hair-stylist-editor.component.scss")],
    selector: "hair-stylist-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HairStylistEditorComponent {}


