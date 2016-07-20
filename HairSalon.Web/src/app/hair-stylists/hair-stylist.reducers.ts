import * as actions from "./hair-stylist.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeHairStylistReducer = (state, action) => {
    if (action instanceof actions.RemoveHairStylistAction)
        pluckOut({ items: state.hairStylists, value: action.entity.id });
    return state;
}

export const addHairStylistReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateHairStylistAction) {
        addOrUpdate({ items: state.hairStylists, item: action.entity });
    }
    return state;
}

export const allHairStylistsReducer = (state, action) => {
    if (action instanceof actions.AllHairStylistsAction) {
        state.hairStylists = action.entities;
    }
    return state;
}

export const setCurrentHairStylistReducer = (state, action) => {
    if (action instanceof actions.SetCurrentHairStylistAction) {
        state.currentHairStylistId = action.id;
    }
    return state;
}
