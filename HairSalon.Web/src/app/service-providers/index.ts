import { provide, provideAction,bootstrap } from "angular-rx-ui/src/components/core";
import { ServiceProviderEditorComponent } from "./service-provider-editor.component";
import { ServiceProviderListComponent } from "./service-provider-list.component";
import { ServiceProviderComponent } from "./service-provider.component";
import { ServiceProvidersContainerComponent } from "./service-providers-container.component";
import { ServiceProviderActionCreator } from "./service-provider.action-creator";
import { ServiceProviderService } from "./service-provider.service";
import *  as reducers from "./service-provider.reducers";
import *  as actions from "./service-provider.actions";

const appServiceProvidersModule = angular.module("app.serviceProviders", []);

bootstrap(appServiceProvidersModule, {
    components: [ServiceProviderComponent, ServiceProviderEditorComponent, ServiceProvidersContainerComponent, ServiceProviderListComponent],
    providers: [ServiceProviderActionCreator, ServiceProviderService],
    reducers: reducers,
    actions: actions
});

export * from "./service-providers.routes";
