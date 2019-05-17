import React, { Component } from 'react'
import Login from "./Login"
import "./Register.css"
import API from '../../../utils/API';

export default class Register extends Component {


    render(props) {
        return (
            <div id='register-container' style={{ top: "-39em" }}>
                <div className="search-form">
                    <div className="search-title">
                        <h3 id="title">Register to DRINKERY!</h3>
                        <h5 id="subtitle">Welcome to our community of party enthuiest. <br />
                            Ready to Join? Sign Up for Drinkery Today! <br />see how Drinkery gets the party going!
                    </h5>
                    </div>
                    <form id='register-search-form'>
                        <div className="input-div">
                            <label id="label" htmlFor="name">name</label>
                            <br />
                            <input id="name-input" name="name" value={this.props.name} onChange={this.props.name} placeholder="Name"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="email">email</label>
                            <br />
                            <input id="email-input" name="user_email" value={this.props.email} onChange={this.props.email} placeholder="Email"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="password">password</label>
                            <br />
                            <input id="password-input" name="password" value={this.props.password} onChange={this.props.email} placeholder="Password"></input>
                        </div>
                        <div className="button-div">
                            <button id="register-button" type="submit">REGISTER</button>
                        </div>


                    </form>
                    <div className="Links">
                        <span>
                            <a href="/login">Already a user?</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}