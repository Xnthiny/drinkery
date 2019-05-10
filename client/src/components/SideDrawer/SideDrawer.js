import React from 'react';
// import HamburgerToggle from './HamburgerToggle';
import './SideDrawer.css';

const SideDrawer = () => {
    return (
        <nav className="side-drawer-nav">
            <ul className="side-drawer-list">
                <li><a href="/">LOGIN</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">DRINK</a></li>
            </ul>
        </nav>
    );
}

export default SideDrawer;