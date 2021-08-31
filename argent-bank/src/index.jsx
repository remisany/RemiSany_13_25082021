//React
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Provider } from "react-redux"

//Store
import store from "./utils/store"

//Pages
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import UserPage from "./pages/UserPage"

//Components
import Header from "./components/Header"
import Footer from "./components/Footer"

//CSS
import "./index.css"

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/">
            <HomePage />
          </Route>
          <Route
            path = "/sign-in">
            <SignInPage />
          </Route>
          <Route
            path = "/user">
            <UserPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)