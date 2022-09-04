import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import videomp4 from '../assets/videos/waterparkavm.mp4'
import Footer from '../components/Footer'
function Home() {
    return (
        <div>
            <div className='showcase'>

                <video autoPlay muted loop >
                    <source src={videomp4} type="video/mp4" />
                    {/* <source src="../assets/videos/waterparkAndriodHD.mp4" type="video/mp4" />
                <source src="../assets/videos/waterparkavm.webm" type="video/webm" />
                <source src="../assets/videos/waterparkavm.ts" type="video/ts" />
                <source src="../assets/videos/waterparkavm.mp4" type="video/mp4" /> */}
                </video>
                <div className='overlay'></div>
                <div className='textofshowCase'>
                    <h1 className='textBold'>MAKING SPACE, LIVABLE </h1>
                    <h2 className='textBold secondTextBold'>LOVE YOUR HOME</h2>

                    <h3 className='buyahome'><Link to="buildings">Buy a Home</Link></h3>
                </div>
            </div>

            <div className='landingPage'>
                <div className='row row1'>
                    <div className='col'>
                        <h1>Natural purity from the interior</h1>
                    </div>
                    <div className='col'>
                        <div class="card card1Suits">
                        </div>
                        <div class="card card2Suits">

                        </div>
                        <div class="card card3Suits">

                        </div>
                        <div class="card card4Suits">

                        </div>


                    </div>
                </div>

                <div className='row row2'>
                    <div className='col'>
                        <h1>Smart Living, Smart designing</h1>
                    </div>
                    <div className='col'>
                        <div class="card card5Suits">

                        </div>
                        <div class="card card6Suits">

                        </div>
                        <div class="card card7Suits">

                        </div>
                        <div class="card card8Suits">

                        </div>


                    </div>
                </div>

                <div className='row row3'>
                    <div className='col'>
                        <h1>Shaping your need</h1>
                    </div>
                    <div className='col'>
                        <div class="card card9Suits">

                        </div>
                        <div class="card card10Suits">

                        </div>
                        <div class="card card11Suits">

                        </div>
                        <div class="card card12Suits">

                        </div>


                    </div>
                </div>
                <div className='row row4'>
                    <div className='col'>
                        <h1>Just what your bathroom needs.</h1>
                    </div>
                    <div className='col'>
                        <div class="card card13Suits">

                        </div>
                        <div class="card card14Suits">

                        </div>
                        <div class="card card15Suits">

                        </div>
                        <div class="card card16Suits">

                        </div>


                    </div>
                </div>
                <div className='row row5'>
                    <div className='col'>
                        <h1>Enhance your home style</h1>
                    </div>
                    <div className='col'>
                        <div class="card card17Suits">

                        </div>
                        <div class="card card18Suits">

                        </div>
                        <div class="card card19Suits">

                        </div>
                        <div class="card card20Suits">

                        </div>


                    </div>
                </div>
                <div className='row row6'>
                    <div className='col'>
                        <h1>Furniture that cares for you.</h1>
                    </div>
                    <div className='col'>
                        <div class="card card21Suits">

                        </div>
                        <div class="card card22Suits">

                        </div>
                        <div class="card card23Suits">

                        </div>
                        <div class="card card24Suits">

                        </div>


                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Home