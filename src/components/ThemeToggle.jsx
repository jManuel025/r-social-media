import React, { useState, useEffect } from 'react'
import './styles/ThemeToggle.css'

const ThemeToggle = () => {
    // const [toggleState, setToggleState] = useState(false)

    useEffect(() => {
        const toggle = document.querySelector('.toggle')
        toggle.addEventListener('click', () => console.log('Se hizo click'))
    }, [])

    return (
        <div className='toggle'>
            <div className='circle'>

            </div>
        </div>
    )
}

export default ThemeToggle
