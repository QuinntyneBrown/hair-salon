import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllHairStylistsAction, RemoveHairStylistAction, HairStylistsFilterAction, SetCurrentHairStylistAction,AddOrUpdateHairStylistAction, AddOrUpdateHairStylistSuccessAction, CurrentHairStylistRemovedAction } from "./hair-stylist.actions";

@Service({
    serviceName: "hairStylistActionCreator",
    viewProviders: ["$location", "dispatcher", "hairStylistService", "guid", "invokeAsync","modalActionCreator"]
})
export class HairStylistActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, hairStylistService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,hairStylistService,dispatcher,guid,AddOrUpdateHairStylistAction,AllHairStylistsAction,RemoveHairStylistAction,SetCurrentHairStylistAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateHairStylistSuccessAction(options.entity));

    currentHairStylistRemoved = () => this.dispatcher.dispatch(new CurrentHairStylistRemovedAction());

    openAllHairStylistsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-hair-stylist-modal></all-hair-stylist-modal>" });
        });
    }
}



