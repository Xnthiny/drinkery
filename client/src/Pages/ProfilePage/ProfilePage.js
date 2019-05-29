import React, { Component } from 'react'
import ProfileTabs from '../../components/Tabs/ProfileTabs/ProfileTabs';
import Avatar from '../../components/Avatar/Avatar'
import Navbar from "../../components/Navbar/Navbar"
import API from '../../utils/API';
import './ProfilePage.css'
import CrawlCard from '../../components/Cards/CrawlCard/CrawlCard'
import Tabs from '../../components/Tabs/Tabs'
// const crawlArray = () => {
//     Object.keys(this.state.crawls).map(i => {
//         return <p>this.state.crawls[i] </p>
//     })
// }

export default class ProfilePage extends Component {
    state = {
        name: "",
        crawls: "",
        email: "",
        crawl_data: []
    }
    componentWillMount() {
        const user = localStorage.getItem("loggedInUser")
        if (user) {
            API.getUser(user).then(user => {
                const data = user.data[0]
                this.setState({ name: data.name, crawls: data.crawls, email: data.email })
                console.log(this.state)
            })
        } else {
            alert("must be logged in")
        }
    }


    crawlSearch() {
        let crawlArray = this.state.crawls
        for (let i of crawlArray) {
            API.searchCrawl(i).then(crawl => {
                return (
                    <CrawlCard
                        author={this.state.name.toUpperCase()}
                        subheader={crawl.data.crawl_location}
                        title={crawl.data.title}
                    />
                )
            })
        }
    }
    // componentDidMount() {
    //     const stateCrawls = this.state.crawls
    //     stateCrawls.forEach(crawl => {
    //         API.getCrawls(crawl).then(foundCrawl => {
    //             console.log(foundCrawl)
    //         })
    //     })
    // }


    render() {

        return (
            <div className='Profile-Page'>
                <Navbar />
                <div className='user-profile-div' >
                    <div className='user-info' >
                        <div className='container'>
                            <div className='user-avatar' >
                                <Avatar />
                            </div>
                            <div className='user-info-div'>
                                <h1 className='name' >
                                    {this.state.name.toUpperCase()}
                                </h1>
                                <h2>
                                </h2>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-tabs'>
                    <ProfileTabs  >
                        <Tabs.Tab id='Crawls' /> {this.crawlSearch()} 
                    </ProfileTabs>
                </div>

            </div>
        )
    }
}
