import { ADD_USER_DATA, REMOVE_USER_DATA } from "./types";


export function addUserData(firstName, lastName, email, phone) {
    return {
        type: ADD_USER_DATA,
        payload: { firstName, lastName, email, phone }
    }
}

export function removeUserData() {
    return {
        type: REMOVE_USER_DATA,
        payload: {}
    }
}

