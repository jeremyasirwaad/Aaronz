import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { useHistory } from 'react-router-dom';
import './login.css'
import axios from 'axios';

function Login() {

    const history = useHistory();

    const [errormsg, setErrormsg] = useState("");
    const [user, setUser] = useState({
        email: "",
        password:'',
    })

    const onchangehandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, 
            [name]: value
        })
    }

    const login = async () =>{
        // try{
        //     const result = await axios.post("http://localhost:3001/user/login", {email:user.email, password:user.password})
        // }
        // catch(err){
        //     console.log(err.message);
        // }
            const result = await fetch("http://localhost:3001/user/login", { method: "POST", headers: { 'Content-type': 'application/json' }, 
            body: JSON.stringify ({ 
                name: user.name,
                email: user.email,
                password: user.password,
                number: user.number
            })
        })
        .then(res => res.json());   
        if(result.status === "error"){
            setErrormsg(result.message)
        }
        else if (result.status === "ok")
        {
            localStorage.setItem("token", result.token);
            setErrormsg("Successfully Logged In");
            history.push("/dashboard")
        }
    
        // }
    }

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
                        <p className='errormsg'>{errormsg } </p>
                        <div className="emaildiv">
                            <FiMail /> 
                             <input className='email' name = "email" onChange={ onchangehandler } type="text" placeholder='Email' />
                        </div>
                        <div className="passworddiv">
                             <FiLock />  
                            <input className='password' name = "password" onChange={ onchangehandler } type="password" placeholder='Password' />
                        </div>
                        <p className='linkptag'><a href="#">Forgot Password ?</a></p>
                        <button className='loginbtn' onClick={ () => { login(); } }>Login</button>
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
