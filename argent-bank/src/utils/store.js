//React
import { combineReducers, createStore } from "redux"

//Reducers
import signInReducer from "../features/SignIn"
import logInReducer from "../features/LogIn"
import profileReducer from "../features/Profile"

const reducer = combineReducers({
    signIn: signInReducer,
    logIn: logInReducer,
    profile: profileReducer,
})

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevtools)

export default store