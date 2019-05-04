import React from "react";
import Search from "./components/Search";
import bg from './images/bg.jpg';
import { isAbsolute } from "path";

let styles = {
  introImgDiv: {
    position: isAbsolute,
    backgroundImage: `url(${bg})`,
    height: "1080px",
    width: "100%",
    zIndex: "2",
    paddingTop: "150px"
  }
}
const SearchExpDiv = () => {
  return (
    <div style={styles.introImgDiv} className="-intro-img-conatiner">
    <Search />
    </div>
  )
}


function App() {
  return (
    <div>
      <div className="row"> </div>
      <div className="row">
        {SearchExpDiv()} 
      </div>
      <div className="row">
       
      </div>
    </div>

  );
}

export default App;
