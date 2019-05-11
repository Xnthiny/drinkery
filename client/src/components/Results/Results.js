import React, { Component } from 'react'
import "./results.css"

export default class Results extends Component {
    render(props) {
        console.log(this.props.results)
        return (
            <div className="offset-6 col-6">
                <div className="container">
                    <div id="results">
                        {this.props.results}
                    </div>
                </div>
                <div>
                        <button id="results-btn">CLICK ME NOW</button>
                    </div>
            </div>
        )
    }
}
