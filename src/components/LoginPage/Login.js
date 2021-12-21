import React from 'react'
import { Link } from "react-router-dom"
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import './login.css'

function Login() {
    return (
        <div className='loginpage'>
            {/* <FiMail />   
            <FiLock /> */}
            <div className="logincontainer">
                <div className="loginimgcontainer">

                </div>
                <div className="logininfo">
                    <div className="logintext">
                        <h1><span className='weare'>We Are</span><span className='aazons' style={{"color" : "#0916c8"}}> Aaronz Connect</span></h1>
                        <p>Welcome back! Log in to your account <br /> to view today's activities:</p>
                    </div>
                    <div className="logincreds">
                        <div className="emaildiv">
                            <FiMail /> 
                             <input className='email' type="text" placeholder='Email' />
                        </div>
                        <div className="passworddiv">
                             <FiLock />  
                            <input className='password' type="password" placeholder='Password' />
                        </div>
                        <p className='linkptag'><a href="#">Forgot Password ?</a></p>
                        <button className='loginbtn'>Login</button>
                    </div>
                    <h3>Or</h3>
                    <a href="#" class="google btn">
                        <i class="fab fa-google"></i>  Login with Google
                    </a>
                    <a href="#" class="fb btn">
                        <i class="fab fa-facebook-f"></i>  Login with Facebook
                    </a>
                    <p style={{"position" : "relative", "top" : "20px", "fontSize" : "12px"}}>Not a user <Link to = "/register">Signup</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login
