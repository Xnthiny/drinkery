import React, { Component } from 'react';
import Login from '../../components/Forms/Login/Login'
// import bgLogin from '../../images/bg5.png'
// import bgRegister from '../../images/b5.png'
import LoginBG from '../../images/bg1.png'
import Navbar from "../../components/Navbar/Navbar"
import "./LoginPage.css";
import { isAbsolute } from "path";
import Section from '../../components/Background/Background'


let styles = {
    background: {
        backgroundImage: LoginBG,
        position: isAbsolute
    },
    Nav: {
        backgroundColor: 'transparent',
    }
}


export default class LoginPage extends Component {


    render() {
        return (
            <div className='background' >
                <div>
                    <Navbar style={styles.Nav} />
                    <Section ></Section>
                    <div className='login-div' >
                        <Login />
                    </div>

                </div>
            </div>
        )
    }

}