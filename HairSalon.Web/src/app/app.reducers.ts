import { AddOrUpdateAppAction } from "./content-aggregation/actions/app.actions";
import { appProperties } from "./app.constants";

export const allAppsReducer = (state, action) => {
    if (action instanceof AddOrUpdateAppAction) {
        state.app = state.app || { properties: [] };

        for (var i = 0; i < action.entity.properties.length; i++) {

        }
    }
    return state;
}