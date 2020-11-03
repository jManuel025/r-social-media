import React from 'react'
import './styles/OverviewCard.css'
import facebookIcon from '../assets/facebook.png'
import upIcon from '../assets/up.png'

const OverviewCard = () => {
    return (
        <div className='overview-card'>
            <div>
                <h4>Page Views</h4>
                <img
                    alt='Facebook'
                    src={ facebookIcon }
                />
            </div>
            <div>
                <h2>87</h2>
                <div className='icon-text'>
                    <img 
                        className='up-down' 
                        alt='Up' 
                        src={ upIcon }    
                    />
                    <p className='rise'>12%</p>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard
