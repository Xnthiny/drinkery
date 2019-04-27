import React, { Component } from 'react'
import API from "../utils/API"

export default class Search extends Component {
  state = {
    results:{},
    inputValue: ""
  } 

  handleSearch = () => {
    API.searchFoursquare(this.state.inputValue).then(res => {
      this.setState({results: res.data.response.venues})
      console.log(this.state.results)
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
      </div>
    )
  }
}
