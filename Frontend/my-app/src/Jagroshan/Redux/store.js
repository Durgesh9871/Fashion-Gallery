import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./reducer";


export const store=legacy_createStore(productReducer,applyMiddleware(thunk))