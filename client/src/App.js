import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Toolbar from './components/Navbar/Toolbar/Toolbar'
import SideDrawer from './components/Navbar/SideDrawer/SideDrawer'
import Backdrop from './components/Navbar/Backdrop/Backdrop'
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginPage/LoginPage"
import RegisterPage from "./Pages/Register/RegisterPage";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </div>
      </Router>
    )
  }
}


export default App;
