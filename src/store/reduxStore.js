import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {chebureksReducer} from "./chebureksReducer"

let reducers = combineReducers({
    chebureksState: chebureksReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store;