import React, { useState } from 'react'
import "./Sidenav.css"
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import './Sidenav.css'

export const Sidenav = () => {

    const history = useHistory();

    const [active, setActive] = useState(true);

    const toggle = () => {
        if(active){
            setActive(false);
        }
        else if(!active){
            setActive(true);
        }
    }

    return (
        <div className='sidebar'>
            <div className='logodetails'>
              <span className='logo_name'>Connect Menu</span>
            </div>
            <div className="sidenavlinks">
            <div className="Result links">
                     <i class='bx bxs-dashboard'></i>
                     <span onClick={() => { history.push('/dashboard') }}>Dashboard</span>
                </div>
                <div className="Request noselect">
                    <div className = "links">
                        <i onClick={() => { toggle(); }} class='bx bx-repost' ></i>
                        <span onClick={() => { toggle(); }}>Request</span>
                        <i class= { active ? 'bx bx-chevron-down downi' : 'bx bx-chevron-down downi rotate'} style={{"fontSize":"22px"}} onClick={() => { toggle(); } }></i>
                    </div>
                    <div className= { active ? "sublinks close noselect" : "sublinks noselect" }>
                        <span className='kka' onClick={() => {history.push('/dashboard/submitreq')}}>Property Request</span>
                        <span onClick={() => {history.push('/dashboard/submitreq')}}>Client Request</span>
                        <span onClick={() => { history.push('/dashboard/viewreq')}}>View Requests</span>
                        <span>Explore Request</span>
                    </div>
                </div>                
                <div className="Result links">
                    <i class='bx bxs-bar-chart-alt-2'></i>
                     <span>Result</span>
                </div>
                <div className="Deal links">
                    <i class='bx bx-trending-up'></i>
                     <span>Deals</span>
                </div>
                <div className="Convo links">
                    <i class='bx bx-message-dots' ></i>
                     <span>Conversations</span>
                </div>
            </div>
            <div className="sidenavfooter">
                <i class='bx bx-user-circle'></i>
                <span>Jeremy Asirwaad</span>
                <i class='bx bx-log-out'></i>
            </div>
        </div>
    )
}
