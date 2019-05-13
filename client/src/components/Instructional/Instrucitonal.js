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
                <div className="col">
                    <h2>PICK YOUR LOCATION</h2>
                    <img src={imageOne} alt="how" className='how' />
                    <div className="text-body">
                        <p>
                        We have partners all over the world! <br />Just search and let our tech do the rest! <br />We will find you the best Locations at
                    </p>
                    </div>
                </div>
                <div className="col">
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
                <div className="col">
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


// <div class="row">
//     <div class="col-5" style="background:transparent">
//         <br />
//         <div class="how-to-crawl" class="parallax-container ">
//             <strong>
//                 <h3 style="color:rgb(255, 0, 89);">How To Crawl</h3>
//             </strong>
//             <br />
//             <div id="location">
//                 <img class="parallax-container" id="location-icon" src="https://static.thenounproject.com/png/14236-200.png">
//                     <h5>
//                         <strong> Pick Your Starting Point</strong>
//                     </h5>
//                     <p>
//                         Check-in with our event staff at the registration <br /> venue where you chose to begin the
//                         event.
//                     </p>
//                 </div>
//                 <div id="crawlers">
//                     <img class="parallax-container" id="crawlers-icon" src="https://static.thenounproject.com/png/655186-200.png" />
//                     <h5>
//                         <strong>Pick Your Crawlers</strong>
//                     </h5>
//                     <p>
//                         Grab a group of friends to <br /> have an adventure with!
//                     </p>
//                 </div>
//                 <div id="pubs">
//                     <img class="parallax-container" id="pubs-icon" src="https://cacouledesource.ch/wp-content/uploads/2016/12/drink-beer-jar.png">
//                         <h5>
//                             <strong>Pick Your Pubs</strong>
//                         </h5>
//                         <p>
//                             Scour the city’s top-rated venues <br /> and partake in awesome drink specials!
//                     </p>
//                 </div>
//                 </div>
//             </div>