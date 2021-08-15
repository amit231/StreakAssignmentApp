import {
    USER_LOGGEDIN,
} from "./types";
import axios from 'axios'
import { instance as api } from '../config/axios'
export function login(userData) {
    const url = "user/login/otp/verify/?server=django";
    return (dispatch, getState, { api, setAuthorizationToken }) => {
        setAuthorizationToken(false);
        return api
            .post(url, userData)
            .then(response => {

                console.log('here is you resp.data.error', response.data.data)
                if (
                    response.status === 200 &&
                    response.data.data &&
                    response.data.data.user_id
                ) {

                    setAuthorizationToken(response.data.data);
                    dispatch({
                        type: USER_LOGGEDIN,
                        payload: response.data.data
                    });
                }
                return Promise.resolve(response.data);
            })
            .catch(error => {
                return Promise.reject(error);
            });
    };
}


export function secretLogin(token, uid) {
    // const obj = {
    //     session_token: token,
    //     user_id: uid
    // }
    // setAuthorizationToken(token);
    // dispatch({
    //     type: USER_LOGGEDIN,
    //     payload: obj
    // });
    // return new Promise.resolve(obj);
    const url = "https://api.cozmorealty.com/user/login/otp/verify/?server=django";
    return (dispatch, getState, { api, setAuthorizationToken }) => {
        setAuthorizationToken(false);

        return (function (token, uid) {
            const obj = {
                session_token: token,
                user_id: uid
            }
            setAuthorizationToken(token);
            dispatch({
                type: USER_LOGGEDIN,
                payload: obj
            });
            return new Promise.resolve(obj);
        })();
    };
}


