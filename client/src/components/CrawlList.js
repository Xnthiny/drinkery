import React, { Component } from "react"

export default class CrawlList extends Component {


  render(props) {

    let styles = {
      list: {
        background: "#585858",
        height: "auto",
        width: "50%",
        margin: "0 auto",
        padding: "2px"

      }
    }

    return(
      <div style={styles.list}>
        <div>{this.props.results}</div>
      </div>
    )
  }
}
