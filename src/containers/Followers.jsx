import React from 'react'
import FollowersCard from '../components/FollowersCard'
import Toggle from '../components/Toggle'
import './styles/Followers.css'

const Followers = () => {
    return (
        <div className='container' id='followers-container'>
            <div className='header'>
                <h1>Social Media Dashboard</h1>
                <h4>Total Followers: 23,004</h4>
            </div>
            <Toggle />
            <div className='content' id='followers-content'>
                <FollowersCard />
                <FollowersCard />
                <FollowersCard />
                <FollowersCard />
            </div>
        </div>
    )
}

export default Followers
