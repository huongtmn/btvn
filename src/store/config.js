import { combineReducers, createStore } from "redux";

import { ticketReducer } from "../components/reducers/ticketReducer";

const rootReducer = combineReducers({
    ticketReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
