import * as actions from "./customer.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeCustomerReducer = (state, action) => {
    if (action instanceof actions.RemoveCustomerAction)
        pluckOut({ items: state.customers, value: action.entity.id });
    return state;
}

export const addCustomerReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCustomerAction) {
        addOrUpdate({ items: state.customers, item: action.entity });
    }
    return state;
}

export const allCustomersReducer = (state, action) => {
    if (action instanceof actions.AllCustomersAction) {
        state.customers = action.entities;
    }
    return state;
}

export const setCurrentCustomerReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCustomerAction) {
        state.currentCustomerId = action.id;
    }
    return state;
}
