import React from 'react';
import './HamburgerToggle.css';


const HamburgerToggle = () => {
    return (
        <div className="toggle-button-div">
            <button className="toggle-button">
                <div className="toggle-button__line" />
                <div className="toggle-button__line" />
                <div className="toggle-button__line" />
            </button>
        </div>
    );
}

export default HamburgerToggle;