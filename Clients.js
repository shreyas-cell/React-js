import React,{useState,useEffect} from "react";


 function Clients(){
    const[users,setUser]=useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    },[])
    console.warn(users)
    return(
        <div align= "center" class="table-wrapper">
        <h1>Clients</h1>
        <table border="1" class="fl-table">
            <tbody>
                <tr>
                    <td><b><big>ID</big></b></td>
                    <td><b><big>Name</big></b></td>
                    <td><b><big>Username</big></b></td>
                    <td><b><big>Email</big></b></td>
                </tr>
                {
                    users.map((item,i)=>
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    )
}
export default Clients