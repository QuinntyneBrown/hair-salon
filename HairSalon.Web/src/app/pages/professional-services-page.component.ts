import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./professional-services-page.component.html"),
    styles: [require("./professional-services-page.component.scss")],
    selector: "professional-services-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfessionalServicesPageComponent {
    storeOnChange = state => {
        if (state.app)
            this.servicesPageHeroImageUrl = state.app.servicesPageHeroImageUrl;
    }
    public servicesPageHeroImageUrl: string;
}
