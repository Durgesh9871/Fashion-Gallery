import { CustomerReducer } from "./Customer_Reducer/CustomereReducer";
import {LaptopReducer} from "./Laptop_reducer/reducer"
import {legacy_createStore , combineReducers , applyMiddleware} from "redux"
import thunk from "redux-thunk"


const rootReducer = combineReducers({CustomerReducer ,LaptopReducer})
const store = legacy_createStore(rootReducer , applyMiddleware(thunk))

export {store}