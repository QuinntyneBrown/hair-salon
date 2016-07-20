import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllServiceProvidersAction, RemoveServiceProviderAction, ServiceProvidersFilterAction, SetCurrentServiceProviderAction,AddOrUpdateServiceProviderAction, AddOrUpdateServiceProviderSuccessAction, CurrentServiceProviderRemovedAction } from "./service-provider.actions";

@Service({
    serviceName: "serviceProviderActionCreator",
    viewProviders: ["$location", "dispatcher", "serviceProviderService", "guid", "invokeAsync","modalActionCreator"]
})
export class ServiceProviderActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, serviceProviderService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,serviceProviderService,dispatcher,guid,AddOrUpdateServiceProviderAction,AllServiceProvidersAction,RemoveServiceProviderAction,SetCurrentServiceProviderAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateServiceProviderSuccessAction(options.entity));

    currentServiceProviderRemoved = () => this.dispatcher.dispatch(new CurrentServiceProviderRemovedAction());

    openAllServiceProvidersModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-service-provider-modal></all-service-provider-modal>" });
        });
    }
}



