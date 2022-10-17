import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products"
import Clients from "./components/Clients"
import Sales from "./components/Sales"
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Component } from 'react';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Clients' element={<Clients/>}></Route>
        <Route path='/Sales' element={<Sales/>}/>
      </Routes>
    </Router>
  );
}

export default App;
