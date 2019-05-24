import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import styles from '../Navbar/Toolbar/Toolbar.module.css';

class Navbar extends Component {
    state = {
        mobile: null,
        sidebarOpen: false,
        toolbarBG: false
    }

    drawerClickHandler = () => {
        this.setState((prevState) => {
            return { sidebarOpen: !prevState.sidebarOpen }
        })
    }

    backdropClickHandler = () => {
        this.setState({ sidebarOpen: false })
    }

    render() {
        let backdrop = (this.state.sidebarOpen) ? <Backdrop click={this.backdropClickHandler} /> : console.log("nope")

        return (
            <div className="nav">
                <Toolbar drawerClickHandler={this.drawerClickHandler} onScroll={this.handleScroll} className={styles.Toolbar} />
                <SideDrawer show={this.state.sidebarOpen} />
                {backdrop}
            </div>
        )
    }
}

export default Navbar;