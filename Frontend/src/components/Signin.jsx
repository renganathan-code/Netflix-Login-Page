import '../App.css'
import Netflixlogo from "../assets/images/netflix-logo.png"
import {Link,Navigate, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from "axios"

function Signin(props)
{
    const Navigate = useNavigate()
    const [newuser,setnewuser] = useState("")
    const [newpass,setnewpass] = useState("")

    function handleuser(event)
    {
        setnewuser(event.target.value)
    }

    function handlepass(event)
    {
        setnewpass(event.target.value)
    }

    function addUser()
    {
        let loginDetails = axios.post("http://localhost:3000/signin",{"username":newuser,"password":newpass})
        loginDetails.then(function(response)
        {
            console.log(response);
            if(response.data == true){
                Navigate("/")
            }
        })

    }

    return(
        <>
        <div className='navbar'>
            <img className="netflix_logo" src={Netflixlogo} alt="Netflix-logo" />
        </div>

        <div className='signin_container'>
            <div className='signin_container_s1'>
                <h1>Enter Your info to sign in</h1>
                <h4>Or get started with a new account</h4>
                <input onChange={handleuser} type="email" placeholder="Enter your email address" required/>
                {newuser?<p style={{color:"red"}}>Require to Email address</p>:""}
                <input onChange={handlepass} type="password" placeholder='Enter your password' required/>
                {newpass?<p style={{color:"red"}}>Require to password</p>:""}
                <button type='submit' onClick={addUser}>Signin</button>
                <p>You already have an account?<Link to={"/"}> Login</Link></p>
            </div>
        </div>

        <div className='footer' >
            <h4>Questions? Call 000-800-919-1743(Toll-Free)</h4>
            <div className='footer_desc'>
                <p>FAQ</p>
                <p>Help Centre</p>
                <p>Terms of Use</p>
                <p>Privacy</p>
                <p>Cookie Preferences</p>
                <p>corporate information</p>
            </div>

            <select className="lng_btn">
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                </select>
        </div>
        </>
    )
}

export default Signin;