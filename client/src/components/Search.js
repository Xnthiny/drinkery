import React, { Component } from 'react'
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"

export default class Search extends Component {
  state = {
    results:[],
    inputValue: ""
  }

  handleSearch = () => {
    API.searchFoursquare(this.state.inputValue).then(res => {
      const listItems = res.data.response.venues.map(venue => {
        return (
          <CrawlListItem name={venue.name} key={venue.id}/>
        )
      })
      this.setState({results: listItems})
    })
  }

  updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button onClick={this.handleSearch}>Search</button>
        {this.state.results}
      </div>
    )
  }
}
