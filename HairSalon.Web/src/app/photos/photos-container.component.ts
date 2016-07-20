import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./photo.actions";
import { PhotoActionCreator } from "./photo.action-creator";
import { Photo } from "./photo.model";

@Component({
    routes: ["/admin/photos","/admin/photo/edit/:photoId"],
    template: require("./photos-container.component.html"),
    styles: [require("./photos-container.component.scss")],
    selector: "photos-container",
    viewProviders: ["$location","$routeParams","photoActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "photoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, photoActionCreator: PhotoActionCreator) => {
    let photoId = $route.current.params.photoId;
    let promises = [invokeAsync(photoActionCreator.all)];
    if (photoId) { promises.push(invokeAsync({ action: photoActionCreator.getById, params: { id: photoId } })) };
    return $q.all(promises);
}])
export class PhotosContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private photoActionCreator: PhotoActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.photos;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/photos");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/photo/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdatePhotoAction)
            this.entity = new Photo();

        if (state.lastTriggeredByAction instanceof actions.RemovePhotoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities }) as Photo;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/photos"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["photoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities }) as Photo;
        } else {
            this.entity = new Photo();
        }
    }

    edit = entity => this.photoActionCreator.edit(entity);
    remove = entity => this.photoActionCreator.remove(entity);
    create = entity => this.photoActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.photoActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/photos") {
                this.entity = new Photo();
            } else {
                this.$location.path("/admin/photos")
            }
        });        
    };
    entity: Photo;
    entities: Array<Photo>;
}
