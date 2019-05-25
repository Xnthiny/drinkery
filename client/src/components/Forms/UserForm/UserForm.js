import React, { Component } from 'react'
import './UserForm.css'

export default class SearchForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        location: ''
    }

    handleUserName = (event) => {
        let newName = event.target.value
        this.setState({
            name: newName
        })
    }

    handleUserEmail = (event) => {
        let newEmail = event.target.value
        this.setState({
            email: newEmail
        })
    }
    handleUserPassword = (event) => {
        let newPassword = event.target.value
        this.setState({
            password: newPassword
        })
    }

    // handleProfileChange = () => {
    //     console.log("works");
    // }

    render(props) {
        console.log("Location: " + JSON.stringify(this.props.location))

        return (
            <div className="user-form-div">
                <div className="user-form-title">
                    <h3 id="title">User Profile</h3>
                </div>
                <form className='user-form'>
                    <div className="user-form-input-div">
                        <label id="name-label" className='user-form-label' htmlFor="Name">NAME</label>
                        <br />
                        <input id="name-input" name="name" className='user-form-input' onChange={this.handleUserName} placeholder="John Appleseed"></input>
                    </div>
                    <div className="user-form-input-div">
                        <label id="location-label" className='user-form-label' htmlFor="Location">LOCATION</label>
                        <br />
                        <input id="location-input" className='user-form-input' name="location" onChange={this.handleUserName} placeholder="Anywhere"></input>
                    </div>
                    <div className="user-form-input-div">
                        <label id="email-label" className='user-form-label' htmlFor="Email">EM@IL</label>
                        <br />
                        <input id="email-input" className='user-form-input' name="email" onChange={this.handleUserPassword} placeholder="johnny@apple.com"></input>
                    </div>
                    <div className="user-form-input-div">
                        <label id="password-label" className='user-form-label' htmlFor="Email">PASSWORD</label>
                        <br />
                        <input id="emapasswordil-input" className='user-form-input' name="password" onChange={this.handleUserPassword} placeholder="**********"></input>
                    </div>
                    <div className="button-div">
                        <button id="search-button" type="submit" onClick={console.log("hello")}>SAVE CHANGES</button>
                    </div>
                </form>
            </div>
        )
    }
}