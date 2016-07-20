import { CustomersContainerComponent  } from "./customers-container.component";
import { IRouteConfig } from "angular-rx-ui/src/components/core";

export const CustomersRoutes: Array<IRouteConfig> = [
    {
        path: "/admin/customers",
        component: CustomersContainerComponent,
        authorizationRequired: true
    },
    {
        path: "/admin/customer/:customerId",
        component: CustomersContainerComponent,
        authorizationRequired: true
    }
];