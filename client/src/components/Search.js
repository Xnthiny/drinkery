import React, { Component } from 'react'
import CrawlList from "./CrawlList"
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"

export default class Search extends Component {
  state = {
    results:[],
    inputValue: "",
  }

  handleSearch = () => {
    API.searchFoursquare(this.state.inputValue).then(res => {
      const listItems = res.data.response.venues.map(venue => {
        return (
          <CrawlListItem selected={false} address={venue.location.formattedAddress} name={venue.name} id={venue.id} key={venue.id}/>
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

    let styles = {
      cityInput: {
        display: "inlineBlock",
        boxSizing: "content-box",
        padding: "10px 20px",
        border: "1px solid #b7b7b7",
        margin: "20px",
        borderRadius: "3px",
        color: "rgba(0,0,0,1)",
        textOverflow: "clip",
        background: "#D89B00",
      },
      searchButton: {
        display: "inlineBlock",
        boxSizing: "content-box",
        padding: "10px 20px",
        border: "1px solid #b7b7b7",
        margin: "20px",
        borderRadius: "3px",
        color: "rgba(0,0,0,1)",
        textOverflow: "clip",
        background: "#D89B00",
        cursor: "pointer"
      },

    }

    return (
      <div>
      <div style={{textAlign: "center"}}>
        <input style={styles.cityInput}value={this.state.inputValue} onChange={this.updateInputValue}></input>
        <button style={styles.searchButton}type="submit" onClick={this.handleSearch}>Search</button>
        </div>
        {displayResults()}
      </div>
    )
  }
}
