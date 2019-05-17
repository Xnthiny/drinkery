import React, { Component } from 'react';
import Register from '../../components/Forms/Login/Register'
// import bgLogin from '../../images/bg5.png'
// import bgRegister from '../../images/b5.png'
import Background from '../../components/Background/Background'
import bg from '../../images/bg.jpg'
import Navbar from "../../components/Navbar/Navbar"



export default class RegisterPage extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Register />
            </div>
        )
    }

}