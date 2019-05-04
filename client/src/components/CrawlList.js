import React, { Component } from "react"
import SaveButton from './Button/Button';


export default class CrawlList extends Component {

  handleCrawlSave = () => {
    console.log("this");
  }

  render(props) {

    let styles = {
      text: {
        color: "white",
        fontSize: "45px",
        textAlign: "center",
        margin: "20px auto"
      },
      list: {
        background: "#585858",
        height: "auto",
        width: "100%",
        margin: "0 auto",
        padding: "2px",
        marginTop: "4em"
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
            <h3 style={styles.text}>
              Choose Your Pubs!
            </h3>
            <div>{this.props.results}</div>
            <button type="submit" style={styles.primary} onClick={this.handleCrawlSave} className="SaveSearchButton">CONTINUE</button>
          </div>
        </div>
      </div>
    )
  }
}
