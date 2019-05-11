import React, { Component } from 'react'
import SearchForm from '../../components/Forms/SearchForm/SearchForm'
import Navbar from '../../components/Navbar/Navbar';
import MapContainer from '../../components/Map/GoogleMapsContainer';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import HamburgerToggle from '../../components/SideDrawer/HamburgerToggle';
import './Home.css';
import Background from '../../components/Background/Background';
import Results from '../../components/Results/Results';
import Confirm from '../../components/Modals/ConfirmModal/Confirm';

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
            <div className="Home">
                <div className="row">
                    <div className="col-12">
                        <Background ></Background>
                        <Toolbar />
                    </div>
                </div>

                <div className="row"  >
                    {/* <SideDrawer /> */}
                    <SearchForm style={{ top: "-12em" }}
                        location={this.state.location}
                        changeLocation={this.updateLocation}
                        numPeople={this.state.numPeople}
                        updatePeople={this.updatePeople}
                        results={this.state.results}
                        updateResults={this.updateResults}
                    />



                </div>
                <div className="row">
                    <div className="map-container">
                        <MapContainer />
                        <Confirm />
                    </div>
                    <Results results={this.state.results} />
                </div>
            </div>
        )
    }
}


export default Home;
