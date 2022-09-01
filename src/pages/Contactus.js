import React from 'react'
import '../styles/contactus.css'
//@ts-ignore
//@eslint-ignore
// import ReactMapGL from "react-map-gl";

function Contactus() {
    // const [popupInfo, setPopupInfo] = useState(null);
    // const [viewport, setViewport] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //     latitude: 70,
    //     longitude: -122.45,
    //     zoom: 1,

    // });




    // const settings = {
    //     dragPan: true,
    //     dragRotate: false,
    //     scrollZoom: false,
    //     touchZoom: false,
    //     touchRotate: false,
    //     keyboard: false,
    //     doubleClickZoom: false,

    // };


    return (
        <div className='contactusPage'>
            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="contact_inner">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3>Contatc Us</h3>
                                                <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                <input type="text" className="form-control form-group" placeholder="Name" />
                                                <input type="text" className="form-control form-group" placeholder="Email" />
                                                <textarea className="form-control form-group form-textarea" placeholder="Message" rows="10"></textarea>
                                                <button className="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex">
                                                <li><a href="#hello"><i className="fab fa-facebook-square"></i></a></li>
                                                <li><a href="#hello"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#hello"><i className="fab fa-twitter"></i></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div className="phones d-flex info_single align-items-center">
                                        <i className="fas fa-headset"></i>
                                        <span>Turkey Office</span>
                                        <span>+90(0) 536 735 5822</span>
                                        <span>Dubai Office</span>
                                        <span>+97(0) 150 847 2717</span>
                                        <span>Germany Office</span>
                                        <span>+49(0) 1607 608 595</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <span>safa.gtrade@gmail.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt"></i>
                                        <span>Ammerweg 8, 69168 Wiesloch, Germany</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="map_inner">
                                <h4>Find Us on Google Map</h4>
                                <div className="map_bind">
                                    <iframe
                                        title="Water Park Town"
                                        width="1200"
                                        height="500"

                                        style={{ "border": "0", "margin-left": "10%" }}
                                        loading="lazy"
                                        allowfullscreen
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC3BR4ik4mFhyhhDibPEReVOodWKB2rdGc&q=Istanbul,Turkey"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contactus