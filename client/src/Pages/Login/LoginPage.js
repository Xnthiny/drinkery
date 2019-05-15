import React, { Component } from 'react';
import Login from '../../components/Forms/Login/Login'
import Register from '../../components/Forms/Login/Register'


export default class LoginPage extends Component {
    state = {
        showLogin: false,
        showRegister: true
    }

    handleLogin = props => {
        console.log(showLogin + " // works /")
    }

    render() {
        return (
            <div> 
                <Login />
                <Register />
            </div>
        )
    }

}