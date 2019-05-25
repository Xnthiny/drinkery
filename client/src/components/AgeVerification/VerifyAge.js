import React from 'react'
import introImg from '../../images/verift.png'
import "./VerifyAge.css"
import logo from '../../images/drinkery-logo.png'
// import { index } from '../../Pages/Home/Home'

let styles = {
    container: {
        color: "white"
    }
}



export default function VerifyAge(props) {
    const setAge = (event) => {
        localStorage.setItem("ofAge", true)
    }

    return (
        <div className='verify-background-container' style={styles.container}>
            <div className='verify-age-div'>
                <form className='verify-age-form'>
                    <div className='age-form-title-div' >
                        <h1 className='age-form-title' >
                            <img src={logo} alt='logo' className='verify-logo' />
                    </h1>   
                    </div>
                    <h3 className='drinking-age-label'> <label />Are you of Drinking Age?</h3>
                    <div className='verify-buttons'>
                        <div className='verify-age-button-div'>
                            <button onClick={setAge} href='/index' alt='verify-age-button' className='verify-age-button' type='submit' alt='verify-age'> <a href='/index' alt='verify-age' style={{ style: 202, color: "inherit", textDecoration: 'none' }}>Yes</a></button>
                        </div>
                        <div className='decline-age-button-div' >
                            <button className='decline-age-button' >No</button>
                        </div>
                    </div>
                    <h5 className='age-form-sub-title' >
                        Enter this site only if you are of legal drinking age.
                            <br />By entering the site, you accept the terms and conditions of this site.
                    </h5>
                </form>
            </div>
        </div>
    )
}
