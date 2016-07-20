import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllGallerysAction, RemoveGalleryAction, GallerysFilterAction, SetCurrentGalleryAction,AddOrUpdateGalleryAction, AddOrUpdateGallerySuccessAction, CurrentGalleryRemovedAction } from "./gallery.actions";

@Service({
    serviceName: "galleryActionCreator",
    viewProviders: ["$location", "dispatcher", "galleryService", "guid", "invokeAsync","modalActionCreator"]
})
export class GalleryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, galleryService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,galleryService,dispatcher,guid,AddOrUpdateGalleryAction,AllGallerysAction,RemoveGalleryAction,SetCurrentGalleryAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateGallerySuccessAction(options.entity));

    currentGalleryRemoved = () => this.dispatcher.dispatch(new CurrentGalleryRemovedAction());

    openAllGallerysModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-gallery-modal></all-gallery-modal>" });
        });
    }
}



