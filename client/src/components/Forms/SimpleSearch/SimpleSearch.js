import React, { Component } from 'react'
import './SimpleSearch.css'
import { Redirect } from 'react-router-dom'

class SimpleSearch extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({redirect: true})
    }

    renderRedirect = (props) => {
        const query = `${this.props.location}/feed`
        if(this.state.redirect) {
            return <Redirect to={query} />
        }
    }
    render(props) {
        return (
            <div className='simple-search'>
                {this.renderRedirect()}
                <label > <h2 className='simple-search-label'>Begin your crawl.</h2></label>
                <input className='simple-search-input' onChange={this.props.updateLocation} placeholder="Where are you?"/>
                <button className='simple-search-button' onClick={this.setRedirect}>SEARCH</button>
            </div>
        )
    }
}

export default SimpleSearch;