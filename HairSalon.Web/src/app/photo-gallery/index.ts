import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { PhotoGalleryComponent } from "./photo-gallery.component";

const appPhotoGalleryModule = angular.module("app.photoGallery", []);

bootstrap(appPhotoGalleryModule, {
    components: [PhotoGalleryComponent]
});

