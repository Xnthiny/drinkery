import React from 'react';
import './Toolbar.css';
import HamburgerToggle from '../SideDrawer/HamburgerToggle';
import logo from '../../images/drinkery-logo.png';


const Toolbar = () => {

    return (
        <header className="toolbar">
            <nav className="toolbar-nav">
                <div className="hamburger">
                    <HamburgerToggle />
                </div>
                <div className="toolbar-logo"><a href='/'><img className="logo" src={logo} /></a></div>
                <div className="spacer"> </div>
                <div>
                    <ul className="toolbar-links-list">
                        <li className="LOGIN"><a href="./"> LOGIN</a> </li>
                        <li className="HOME"><a href="#"> HOME</a> </li>
                        <li className="DRINK"><a href="./"> DRINK</a> </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Toolbar;
