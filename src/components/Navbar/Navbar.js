import React from 'react'
import { Link } from 'react-router-dom'
import img from './img.png'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbarpage' style={{"position":'fixed'}}>
            <div className="navbarcontainer">
                <img src={img} alt="logo" className='aazronzlogo'/>
                <div className="navlinks">
                    <Link to= "/login" className='navloginbtn'>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
