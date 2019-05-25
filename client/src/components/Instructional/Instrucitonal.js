
import React from 'react';
import './Instructional.css';
import imageOne from '../../images/location.png';
import imageTwo from '../../images/friends.png';
import imageThree from '../../images/drinks.png';
import logoInstructions from '../../images/drinkery-logo.png'

export default function Instrucitonal() {
    return (
        <div className="row" id='instructions'>
            <div className="intr">
                <div className="col-4">
                    <h2>PICK YOUR LOCATION</h2>
                    <img src={imageOne} alt="how" className='how' />
                    <div className="text-body">
                        <p>
                            We have partners all over the world! <br />Just search and let our tech do the rest! <br />We will find you the best Locations at
                    </p>
                    </div>
                </div>
                <div className="col-4">
                    <h2 >SELECT YOUR SQUAD</h2>
                    <img src={imageTwo} alt="who" className='who' />
                    <div className="text-body">
                        <p>
                            You have partners all over the world too! <br />Invite them on your exiting adventure! <br />Bring your friends and make the most out of
                    </p>
                        <br />
                        <br />
                        <img src={logoInstructions} alt="logo-instructions" className='logo-instructions' />
                    </div>
                </div>
                <div className="col-4">
                    <h2 >BOTTOMS UP</h2>
                    <img src={imageThree} alt="where" className='where' />
                    <div className="text-body">
                        <p>
                            Time to get choosin'! <br />Add the bars you want and get ready! <br />Your adventure is about to begin!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}