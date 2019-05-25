import React, { Component } from 'react'
import API from "../../utils/API"
import CrawlListItem from "../../components/CrawlListItem"
import Navbar from "../../components/Navbar/Navbar"
import "./ResultsPage.css"
import ResultsIntro from "../../components/Instructional/Results/ResultsIntro/ResultsIntro"
import Results from "../../components/Results/Results"

export default class ResultsPage extends Component {
    state = {
        results: "",
        selectedVenues: "",
        
    }


    componentDidUpdate() {
        console.log(this.state)
    }

    componentWillMount(props) {
        const location = this.props.match.params.location
        console.log(location)
        API.searchFoursquare(location).then(res => {
            const listItems = res.data.response.venues.map(venue => {
                return (
                    <CrawlListItem pushToSelectedVenues={this.updateSelectedVenues} lat={venue.location.lat} lng={venue.location.lng} address={venue.location.formattedAddress} name={venue.name} id={venue.id} key={venue.id} />
                )
            })
            this.setState({ results: listItems })
            console.log("reached")
        })
    }

    updateSelectedVenues = (venueInfo) => {
        this.setState({ selectedVenues: [...this.state.selectedVenues, venueInfo]})
    }

    saveSelected = () => {
        console.log(this.state.selectedVenues)
    }

    render(props) {

        const location = this.props.match.params.location
        const results = this.state.results
        const venues = this.state.selectedVenues
        
        return (
            <div className='Results-Page'>
                <Navbar />
                <br />
                <div id="header">
                    <h1 id="header-title">Showing results for: {location}</h1>
                </div>
                <Results results={results} />
                <div className="button-div">
                    <button onClick={this.saveSelected} id="results-btn">SAVE DRINKERY!</button>
                </div>
            </div>
        )
    }
}
