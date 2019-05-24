import React, { Component } from 'react'
import API from "../../../utils/API"
import CrawlListItem from "../../CrawlListItem"
import "./searchform.css"

export default class SearchForm extends Component {



    render(props) {
        console.log("Location: " + JSON.stringify(this.props.location))

        let handleSearch = (event) => {
            event.preventDefault();
            API.searchFoursquare(this.props.location).then(res => {
                const listItems = res.data.response.venues.map(venue => {
                    return (
                        <CrawlListItem selected={false} lat={venue.location.lat} lng={venue.location.lng} address={venue.location.formattedAddress} name={venue.name} key={venue.id} click={{ selected: true }} />
                    )
                })
                this.props.updateResults(listItems)
                console.log(this.props.results)
            })
        }

        return (
            <div className="search-form">
                <div className="search-title">
                    <h3 id="title">Begin your Drinkery.</h3>
                    <h5 id="subtitle">Drinkery is one of a kind technology innovating the way we party. <br />
                        Be on the forefront of customizedable entertainmnet and <br />see how Drinkery gets the party going!
                    </h5>
                </div>
                <form>
                    <div className="input-div">
                        <label id="label" htmlFor="city">WHERE ARE YOU DRINKING?</label>
                        <br />
                        <input id="city-input" name="city" value={this.props.location} onChange={this.props.changeLocation} placeholder="Anywhere"></input>
                    </div>
                    <div className="input-div">
                        <label id="label" htmlFor="how-many">HOW MANY PEOPLE?</label>
                        <br />
                        <input id="count-input" name="how-many" value={this.props.numPeople} onChange={this.props.updatePeople} placeholder="Enter a number"></input>
                    </div>
                    <div className="button-div">
                        <button id="search-button" type="submit" onClick={handleSearch}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

