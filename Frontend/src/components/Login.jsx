import Netflixbg from "../assets/images/Netflix-bg.jpg"
import Netflixlogo from "../assets/images/netflix-logo.png"
import {Link, Navigate, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios"
const API_URL = import.meta.env.VITE_API_URL;

function Login(props)
{
    const Navigate = useNavigate()
    const [username,setusername] = useState("")
    const [pass,setpass] = useState("")
    const [passError,setpassError] = useState(false)
    
    function handleuser(event)
    {
        setusername(event.target.value)
    }
    
    function handlepass(event)
    {
        setpass(event.target.value)
    }

    function checkuser()
    {

        //let loginDetails = axios.get(`http://localhost:3000/login?username=${username}&password=${pass}`)
        let loginDetails = axios.post(`${API_URL}/login`,{"username":username,"password":pass})
        loginDetails.then(function(response)
        {
            console.log(response);
            if(response.data == true){
                Navigate("/landing")
            }
            else{
                alert("invalid username or password , Please Signin after Login")
            }
        })
        
    }
    return(
        
        <div>
            <div className="container">
                <img className="netflix_logo" src={Netflixlogo} alt="Netflix-logo" />
                
            <img className="netflix_bg" src={Netflixbg} alt="Netflix-bg-image" />
            
            <div className="bg_black"></div>
            
            <div className="signin">
                <select className="lng_btn">
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                </select>
                <Link to={"/signin"}><button className="signin_btn">Signin</button></Link>
            </div>

            <div className="login_container">

                <div className="login_container_s1">
                    <h1>Unlimited Movies, Shows and more</h1>
                    <h3>Starts at ₹149. Cancel at any time.</h3>
                </div>

                <div className="login_container_s2">
                    <p>Ready to Watch?Enter email to create or restart you membership.</p>
                    <input onChange={handleuser} type="email" placeholder="Email address" required /> <br />
                    {userError&&<p style={{color:"red"}}>Require to Email address</p>}
                    <input onChange={handlepass} type="password" placeholder="Email password" required/> <br />
                    {passError&&<p style={{color:"red"}}>Require to password</p>}
                    <button onClick={checkuser}>Get Started  ➜ </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;