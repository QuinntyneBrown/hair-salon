import { IRouteConfig } from "angular-rx-ui/src/components/core";
import { ContactsContainerComponent } from "./contacts-container.component";

export const ContactsRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/contacts",
        component: ContactsContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/contact/edit/:contactId",
        component: ContactsContainerComponent,
        authorizationRequired: true
    }
];