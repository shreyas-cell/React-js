import React,{useState,useEffect} from "react";
import './Login.css';

 function Sales(){
    const[users,setUser]=useState([])
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    },[])
    console.warn(users)
    return(
        <div align= "center" class="table-wrapper">
        <h1>Sales</h1>
        <table border="1" class="fl-table">
            <tbody>
                <tr>
                    <td><b><big>ID</big></b></td>
                    <td><b><big>Sales</big></b></td>
                </tr>
                {
                    users.map((item,i)=>
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.rating.count}</td>
                   
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    )
}
export default Sales