import React from 'react'
import bg from "../../../images/bg5.png"
import Background from '../../Background/Background'
import Register from "./Register"
import "./Login.css"

export default class Login extends Component {

    render(props) {
        console.log("Register Page: " + JSON.stringify(this.props.location))

        let handleLogin = (event) => {
            event.preventDefault();
            console.log('works')
        }

        return (
            <div className="container">
                <Background />
                <div className="search-form">
                    <div className="search-title">
                        <h3 id="title">Login to DRINKERY!</h3>
                        <h5 id="subtitle">Welcome Back to our community of party enthuiest. <br />
                            Ready to DRINK? Login to Drinkery! <br /> You'll probably find your new favorite bar!
                    </h5>
                    </div>
                    <form>
                        <div className="input-div">
                            <label id="label" htmlFor="email">EM@IL</label>
                            <br />
                            <input id="email-input" name="email" value={this.props.email} onChange={this.props.email} placeholder="Email"></input>
                        </div>
                        <div className="input-div">
                            <label id="label" htmlFor="password">PASSWORD</label>
                            <br />
                            <input id="password-input" name="password" value={this.props.password} onChange={this.props.password} placeholder="Password"></input>
                        </div>
                        <div className="button-div">
                            <button id="register-button" type="submit" onClick={this.handleLogin()}>LOGIN</button>
                        </div>

                        <div className="Links">
                            <span>
                                <a href={`/${Register}`}> Register  || </a>
                            </span>
                            <span>
                                <a href="/"> Forgot Password  || </a>
                            </span>
                            <span>
                                <a href="/"> Forgot UserName  </a>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}