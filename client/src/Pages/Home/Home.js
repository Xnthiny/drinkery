import React, { Component } from 'react'
import SearchForm from '../../components/Forms/SearchForm/SearchForm'
import Navbar from '../../components/Navbar/Navbar';
import MapContainer from '../../components/Map/GoogleMapsContainer';
import Toolbar from '../../components/Toolbar/Toolbar';
import HamburgerToggle from '../../components/SideDrawer/HamburgerToggle';
import './Home.css';
import Background from '../../components/Background/Background';
import Results from '../../components/Results/Results';
import Confirm from '../../components/Modals/ConfirmModal/Confirm';
import Instrucitonal from '../../components/Instructional/Instrucitonal';

class Home extends Component {
    state = {
        location: "",
        numPeople: "",
        results: "",
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    }

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
                <div className="row" >
                    <div className="col-12" style={{ zIndex: 0 }}>
                        <Background />
                    </div>
                </div>
                <div className="row" className='search-col'>
                    <div className="col-12" >
                        <SearchForm
                            location={this.state.location}
                            changeLocation={this.updateLocation}
                            numPeople={this.state.numPeople}
                            updatePeople={this.updatePeople}
                            results={this.state.results}
                            updateResults={this.updateResults}
                        />
                    </div>
                </div>
                <div className="row" >
                    <div className='col-12 results-col'>
                        <Instrucitonal />
                    </div>

                    <div className="col">
                        <MapContainer />
                        <Confirm />
                    </div>
                    <div className="col">
                        <Results results={this.state.results} />
                    </div>
                </div>


            </div>
        )
    }
}


export default Home;
