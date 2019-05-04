import React, { Component } from 'react'
import CrawlList from "./CrawlList"
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"
import SaveButton from './Button/Button';
import Button from '@material-ui/core/Button';


let styles = {
  text:
  {
    title:
    {
      fontSize: "40px;"
    }, 
    body:
    {
      fontSize: "20px;"
    }

  },
  container: {
    background: "transparent",
    height: "100vh",
    width: "100vh",
    margin: "0 auto",
    padding: "10px",
    alignContent: "right",
    position: "relative",
    zIndex: "0",

  },
  SearchContainer: {
    background: "#D89B00",
    height: "auto",
    width: "60%",
    margin: "0 auto",
    padding: "45px",
    zIndex: "99",
    alignContent: "right",
    borderRadius: "5px"
  },
  primary: {
    border: "none",
    backgroundColor: "black",
    color: "#D89B00",
    width: "auto",
    position: "relative",
    margin: "10px auto",
    boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
    padding: "15px",
    fontSize: "15px",
    borderRadius: "5px"
  },
  userIn: {
    width: "100%",
    margin: "15px auto",
    borderColor: "black",
    borderRadius: "10px",
    borderWeight: "2px",
    boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
    backgroundColor: "transparent",
    padding: "5%",
    placeholderTextColor: "#fff",
    borderLeftWidth: "20px"
  }
}

export default class Search extends Component {
  state = {
    results: [],
    inputValue: "",
    personCount: "",
    pubCount: ""
  }
  handlePersonCount = () => {
    console.log("Person Count");
  }
  handleBarCount = () => {

    console.log("Person Count");
  }


  handleSearch = () => {
    API.searchFoursquare(this.state.inputValue).then(res => {
      const listItems = res.data.response.venues.map(venue => {
        return (
          <CrawlListItem selected={false} address={venue.location.formattedAddress} name={venue.name} key={venue.id} />
        )
      })
      this.setState({ results: listItems })
    })
  }

  updateInputValue = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  render(props) {

    const displayResults = () => {
      if (this.state.results.length > 0) {
        return <CrawlList results={this.state.results} />
      }
    }

    return (
      <div style={styles.container} className="body-conatiner">
        <div style={styles.SearchContainer} className="search-conatiner">
          <h3 style={styles.text.body}>
            Search For Your Favorite Pubs!
          </h3>
          <h5 style={styles.text.body}>
            Enter any location... Our API does the rest!
            <br />
            Our Tech is sure to make your bar crawl experience one of a kind
          </h5>
          <input value={this.state.inputValue} onChange={this.updateInputValue} style={styles.userIn} placeholder="Choose Your City!"></input>
          <input value={this.state.personCount} onChange={this.handlePersonCount} style={styles.userIn} placeholder="How Many People Are Joining?"></input>
          <input value={this.state.pubCount} onChange={this.handleBarCount} style={styles.userIn} placeholder="How much can you drink?"></input>
          <br />
          <button type="submit" style={styles.primary} onClick={this.handleSearch} className="searchButton">DRINK!!!</button>
        </div>
        <div className="searchResults">
          {displayResults()}
        </div>
      </div>
    )
  }
}
