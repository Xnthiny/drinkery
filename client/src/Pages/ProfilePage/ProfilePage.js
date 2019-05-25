import React, { Component } from 'react'
import ProfileTabs from '../../components/Tabs/ProfileTabs/ProfileTabs';
import Avatar from '../../components/Avatar/Avatar'
import Navbar from "../../components/Navbar/Navbar"
import API from '../../utils/API';


export default class ProfilePage extends Component {
    state = {
        name: "",
        crawls: "",
        email: "",
        crawl_data: ""
    }
    componentWillMount() {
        const user = localStorage.getItem("loggedInUser")
        if(user){
            API.getUser(user).then(user => {
                const data = user.data[0]
                this.setState({name: data.name, crawls: data.crawls, email: data.email})
                console.log(this.state)
            })
        } else {
            alert("must be logged in")
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
                                    Marco
                                </h1>
                                <h2 className='city' >
                                    Miami
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profile-tabs'>
                    <ProfileTabs />
                </div>

            </div>
        )
    }
}
