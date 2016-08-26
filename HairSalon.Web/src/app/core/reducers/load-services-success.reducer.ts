import { Action } from "@ngrx/store";
import { LOAD_SERVICES_SUCCESS } from "../actions";
import { initialState } from "./initial-state";

export const loadServicesSuccess = (state = initialState, action: Action) => {
    switch (action.type) {

        case LOAD_SERVICES_SUCCESS:
            return Object.assign({}, state, { services: action.payload });
            
        default:
            return state;
    }
}
