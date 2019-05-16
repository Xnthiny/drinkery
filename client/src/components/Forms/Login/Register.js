import React, { Component } from 'react'
import Login from "./Login"
import "./Register.css"
import API from '../../../utils/API';

export default class Register extends Component {


    render(props) {
        console.log("Register Page: ")

        // state = {
        //     name: "Charles",
        //     email: "",
        //     password: ""
        // }
        // console.log(this.state.name);
        // // let handleRegister = (event, name, email, password) => {
        // //     event.preventDefault();
        // //     const user = {
        // //         name: name,
        // //         email: email,
        // //         password: password
        // //     }

        // //     API.login()
        // // }

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
                            <label id="label" htmlFor="name">NAME</label>
                            <br />
                            {/* <input id="name-input" name="name" value={this.props.name} onChange={this.props.name} placeholder="Name"></input> */}
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="email">WH@TS YOUR EMAIL</label>
                            <br />
                            {/* <input id="email-input" name="user_email" value={this.props.email} onChange={this.props.email} placeholder="Email"></input> */}
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="password">PASSWORD</label>
                            <br />
                            {/* <input id="password-input" name="password" value={this.props.password} onChange={this.props.email} placeholder="Password"></input> */}
                        </div>
                        <div className="button-div">
                            {/* <button id="register-button" type="submit" onClick={handleRegister()}>REGISTER</button> */}
                        </div>


                    </form>
                    <div className="Links">
                        <span>
                            |  <a href={`/${Login}`}>Login</a>  |
                            </span>
                        <span>
                            |  <a href="/">Forgot Password</a>  |
                            </span>
                        <span>
                            |  <a href="/">Forgot UserName</a>  |
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}