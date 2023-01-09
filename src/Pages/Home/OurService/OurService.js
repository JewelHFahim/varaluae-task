import "./OurService.css";
import advice from "../../../Assets/Group.png"
import  setup from "../../../Assets/ILLUSTRATION 03  1.png";
import  document from "../../../Assets/Group-1.png";
import  visa from "../../../Assets/Group-2.png";
import arrow from "../../../Assets/Vector.png"

const OurService = () => {


    return (
        <div>
            <div class="wrapper">

            <div class="one">
                <p>Learn the ways in which you can benefit from a UAE/Offshore Company. Then get started on fulfilling your UAE dream.</p>
                <p className='claim'>Claim a Free Quote
                <img src={arrow} alt="" />
                </p>
            </div>

            <div class="two common">
                <img src={advice} alt="" />
                <h2 className="title">Advice & Guidance</h2>
                <p className="add-des">All activities in the UAE are licensed. Whether manufacturing, finance, trading, marketing, consultancy or restaurants. In some countries only manufacturing is licensed. In others there is a threshold below which business are encouraged. Get our insightfull guidance today.</p>
                <p className='learn-btn claim'>Learn More
                <img src={arrow} alt="" /></p>
           </div>

           <div className="three common">
                <img className="img1" src={setup} alt="" />
                <h2 className="title">Bank Account Setup</h2>
                <p className="add-des">There are many banks in the United Arab Emirates [UAE]. Both locally owned and branches of multinational ones. Foreign banks adjust according to their parent s strategies and have changed local requirements overnight in the past. But we are here to help you.</p>
                <p className='learn-btn claim'>Learn more
                <img src={arrow} alt="" />
                </p>
           </div>

            <div class="four common">
                <img src={document} alt="" />
                <h2 className="title">Registration Document Perparation</h2>
                <p className="add-des">Several documents must be prepared to start the process of registering a new company in the United Arab Emirates. Be it a Dubai local company, a free zone one or an offshore entity. Your registered agent is dedicated to get this done for you for a seamless process.</p>
                <p className='learn-btn claim'>Learn more
                <img src={arrow} alt="" />
                </p>
            </div>

            <div class="five common">
                <img src={visa} alt="" />
                <h2 className="title">UAE Company Visas</h2>
                <p className="add-des">Your application for visas is critical especially if you intend to move to Dubai. This becomes even more urgent if your family will also move with you. All the paperwork is done on your behalf smoothly so that you may only focus on doing what matters most to you.</p>
                <p className='learn-btn claim'>Learn more
                <img src={arrow} alt="" />
                </p>
            </div>
            
            <div class="six">
            <p>We have gathered a team of professionals to craft adequate services you can rely on for a friction free setup in UAE.</p>
            <p className='claim'>More about our services
            <img src={arrow} alt="" />
            </p>
            </div>

            </div>

        </div>
    );
};

export default OurService;