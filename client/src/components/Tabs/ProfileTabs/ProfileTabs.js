import React from "react";
// import { render } from "react-dom";
import Tabs from "../Tabs";
import glamorous from "glamorous";
import CrawlCard from '../../Cards/CrawlCard/CrawlCard'
import UserProfileForm from '../../Forms/UserForm/UserForm'
import './ProfileTabs.css'

const styles = {
    tabs: {
        maxHeight: "800px",
        maxWidth: "100%",
        overflow: "scroll",
        margin: "0 auto",
        width: "97%",
        fontFamily: "sans-serif",
        textAlign: "center",
        backgroundColor: "#d89b00",
    },
    tab: {
        backgroundColor: "#black"
    }
};

let ProfileTabs = () => (
    <div style={styles.tabs}>
        <Tabs
            activeTab={{
                id: "Crawls"
            }} xw
        >
            <Tabs.Tab styles={styles.tabs} id="Crawls" title="Crawls">
                <glamorous.Div >
                    <div className='crawls-container' >
                        <div className='col-3' id='card-div'>
                            <CrawlCard id='test' />
                        </div>
                        <div className='col-3' id='card-div'>
                            <CrawlCard id='test1' />
                        </div>
                        <div className='col-3' id='card-div'>
                            <CrawlCard id='test2' />
                        </div>
                    </div>

                </glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab styles={styles.tabs} id="My-Profile" title="My Profile">
                <glamorous.Div >
                    <UserProfileForm />
                </glamorous.Div>
            </Tabs.Tab>
        </Tabs>
    </div>
);

export default ProfileTabs;