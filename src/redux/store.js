import {legacy_createStore as createStore} from "redux";
import { applyMiddleware } from "redux";
import { inventoryReducer } from "../reduers/InventoryReducer";
import thunk from "redux-thunk";


const store = createStore(inventoryReducer,applyMiddleware(thunk));

export default store;