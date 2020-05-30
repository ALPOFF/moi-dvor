import {combineReducers, createStore} from "redux";
import appReducer from "./state/app-reducer";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    appReducer: appReducer,
    form: formReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
