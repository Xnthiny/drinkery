import React from 'react';
import bg from '../../images/bg2.jpg'
import { isAbsolute } from "path";
import './Background.css';

let styles = {
  Background: {
    position: isAbsolute,
  }
}

export default function Background(props) {
  return (
    <div className='background-container' style={styles.Background}>
      <img id='background-image' src={bg} />
    </div>
  )
}




