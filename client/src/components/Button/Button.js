import React from 'react';
import Button from '@material-ui/core/Button';

let styles = {
    button: {
        width: "auto",
        position: "relative",
        margin: "10px auto",
        padding: "15px",
        color: "white",
        fontSize: "15px",
    } 
}

const SaveButton = (props) => (
    <Button variant="contained" style={styles.button} variant="contained" className="SaveSearch" color="primary">
        Save Search
    </Button>
);

export default SaveButton;