import React from 'react'
import backdrop from '../Navbar/Backdrop/Backdrop';
import bg from '../../images/bg.png'

let styles = {
    container: {
        color: "white"
    }
}

export default function VerifyAge(props) {
    return (
        <div className='verify-background-container' style={styles.container}>
            <img id='verify-background-image' src={bg} />
            {backdrop}
        </div>
    )
}
