import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllPhotosAction, RemovePhotoAction, PhotosFilterAction, SetCurrentPhotoAction,AddOrUpdatePhotoAction, AddOrUpdatePhotoSuccessAction, CurrentPhotoRemovedAction } from "./photo.actions";

@Service({
    serviceName: "photoActionCreator",
    viewProviders: ["$location", "dispatcher", "photoService", "guid", "invokeAsync","modalActionCreator"]
})
export class PhotoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,photoService,dispatcher,guid,AddOrUpdatePhotoAction,AllPhotosAction,RemovePhotoAction,SetCurrentPhotoAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdatePhotoSuccessAction(options.entity));

    currentPhotoRemoved = () => this.dispatcher.dispatch(new CurrentPhotoRemovedAction());

    openAllPhotosModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-photo-modal></all-photo-modal>" });
        });
    }
}



