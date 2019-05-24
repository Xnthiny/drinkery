import React, { Component } from 'react'
import './SimpleSearch.css'

class SimpleSearch extends Component {
    state = {
        location: "Miami",
    }

    updateLocation = (event) => {
        let myLocation = event.target.value
        this.setState({
            location: myLocation
        })
        console.log(this.state.location)
    }

    render() {
        return (
            <div className='simple-search'>
                <label > <h2 className='simple-search-label'>Begin your crawl.</h2></label>
                <input className='simple-search-input' value={this.state.location} onChange={this.updateLocation} />
                <button className='simple-search-button' href='/drink' onClick={this.updateLocation} > SEARCH </button>
            </div>
        )
    }
}

export default SimpleSearch;