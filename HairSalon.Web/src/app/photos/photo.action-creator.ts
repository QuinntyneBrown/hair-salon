import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllPhotosAction, PhotoUploadAction, RemovePhotoAction, PhotosFilterAction, SetCurrentPhotoAction,AddOrUpdatePhotoAction, AddOrUpdatePhotoSuccessAction, CurrentPhotoRemovedAction } from "./photo.actions";

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

    public upload = (dragEvent: DragEvent) => {
        dragEvent.stopPropagation();
        dragEvent.preventDefault();
        let newId = this.guid();
        if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
            var packageFiles = function (fileList: FileList) {
                var formData = new FormData();
                for (var i = 0; i < fileList.length; i++) {
                    formData.append(fileList[i].name, fileList[i]);
                }
                return formData;
            }
            this.service
                .tryToUpload({ data: packageFiles(dragEvent.dataTransfer.files) })
                .then((response: any) => {
                    this.dispatcher.dispatch(new PhotoUploadAction(newId, response.files))
                });
        }
        return newId;
    }
    
    openPhotoPickerModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<photo-picker-modal></photo-picker-modal>" });
        });
    }
}



