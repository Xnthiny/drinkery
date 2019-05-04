import React, { Component } from 'react'
import CrawlList from "./CrawlList"
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"
import SaveButton from './Button/Button';
import Button from '@material-ui/core/Button';


let styles = {
  container: {
    background: "#D89B00",
    height: "500px",
    width: "30%",
    margin: "0 auto",
    padding: "10px",
    alignContent: "right"
  },
  primary: {
    border: "none",
    backgroundColor: "black",
    color: "#D89B00",
    width: "auto",
    position: "relative",
    margin: "10px auto",
    padding: "15px",
    fontSize: "15px",
  }
}

export default class Search extends Component {
  state = {
    results: [],
    inputValue: "",
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
      <div className="row">
        <div className="col 12">
          <div style={styles.container}>
            <input value={this.state.inputValue} onChange={this.updateInputValue}></input>
            <br />
            <button type="submit" style={styles.primary} onClick={this.handleSearch} className="searchButton">DRINK!!!</button>
            {displayResults()}
          </div>
        </div>
      </div>
    )
  }
}
