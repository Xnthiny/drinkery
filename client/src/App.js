import React from "react";
import Search from "./components/Search";
import Navbar from './components/Navbar/Navbar';
import bg from './images/bg2.jpg';
import { isAbsolute } from "path";
import MapContainer from './components/Map/GoogleMapsContainer';


let styles = {
  introImgDiv: {
    position: isAbsolute,
    backgroundImage: `url(${bg})`,
    height: "100%",
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
      <div className="row">
        <div className="col 12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        {SearchExpDiv()}
      </div>
      <div className="row">
        <MapContainer />
      </div>

    </div>
  );
}

export default App;
