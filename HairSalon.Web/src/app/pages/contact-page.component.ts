import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./contact-page.component.html"),
    styles: [require("./contact-page.component.scss")],
    selector: "contact-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
    storeOnChange = state => {
        if (state.app)
            this.contactPageHeroImageUrl = state.app.contactPageHeroImageUrl;
    }
    public contactPageHeroImageUrl: string;
}
