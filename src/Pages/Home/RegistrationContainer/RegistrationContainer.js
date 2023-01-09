import React from "react";
import "./RegistrationContainer.css";
import img from "../../../Assets/ILLUSTRATION.png";
import video from "../../../Assets/Group 117.png"

const RegistrationContainer = () => {
  return (
    <div>

    <div className="container">

      <div className="text-container">
        <p className="title">Claim a Free Quote</p>
        <h1 className="heading">
          <span className="get-started">Get started</span> on fulfilling 
          your Dubai or UAE  dream.
        </h1>
        <div className="details">
        <p className="title">UAE & Offshore Company</p>
        <h3 className="description">
          We provide you with information about UAE or Offshore Company
          Registration & help you setup your company with a bank account and
          visas.
        </h3>
        <button className="startt-btn">Start a Company</button>
        <button className="renew-btn">Renew a Company</button>
        </div>
      </div>


      <div className="img-container">
        <img className="" src={img} alt="" />

        <div className="details2">
        <p className="title t2">UAE & Offshore Company</p>
        <h3 className="description">
          We provide you with information about UAE or Offshore Company
          Registration & help you setup your company with a bank account and
          visas.
        </h3>
        <div className="btn-group">
        <button className="startt-btn">Start a Company</button>
        <button className="renew-btn">Renew a Company</button>
        </div>
        </div>
        
      </div>
    </div>

    {/* Video Section */}
   <div className="video-container">
   <p className="video-title">Watch the video about UAE or Offshore Company Registration</p>
    <img src={video} alt="" />
   </div>
    </div>

  );
};

export default RegistrationContainer;
