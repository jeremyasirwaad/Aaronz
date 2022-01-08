import React from 'react'
import '../Viewreqcard/viewcard.css'
import stairs from './man-climbing-stairs.png' 
export const Viewcard2 = (props) => {
    return (
<div className='cardcontainer1'>
        <div className='infocontainer'> 
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
        <div className="likecomment">
            <div className="likebtn">
                <i class='bx bxs-like'></i>
                <span>{props.Likes}</span>
                {/* <span>Likes</span> */}
            </div>
            <div className="commentbtn">
                <i class='bx bxs-chat' ></i>
                <span>Comment</span>
            </div>
        </div>
    </div>
    )
}
