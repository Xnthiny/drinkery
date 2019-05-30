import React, { Component } from 'react'
import API from "../../utils/API"
import CrawlListItem from "../../components/CrawlListItem"
import Navbar from "../../components/Navbar/Navbar"
import "./ResultsPage.css"
import ResultsIntro from "../../components/Instructional/Results/ResultsIntro/ResultsIntro"
import Results from "../../components/Results/Results"
import { Redirect } from 'react-router-dom'
import GoogleMap from '../../components/SimpleMaps';

export default class ResultsPage extends Component {
    state = {
        results: "",
        selectedVenues: "",
        redirect: false
    }


    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/profile" />
        }
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
        this.setState({ selectedVenues: [...this.state.selectedVenues, venueInfo] })
    }

    saveSelected = (props) => {
        console.log(this.state.selectedVenues)
        const user = localStorage.getItem("loggedInUser")
        if (!user) {
            alert("Log in to save a crawl!")
        } else {
            const title = prompt("Name your crawl!")
            const data = {
                title,
                location: this.props.match.params.location,
                venues: this.state.selectedVenues,
                authorID: user
            }

            API.saveCrawl(data).then(res => {
                this.setState({ redirect: true })
            })
        }

    }

    render(props) {

        const location = this.props.match.params.location
        const results = this.state.results
        const venues = this.state.selectedVenues

        return (
            <div className='Results'>

                {this.renderRedirect()}
                <Navbar />
                <br />
                <div className='row' style={{ background: 'transparent' }}>
                    <div className='col-12' style={{ background: 'transparent' }}>
                        <div id="header">
                            <h1 id="header-title">Showing results for: {location.toUpperCase()}</h1>
                        </div>
                        <div className='col-12' id='map-div'>
                            <GoogleMap />
                        </div>

                    </div>
                </div>
                <div className='row' style={{ background: 'transparent' }}>
                    <div className='col-12' style={{ background: 'transparent' }}>
                        <Results results={results} />
                        <div className="button-div">
                            <button onClick={this.saveSelected} id="results-btn">SAVE DRINKERY!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}