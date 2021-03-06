import React, { Component } from 'react'
import Register from "./Register"
import API from "../../../utils/API";
import { Redirect } from 'react-router-dom'
import "./Login.css"

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        redirect: false
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log("login button listening")
        const info = {
            "email": this.state.email,
            "password": this.state.password
        }

        API.login(info).then((data, err) => {
            const id = data.data._id
            localStorage.setItem("loggedInUser", id);
            this.setState({redirect: true})
        })
    }

    renderRedirect() {
        if(this.state.redirect) {   
            return <Redirect to="/index" />
        }
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div id='login-container'>
            {this.renderRedirect()}
                <div className="login-form">
                    <div className="search-title">
                        <h3 id="title">Login to DRINKERY!</h3>
                        <h5 id="subtitle">Welcome Back to our community of party enthuiest. <br />
                            Ready to DRINK? Login to Drinkery! <br /> You'll probably find your new favorite bar!
                    </h5>
                    </div>
                    <form id='login-search-form'>
                        <div className="input-div" >
                            <label id="label" htmlFor="email">EMAIL</label>
                            <br />
                            <input id="email-input" name="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="password">PASSWORD</label>
                            <br />
                            <input id="password-input" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"></input>
                        </div>
                        <div className="button-div">
                            <button id="login-button" type="submit" onClick={this.handleLogin}><a href="/index">LOGIN</a></button>
                        </div>


                    </form>
                    <div className="Links">
                        <span>
                         <a href="/register">Not a user?</a>
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}