import React from 'react'
import '../styles/home.css'
import videomp4 from '../assets/videos/waterparkavm.mp4'
function Home() {
    return (
        <div className='hero'>
            <video autoPlay muted loop >
                <source src={videomp4} type="video/mp4" />
                {/* <source src="../assets/videos/waterparkAndriodHD.mp4" type="video/mp4" />
                <source src="../assets/videos/waterparkavm.webm" type="video/webm" />
                <source src="../assets/videos/waterparkavm.ts" type="video/ts" />
                <source src="../assets/videos/waterparkavm.mp4" type="video/mp4" /> */}
            </video>
        </div>
    )
}

export default Home