import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./customer-editor.component.html"),
    styles: [require("./customer-editor.component.scss")],
    selector: "customer-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditorComponent {}


