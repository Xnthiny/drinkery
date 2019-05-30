import React, { Component } from 'react'
import "./results.css"
import GoogleMaps from '../../components/SimpleMaps'

export default class Results extends Component {

    render(props) {
        return (
            <div id="results-row">
                <div className="results-container">
                    <div id="results" >
                        {this.props.results}
                    </div>
                </div>
            </div>
        )
    }


}
