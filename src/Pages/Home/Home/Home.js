import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Search from '../../Search/Search';
import BlogFooter from '../BlogFooter/BlogFooter';
import OurMission from '../OurMission/OurMission';
import OurService from '../OurService/OurService';
import PriceList from '../PriceList/PriceList';
import RegistrationContainer from '../RegistrationContainer/RegistrationContainer';
import "./Home.css";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <RegistrationContainer></RegistrationContainer>
            <OurMission></OurMission>
            <OurService></OurService>
            <PriceList></PriceList>
            <BlogFooter></BlogFooter>
            <p className='footer'> Varaluae 2021 C All Right Reserved</p>
        </div>
    );
};

export default Home;