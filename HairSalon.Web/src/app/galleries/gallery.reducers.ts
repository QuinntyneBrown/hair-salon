import * as actions from "./gallery.actions";
import { addOrUpdate, pluckOut } from "angular-rx-ui/src/components/core";

export const removeGalleryReducer = (state, action) => {
    if (action instanceof actions.RemoveGalleryAction)
        pluckOut({ items: state.gallerys, value: action.entity.id });
    return state;
}

export const addGalleryReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateGalleryAction) {
        addOrUpdate({ items: state.gallerys, item: action.entity });
    }
    return state;
}

export const allGallerysReducer = (state, action) => {
    if (action instanceof actions.AllGallerysAction) {
        state.gallerys = action.entities;
    }
    return state;
}

export const setCurrentGalleryReducer = (state, action) => {
    if (action instanceof actions.SetCurrentGalleryAction) {
        state.currentGalleryId = action.id;
    }
    return state;
}
