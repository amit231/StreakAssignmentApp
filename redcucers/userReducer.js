import { LOGOUT_USER, USER_LOGGEDIN, USER_LOGGEDIN_DEV, TEST } from "../actions/types";

const INITIAL_STATE = null;
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOGGEDIN:
            console.log('dispatched')
            return {
                ...state,
                ...action.payload,
                dev: false
            }
        case USER_LOGGEDIN_DEV:
            return {
                ...state,
                ...action.payload,
                dev: true
            }
        case 'LOGOUT':
            return null;
        case 'NOTIF_COUNT':
            // console.warn('in reduxer')
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}
