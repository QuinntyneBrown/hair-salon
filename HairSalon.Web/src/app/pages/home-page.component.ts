import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
    storeOnChange = state => {
        if (state.app)
            this.homePageHeroImageUrl = state.app.homePageHeroImageUrl;
    }
    public homePageHeroImageUrl: string;
}
