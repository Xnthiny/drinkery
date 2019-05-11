import React, { Children } from 'react';
import bg from '../../images/bg.png';
import { isAbsolute } from "path";
import './Background.css';

let styles = {
  Background: {
    position: isAbsolute,
    width: "100%",
    height: "100vh",
    zIndex:2,
    background: `url(${bg})`
  }
}

export default function Bakground(props) {
  return (
    <div id='background-container' className='background-container' style={styles.Background}>
      <div className={Children} />
    </div>
  )
}
