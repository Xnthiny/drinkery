import React from 'react';
import Button from '@material-ui/core/Button';

let styles = {
    primary: {
        backgroundColor: "black",
        color: "#D89B00",         
        width: "auto",
        position: "relative",
        margin: "10px auto",
        padding: "15px",
        fontSize: "15px",
    } 
}

    const SaveButton = () => (
    <Button variant="contained" style={styles.primary} variant="contained" className="SaveSearch" color="primary">
        Save Search
    </Button>
);

export default SaveButton;