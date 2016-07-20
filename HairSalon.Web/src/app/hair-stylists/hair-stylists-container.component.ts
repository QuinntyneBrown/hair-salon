import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./hair-stylist.actions";
import { HairStylistActionCreator } from "./hair-stylist.action-creator";
import { HairStylist } from "./hair-stylist.model";

@Component({
    routes: ["/admin/hairstylists","/admin/hairstylist/edit/:hairStylistId"],
    template: require("./hair-stylists-container.component.html"),
    styles: [require("./hair-stylists-container.component.scss")],
    selector: "hair-stylists-container",
    viewProviders: ["$location","$routeParams","hairStylistActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "hairStylistActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, hairStylistActionCreator: HairStylistActionCreator) => {
    let hairStylistId = $route.current.params.hairStylistId;
    let promises = [invokeAsync(hairStylistActionCreator.all)];
    if (hairStylistId) { promises.push(invokeAsync({ action: hairStylistActionCreator.getById, params: { id: hairStylistId } })) };
    return $q.all(promises);
}])
export class HairStylistsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private hairStylistActionCreator: HairStylistActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.hairStylists;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentHairStylistAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/hairstylists");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentHairStylistAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/hairstylist/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateHairStylistAction)
            this.entity = new HairStylist();

        if (state.lastTriggeredByAction instanceof actions.RemoveHairStylistAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["hairStylistId"]), items: this.entities }) as HairStylist;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/hairstylists"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["hairStylistId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["hairStylistId"]), items: this.entities }) as HairStylist;
        } else {
            this.entity = new HairStylist();
        }
    }

    edit = entity => this.hairStylistActionCreator.edit(entity);
    remove = entity => this.hairStylistActionCreator.remove(entity);
    create = entity => this.hairStylistActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.hairStylistActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/hairstylists") {
                this.entity = new HairStylist();
            } else {
                this.$location.path("/admin/hairstylists")
            }
        });        
    };
    entity: HairStylist;
    entities: Array<HairStylist>;
}
