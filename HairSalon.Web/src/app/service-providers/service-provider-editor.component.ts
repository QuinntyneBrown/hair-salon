import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./service-provider-editor.component.html"),
    styles: [require("./service-provider-editor.component.scss")],
    selector: "service-provider-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceProviderEditorComponent {}


