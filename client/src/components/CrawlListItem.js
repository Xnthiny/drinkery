import React, { Component } from 'react';



export default class CrawlListItem extends Component {

    state = {
      background: "#D89B00"
    }

    buttonClick = () => {
      this.setState({background: "black"})
    }

    render(props) {
      let styles = {
          listItem: {
            width: "500px",
            left: "50vh",
            position: "relative",
            background: this.state.background,
            margin: "5px",
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
            outline: "none",
            cursor: "pointer"
          },
          text: {
            marginLeft: "20px"
          }
      }

      return (
        <div style={styles.listItem}>
        <div style={styles.text}>
        {this.props.name}
        <button onClick={this.buttonClick}style={styles.button}>+</button>
        </div>
        </div>
    )
  }
}
