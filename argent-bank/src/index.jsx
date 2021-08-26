//React
import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Pages
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"

//Components
import Header from "./components/Header"
import Footer from "./components/Footer"

//CSS
import "./index.css"

ReactDOM.render(
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
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)