import React from 'react';
import "./Blog.css";
import cast from "../../../../Assets/Vector-4.png";
import person from "../../../../Assets/Vector-3.png";
import { RiCastLine } from 'react-icons/ri';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Blog = () => {
    return (

        <div className='blog-container'>

            <div className='group-one'>
            <h1 className='v-line'> </h1> 
            <h2>Read about our blogs for more <br /> information on our processes </h2>
            </div>

            <div className='group-two'>
                <img className='vector-icon' src={cast} alt="" />
                <h3>How to start a company <br /> formation in Dubai <br /> <span>5 Minutes</span></h3>
            </div>

            <div className='group-two'>
                <img className='vector-icon' src={cast} alt="" />
                <h3>How to start an Offshore <br /> company formation in Dubai <br /> <span>5 Minutes</span></h3>
            </div>

            <div className='group-two gt-selected'>
                <RiCastLine className='vector-icon v2'/>
                <h3> SEO Dubai: Who benefits <br /> the most? <br /> <span>5 Minutes</span></h3>
            </div>

            {/* Client Review */}
            <div className='group-one'>
            <h1 className='v-line'> </h1> 
            <h2>Satidfied We are When Our <br /> Customers Are Happy </h2>
            </div>

            <div className='review-one'>
                <img src={person} alt="" />
                <div>
                <p> <FaQuoteLeft className='quot'/>I am very happy with them. I’ll continue to use their services in future & highly recommend them to anyone, <FaQuoteRight/></p>
                <h3>Muhib Abrar</h3>
                </div>
            </div>

            <div className='review-one'>
                <img src={person} alt="" />
                <div>
                <p> <FaQuoteLeft className='quot'/>Rama has a high level of integrity, intellect, knowledge of his business, resourcefulness and humanity, <FaQuoteRight/></p>
                <h3>Colin Saldahna</h3>
                </div>
            </div>

            <div className='review-one'>
                <img src={person} alt="" />
                <div>
                <p> <FaQuoteLeft className='quot'/>Your advise was so complete that I actually realized how beneficial this would be to my clients and my business. <FaQuoteRight/></p>
                <h3>Mark Swann</h3>
                </div>
            </div>

        </div>
    );
};

export default Blog;