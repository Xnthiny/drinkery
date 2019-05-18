import React, { Component } from 'react';
import bg from '../../images/bg2.jpg'
// import { isAbsolute } from "path";
import './Background.css';
import { relative } from 'path';

// let styles = {
//   Background: {
//     position: isAbsolute,
//   }
// }

// export default function Background (props) {
//   return (
//     <div className='background-container' style={styles.Background}>
//       <img id='background-image' src={bg}/>
//     </div>
//   )
// }
var sectionStyle = {
  width: "100%",
  height: "100vh",
  margin: '0 auto',
  zIndex: 0,
  position:"absolute",
  overflow: "auto",
  backgroundImage: `url('${bg}')`,
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



