import { CustomerReducer } from "./Customer_Reducer/CustomereReducer";
import { LaptopReducer } from "./Laptop_reducer/reducer";
import {CartReducer} from "./Cart_Reducer/CartReducer"
import { reducer as productReducer } from "./Product_Reducer/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  CustomerReducer,
  LaptopReducer,
  productReducer,
  CartReducer
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
