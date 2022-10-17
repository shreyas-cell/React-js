import React, { useEffect, useRef ,useState} from "react";
import Dashboard from "./Dashboard";

import './Login.css';
function Login(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")    
    const handleSubmit=()=>{
        if(email.current.value==="abc@gmail.com"&&password.current.value==="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
   
    return(
        
        <div align="center">
            <h1>Login</h1>
            {
                getEmail&&getPassword?
                <Dashboard/>:
            <form onSubmit={handleSubmit}>
                <div>
                <h2>email</h2><input type="text" ref={email} class="pad" />
                </div>
                <br/>
                <div>
                <h2>password</h2><input type="password" ref={password} class="pad"/>
                </div>
                <br/>
                <button class="button button4">Login</button>
            </form>
            }
        </div>
    );
}
export default Login;