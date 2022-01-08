import React from 'react'
import  stairs  from './man-climbing-stairs.png'
import './viewcard.css'
const Viewcard = (props) => {
    return (
        <div className='cardcontainer'>
            <div className="circle">
                <span>{props.Date}</span>
            </div>
            <div className="rectangle">
                <div className="cardtextcontainer">
                    <span className='propertyname'>{ props.Name }</span>
                    <div className="props">
                        <div className="bedroom">
                        <i class='bx bxs-bed' ></i>
                        <span>{ props.Bedrooms }</span>
                        </div>
                        <div className="floors bedroom">
                            <img className = "stairs"src={stairs} alt="" />
                        <span>{ props.Bedrooms }</span>
                        </div>
                        <div className="floors bedroom">
                        <i class="fas fa-female"></i>
                        <span>{ props.Maid }</span>
                        </div>
                    </div>
                </div>
                <div className="grey">
                    <span>ADE</span>
                    <span>{ props.budget }</span>
                </div>
            </div>
        </div>
    )
}

export default Viewcard
