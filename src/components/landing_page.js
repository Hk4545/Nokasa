import React from 'react';
import Navbar from './navbar';
import Landing_Content from './landing_content';
import Hand_Section from './hand_section';
import Benefit_Section from './benefits_section';
import Partner_Section from './partner_section';
import HowItWork from './howItWork';
import Contact_section from './contact';
import Footer from './footer';


const Landing_Page = () => {


    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Navbar />
            <Landing_Content/>
            <Hand_Section/>
            <Benefit_Section/>
            <Partner_Section/>
            <HowItWork/>
            <Contact_section/>
            <Footer/>
        </div>
    )
}

export default Landing_Page;