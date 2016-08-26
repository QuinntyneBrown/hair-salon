import { Action } from "@ngrx/store";
import { USER_LOGGED_OUT } from "../actions";
import { initialState } from "./initial-state";

export const userLoggedOut = (state = initialState, action: Action) => {
    switch (action.type) {

        case USER_LOGGED_OUT:
            return Object.assign({}, state, { currentUser: null });

        default:
            return state;
    }
}
