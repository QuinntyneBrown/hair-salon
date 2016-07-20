import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { GalleryEditorComponent } from "./gallery-editor.component";
import { GalleryListComponent } from "./gallery-list.component";
import { GalleryComponent } from "./gallery.component";
import { GallerysContainerComponent } from "./gallerys-container.component";
import { GalleryActionCreator } from "./gallery.action-creator";
import { GalleryService } from "./gallery.service";
import *  as reducers from "./gallery.reducers";
import *  as actions from "./gallery.actions";

const appGallerysModule = angular.module("app.gallerys", []);

bootstrap(appGallerysModule, {
    components: [GalleryComponent, GalleryEditorComponent, GallerysContainerComponent, GalleryListComponent],
    providers: [GalleryActionCreator, GalleryService],
    reducers: reducers,
    actions: actions
});

export * from "./gallerys.routes";
