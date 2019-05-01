import React from 'react';

export default function CrawlListItem(props) {
  const styles = {
    listItem: {
      position: "relative",
      background: "grey",
      margin: "5px",
      color: "white",
      fontSize: "20px"
    },
    button: {
      color: "white",
      position: "absolute",
      background: 'none',
      border: "none",
      right: 0
    }
  }
    return (
      <div style={styles.listItem}>
      {props.name}
      <button style={styles.button}>+</button>
      </div>
    )
}
