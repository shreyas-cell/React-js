import React,{useState,useEffect} from "react";


 function Products(){
    const[users,setUser]=useState([])
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    },[])
    console.warn(users)
    const[topProducts,setTopProduct]=useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products?limit=5").then((result)=>{
            result.json().then((resp)=>{
                setTopProduct(resp)
            })
        })
    },[])
    return(
        <div align= "center" class="table-wrapper">
        <h1>Products</h1>
        <table border="1" class="fl-table">
            <tbody>
                <tr>
                    <td><b><big>ID</big></b></td>
                    <td><b><big>Title</big></b></td>
                    <td><b><big>Price</big></b></td>
                    <td><b><big>Category</big></b></td>
                </tr>
                {
                    users.map((item,i)=>
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    </tr>)
                }
            </tbody>
        </table>
        <h1> Top 5 Products</h1>
        <h1>Products</h1>
        <table border="1" class="fl-table">
            <tbody>
                <tr>
                    <td><b><big>ID</big></b></td>
                    <td><b><big>Title</big></b></td>
                    <td><b><big>Price</big></b></td>
                    <td><b><big>Category</big></b></td>
                </tr>
                {
                    topProducts.map((item,i)=>
                    <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </div>
    )
}
export default Products