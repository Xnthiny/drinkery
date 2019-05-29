import React, { Component } from 'react'
// import SearchForm from '../../components/Forms/SearchForm/SearchForm'
// import MapContainer from '../../components/Map/GoogleMapsContainer';
import './Home.css';
// import Background from '../../components/Background/Background';
// import Results from '../../components/Results/Results';
// import Confirm from '../../components/Modals/ConfirmModal/Confirm';
import Instrucitonal from '../../components/Instructional/Instrucitonal';
import ControlledCarousel from '../../components/Carousel/Carousel'
import Navbar from "../../components/Navbar/Navbar";
import SimpleSearch from '../../components/Forms/SimpleSearch/SimpleSearch'
import Footer from '../../components/Footer/Footer'


class Home extends Component {
    state = {
        location: ""
    }

    updateLocation = (event) => {
        this.setState({location: event.target.value})
    }
 
    render() {
        return (
            <div>
                <div className="Home">
                    <Navbar />
                    {/* <ControlledCarousel /> */}
                    <br />
                    <SimpleSearch location={this.state.location} updateLocation={this.updateLocation}/>
                </div>
                <br />
                <div className='col-12 results-col'>
                    <Instrucitonal />
                </div>
                <Footer />
            </div>

        )
    }
}


export default Home;
