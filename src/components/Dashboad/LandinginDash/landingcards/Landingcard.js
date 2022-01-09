import React from 'react'
import './viewcardhome.css'
import stairs from './man-climbing-stairs.png'
import profilelogo from './User-Profile-PNG-High-Quality-Image.png'
const Landingcard = (props) => {
    return (
       <div className='cardcontainer'>
       <div className="circle">
             <img src={profilelogo} alt="" />
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
               <span>Agent Info</span>
               <span>Mr.Jikku Luke</span>
           </div>
           <div className="grey">
               <span>Decline</span>
               <span>Suggestion</span>
           </div>

       </div>
   </div>
    )
}

export default Landingcard
