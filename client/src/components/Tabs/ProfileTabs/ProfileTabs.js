import React from "react";
import { render } from "react-dom";
import Tabs from "../Tabs";
import glamorous from "glamorous";
import CrawlCard from '../../Cards/CrawlCard/CrawlCard'

const styles = {
    tabs: {
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#d89b00"
    },
    tab: {
        backgroundColor: "#black"
    }
};

let ProfileTabs = () => (
    <div style={styles.tabs}>
        <Tabs
            activeTab={{
                id: "tab1"
            }}xw
        >
            <Tabs.Tab styles={styles.tab} id="tab1" title="Tab 1">
                <glamorous.Div padding={20}>
                    <div className='col-4' id='card-div'>
                        <CrawlCard />
                    </div>
                </glamorous.Div>
            </Tabs.Tab>
            <Tabs.Tab id="tab2" title="Tab 2">
                <glamorous.Div padding={20}>
                    <div className='col-4' id='card-div'>
                        <CrawlCard />
                    </div>
                </glamorous.Div>
            </Tabs.Tab>
        </Tabs>
    </div>
);

export default ProfileTabs;