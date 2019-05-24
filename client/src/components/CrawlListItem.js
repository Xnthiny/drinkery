import React, { Component } from 'react';
import API from "../utils/API"
import { truncateSync } from 'fs';



export default class CrawlListItem extends Component {


  state = {
    background: "#D89B00",
    venueNameColor: "black",
    selected: false
  }

  componentDidUpdate = (props) => {
    const venue = {
      name: this.props.name,
      address: this.props.address,
      id: this.props.id
    }
    this.props.pushToSelectedVenues(venue)

  }

  render(props) {

    let buttonClick = (props) => {
      if (this.state.background === "#D89B00") {
        this.setState({selected: true, background: "black", venueNameColor: "#D89B00"})
      } else {
        this.setState({selected: false, background: "#D89B00", venueNameColor: "black", selected: false});
      }
    }


    let styles = {
      listItem: {
        width: "80%",
        position: "relative",
        background: this.state.background,
        margin: "10px auto",
        padding: "15px",
        color: "white",
        fontSize: "20px",
        borderRadius: "10px",
        boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
      },
      button: {
        color: "white",
        position: "absolute",
        background: 'none',
        border: "none",
        right: 0,
        verticalAlign: "middle",
        outline: "none",
        cursor: "pointer"
      },
      text: {
        margin: "0 auto"
      },
      venueName: {
        color: this.state.venueNameColor,
      },
      venueAddress: {
        fontSize: "12px",
        color: "white",
      }
    }

    const icon = () => {
      if (this.state.background === "black") {
        return <i className="fas fa-minus-circle"></i>
      } else {
        return <i className="fas fa-plus-circle"></i>
      }
    }
    return (
      <div style={styles.listItem} >
        <div style={styles.text}>
          <div style={styles.venueName}>
            {this.props.name.toUpperCase()}
            <button onClick={buttonClick} style={styles.button}>{icon()}</button>
          </div>
          <div style={styles.venueAddress}>
            {this.props.address[0]} <br /> {this.props.address[1]}
          </div>
        </div>
      </div>
    )
  }
}
