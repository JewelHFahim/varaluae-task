import React from 'react';
import "./Contact.css";
import newsleter from "../../../../Assets/Group 34.png";
import facebook from "../../../../Assets/Vector-5.png";
import instagram from "../../../../Assets/Vector-6.png";
import youtub from "../../../../Assets/Vector-7.png";
import linkedin from "../../../../Assets/Vector-8.png";


const Contact = () => {
    return (
        <div>
            <div className='group-onee respon'>
            <h1 className='v-linee'> </h1> 
            <h2>Read about our blogs for more <br /> information on our processes </h2>
            </div>

            <div className='contact-one'>
                <h2>Services</h2>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>

            <div className='contact-one'>
                <h2>Policies</h2>
                <p>Solutions</p>
                <p>Assurance</p>
                <p>FAQ</p>
                <p>Working at Varal-Singhania</p>
            </div>

            <div className='contact-one'>
                <h2>About</h2>
                <p>5 Minutes About Us</p>
                <p>Contact Us</p>
            </div>

            <div className='contact-one'>
                <h2>Address</h2>
                <p>
                608 One Lake Plaza, Cluster T, <br />
                Al Sarayat Street, Jumeirah <br />
                Lake Towers <br />
                Dubai <br />
                United Arab Emirates <br /> <br />
                </p>
                <p>
                Office Hours: Sunday to <br />
                Thursday 8:30 AM to 6:30 PM <br />
                [GMT+4] <br />
                M: +971 55 794 2016 <br />
                O: +971 4 447 2061
                </p>
            </div>

            <div className='contact-one'>
                <h2>Subscribe Now</h2>
                <p>
                Sunbscribe now to receive our <br />
                Newsletters about amazing <br />
                opportunities in Dubai
                </p>
            </div>

            <div className='news-cont'>
            <input className='news-leter' type="text" placeholder='Enter email address' />
            <img src={newsleter} alt="" />
            </div>

            <div className='social'>
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={youtub} alt="" />
                <img src={linkedin} alt="" />
            </div>            
        </div>
    );
};

export default Contact;