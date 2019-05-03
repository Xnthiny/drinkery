import React, { Component } from 'react'
import CrawlList from "./CrawlList"
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"
import SaveButton from './Button/Button';
import Button from '@material-ui/core/Button';

export default class Search extends Component {
  state = {
    results:[],
    inputValue: "",
  }

  handleSearch = () => {
    API.searchFoursquare(this.state.inputValue).then(res => {
      const listItems = res.data.response.venues.map(venue => {
        return (
          <CrawlListItem selected={false} address={venue.location.formattedAddress} name={venue.name} key={venue.id}/>
        )
      })
      this.setState({results: listItems})
    })
  }

  updateInputValue = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render(props) {

    const displayResults = () => {
      if(this.state.results.length > 0) {
        return <CrawlList results={this.state.results} />
      }
    }

    
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button type="submit" onClick={this.handleSearch}>Search</button>
        
        {displayResults()} 
        <div> {SaveButton()} </div>
      </div>
     
    )
  }
}
