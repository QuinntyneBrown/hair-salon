import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./gallery-editor.component.html"),
    styles: [require("./gallery-editor.component.scss")],
    selector: "gallery-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryEditorComponent {}


