import React, { Component } from "react"
import SaveButton from './Button/Button';


export default class CrawlList extends Component {

  handleCrawlSave = () => {
    console.log("this");
  }

  render(props) {

    let styles = {
      list: {
        background: "#585858",
        height: "auto",
        width: "50%",
        margin: "0 auto",
        padding: "2px"
      },
      primary: {
        border: "none",
        border: "none",
        backgroundColor: "black",
        color: "#D89B00",
        width: "auto",
        position: "relative",
        margin: "10px auto",
        padding: "15px 12px",
        fontSize: "15px",
      }
    }

    return (

      <div className="row">
        <div className="col 12">

          <div style={styles.list}>
            <div>{this.props.results}</div>
            <button type="submit" style={styles.primary} onClick={this.handleCrawlSave} className="SaveSearchButton">CONTINUE</button>
          </div>
        </div>
      </div>

    )
  }
}
