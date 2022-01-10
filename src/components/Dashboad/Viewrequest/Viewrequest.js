import React from 'react'
import './Viewrequest.css'
import { Sidenav } from '../SideNav/Sidenav'
import Viewcard from './Viewreqcard/Viewcard'
import { Viewcard2 } from './Viewreqcard2/Viewcard2'
import { useState } from 'react'
const Viewrequest = () => {

    const [sentorrecieve, setSentorrecieve] = useState(true);
    const [delstate, setDelstate] = useState(false);
    const managesentor = () => {
        if(sentorrecieve === true){
            setSentorrecieve(false);
        }
        if(sentorrecieve === false){
            setSentorrecieve(true);
        }
        console.log(sentorrecieve);
    }

    const managedeclinestate = (declinestate,declineprops) => {
            setDelstate(declinestate);
            console.log(declineprops);
    }

    const manageclosedelstate = () => {
        setDelstate(false);
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
                        </div>
                        <div className="gridsendres">
                            <div className={ sentorrecieve ? "gridsend" : "gridsend none" } >
                                    <Viewcard getBack = { managedeclinestate }  Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "9/10" budget = "15000" Name = "Burj Al Arab" Bedrooms = "6" Maid = "No"  />
                                    <Viewcard  getBack = { managedeclinestate } Date = "17/8" budget = "35000" Name = "Marina" Bedrooms = "2" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "22/9" budget = "45000" Name = "Cayan Group" Bedrooms = "4" Maid = "No"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "31/4" budget = "85000" Name = "The Tower" Bedrooms = "1" Maid = "Yes"  />
                                    <Viewcard getBack = { managedeclinestate } Date = "15/3" budget = "45000" Name = "Elite Residence" Bedrooms = "2" Maid = "Yes"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ delstate ? "declinemodel" : "declinemodel declinemodelclose"}>
                <div className="dmodel">
                <i class="fas fa-times closebtn" onClick={() => { manageclosedelstate(); } }></i>
                    <span>Reason For Closure</span>
                        <select name="reasonforclosure" id="" className='reasonfordecline'>
                            <option value="" disabled selected hidden>Select An Option</option>
                            <option value="">Deal done within Aaronz</option>
                            <option value="">No one has responded</option>
                            <option value="">No one has responded</option>
                            <option value="">Deal done outside Aaronz</option>
                            <option value="">Property not with me anymore</option>
                            <option value="">Others</option>
                        </select>
                    <button onClick={() => { manageclosedelstate(); } }>Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Viewrequest
