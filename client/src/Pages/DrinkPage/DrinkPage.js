import React, { Component } from 'react'
import SearchForm from '../../components/Forms/SearchForm/SearchForm'
import GoogleMaps from '../../components/SimpleMaps';
import Background from '../../components/Background/Background';
import Results from '../../components/Results/Results';
import Navbar from "../../components/Navbar/Navbar";
import Section from '../../components/Background/Section/Section'
import ResultsIntro from '../../components/Instructional/Results/ResultsIntro/ResultsIntro'
import './DrinkPage.css'


class DrinkPage extends Component {
    state = {
        location: "",
        numPeople: "",
        results: "",
        selected: false,
        lat: [],
        lng: []
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

    getLat = () => {
        const latitudes = this.state.results.map(cords => {
            return cords.props.lat
        })

        this.setState({lat: latitudes})
    }

    render() {
        return (
            <div className="Home">
                <div className='row' id='search-row'>
                    <Navbar />
                    <div className='results-container'>
                        <div className="col-12" >
                            <Section />
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
                </div>
                <ResultsIntro />
                <br />
                <div className='row' id='results-row' >
                    <div className='col'>
                        {/* <GoogleMaps lat={this.state.lat} lng={this.state.lng}/> */}
                    </div>
                    <div className='col'>
                        <Results results={this.state.results} onclick="myFunction(event)" />
                    </div>
                </div>
            </div>
        )
    }
}


export default DrinkPage;
