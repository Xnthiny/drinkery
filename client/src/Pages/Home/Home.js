import React, { Component } from 'react'
import Search from "../../components/Search";
import Navbar from '../../components/Navbar/Navbar';
import bg from '../../images/bg4.png';
import { isAbsolute } from "path";
import MapContainer from '../../components/Map/GoogleMapsContainer';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import HamburgerToggle from '../../components/SideDrawer/HamburgerToggle';
import './Home.css';

let styles = {
    introImgDiv: {
        position: isAbsolute,
        backgroundImage: `url(${bg})`,
        height: "100%",
        width: "100%",
        zIndex: 2,
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


class Home extends Component {
    state = {
        this: "Text",
        NavStyle: "",
        HamburgerToggle: false
    };

    render() {
        return (
            <div>
                <div className="row" id="home">
                    <div className="col 12">
                        {/* <SideDrawer /> */}
                        {console.log(this.state.this)}
                        <Toolbar />
                    </div>
                </div>
                <div stlye={{ marginTop: "65px" }} className="row">
                    {SearchExpDiv()}
                </div>
                <div className="row">
                    <MapContainer />
                </div>
            </div >
        )
    }
}


export default Home;
