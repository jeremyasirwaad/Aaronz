import React, { useEffect, useState } from 'react'
import {
    Route,
  } from "react-router-dom";

import "./Dashboard.css"
import { LandingDash } from './LandinginDash/LandingDash'
import { Sidenav } from './SideNav/Sidenav'

export const Dashboard = () => {
    

    return (
        <div className='dashboardgrid'>
            <Sidenav />
            <Route path='/dashboard/landingpage' component={LandingDash} />
        </div>
    )
}
