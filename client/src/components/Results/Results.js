import React, { Component } from 'react'
import "./results.css"

export default class Results extends Component {
    render(props) {
        console.log(this.props.results)
        return (
            <div className="offset-6 col-6" id="results-row" >
                <div className="container">
                    <div id="results">
                        {this.props.results}
                    </div>
                </div>
                <div>
                        <button id="results-btn">SAVE DRINKERY!</button>
                    </div>
            </div>
        )
    }
}
