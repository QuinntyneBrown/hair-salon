import * as actions from "./service-provider.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeServiceProviderReducer = (state, action) => {
    if (action instanceof actions.RemoveServiceProviderAction)
        pluckOut({ items: state.serviceProviders, value: action.entity.id });
    return state;
}

export const addServiceProviderReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateServiceProviderAction) {
        addOrUpdate({ items: state.serviceProviders, item: action.entity });
    }
    return state;
}

export const allServiceProvidersReducer = (state, action) => {
    if (action instanceof actions.AllServiceProvidersAction) {
        state.serviceProviders = action.entities;
    }
    return state;
}

export const setCurrentServiceProviderReducer = (state, action) => {
    if (action instanceof actions.SetCurrentServiceProviderAction) {
        state.currentServiceProviderId = action.id;
    }
    return state;
}
