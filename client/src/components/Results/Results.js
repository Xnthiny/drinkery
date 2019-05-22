import React, { Component } from 'react'
import "./results.css"

export default class Results extends Component {

    render(props) {

        console.log(this.props.results)

        return (
            <div id="results-row" >
                <div className="container">
                    <div id="results" >
                        {this.props.results}
                    </div>
                    <div className="button-div">
                        <button id="results-btn">SAVE DRINKERY!</button>
                    </div>
                </div>
            </div>
        )
    }


}
