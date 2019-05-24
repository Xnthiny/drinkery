import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage/LoginPage"
import RegisterPage from "./Pages/Register/RegisterPage";
import DrinkPage from './Pages/DrinkPage/DrinkPage'
import VerifyAgePage from './Pages/VerifyAgePage/VerifyAgePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage'
import ResultsPage from './Pages/ResultsPage/ResultsPage'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={VerifyAgePage} />
          <Route path="/index" component={Home} />
          <Route path="/:location/feed" component={ResultsPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
        </div>
      </Router>
    )
  }
}


export default App;
