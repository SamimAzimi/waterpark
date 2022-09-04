import React, { useState } from 'react'
import '../styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBuilding, faCircleInfo, faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


import {
    Link
} from "react-router-dom";
function Header() {
    const [show, setShow] = useState(false)



    const handleShow = () => {

        setShow(!show)
    }
    return (
        <>
            <nav>
                <h1>Water Park Town</h1>
                <ul className='headerUl'>
                    <li className='headerLists'><div><FontAwesomeIcon icon={faHouse} /></div><div> <Link className='navItems' to="/">Home</Link></div></li>
                    <li className='headerLists'><div><FontAwesomeIcon icon={faBuilding} /></div><div><Link className='navItems' to="/buildings">Buildings</Link></div></li>
                    <li className='headerLists'><div><FontAwesomeIcon icon={faCircleInfo} /></div><div><Link className='navItems' to="/aboutus">About Us</Link></div></li>
                    <li className='headerLists'><div><FontAwesomeIcon icon={faPhone} /></div><div><Link className='navItems' to="/contactus">Contact Us</Link></div></li>
                </ul>
            </nav>
            <section className='mobileNav'>
                <div className='logoMenu'>
                    <h1>Water Park Town</h1>
                    <FontAwesomeIcon icon={show ? faXmark : faBars} onClick={handleShow} />
                </div>
                {show && <ul className='headerUlMob'>
                    <li className='headerListsMob'><div><FontAwesomeIcon icon={faHouse} /></div><div><Link className='navItems' onClick={() => setShow(false)} to="/">Home</Link></div></li>
                    <li className='headerListsMob'><div><FontAwesomeIcon icon={faBuilding} /></div><div><Link className='navItems' onClick={() => setShow(false)} to="/buildings">Buildings</Link></div></li>
                    <li className='headerListsMob'><div><FontAwesomeIcon icon={faCircleInfo} /></div><div><Link className='navItems' onClick={() => setShow(false)} to="/aboutus">About Us</Link></div></li>
                    <li className='headerListsMob'><div><FontAwesomeIcon icon={faPhone} /></div><div><Link className='navItems' onClick={() => setShow(false)} to="/contactus">Contact Us</Link></div></li>
                </ul>}
            </section>
        </>
    )
}

export default Header