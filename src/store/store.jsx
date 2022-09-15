import { createStore } from "redux";
import {productReducer} from '../reducer/productReducer'
import { combineReducers } from "redux";

const reducers = combineReducers({
    products: productReducer
}) 

export const store = createStore(reducers);

