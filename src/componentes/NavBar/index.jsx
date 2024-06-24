import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import menuImg from '../../assets/img/menu.svg'
import Menu from '../Menu/index.jsx'
export default function NavBar() {

    return (
        <div className="navbar">
            <nav className="desktop">
                <div className="logo">
                    <Link to={"/"}>About us</Link>
                    <Link to={"/collection"}>Collections</Link>
                </div>
                <div className="nav-items">
                    <Link to={"/"}>Let’s see</Link>
                    <Menu />
                    
                </div>
                <div className="contact">
                    <Link to={"/"}>Services</Link>
                    <Link to={"/"}>Contact</Link>
                </div>
            </nav>
            <nav className="mobile">
                    <div className="nav-items">
                        <Link to={"/"}>Let’s see</Link>
                    <div className="menu">
                        <Menu />
                    </div>
                </div>
            </nav>
          
        </div>
     
    )
}