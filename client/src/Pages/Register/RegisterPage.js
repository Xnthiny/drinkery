import React, { Component } from 'react';
import Register from '../../components/Forms/Login/Register'
// import bgLogin from '../../images/bg5.png'
// import bgRegister from '../../images/b5.png'
import Background from '../../components/Background/Background'
import bg from '../../images/bg4.jpg'
import Navbar from "../../components/Navbar/Navbar"
import "./RegisterPage.css";
import { isAbsolute } from "path";
import Section from '../../components/Background/Background'


let styles = {
    background: {
        backgroundColor: 'transparent',
        backgroundImage: bg,
        position: isAbsolute
    },
    Nav: {
        backgroundColor: 'transparent',
    }
}

export default class RegisterPage extends Component {

    render() {
        return (
            <div className='background' > 
            <div>
                <Navbar style={styles.Nav}/>
                <Section />
                <div className='register-div' >
                    <Register />
                </div>
                </div>
            </div>
        )
    }

}