import React from 'react'
import '../styles/header.css'
import {
    Link
} from "react-router-dom";
function Header() {
    return (
        <nav>
            <h1>Water Park Town</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/buildings">Buildings</Link></li>
                <li><Link to="/aboutus">abouts</Link></li>
                <li><Link to="/contactus">contactus</Link></li>
            </ul>
        </nav>
    )
}

export default Header