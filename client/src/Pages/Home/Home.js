import React, { Component } from 'react'
import SearchForm from '../../components/Forms/SearchForm/SearchForm'
import MapContainer from '../../components/Map/GoogleMapsContainer';
import './Home.css';
import Background from '../../components/Background/Background';
import Results from '../../components/Results/Results';
import Confirm from '../../components/Modals/ConfirmModal/Confirm';
import Instrucitonal from '../../components/Instructional/Instrucitonal';
import ControlledCarousel from '../../components/Carousel/Carousel'
import Navbar from "../../components/Navbar/Navbar";


class Home extends Component {
 
    render() {
        return (
            <div>
                <div className="Home">
                    <Navbar />
                    <ControlledCarousel />
                    {/* <div className="row" className='search-col'>
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
                </div> */}
                </div>
                <br />
                <div className='col-12 results-col'>
                    <Instrucitonal />
                    <MapContainer/>
                    
                </div>
            </div>

        )
    }
}


export default Home;
