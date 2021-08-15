import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../redcucers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

// persistConfig
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['usersReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState = {
    usersReducer: null
}

const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(
            reduxThunk,
            logger
        )
    ),
);
export default store
