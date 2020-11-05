import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'

const Toggle = () => {
    return (
        <div className='theme-switch'>
            <img 
                alt='Light'
                src={ moon }
            />
            <ThemeToggle />
            <img 
            className='sun'
                alt='Light'
                src={ sun }
            />
        </div>
    )
}

export default Toggle
