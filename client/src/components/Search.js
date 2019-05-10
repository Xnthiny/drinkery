import React, { Component } from 'react'
import CrawlList from "./CrawlList"
import SearchForm from "./Forms/SearchForm/SearchForm"
import CrawlListItem from "./CrawlListItem"
import API from "../utils/API"
import SaveButton from './Button/Button';
import Button from '@material-ui/core/Button';
import ddInput from '../components/Dropdowns/Dropdown';

let styles = {
  text:
  {
    title:
    {
      fontSize: "40px;"
    },
    body:
    {
      fontSize: "20px;",
      color: "#585858"
    }

  },
  container: {
    background: "transparent",
    height: "100vh",
    width: "100vh",
    float: "right",
    margin: "0 auto",
    padding: "10px",
    alignContent: "right",
    position: "relative",
    zIndex: "0",

  },
  SearchContainer: {
    background: "#D89B00 ",
    height: "auto",
    width: "60%",
    float: "center",
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
      <div>
        <SearchForm />
        <div className="searchResults">
          {displayResults()}
        </div>
      </div>
    )
  }
}
