import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./customer.actions";
import { CustomerActionCreator } from "./customer.action-creator";
import { Customer } from "./customer.model";

@Component({
    routes: ["/admin/customers","/admin/customer/edit/:customerId"],
    template: require("./customers-container.component.html"),
    styles: [require("./customers-container.component.scss")],
    selector: "customers-container",
    viewProviders: ["$location","$routeParams","customerActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "customerActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, customerActionCreator: CustomerActionCreator) => {
    let customerId = $route.current.params.customerId;
    let promises = [invokeAsync(customerActionCreator.all)];
    if (customerId) { promises.push(invokeAsync({ action: customerActionCreator.getById, params: { id: customerId } })) };
    return $q.all(promises);
}])
export class CustomersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private customerActionCreator: CustomerActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.customers;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customers");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customer/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateCustomerAction)
            this.entity = new Customer();

        if (state.lastTriggeredByAction instanceof actions.RemoveCustomerAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities }) as Customer;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/customers"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["customerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities }) as Customer;
        } else {
            this.entity = new Customer();
        }
    }

    edit = entity => this.customerActionCreator.edit(entity);
    remove = entity => this.customerActionCreator.remove(entity);
    create = entity => this.customerActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.customerActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/customers") {
                this.entity = new Customer();
            } else {
                this.$location.path("/admin/customers")
            }
        });        
    };
    entity: Customer;
    entities: Array<Customer>;
}
