import React, { Component } from 'react'
import ProfileTabs from '../../components/Tabs/ProfileTabs/ProfileTabs';
import Avatar from '../../components/Avatar/Avatar'
import Navbar from "../../components/Navbar/Navbar"
import API from '../../utils/API';
import './ProfilePage.css'
import CrawlCard from '../../components/Cards/CrawlCard/CrawlCard'
import Tabs from '../../components/Tabs/Tabs'
// import ReactDOM from "react-dom";

// const crawlArray = () => {
//     Object.keys(this.state.crawls).map(i => {
//         return <p>this.state.crawls[i] </p>
//     })
// }
export default class ProfilePage extends Component {
    state = {
        name: "",
        crawls: [],
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
        let crawlIDArray = this.state.crawls

        for (let i of crawlIDArray) {
            API.searchCrawl(i)
                .then(crawl => {
                    this.state.crawl_data.push({
                        crawl
                    })
                // .then(
                //     Object.keys(this.state.crawl_data).map(function (el) {
                //         const title = this.data.crawl_data[el].crawl.title.toString();
                //         console.log(title)
                //     }))
                })
                .finally(console.log('pushed'))
                .catch(err => console.log(err))
        }
    }

    // displayCrawl() {
    //     this.state.crawl_data.map((item, i) => <li className={i.crawl.data.title}>{i.crawl.data.title}</li>)
    //     console.log('worked')
    // }


    // componentDidMount() {
    //     const stateCrawls = this.state.crawls
    //     stateCrawls.forEach(crawl => {
    //         API.getCrawls(crawl).then(foundCrawl => {
    //             console.log(foundCrawl)
    //         })
    //     })
    // }
    displayCrawls() {
        Object.keys(this.state.crawl_data).map(function (key) {
            let myitem = this.state.crawl_data[key]
            console.log(myitem)
        })
        console.log('worked')
    }

    render() {
        // console.log(typeof this.state.crawl_data)
        // console.log(<CrawlCard author={this.state.name.toUpperCase()} />)
       

        return (
            <div className='Profile-Page'>
                <Navbar />
                {this.crawlSearch()}
                <div className='user-profile-div' >
                    <div className='user-info' >
                        <div className='container'>
                            <div className='user-avatar' >
                                <Avatar />
                            </div>
                            <div className='user-info-div'>
                                {this.displayCrawls()}
                                <h1 className='name' >
                                    {this.state.name.toUpperCase()}

                                </h1>
                                <p>
                                    <ul className='test' style={{ color: 'white' }}>
                                        <li >
                                            {console.log(this.state.crawl_data)}
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-tabs'>
                    <ProfileTabs  >
                        <Tabs.Tab id='Crawls' />
                    </ProfileTabs>
                </div>

            </div>
        )
    }
}
