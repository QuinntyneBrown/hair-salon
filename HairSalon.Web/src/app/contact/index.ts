import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { ContactEditorComponent } from "./contact-editor.component";
import { ContactListComponent } from "./contact-list.component";
import { ContactComponent } from "./contact.component";
import { ContactsContainerComponent } from "./contacts-container.component";
import { ContactActionCreator } from "./contact.action-creator";
import { ContactService } from "./contact.service";
import *  as reducers from "./contact.reducers";
import *  as actions from "./contact.actions";

const appContactsModule = angular.module("app.contacts", []);

bootstrap(appContactsModule, {
    components: [ContactComponent, ContactEditorComponent, ContactsContainerComponent, ContactListComponent],
    providers: [ContactActionCreator, ContactService],
    reducers: reducers,
    actions: actions
});

export * from "./contacts.routes";
