import React, { Component } from 'react';
import SectionBG from '../../../images/bg.png'
import './Section.css'

var sectionStyle = { 
    width: 'inherit',
    height: '100vh',
    zIndex: '10',
    position: "absolute",
    overflow: "auto",
    backgroundImage: `url('${SectionBG}')`,
    // position: isAbsolute,
};

class Section extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            </section>
        );
    }
}

export default Section;