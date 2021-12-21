import React from 'react'
import "../LoginPage/login.css"
import { Link } from 'react-router-dom';
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";


function Register() {
    return (
        <div className='loginpage'>
            <div className="logincontainer">
                <div className="loginimg1container">

                </div>
                <div className="logininfo">
                    <div className="logintext">
                        <h1><span className='weare'>We Are</span><span className='aazons' style={{"color" : "#0916c8"}}> Aaronz Connect</span></h1>
                        <p>Welcome to Aaronz family, Lets Get Started!</p>
                    </div>
                    <div className="logincreds">
                    <h1 className='signupname'>Sign Up</h1>
                        <div className="emaildiv">
                            <FiMail /> 
                            <input className='email' type="text" placeholder='Email' />
                        </div>
                        <div className="passworddiv">
                            <FiPhone />  
                            <input placeholder='Phone' className='password' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                        </div>
                        <div className="passworddiv">
                            <FiLock />  
                            <input className='password' type="password" placeholder='Password' />
                        </div>
                        <div className="passworddiv">
                            <FiLock />  
                            <input className='password' type="password" placeholder='Re-Password' />
                        </div>
                        <button className='loginbtn'>SignUp</button>
                        <p style={{"marginRight" : "30px", "marginTop" : "40px", "fontSize" : "14px"}}>Already a member, <Link to = "/">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
 }


export default Register
