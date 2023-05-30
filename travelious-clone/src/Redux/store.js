import { legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { productReducer,singleProductReducer } from "./reducer"


const combineReducer=combineReducers({
    productReducer,
    singleProductReducer,
})

export const store=createStore(combineReducer,applyMiddleware(thunk));