import { Action } from "@ngrx/store";
import { LOAD_VIEW_MODEL_SUCCESS } from "../actions";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { addOrUpdate } from "../utilities";

export const viewModelsReducer = (state:AppState = initialState, action: Action) => {
    switch (action.type) {
        case LOAD_VIEW_MODEL_SUCCESS:
            let viewModels = state.viewModels;
            let existingOrNewViewModel = action.payload;
            addOrUpdate({ items: viewModels, item: existingOrNewViewModel });
            return Object.assign({}, state, { viewModels: viewModels });

        default:
            return state;
    }
}
