import React,{ useState } from 'react'
import './landingdash.css'
import { Sidenav } from '../SideNav/Sidenav'
import Landingcard from './landingcards/Landingcard'

export const LandingDash = () => {

    const [today, setToday] = useState(true);
    const [yesterday, setYesterday] = useState(true);
    const [last3days, setLast3days] = useState(true);

    return (
        <div className='landingdash'>
            <span className='hometitle'>HomePage</span>
            <div className="landingdashcontainer">
                <div className="sortdiv">
                  <i class='bx bx-sort'></i>
                  <span>Sort</span>
                </div>
                <div className="today">
                    <div className="homesubtitle">
                        <span>Today</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>

                </div>
                <div className="Yesterday">
                <div className="homesubtitle">
                        <span>Yesterday</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />
                    

                </div>
                <div className="Lastthreedays">
                    <div className="homesubtitle">
                        <span>Last Three Days</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                </div>
            </div>
        </div>
    )
}
