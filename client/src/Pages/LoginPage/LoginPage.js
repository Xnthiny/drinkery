import React, { Component } from 'react';
import Login from '../../components/Forms/Login/Login'
import Register from '../../components/Forms/Login/Register'
// import bgLogin from '../../images/bg5.png'
// import bgRegister from '../../images/b5.png'
import Background from '../../components/Background/Background'
import bg from '../../images/bg.jpg'



export default class LoginPage extends Component {

    // handleLogin = () => {
    //     console.log( " // works /")
    // }

    render() {
        return (
            <div>
                <Background />
                {/* {handleLogin} */}
                <Login />
                <Register />

            </div>
        )
    }

}