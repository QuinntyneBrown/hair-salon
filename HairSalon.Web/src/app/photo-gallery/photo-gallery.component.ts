import { CanActivate, ChangeDetectionStrategy, Component } from "angular-rx-ui/src/components/core";

@Component({
    template: require("./photo-gallery.component.html"),
    styles: [require("./photo-gallery.component.scss")],
    selector: "photo-gallery",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryComponent { }
