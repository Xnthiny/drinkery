import React, { Component } from 'react'
// import Login from "./Login"
import "./Register.css"
// import API from '../../../utils/API';


export default class Register extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleRegister = (event) => {
        event.preventDefault();
        const info = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        API.register(info).then(data => {
            console.log(data)
            console.log(info)
        })
    }

    render() {
        return (
            <div id='register-container'>
                <div className="search-form" >
                    <div className="search-title">
                        <h3 id="title">Register to DRINKERY!</h3>
                        <h5 id="subtitle">Welcome to our community of party enthuiest. <br />
                            Ready to Join? Sign Up for Drinkery Today! <br />see how Drinkery gets the party going!
                    </h5>
                    </div>
                    <form id='register-search-form' >
                        <div className="input-div">
                            <label id="label" htmlFor="name">NAME</label>
                            <br />
                            <input id="name-input" name="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="email">EM@IL</label>
                            <br />
                            <input id="email-input" name="user_email" value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="password">PASSWORD</label>
                            <br />
                            <input id="password-input" name="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password"></input>
                        </div>


                    </form>
                    <div className="button-div">
                        <button id="register-button" type="submit" onClick={this.handleRegister}>REGISTER</button>
                    </div>                    <div className="Links">
                        <span>
                            <a href="/login">Already a user?</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}