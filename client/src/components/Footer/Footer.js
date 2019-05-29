import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.svg'
import vimeo from '../../images/vimeo.png'
import youtube from '../../images/youtube.png'
import linkedin from '../../images/linkedin.png'


const Footer = () => {
    return (
        <MDBFooter id="Footer" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left" >
                <MDBRow id='footer-container'>
                    <MDBCol md="6" className='Xtras-Col'>
                        <h5 className="title">Footer Content</h5>
                        <div className='social-icons' >
                            <div className='instagram-div' >
                                <a className='instagram-link' >
                                    <img className='instagram' alt='instagram' src={instagram} />
                                </a>
                            </div>
                            <div className='twitter-div' >
                                <a className='twitter-link' >
                                    <img className='twitter' alt='twitter' src={twitter} />
                                </a>
                            </div>
                            <div className='facebook-div' >
                                <a className='facebook-link' >
                                    <img className='facebook' alt='facebook' src={facebook} />
                                </a>
                            </div>
                            <div className='vimeo-div' >
                                <a className='vimeo-link' >
                                    <img className='vimeo' alt='vimeo' src={vimeo} />
                                </a>
                            </div>
                            <div className='youtube-div' >
                                <a className='youtube-link' >
                                    <img className='youtube' alt='youtube' src={youtube} />
                                </a>
                            </div>
                        </div>
                        <p style={{textAlign:"center"}}>
                            Reach out to us on social media and connect with DRINKERY Today!
                            </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="/drink">DRINK</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/login">LOGIN</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/register">REGISTER</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/">ABOUT US</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.drinkery.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
