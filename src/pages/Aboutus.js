import React from 'react'
import '../styles/aboutus.css'
function Aboutus() {
    return (
        <div className='aboutUsPage'>

            <div className='misson'>
                <h1>Purpose</h1>
                <p>
                    Modern and dreamy apartments like the experienced and pioneering Turkish company Delta Holding,<br />
                    for the information of interested parties and dear customers,<br />
                    on behalf of Safe green Tarde company,  registered under HRB-735087 of the Commercial Court of Mannheim, Germany by Abdolrazaq Rahimi (representative of Alman Company in Turkey)<br />
                    to our dear customers Sales are introduced and offered.<br />

                    This complex of residential buildings consists of seven blocks,<br />
                    <ol>
                        <li>the first is a 5-star hotel called Radisa,</li>
                        <li> the second block is a modern 105-bed hospital complex,</li>
                        <li>the third block is a foreign language school</li>
                        <li>the fourth block is commercial and business offices</li>
                        <li>and the rest of the three blocks It was built for the purpose of accommodation and release or residence.</li>
                    </ol>
                    It should be mentioned that the owners of the apartments in this complex have a 50% discount for their guests from their nearby hotel.<br />
                    Three residential blocks,<br />
                    each of which has 20 floors,<br />
                    each apartment has the most modern equipment and comfort facilities.<br />
                    For example, a modern bathroom and sauna inside their residence.<br />
                    I have to remind you that in 2021, Holding Construction Company won the first place in the construction sector in Istanbul<br />
                    due to its very interesting projects and won the medal in this sector and received a letter of appreciation.<br />
                    Now, for the purpose of sharing and transforing the information of our dear customers and interested parties,<br />
                    we have published this website
                </p>
            </div>
            <div className='registerNumber'>Register Number : HRB-735087</div>
            <div className="officesContact">
                <h1>Our Offices</h1>
                <i className="fas fa-headset"></i>
                <span>Turkey Office</span>
                <span>+90(0) 536 735 5822</span>
                <span>Dubai Office</span>
                <span>+97(0) 150 847 2717</span>
                <span>Germany Office</span>
                <span>+49(0) 1607 608 595</span>
            </div>
        </div>
    )
}

export default Aboutus