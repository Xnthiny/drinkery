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
        margin: "0 auto",
        marginTop: "240px"

      },
      list: {
        alignItems: "center",
        background: "#585858",
        height: "465px",
        overflow: "scroll",
        width: "92%",
        margin: "0 auto",
        padding: "2px",
        marginTop: "2em"
      },
      primary: {
        border: "none",
        border: "none",
        backgroundColor: "#D89B00",
        color: "black",
        width: "auto",
        padding: "15px 10px",
        fontSize: "15px",
        boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
        margin: "20px auto",
        borderRadius: "5px",
        displayFlex: "flex",
        float: "right",
        marginRight: "30px",
      },
      buttonDiv: {
        width: "100%",
        alignContent: "center",
        textAlign: "center",      
        alignItems: "center"

      }
    }
    return (
      <div className="row">
        <div className="col 12">
        <h3 style={styles.text}>
              Choose Your Pubs!
          </h3>
          <div style={styles.list}>
            
            <div>{this.props.results}</div>
            <div className="button-div" style={styles.buttonDiv}>
            </div>
          </div>
          <button type="submit" style={styles.primary} onClick={this.handleCrawlSave} className="SaveSearchButton">CONTINUE</button>
        </div>
      </div>
    )
  }
}
