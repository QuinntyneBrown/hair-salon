import { CanActivate, ChangeDetectionStrategy, Component, pluck } from "angular-rx-ui/src/components/core";
import * as actions from "./contact.actions";
import { ContactActionCreator } from "./contact.action-creator";
import { Contact } from "./contact.model";

@Component({
    routes: ["/admin/contacts","/admin/contact/edit/:contactId"],
    template: require("./contacts-container.component.html"),
    styles: [require("./contacts-container.component.scss")],
    selector: "contacts-container",
    viewProviders: ["$location","$routeParams","contactActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "contactActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, contactActionCreator: ContactActionCreator) => {
    let contactId = $route.current.params.contactId;
    let promises = [invokeAsync(contactActionCreator.all)];
    if (contactId) { promises.push(invokeAsync({ action: contactActionCreator.getById, params: { id: contactId } })) };
    return $q.all(promises);
}])
export class ContactsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private contactActionCreator: ContactActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.contacts;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contacts");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contact/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateContactAction)
            this.entity = new Contact();

        if (state.lastTriggeredByAction instanceof actions.RemoveContactAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["contactId"]), items: this.entities }) as Contact;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/contacts"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["contactId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["contactId"]), items: this.entities }) as Contact;
        } else {
            this.entity = new Contact();
        }
    }

    edit = entity => this.contactActionCreator.edit(entity);
    remove = entity => this.contactActionCreator.remove(entity);
    create = entity => this.contactActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.contactActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/contacts") {
                this.entity = new Contact();
            } else {
                this.$location.path("/admin/contacts")
            }
        });        
    };
    entity: Contact;
    entities: Array<Contact>;
}
