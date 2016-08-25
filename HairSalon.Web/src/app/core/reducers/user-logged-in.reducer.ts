import { Action } from "@ngrx/store";
import { USER_LOGGED_IN } from "../actions";
import { initialState } from "../initial-state";

export const userLoggedIn = (state = initialState, action: Action) => {
    switch (action.type) {

        case USER_LOGGED_IN:            
            return Object.assign({}, state, { currentUser: action.payload }); 

        default:
            return state;
    }
}
