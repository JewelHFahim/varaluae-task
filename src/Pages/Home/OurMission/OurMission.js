import React, { useEffect, useState } from "react";
import "./OurMission.css";

const OurMission = () => {

  const [companies, setCompanies] = useState([]);
  useEffect(()=>{
    fetch("/companies.json")
    .then(res => res.json())
    .then(data => setCompanies(data))
  },[])

  return (
    <div className="mission-container">
      <h1 className="mission-title">
        <span className="get-started">Dedicated</span>  <br />
        to our mission we are
      </h1>
      <p className="descrip">
        Our services include Company Formation & Renewals, Trust & Fiduciary,
        Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock
        Trading Platforms, Ownership Solutions.
      </p>

      <div className="comapnaies">
        {
          companies.map(company => <div key = {company.id}>
          <img style={{ width: "50px", height: "50px" }} src={company.logo} alt="" />
          <h2>{company.title}</h2>
          <p className="des">{company.description}</p>
          <p className="btn">Get Started</p>
          </div>)
        }
      </div>

    </div>
  );
};

export default OurMission;
