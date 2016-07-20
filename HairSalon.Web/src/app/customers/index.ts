import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { CustomerEditorComponent } from "./customer-editor.component";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerComponent } from "./customer.component";
import { CustomersContainerComponent } from "./customers-container.component";
import { CustomerActionCreator } from "./customer.action-creator";
import { CustomerService } from "./customer.service";
import *  as reducers from "./customer.reducers";
import *  as actions from "./customer.actions";

const appCustomersModule = angular.module("app.customers", []);

bootstrap(appCustomersModule, {
    components: [CustomerComponent, CustomerEditorComponent, CustomersContainerComponent, CustomerListComponent],
    providers: [CustomerActionCreator, CustomerService],
    reducers: reducers,
    actions: actions
});

export * from "./customers.routes";
