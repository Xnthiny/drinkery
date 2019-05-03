import React, { Component } from 'react';
import API from "../utils/API"



export default class CrawlListItem extends Component {

    state = {
      background: "#D89B00",
      venueNameColor: "black",
      photo: ""
    }

    buttonClick = (props) => {
      if(this.state.background === "#D89B00") {
        props.selected = true;
        this.setState({background: "black", venueNameColor: "#D89B00"})
      } else {
        props.selected = false;
        this.setState({background: "#D89B00", venueNameColor: "black"});
      }
    }

    render(props) {

      API.searchForPhoto(this.props.id).then(photo => {
        this.setState(photo.data.response.photos.items[0])
      })

      let styles = {
          listItem: {
            width: "500px",
            position: "relative",
            background: this.state.background,
            margin: "20px auto",
            padding: "15px",
            color: "white",
            fontSize: "20px",
            borderRadius: "10px",
            boxShadow: "1px 10px 1px rgb(57, 57, 57)"
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
          },
          photo: {
            color: "white",
            borderRadius: "50%"
          }
      }

      const icon = () => {
        if(this.state.background === "black") {
          return <i className="fas fa-minus-circle"></i>
        } else {
          return <i className="fas fa-plus-circle"></i>
        }
      }

      return (
        <div style={styles.listItem}>
        <div style={styles.photo}>{this.state.photo}</div>
        <div style={styles.text}>
          <div style={styles.venueName}>
          {this.props.name.toUpperCase()}
          <button onClick={this.buttonClick}style={styles.button}>{icon()}</button>
          </div>
          <div style={styles.venueAddress}>
          {this.props.address[0]} <br/> {this.props.address[1]}
        </div>
        </div>
        </div>
    )
  }
}
