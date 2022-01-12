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
            <div className="logincontainer">
                    <div className="loginimgdiv">

                    </div>
                    <div className="logincreddiv">
                        <div className="Logincontainer">
                            <div className="logintitlediv">
                                <span>LoginIn</span>
                            </div>
                            <div className="username">
                                <span>Email:</span>
                                <input type="text" />
                            </div>
                            <div className="password">
                                <span>Password:</span>
                                <input type="password" />
                            </div>
                            <button>Login</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Login
