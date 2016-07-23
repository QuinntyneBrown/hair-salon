import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./galleries-page.component.html"),
    styles: [require("./galleries-page.component.scss")],
    selector: "galleries-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriesPageComponent {
    storeOnChange = state => {
        if (state.app) {
            this.galleriesPageHeroImageUrl = state.app.galleriesPageHeroImageUrl;
            this.mainGallery = state.app.mainGallery;
        }
    }
    public galleriesPageHeroImageUrl: string;
    public mainGallery: any;
}
