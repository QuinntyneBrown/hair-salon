import { IDispatcher, BaseActionCreator, Service } from "angular-rx-ui/src/components/core";
import { ModalActionCreator } from "angular-rx-ui/src/components/modal/modal.action-creator";
import { AllCustomersAction, RemoveCustomerAction, CustomersFilterAction, SetCurrentCustomerAction,AddOrUpdateCustomerAction, AddOrUpdateCustomerSuccessAction, CurrentCustomerRemovedAction } from "./customer.actions";

@Service({
    serviceName: "customerActionCreator",
    viewProviders: ["$location", "dispatcher", "customerService", "guid", "invokeAsync","modalActionCreator"]
})
export class CustomerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, customerService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,customerService,dispatcher,guid,AddOrUpdateCustomerAction,AllCustomersAction,RemoveCustomerAction,SetCurrentCustomerAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCustomerSuccessAction(options.entity));

    currentCustomerRemoved = () => this.dispatcher.dispatch(new CurrentCustomerRemovedAction());

    openAllCustomersModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-customer-modal></all-customer-modal>" });
        });
    }
}



