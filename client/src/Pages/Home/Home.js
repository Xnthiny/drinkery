import React, { Component } from 'react'
import SearchForm from '../../components/Forms/SearchForm/SearchForm'
import Navbar from '../../components/Navbar/Navbar';
import MapContainer from '../../components/Map/GoogleMapsContainer';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import HamburgerToggle from '../../components/SideDrawer/HamburgerToggle';
import './Home.css';
import Background from '../../components/Background/Background';

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

class Home extends Component {
    state = {
        location: "",
        numPeople: "",
        results: "",
    };

    updateLocation = (event) => {
        let myLocation = event.target.value
        this.setState({
            location: myLocation
        })
    }

    updateResults = (results) => {
        this.setState({
            results: results
        })
    }

    updatePeople = (event) => {
        let personCount = event.target.value
        this.setState({
            numPeople: personCount
        })
    }

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
                    <SearchForm
                    location={this.state.location}
                    changeLocation={this.updateLocation}
                    numPeople={this.state.numPeople}
                    updatePeople={this.updatePeople}
                    results={this.state.results}
                    updateResults={this.updateResults}
                    />
                </div>
                <div className="row">
                    <MapContainer />

                </div>
            </div >
        )
    }
}


export default Home;
