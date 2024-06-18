import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavBar() {
    return (
       <nav>
             <div class="logo">
                <Link to={"/"}>About us</Link>
                <Link to={"/collection"}>Collections</Link>
            </div>
            <div class="nav-items">
                <Link to={"/"}>Let’s see</Link>
            </div>
            <div class="contact">
                <Link to={"/"}>Services</Link>
                <Link to={"/"}>Contact</Link>
            </div>
       </nav>
    )
}