import React from 'react'
import './styles/FollowersCard.css'
import facebookIcon from '../assets/facebook.png'
import upIcon from '../assets/up.png'
// import downIcon from '../assets/up.png'

const FollowersCard = ({ socialn, user, followers, rise, newFollowers }) => {
    return (
        <div className='followers-card facebook'>
            <div className='icon-text'>
                <img 
                    alt='Facebook' 
                    src={ facebookIcon }
                />
                <p className='secondary-text'>{ user }</p>
            </div>
            <div className='number-followers'>
                <h3 className='numbers'>{ followers }</h3>
                <h4 className='secondary-text follow-text'>FOLLOWERS</h4>
            </div>
            <div className='icon-text'>
                <img 
                    className='arrow' 
                    alt='Up' 
                    src={ upIcon }    
                />
                <p className='rise'>{ newFollowers } Today</p>
            </div>
        </div>
    )
}

FollowersCard.defaultProps = {
    socialn: 'facebook',
    user: '@manuel',
    followers: 1987,
    rise: true,
    newFollowers: 12 
}

export default FollowersCard
