import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./service-provider.actions";
import { ServiceProviderActionCreator } from "./service-provider.action-creator";
import { ServiceProvider } from "./service-provider.model";

@Component({
    routes: ["/admin/serviceproviders","/admin/serviceprovider/edit/:serviceProviderId"],
    template: require("./service-providers-container.component.html"),
    styles: [require("./service-providers-container.component.scss")],
    selector: "service-providers-container",
    viewProviders: ["$location","$routeParams","serviceProviderActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "serviceProviderActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, serviceProviderActionCreator: ServiceProviderActionCreator) => {
    let serviceProviderId = $route.current.params.serviceProviderId;
    let promises = [invokeAsync(serviceProviderActionCreator.all)];
    if (serviceProviderId) { promises.push(invokeAsync({ action: serviceProviderActionCreator.getById, params: { id: serviceProviderId } })) };
    return $q.all(promises);
}])
export class ServiceProvidersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private serviceProviderActionCreator: ServiceProviderActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.serviceProviders;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentServiceProviderAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/serviceproviders");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentServiceProviderAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/serviceprovider/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateServiceProviderAction)
            this.entity = new ServiceProvider();

        if (state.lastTriggeredByAction instanceof actions.RemoveServiceProviderAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["serviceProviderId"]), items: this.entities }) as ServiceProvider;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/serviceproviders"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["serviceProviderId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["serviceProviderId"]), items: this.entities }) as ServiceProvider;
        } else {
            this.entity = new ServiceProvider();
        }
    }

    edit = entity => this.serviceProviderActionCreator.edit(entity);
    remove = entity => this.serviceProviderActionCreator.remove(entity);
    create = entity => this.serviceProviderActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.serviceProviderActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/serviceproviders") {
                this.entity = new ServiceProvider();
            } else {
                this.$location.path("/admin/serviceproviders")
            }
        });        
    };
    entity: ServiceProvider;
    entities: Array<ServiceProvider>;
}
