import React, { Component } from 'react';
import './Toolbar.css';
import HamburgerToggle from '../SideDrawer/HamburgerToggle';
import logo from '../../../images/drinkery-logo-black.png';
import { execFile } from 'child_process';
import LoginPage from "../../../Pages/LoginPage/LoginPage"
import API from '../../../utils/API';

export default class Toolbar extends Component {
    state = {
        loggedIn: false,
        name: ""
    }

    componentWillMount() {
        const user = localStorage.getItem("loggedInUser")

        API.getUser(user).then((data) => {
            this.setState({ name: data.data[0].name, loggedIn: true })
            console.log(this.state)
        })
    }

    logOut = () => {
        localStorage.removeItem("loggedInUser")
    }

    renderBasedOffLogin = () => {
        if (this.state.loggedIn) {
            return (
                <ul className="toolbar-links-list">
                    <li className="login-btn"><a href="/profile">{this.state.name}</a></li>
                    <li className="signup-btn"><a onClick={this.logOut} href="/index"> LOG OUT</a> </li>
                </ul>
            )
        } else {
            return (
                <ul className="toolbar-links-list">
                    <li className="login-btn"><a href="/login"> LOG IN</a> </li>
                    <li className="signup-btn"><a href="/register"> SIGN UP</a> </li>
                </ul>
            )
        }
    }

    componentDidMount() {
        console.log(this.renderBasedOffLogin)
    }

    render(props) {

        let toolbarClasses = 'toolbar';
        if (this.props.onScroll) {
            toolbarClasses = 'toolbar solid'
        }

        return (
            <header className={toolbarClasses}>
                <nav className="toolbar-nav" onScroll={this.props.click}>
                    <div className="hamburger">
                        <HamburgerToggle click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar-logo"><a href='/index'><img className="logo" src={logo} /></a></div>
                    <div className="spacer"> </div>
                    <div>
                        {this.renderBasedOffLogin()}
                    </div>
                </nav>
            </header>
        );
    }

}