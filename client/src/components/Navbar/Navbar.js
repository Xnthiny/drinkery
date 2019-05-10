import React, { Component } from "react";

class Navbar extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <Navbar color="indigo" dark expand="md">
            
            </Navbar>
        );
    }
}

export default Navbar;