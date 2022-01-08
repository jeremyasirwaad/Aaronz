import React from 'react'
import './Viewrequest.css'
import { Sidenav } from '../SideNav/Sidenav'
import Viewcard from './Viewreqcard/Viewcard'
import { Viewcard2 } from './Viewreqcard2/Viewcard2'
import { useState } from 'react'
const Viewrequest = () => {

    const [sentorrecieve, setSentorrecieve] = useState(true);

    const managesentor = () => {
        if(sentorrecieve === true){
            setSentorrecieve(false);
        }
        if(sentorrecieve === false){
            setSentorrecieve(true);
        }
        console.log(sentorrecieve);
    }

    return (
        <div>
            <div className='viewreqcard'>
                {/* <h4 className='viewreqtitle'>View Requests</h4> */}
                <div className='allcontainer'>
                    <div className="viewreqcontainer">
                        <div className="sortdiv">
                        <i class='bx bxs-filter-alt'></i>
                        <span>Sort</span>
                        </div>
                        <div className="sendrecieve">
                            <div onClick={() => { managesentor(); }}  className= { sentorrecieve ? "send" : "send bgwhite" }>
                                <span>Sent</span>
                            </div>
                            <div className={sentorrecieve ? "recieve bgwhite" : "recieve" } onClick={() => { managesentor(); }}>
                                <span>Recieved</span>
                            </div>
                        </div>
                        <div className="gridsendres">
                            <div className={ sentorrecieve ? "gridsend" : "gridsend none" } >
                                    <Viewcard Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"  />
                                    <Viewcard Date = "9/10" budget = "15000" Name = "Burj Al Arab" Bedrooms = "6" Maid = "No"  />
                                    <Viewcard Date = "17/8" budget = "35000" Name = "Marina" Bedrooms = "2" Maid = "Yes"  />
                                    <Viewcard Date = "22/9" budget = "45000" Name = "Cayan Group" Bedrooms = "4" Maid = "No"  />
                                    <Viewcard Date = "31/4" budget = "85000" Name = "The Tower" Bedrooms = "1" Maid = "Yes"  />
                                    <Viewcard Date = "15/3" budget = "45000" Name = "Elite Residence" Bedrooms = "2" Maid = "Yes"  />
                            </div>
                            <div className={ sentorrecieve ? "gridres none" : "gridres" }>
                                <Viewcard2 Likes = '2' Date = "31/4" budget = "85000" Name = "The Tower" Bedrooms = "1" Maid = "Yes"  />
                                <Viewcard2 Likes = '4' Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"  />
                                <Viewcard2 Likes = '8'  Date = "17/8" budget = "35000" Name = "Marina" Bedrooms = "2" Maid = "Yes"  />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewrequest
