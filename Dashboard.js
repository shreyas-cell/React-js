import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './button.css';
function Dashboard() {
   
    const navigate=useNavigate();
    const navigate1=useNavigate();
    const navigate2=useNavigate();
    const navigate3=useNavigate();
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    const Products=()=>{
        navigate('./Products')
    }
    const Clients=()=>{
        navigate1('./Clients')
    }
    const Sales=()=>{
        navigate2('./Sales')
    }
    return (
        <>
            <h1 >Home Page</h1>
            <button class="button button1" onClick={handleClick}>Logout</button>
            <button class="button button2"onClick={Products}>Products</button>
            <button class="button button3"onClick={Clients}>Clients</button>
            <button class="button button5"onClick={Sales}>Sales</button>
           
        </>
        
    )
}
export default Dashboard;