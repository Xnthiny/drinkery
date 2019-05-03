import React, { Component } from "react"

export default class CrawlList extends Component {


  render(props) {

    let styles = {
      list: {
        background: "#585858",
        height: "auto",
        width: "550px",
        margin: "20px auto",
        padding: "2px",
        borderRadius: "10px"

      }
    }

    return(
      <div style={styles.list}>
        <div>{this.props.results}</div>
      </div>
    )
  }
}
