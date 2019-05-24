
import React, { Component } from 'react'
import UserProfile from 'react-user-profile'
import avatar from '../../../images/avatar.png'
import './UserProfile.css'


class User extends Component {
    render() {
        const photo = { avatar }
        const userName = 'Harvey Specter'
        const location = 'New York, USA'

        const comments = [
            {
                id: '1',
                photo: { avatar },
                userName: 'Mike Ross',
                content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
                createdAt: 1543858000000
            }
        ]

        return (
            <div className='user-profile'>
                <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
            </div>
        )
    }
}

export default User;