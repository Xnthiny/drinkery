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
        padding: "15px 10px",
        fontSize: "15px",
        boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
        margin: "20px auto",
        borderRadius: "5px"
      },
      buttonDiv: {
        margin: "0px auto",
        width: "100%",
        alignContent: "center",
        textAlign: "center"
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
            <div className="button-div" style={styles.buttonDiv}>
              <button type="submit" style={styles.primary} onClick={this.handleCrawlSave} className="SaveSearchButton">CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
