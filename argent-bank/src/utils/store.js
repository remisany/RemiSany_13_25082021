//React
import { combineReducers, createStore } from "redux"

//Reducers
import signInReducer from "../features/SignIn"

const reducer = combineReducers({
    signIn: signInReducer
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevtools)

export default store