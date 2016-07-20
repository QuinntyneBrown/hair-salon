import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./contact-editor.component.html"),
    styles: [require("./contact-editor.component.scss")],
    selector: "contact-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactEditorComponent {}


