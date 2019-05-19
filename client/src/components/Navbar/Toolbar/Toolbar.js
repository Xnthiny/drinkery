import React, { Component } from 'react';
import './Toolbar.css';
import HamburgerToggle from '../SideDrawer/HamburgerToggle';
import logo from '../../../images/drinkery-logo.png';
import { execFile } from 'child_process';
import LoginPage from "../../../Pages/LoginPage/LoginPage"


    
const Toolbar = props => {
    let toolbarClasses = 'toolbar';
    if (props.onScroll) {
        toolbarClasses = 'toolbar solid'
    }

    return (
        <header className={toolbarClasses}>
            <nav className="toolbar-nav" onScroll={props.click}>
                <div className="hamburger">
                    <HamburgerToggle click={props.drawerClickHandler} />
                </div>
                <div className="toolbar-logo"><a href='/'><img className="logo" src={logo} /></a></div>
                <div className="spacer"> </div>
                <div>
                    <ul className="toolbar-links-list">
                        <li className="HOME"><a href="/"> HOME</a> </li>
                        <li className="DRINK"><a href="/drink"> DRINK</a> </li>
                        <li className="LOGIN"><a href="/login"> LOGIN</a> </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
    
}

export default Toolbar;