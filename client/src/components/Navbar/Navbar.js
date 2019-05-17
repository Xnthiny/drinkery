import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import { constants } from "fs";

class Navbar extends Component {
    state = {
        mobile: null,
        sidebarOpen: false,
        navBackground: false
    }

    drawerClickHandler = () => {
        this.setState((prevState) => {
            return { sidebarOpen: !prevState.sidebarOpen}
        })
    }

    backdropClickHandler = () => {
        this.setState({sidebarOpen: false})
    }

    render() {
        let backdrop = (this.state.sidebarOpen) ? <Backdrop click={this.backdropClickHandler} /> : console.log("nope")

        return (
            <div >
                <Toolbar drawerClickHandler={this.drawerClickHandler} />
                <SideDrawer show={this.state.sidebarOpen} />
                {backdrop}
            </div>
        )
    }
}

export default Navbar;