import React from 'react'
import '../styles/building.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBuilding, faHospital, faSchool, faHotel, faSackDollar } from '@fortawesome/free-solid-svg-icons'
function Buildings() {
    return (
        <div className='buildingPage'>
            <h1><FontAwesomeIcon icon={faBuilding} />   7 BUILDINGS</h1>
            <ol>
                <li className='contactList'><FontAwesomeIcon icon={faHotel} />Hotel Radisa</li>
                <li className='contactList'><FontAwesomeIcon icon={faHospital} />105 Bed Hospital</li>
                <li className='contactList'><FontAwesomeIcon icon={faSchool} />Foreign Language School</li>
                <li className='contactList'><FontAwesomeIcon icon={faSackDollar} />Commerical & Bussiness Offices</li>
                <li className='contactList'><FontAwesomeIcon icon={faHouse} />Residential Apartments</li>
            </ol>

            <h1>Other Details with 3D Map of Buildings will be Published Soon on Sep 3 2021</h1>
        </div>


    )
}

export default Buildings