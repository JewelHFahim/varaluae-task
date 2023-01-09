import React from 'react';
import "./PriceList.css";
import tiksign from "../../../Assets/Group 35.png";
import { TiTick } from 'react-icons/ti';


const PriceList = () => {

    const tik = <img style={{ marginRight: "5px", width: "20px" }} src={tiksign} alt="" />;
    const tik2 = <TiTick className="tick2"/>

    return (
        <div className='price-container'>
        
        <h1 className="price-title">Most <span> popular affordable pricing</span> per <br /> jurisdictions are brought to <br /> you to kick off your adventure.</h1>

        <div className='price-cont'>
        <div class="columns">
        <ul class="price">
            <li class="header">AJMAN OFFSHORE</li>
            <li class="grey">$2,997 <span>One Time Payment</span> </li>
            <li style={{ fontSize: "20px", fontWeight:"500"  }}>Ajman Offshore New Company formation includes</li>
            <li> {tik} Attestation Charges</li>
            <li> {tik} Registered Agent </li>
            <li> {tik} Varal Administrative </li>
            <li> {tik} Preparing Statutory File </li>
            <li> {tik} Liasing with Registration Authorities </li>
            <li> {tik} Due Diligence Appraisal </li>
            <li> {tik} Keeping The Register </li>
            <li> {tik} Seal Charges </li>
            <li> {tik} Certificate of Good Standing </li>
            <li class="grey"><a href="#!" class="button">Continue</a></li>
        </ul>
        </div>


        <div class="columns selected">
        <ul class="price">
            <li className="header"> RAK ICC </li>
            <li className="grey">$3,997 <span>One Time Payment</span> </li>
            <li style={{ fontSize: "20px", fontWeight:"500"}}>Rak Icc New Company formation includes</li>
            <li> {tik2} Attestation Charges</li>
            <li> {tik2} Registered Agent </li>
            <li> {tik2} Varal Administrative </li>
            <li> {tik2} Preparing Statutory File </li>
            <li> {tik2} Liasing with Registration Authorities </li>
            <li> {tik2} Due Diligence Appraisal </li>
            <li> {tik2} Keeping The Register </li>
            <li> {tik2} Seal Charges </li>
            <li> {tik2} Certificate of Good Standing </li>
            <li class="grey"><a href="#!" class="button select">Continue</a></li>
        </ul>
        </div>

        <div class="columns">
        <ul class="price">
            <li class="header"> SHARJAH MEDIA CITY </li>
            <li class="grey">$4,997 <span>One Time Payment</span></li>
            <li style={{ fontSize: "20px", fontWeight:"500" }}> Sharjah Media City New Company formation include </li>
            <li> {tik} Attestation Charges</li>
            <li> {tik} Registered Agent </li>
            <li> {tik} Varal Administrative </li>
            <li> {tik} Preparing Statutory File </li>
            <li> {tik} Liasing with Registration Authorities </li>
            <li> {tik} Due Diligence Appraisal </li>
            <li> {tik} Keeping The Register </li>
            <li> {tik} Seal Charges </li>
            <li> {tik} Certificate of Good Standing </li>
            <li class="grey"><a href="#!" class="button">Continue</a></li>
        </ul>
        </div>
</div>
             
        </div>
    );
};

export default PriceList;