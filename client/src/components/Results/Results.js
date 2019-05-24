import React, { Component } from 'react'
import "./results.css"

export default class Results extends Component {

    render(props) {
        return (
            <div id="results-row" >
                <div className="container">
                    <div id="results" >
                        {this.props.results}
                    </div>
                </div>
            </div>
        )
    }


}
