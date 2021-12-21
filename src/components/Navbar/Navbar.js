import React from 'react'
import img from './img.png'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbarpage'>
            <div className="navbarcontainer">
                <img src={img} alt="logo" className='aazronzlogo'/>
            </div>
        </div>
    )
}

export default Navbar
