import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./gallery.actions";
import { GalleryActionCreator } from "./gallery.action-creator";
import { Gallery } from "./gallery.model";
import { PhotoActionCreator } from "../photos/photo.action-creator";
import { PhotoUploadAction } from "../photos/photo.actions";

@Component({
    routes: ["/admin/galleries","/admin/gallery/edit/:galleryId"],
    template: require("./galleries-container.component.html"),
    styles: [require("./galleries-container.component.scss")],
    selector: "galleries-container",
    viewProviders: ["$location","$routeParams","galleryActionCreator","invokeAsync","photoActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "galleryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, galleryActionCreator: GalleryActionCreator) => {
    let galleryId = $route.current.params.galleryId;
    let promises = [invokeAsync(galleryActionCreator.all)];
    if (galleryId) { promises.push(invokeAsync({ action: galleryActionCreator.getById, params: { id: galleryId } })) };
    return $q.all(promises);
}])
export class GalleriesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private galleryActionCreator: GalleryActionCreator, private _invokeAsync, private _photoActionCreator: PhotoActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.gallerys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/galleries");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/gallery/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateGalleryAction)
            this.entity = new Gallery();

        if (state.lastTriggeredByAction instanceof actions.RemoveGalleryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities }) as Gallery;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/galleries"); }
        }

        if (state.lastTriggeredByAction instanceof PhotoUploadAction) {
            for (var i = 0; i < state.lastTriggeredByAction.entities.length; i++) {
                this.entity.photos.push(state.lastTriggeredByAction.entities[i]);
            }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["galleryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities }) as Gallery;
        } else {
            this.entity = new Gallery();
        }
    }

    edit = entity => this.galleryActionCreator.edit(entity);
    remove = entity => this.galleryActionCreator.remove(entity);
    create = entity => this.galleryActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.galleryActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/galleries") {
                this.entity = new Gallery();
            } else {
                this.$location.path("/admin/galleries")
            }
        });        
    };

    upload = () => this._photoActionCreator.openPhotoUploadModal();
    entity: Gallery;
    entities: Array<Gallery>;
}
