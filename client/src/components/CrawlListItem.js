import React, { Component } from 'react';



export default class CrawlListItem extends Component {

    state = {
      background: "#D89B00",
      venueNameColor: "black"
    }

    buttonClick = (props) => {
      if(this.state.background === "#D89B00") {
        props.selected = true
        this.setState({background: "black", venueNameColor: "#D89B00"})
      } else {
        props.selected = false;
        this.setState({background: "#D89B00", venueNameColor: "black"})
      }
    }

    render(props) {
      let styles = {
          listItem: {
            width: "500px",
            position: "relative",
            background: this.state.background,
            margin: "10px auto",
            color: "white",
            fontSize: "20px",
            borderRadius: "10px"
          },
          button: {
            color: "white",
            position: "absolute",
            background: 'none',
            border: "none",
            right: 0,
            zIndex: "10",
            outline: "none",
            cursor: "pointer"
          },
          text: {
            marginLeft: "20px"
          },
          venueName: {
            color: this.state.venueNameColor
          },
          venueAddress: {
            fontSize: "12px",
            color: "white"
          }
      }

      return (
        <div style={styles.listItem}>
        <div style={styles.text}>
          <div style={styles.venueName}>
          {this.props.name.toUpperCase()}
          <button onClick={this.buttonClick}style={styles.button}>+</button>
          </div>
          <div style={styles.venueAddress}>
          {this.props.address[0]} <br/> {this.props.address[1]}
        </div>
        </div>
        </div>
    )
  }
}
