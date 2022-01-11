import React,{ useState } from 'react'
import './landingdash.css'

import Landingcard from './landingcards/Landingcard'

export const LandingDash = () => {

    const [today, setToday] = useState(true);
    const [yesterday, setYesterday] = useState(true);
    const [last3days, setLast3days] = useState(true);

    const [infostate, setInfostate] = useState(false);
    const [moreinfo, setMoreinfo] = useState({});

    const managemoreinfo = (infostate,moreinfo) =>{
        setInfostate(infostate);
        setMoreinfo(moreinfo);
    }

    const moreinfoclose = () => {
        setInfostate(false);
    }

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
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>

                </div>
                <div className="Yesterday">
                <div className="homesubtitle">
                        <span>Yesterday</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes" />
                    

                </div>
                <div className="Lastthreedays">
                    <div className="homesubtitle">
                        <span>Last Three Days</span>
                        <i class='bx bxs-down-arrow' style={{ "marginLeft": "10px"}}></i>
                    </div>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                    <Landingcard getBack = { managemoreinfo } Date = "8/12" budget = "25000" Name = "Burj Kalifa" Bedrooms = "5" Maid = "Yes"/>
                </div>
            </div>
            <div className={ infostate ? "declinemodelinfo" : "declinemodelinfo declinemodelcloseinfo"}>
                <div className="dmodelinfo">
                    <div className="colorline"></div>
                    <i class="fas fa-times closebtninfo" onClick={() => { moreinfoclose(); } }></i>
                        <div className='asdf'><span className='moreinfotitle'>Property Details:</span></div>
                        <div className='moreinfocontainer'>
                        <div className='moreinfo1'>
                            <span className='subinfos'>Name:   <span className='subinfos1'>{moreinfo.Name}</span></span>
                            <span className='subinfos'>Budget:  <span className='subinfos1'>{moreinfo.budget}</span></span>
                            <span className='subinfos'>Bedrooms:   <span className='subinfos1'>{moreinfo.Bedrooms}</span></span>
                            <span className='subinfos'>Maid:  <span className='subinfos1'>{moreinfo.Maid}</span></span> 
                        </div>
                        <div className='moreinfo2'>
                            <span className='subinfos'>Name:   <span className='subinfos1'>{moreinfo.Name}</span></span>
                            <span className='subinfos'>Budget:  <span className='subinfos1'>{moreinfo.budget}</span></span>
                            <span className='subinfos'>Bedrooms:   <span className='subinfos1'>{moreinfo.Bedrooms}</span></span>
                            <span className='subinfos'>Maid:  <span className='subinfos1'>{moreinfo.Maid}</span></span> 
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
