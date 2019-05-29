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
<<<<<<< HEAD
import { relative } from 'path';
=======
import Footer from '../../components/Footer/Footer'
>>>>>>> 72233ce560f472ef305fcf30bcfd1684f2298179


class Home extends Component {
    state = {
        location: ""
    }

    updateLocation = (event) => {
        this.setState({ location: event.target.value })
    }

    render() {
        return (
            <div>
                <div className="Home">
                    <Navbar />
                    {/* <ControlledCarousel /> */}
                    <br/>
                
                    
                    
                    <br />
                    <SimpleSearch location={this.state.location} updateLocation={this.updateLocation} />
                    <br />


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
