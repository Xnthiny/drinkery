import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import MapContainer from '../../components/Map/GoogleMapsContainer';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import HamburgerToggle from '../../components/SideDrawer/HamburgerToggle';
import './Home.css';
import SearchForm from '../../components/Forms/SearchForm/SearchForm';
import Background from '../../components/Background/Background';


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
                        <Background> </Background>  <SearchForm style={{ position: "relative", zIndex: "99" }} />
                    </div>
                </div>
                <div stlye={{ marginTop: "65px" }} className="row">


                </div>
                <div className="row">
                    <MapContainer />
                </div>
            </div >
        )
    }
}


export default Home;
