import React from 'react'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBuilding, faCircleInfo, faPhone } from '@fortawesome/free-solid-svg-icons'


import {
    Link
} from "react-router-dom";
function Header() {
    return (
        <nav>
            <h1>Water Park Town</h1>
            <ul className='headerUl'>
                <li className='headerLists'><div><FontAwesomeIcon icon={faHouse} /></div><div> <Link className='navItems' to="/">Home</Link></div></li>
                <li className='headerLists'><div><FontAwesomeIcon icon={faBuilding} /></div><div><Link className='navItems' to="/buildings">Buildings</Link></div></li>
                <li className='headerLists'><div><FontAwesomeIcon icon={faCircleInfo} /></div><div><Link className='navItems' to="/aboutus">About Us</Link></div></li>
                <li className='headerLists'><div><FontAwesomeIcon icon={faPhone} /></div><div><Link className='navItems' to="/contactus">Contact Us</Link></div></li>
            </ul>
        </nav>
    )
}

export default Header