import React from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMailBulk, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <div>
                <div className='socials'>
                    <h3>Social Pages</h3>
                    <ul className='footerUL'>
                        <li className='footerList'><FontAwesomeIcon icon={faFacebook} />Facebook</li>
                        <li className='footerList'><FontAwesomeIcon icon={faTwitter} />Twitter</li>
                        <li className='footerList'><FontAwesomeIcon icon={faInstagram} />Instagram</li>
                    </ul>
                </div>
                <div className='contact'>
                    <h3>Contact Information</h3>
                    <ul className='footerUL'>
                        <li className='footerList'><FontAwesomeIcon icon={faMailBulk} />Mail</li>
                        <li className='footerList'><FontAwesomeIcon icon={faPhone} />Phone Number</li>
                    </ul>
                </div>
                <div className='subscribe'>
                    <h3>Subscribe to our News Letter</h3>
                    <form className='footerform'>
                        <div className='groupsubscribe'>
                            <input type="text" placeholder='Type Your Email Address' className='subscribeInput' />
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                    </form>
                </div>
            </div>
            <p>All Right Reserved 	&copy; {Date()}</p>
        </footer>
    )
}

export default Footer