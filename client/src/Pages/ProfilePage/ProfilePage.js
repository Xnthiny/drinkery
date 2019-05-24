import React, { Component } from 'react'
import ProfileTabs from '../../components/Tabs/ProfileTabs/ProfileTabs'
import User from '../../components/Profiles/UserProfile/UserProfile'
import Avatar from '../../components/Avatar/Avatar'

export default class ProfilePage extends Component {
    render() {
        return (
            <div className='Profile-Page'>
                <div className='user-profile-div' >
                    <div className='user-info' >
                        <div className='container'>
                            <div className='user-avatar' >
                                <User />
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
