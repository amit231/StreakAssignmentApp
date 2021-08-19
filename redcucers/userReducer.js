import { ADD_USER_DATA, REMOVE_USER_DATA } from "../actions/types";

const INITIAL_STATE = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_USER_DATA:
            console.log('dispatched')
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_USER_DATA:
            console.log('dispatched')
            return {
                ...state,
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}
