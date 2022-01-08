import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import "../LoginPage/login.css"
import { Link } from 'react-router-dom';
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import axios from 'axios';


function Register() {

    const history = useHistory();

    const [errormsg, setErrormsg] = useState("");
    const [user, setUser] = useState({
        name: "",
        email:'',
        number:'',
        password:'',
        repassword: ''
    })

    const onchangehandler = (e) => {
        const {name,value} = e.target
        setUser({...user,
            [name]: value
        })
 
    }

    const post = async () => {
        if(!user.name){
            setErrormsg("Enter Name!");
            return 0;
        }
        if(!user.email){
            setErrormsg("Enter Email!");
            return 0;
        }
        if(!user.password){
            setErrormsg("Enter Password!");
            return 0;
        }
        if(user.password !== user.repassword){
            setErrormsg("Passwords Doesnt Match");
            return 0;
        }
        // const result = await axios.post("http://localhost:3001/user/register", user);
        const result = await fetch("http://localhost:3001/user/register", { method: "POST", headers: { 'Content-type': 'application/json' }, 
        body: JSON.stringify ({ 
            name: user.name,
            email: user.email,
            password: user.password,
            number: user.number
         })
    })
    .then(res => res.json());
        setErrormsg(result.message);
        if(result.status === 'error'){
            setErrormsg(result.message);
            return 0;
        }
        history.push("/");

    }

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
                    <p className='errormsg' style={{ "color" : "red"}}>{ errormsg }</p>
                        <div className="emaildiv1">
                            <FiUserCheck /> 
                            <input className='email' name = 'name' type="text" placeholder='Name'  onChange={ onchangehandler }/>
                        </div>
                        <div className="emaildiv1">
                            <FiMail /> 
                            <input className='email' name = 'email' type="text" placeholder='Email'  onChange={ onchangehandler }/>
                        </div>
                        <div className="passworddiv1">
                            <FiPhone />  
                            <input placeholder='Phone' className='password' type="tel" id="phone" onChange={ onchangehandler } name="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
                        </div>
                        <div className="passworddiv1">
                            <FiLock />  
                            <input className='password' name='password' type="password" onChange={ onchangehandler } placeholder='Password' />
                        </div>
                        <div className="passworddiv1">
                            <FiLock />  
                            <input className='password' name='repassword' type="password" onChange={ onchangehandler } placeholder='Re-Password' />
                        </div>
                        <button className='loginbtn1' onClick={() => {post(); }}>SignUp</button>
                        <p style={{"marginRight" : "30px", "marginTop" : "40px", "fontSize" : "14px", "position" : "relative", "bottom" : "30px"}}>Already a member, <Link to = "/">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
 }


export default Register
