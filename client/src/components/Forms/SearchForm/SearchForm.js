import React, { Component } from 'react'
import API from "../../../utils/API"
import CrawlListItem from "../../CrawlListItem"
import "./searchform.css"

export default class SearchForm extends Component {
    state = {
        where: "",
        howMany: "",
        results: ""
    }

    updateWhere = (e) => {
        this.setState({ where: e.target.value })
    }

    updateHowMany = (e) => {
        this.setState({ howMany: e.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault();
        console.log(this.state.where)
        API.searchFoursquare(this.state.where).then(res => {
            const listItems = res.data.response.venues.map(venue => {
                return (
                    <CrawlListItem selected={false} address={venue.location.formattedAddress} name={venue.name} key={venue.id} />
                )
            })
            this.setState({ results: listItems })
            console.log(this.state.results)
        })
    }

    render() {
        return (
            <div className="search-form">
                <div className="search-title">
                    <h3 id="title">Begin your crawl.</h3>
                    <h5 id="subtitle">Enter any location.</h5>
                </div>
                <form>
                    <div className="input-div">
                        <label id="label" htmlFor="city">WHERE</label>
                        <br />
                        <input id="city-input" name="city" value={this.state.where} onChange={this.updateWhere} placeholder="Anywhere"></input>
                    </div>
                    <div className="input-div">
                        <label id="label" htmlFor="how-many">HOW MANY PEOPLE?</label>
                        <br />
                        <input id="count-input" name="how-many" value={this.state.howMany} onChange={this.updateHowMany} placeholder="Enter a number"></input>
                    </div>
                    <div className="button-div">
                        <button id="search-button" type="submit" onClick={this.handleSearch}>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}
