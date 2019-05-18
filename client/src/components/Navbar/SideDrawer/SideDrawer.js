import React from 'react';
// import HamburgerToggle from './HamburgerToggle';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses = 'side-drawer open'
    }

    return (
        <nav className={drawerClasses} >
            <ul className="side-drawer-list">
                <li><a href="/">HOME</a></li>
                <li><a href="/drink">DRINK</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default SideDrawer;