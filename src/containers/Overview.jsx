import React from 'react'
import OverviewCard from '../components/OverviewCard'
import './styles/Overview.css'

const Overview = () => {
    return (
        <div className='container' id='overview-container'>
            <div className='header'>
                <h1>Overview - Today</h1>
            </div>
            <div className='content' id='overview-content'>
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
                <OverviewCard />
            </div>
        </div>
    )
}

export default Overview
