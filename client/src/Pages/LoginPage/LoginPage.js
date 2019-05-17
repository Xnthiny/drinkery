import React, { Component } from 'react';
import Login from '../../components/Forms/Login/Login'
import Register from '../../components/Forms/Login/Register'
// import bgLogin from '../../images/bg5.png'
// import bgRegister from '../../images/b5.png'
import bg from '../../images/bg.jpg'
import Navbar from "../../components/Navbar/Navbar"



export default class LoginPage extends Component {


    render() {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        )
    }

}