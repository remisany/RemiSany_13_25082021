//React
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Provider } from "react-redux"

//Store
import store from "./utils/store"

//Pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"

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
            path = "/login">
            <LoginPage />
          </Route>
          <Route
            path = "/profile">
            <ProfilePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)